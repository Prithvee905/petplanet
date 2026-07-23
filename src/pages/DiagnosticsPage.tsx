import { Helmet } from 'react-helmet-async';
import { DiagnosticsSection } from '../components/DiagnosticsSection';

export function DiagnosticsPage() {
  return (
    <>
      <Helmet>
        <title>Advanced Animal Diagnostics | Pet Planet Dog Clinic</title>
        <meta name="description" content="In-house digital radiography (X-Ray), diagnostic ultrasonography, and blood laboratory testing at Pet Planet Dog Clinic & Animal Diagnostics." />
      </Helmet>
      
      <div className="pt-24 bg-black">
        <DiagnosticsSection />
      </div>
    </>
  );
}
