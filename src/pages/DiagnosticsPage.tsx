import { Helmet } from 'react-helmet-async';
import { DiagnosticsSection } from '../components/DiagnosticsSection';

export function DiagnosticsPage() {
  return (
    <>
      <Helmet>
        <title>Advanced Diagnostics | Petplanet Clinic</title>
        <meta name="description" content="State-of-the-art veterinary diagnostic equipment including X-ray, ultrasound, and lab diagnostics for accurate care." />
      </Helmet>
      
      <div className="pt-24 bg-black">
        <DiagnosticsSection />
      </div>
    </>
  );
}
