export interface Member {
  id: string
  name: string
  course: string
  github_username: string
  year_joined: number
  year_left: number | null
  is_professor: boolean
  is_active: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  cover_image_url: string
  author_name: string
  tags: string[]
  category: string
  is_published: boolean
  published_at: string
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  name: string
  slug: string
  description: string
  long_description: string
  image_url: string
  emoji: string
  tags: string[]
  type: string
  is_active: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  competition: string
  position: string
  year: number
  category: string
  created_at: string
}

export interface Report {
  id: string
  title: string
  source: string
  url: string
  year: number
  created_at: string
}

export interface Course {
  id: string
  name: string
  level: string
  description: string
  is_available: boolean
  display_order: number
  created_at: string
}

export interface SiteConfig {
  key: string
  value: string
  updated_at: string
}

export interface Database {
  public: {
    Tables: {
      members: {
        Row: Member
        Insert: Partial<Member> & Pick<Member, 'name'>
        Update: Partial<Member>
      }
      posts: {
        Row: Post
        Insert: Partial<Post> & Pick<Post, 'title' | 'slug' | 'content'>
        Update: Partial<Post>
      }
      projects: {
        Row: Project
        Insert: Partial<Project> & Pick<Project, 'name' | 'slug'>
        Update: Partial<Project>
      }
      achievements: {
        Row: Achievement
        Insert: Partial<Achievement> & Pick<Achievement, 'title' | 'year'>
        Update: Partial<Achievement>
      }
      reports: {
        Row: Report
        Insert: Partial<Report> & Pick<Report, 'title' | 'url' | 'year'>
        Update: Partial<Report>
      }
      courses: {
        Row: Course
        Insert: Partial<Course> & Pick<Course, 'name'>
        Update: Partial<Course>
      }
      site_config: {
        Row: SiteConfig
        Insert: Pick<SiteConfig, 'key' | 'value'>
        Update: Partial<SiteConfig>
      }
    }
  }
}
