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
        <title>Petplanet Dog Clinic | Expert Care in Hyderabad</title>
        <meta name="description" content="State-of-the-art diagnostics and compassionate veterinary care in Ramakrishnapuram, Hyderabad. Over 20 years of experience." />
      </Helmet>
      
      <HeroSection onBookClick={onBookClick} />
      <AboutSection />
      <TestimonialsSection />
      <CtaBanner onBookClick={onBookClick} />
    </>
  );
}
