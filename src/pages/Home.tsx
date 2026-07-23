import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaBanner } from '../components/CtaBanner';

interface HomeProps {
  onBookClick: () => void;
}

export function Home({ onBookClick }: HomeProps) {
  return (
    <>
      <Helmet>
        <title>Pet Planet Dog Clinic & Animal Diagnostics | Hyderabad</title>
        <meta name="description" content="17+ years of clinical excellence, major & minor surgeries, automated vaccination reminders, and advanced animal diagnostics at Andal Homes in RK Puram, Hyderabad." />
      </Helmet>
      
      <HeroSection onBookClick={onBookClick} />
      <AboutSection />
      <TestimonialsSection />
      <CtaBanner onBookClick={onBookClick} />
    </>
  );
}
