export const metadata = {
  title: "Home - Simple",
  description: "Page description"
};

import Hero from "@/components/hero";

import FeaturesBlocks from "@/components/features-blocks";
import Features from "@/components/features-landing";
import Benifits from "@/components/benifits";
import Testimonials from "@/components/testimonials";
import Container from "@/components/container";
import CTA from '@/components/cta-landing'

export default function Home() {
  return (
    <Container>
      <Hero />
      <FeaturesBlocks />
      <Features />  
      <Benifits />
      <Testimonials />
      <CTA />
    </Container>
  );
}
