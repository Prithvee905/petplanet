import { Helmet } from 'react-helmet-async';
import { DoctorsSection } from '../components/DoctorsSection';

export function DoctorsPage() {
  return (
    <>
      <Helmet>
        <title>Meet Our Veterinary Doctors | Pet Planet Dog Clinic</title>
        <meta name="description" content="Meet Founder & Chief Vet Dr. M. Kiran Kumar (23+ yrs), Senior Veterinary Surgeon Dr. G. Shambhulingam (35+ yrs), Dr. Akhila, Dr. Manasa, and Dr. T. Kiranmayee at Pet Planet Dog Clinic." />
      </Helmet>
      
      <div className="pt-24 bg-white">
        <DoctorsSection />
      </div>
    </>
  );
}
