import { Helmet } from 'react-helmet-async';
import { DoctorsSection } from '../components/DoctorsSection';

export function DoctorsPage() {
  return (
    <>
      <Helmet>
        <title>Meet Our Veterinary Doctors | Pet Planet Dog Clinic</title>
        <meta name="description" content="Meet Founder & Chief Veterinarian Dr. M. Kiran Kumar, Dr. Akhila, Dr. Manasa, and Dr. T. Kiranmayee at Pet Planet Dog Clinic & Animal Diagnostics in Hyderabad." />
      </Helmet>
      
      <div className="pt-24 bg-white">
        <DoctorsSection />
      </div>
    </>
  );
}
