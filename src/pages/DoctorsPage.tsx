import { Helmet } from 'react-helmet-async';
import { DoctorsSection } from '../components/DoctorsSection';

export function DoctorsPage() {
  return (
    <>
      <Helmet>
        <title>Meet Our Veterinary Doctors | Pet Planet Dog Clinic</title>
        <meta name="description" content="Meet Dr. M. Kiran Kumar (20+ years veterinary & surgical experience) and Dr. Meghana at Pet Planet Dog Clinic & Animal Diagnostics." />
      </Helmet>
      
      <div className="pt-24 bg-white">
        <DoctorsSection />
      </div>
    </>
  );
}
