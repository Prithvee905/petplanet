import { Helmet } from 'react-helmet-async';
import { ServicesSection } from '../components/ServicesSection';

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Petplanet Clinic</title>
        <meta name="description" content="Comprehensive veterinary services including vaccinations, dental care, surgery, and grooming at Petplanet Dog Clinic." />
      </Helmet>
      
      <div className="pt-24 bg-gray-100">
        <ServicesSection />
      </div>
    </>
  );
}
