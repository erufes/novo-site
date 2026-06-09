-- ERUS Site - Initial Database Schema

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- Members table
create table members (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  course text not null,
  github_username text,
  year_joined int,
  year_left int,
  is_professor boolean default false,
  is_active boolean default true,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Posts table
create table posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  content text not null default '',
  excerpt text,
  cover_image_url text,
  author_name text,
  tags text[] default '{}',
  category text,
  is_published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Projects table
create table projects (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text,
  long_description text,
  image_url text,
  emoji text,
  tags text[] default '{}',
  type text,
  is_active boolean default true,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Achievements table
create table achievements (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  competition text,
  position text,
  year int,
  category text,
  created_at timestamptz default now()
);

-- Reports table (media coverage)
create table reports (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  source text not null,
  url text,
  year int,
  created_at timestamptz default now()
);

-- Courses table
create table courses (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  level text,
  description text,
  is_available boolean default true,
  display_order int default 0,
  created_at timestamptz default now()
);

-- Site config table (key-value store)
create table site_config (
  key text primary key,
  value text not null,
  updated_at timestamptz default now()
);

-- Indexes
create index idx_members_active on members(is_active);
create index idx_posts_published on posts(is_published);
create index idx_posts_slug on posts(slug);
create index idx_projects_active on projects(is_active);
create index idx_projects_slug on projects(slug);
create index idx_achievements_year on achievements(year);
create index idx_reports_year on reports(year);

-- Auto-update updated_at trigger
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger members_updated_at before update on members
  for each row execute function update_updated_at();

create trigger posts_updated_at before update on posts
  for each row execute function update_updated_at();

create trigger projects_updated_at before update on projects
  for each row execute function update_updated_at();

create trigger site_config_updated_at before update on site_config
  for each row execute function update_updated_at();

-- Initial site config values
insert into site_config (key, value) values
  ('tagline', 'A ERUS é um programa de extensão da Universidade Federal do Espírito Santo atualmente localizado na sala 33 do prédio CT-13'),
  ('about_text', 'A ERUS - Equipe de Robótica da UFES é um programa de extensão universitário vinculado ao Centro Tecnológico da UFES desde 2019. Fundada em 2012 por ex-membros da equipe UFES Ultrabots, nossa missão é fomentar o crescimento da robótica em todo o estado do Espírito Santo.'),
  ('recruitment_status', 'closed'),
  ('recruitment_url', '');

-- Storage bucket for images (run in Supabase dashboard)
-- insert into storage.buckets (id, name, public) values ('images', 'images', true);
