import { Helmet } from 'react-helmet-async';
import { LocationSection } from '../components/LocationSection';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact & Location | Pet Planet Dog Clinic</title>
        <meta name="description" content="Visit Pet Planet Dog Clinic & Animal Diagnostics at Andal Homes in RK Puram, Kothapet, Hyderabad. View clinic operating hours, location map, and contact details." />
      </Helmet>
      
      <div className="pt-24 bg-gray-100">
        <LocationSection />
      </div>
    </>
  );
}
