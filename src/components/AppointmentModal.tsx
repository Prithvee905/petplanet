import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      pet_name: formData.get('pet_name') as string,
      pet_type: formData.get('pet_type') as string,
      preferred_date: formData.get('preferred_date') as string,
      preferred_time: formData.get('preferred_time') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error: submitError } = await supabase
        .from('appointments')
        .insert([data]);

      if (submitError) throw submitError;
      
      // Send Email via Web3Forms
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (web3FormsKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: 'New Appointment Booking - Pet Planet',
            from_name: 'Pet Planet Website',
            message: `
New Appointment Request:

Name: ${data.name}
Phone: ${data.phone}
Pet Name: ${data.pet_name}
Pet Type: ${data.pet_type}
Preferred Date: ${data.preferred_date}
Preferred Time: ${data.preferred_time}

Message: 
${data.message}
            `
          })
        });
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setTimeout(() => setSuccess(false), 500); // reset after close
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg bg-black/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: '-45%', x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, y: '-45%', x: '-50%' }}
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h3 className="text-2xl font-display font-bold text-white">Book an Appointment</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {success ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-orange mb-6" />
                  <h4 className="text-2xl font-display font-bold mb-2 text-white">Request Sent!</h4>
                  <p className="text-gray-400 text-center">We will contact you shortly to confirm your appointment.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-sm text-sm border border-red-100">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Your Name *</label>
                      <input required name="name" type="text" className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
                      <input required name="phone" type="tel" className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Pet Type *</label>
                      <select required name="pet_type" className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-colors [&>option]:bg-gray-900">
                        <option value="">Select...</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Pet Name</label>
                      <input name="pet_name" type="text" className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Preferred Date *</label>
                      <input required name="preferred_date" type="date" className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-colors [color-scheme:dark]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Preferred Time</label>
                      <input name="preferred_time" type="time" className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-colors [color-scheme:dark]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Message (Optional)</label>
                    <textarea name="message" rows={3} className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent resize-none transition-colors"></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange hover:bg-[#d95a00] text-white py-3 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center mt-6 shadow-lg shadow-orange/20"
                  >
                    {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
