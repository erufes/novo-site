import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AchievementsBand from "@/components/home/AchievementsBand";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
      <AchievementsBand />
      <HomeCTA />
    </>
  );
}
