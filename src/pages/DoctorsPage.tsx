import { Helmet } from 'react-helmet-async';
import { DoctorsSection } from '../components/DoctorsSection';

export function DoctorsPage() {
  return (
    <>
      <Helmet>
        <title>Meet the Doctors | Petplanet Clinic</title>
        <meta name="description" content="Meet Dr. M. Kiran Kumar and Dr. Meghana, highly experienced and compassionate veterinarians dedicated to your pet's health." />
      </Helmet>
      
      <div className="pt-24 bg-white">
        <DoctorsSection />
      </div>
    </>
  );
}
