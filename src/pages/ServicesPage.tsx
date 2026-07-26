import { Helmet } from 'react-helmet-async';
import { ServicesSection } from '../components/ServicesSection';

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Pet Planet Dog Clinic</title>
        <meta name="description" content="Comprehensive veterinary services including vaccinations with automated reminders, major & minor surgeries, online consultations, and pet store at Pet Planet Dog Clinic." />
      </Helmet>
      
      <div className="pt-24 bg-gray-100">
        <ServicesSection />
      </div>
    </>
  );
}
