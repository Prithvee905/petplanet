import { Helmet } from 'react-helmet-async';
import { ServicesSection } from '../components/ServicesSection';
import { PriceSlider } from '../components/PriceSlider';

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services & Pricing | Petplanet Clinic</title>
        <meta name="description" content="Comprehensive veterinary services including vaccinations, dental care, surgery, and grooming at Petplanet Dog Clinic. Estimate your pricing online." />
      </Helmet>
      
      <div className="pt-24 bg-gray-100">
        <ServicesSection />
        <div className="bg-black py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <PriceSlider />
          </div>
        </div>
      </div>
    </>
  );
}
