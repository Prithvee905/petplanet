import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Petplanet Clinic</title>
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
        <h1 className="text-6xl font-display font-bold text-orange mb-4">404</h1>
        <h2 className="text-3xl font-display font-bold mb-6">Oops! We couldn't find that page.</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          It looks like the page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="bg-black hover:bg-orange text-white px-8 py-3 rounded-sm font-medium transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </>
  );
}
