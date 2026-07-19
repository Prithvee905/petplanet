import { Helmet } from 'react-helmet-async';
import { LocationSection } from '../components/LocationSection';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact & Location | Petplanet Clinic</title>
        <meta name="description" content="Visit Petplanet Dog Clinic in Ramakrishnapuram, Hyderabad. Find our clinic timings, location map, and contact details." />
      </Helmet>
      
      <div className="pt-24 bg-gray-100">
        <LocationSection />
      </div>
    </>
  );
}
