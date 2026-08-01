import { Helmet } from 'react-helmet-async';
import { DoctorsSection } from '../components/DoctorsSection';

export function DoctorsPage() {
  return (
    <>
      <Helmet>
        <title>Meet Our Chief Veterinarian | Pet Planet Dog Clinic</title>
        <meta name="description" content="Meet Dr. M. Kiran Kumar (17+ years veterinary & surgical experience) at Pet Planet Dog Clinic & Animal Diagnostics in Hyderabad." />
      </Helmet>
      
      <div className="pt-24 bg-white">
        <DoctorsSection />
      </div>
    </>
  );
}
