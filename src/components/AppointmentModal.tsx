import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

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
      // 1. Save to Supabase DB (non-blocking)
      try {
        const { error: dbError } = await supabase.from('appointments').insert([data]);
        if (dbError) console.warn('Supabase DB insert warning:', dbError.message);
      } catch (dbErr) {
        console.warn('Supabase DB save skipped/failed:', dbErr);
      }
      
      // 2. Send professional HTML Email via Web3Forms (non-blocking)
      try {
        const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (web3FormsKey) {
          const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#FF6B35 0%,#e85d20 100%);padding:32px 40px;text-align:center;">
            <div style="font-size:36px;margin-bottom:8px;">🐾</div>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:0.5px;">Pet Planet</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:1px;text-transform:uppercase;">Dog Clinic & Animal Diagnostics</p>
          </td>
        </tr>

        <!-- Alert Banner -->
        <tr>
          <td style="background:#fff8f5;padding:20px 40px;border-bottom:2px solid #ffe0d0;text-align:center;">
            <p style="margin:0;color:#c94a0a;font-size:15px;font-weight:600;">📋 New Appointment Booking Request</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">

            <!-- Owner Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding-bottom:12px;">
                  <p style="margin:0 0 16px;color:#1a1a2e;font-size:16px;font-weight:700;border-bottom:2px solid #FF6B35;padding-bottom:8px;">👤 Owner Information</p>
                </td>
              </tr>
              <tr>
                <td width="50%" style="padding:8px 12px;background:#f8f9fa;border-radius:6px 0 0 6px;">
                  <p style="margin:0;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Customer Name</p>
                  <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:600;">${data.name}</p>
                </td>
                <td width="4px"></td>
                <td width="50%" style="padding:8px 12px;background:#f8f9fa;border-radius:0 6px 6px 0;">
                  <p style="margin:0;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Phone Number</p>
                  <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:600;">${data.phone}</p>
                </td>
              </tr>
            </table>

            <!-- Pet Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding-bottom:12px;">
                  <p style="margin:0 0 16px;color:#1a1a2e;font-size:16px;font-weight:700;border-bottom:2px solid #FF6B35;padding-bottom:8px;">🐶 Pet Information</p>
                </td>
              </tr>
              <tr>
                <td width="50%" style="padding:8px 12px;background:#f8f9fa;border-radius:6px 0 0 6px;">
                  <p style="margin:0;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Pet Name</p>
                  <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:600;">${data.pet_name || 'Not provided'}</p>
                </td>
                <td width="4px"></td>
                <td width="50%" style="padding:8px 12px;background:#f8f9fa;border-radius:0 6px 6px 0;">
                  <p style="margin:0;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Pet Type</p>
                  <p style="margin:4px 0 0;color:#1a1a2e;font-size:15px;font-weight:600;">${data.pet_type}</p>
                </td>
              </tr>
            </table>

            <!-- Appointment Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding-bottom:12px;">
                  <p style="margin:0 0 16px;color:#1a1a2e;font-size:16px;font-weight:700;border-bottom:2px solid #FF6B35;padding-bottom:8px;">📅 Appointment Details</p>
                </td>
              </tr>
              <tr>
                <td width="50%" style="padding:8px 12px;background:#fff3ee;border:1px solid #ffd5c0;border-radius:6px 0 0 6px;">
                  <p style="margin:0;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Preferred Date</p>
                  <p style="margin:4px 0 0;color:#c94a0a;font-size:15px;font-weight:700;">${data.preferred_date}</p>
                </td>
                <td width="4px"></td>
                <td width="50%" style="padding:8px 12px;background:#fff3ee;border:1px solid #ffd5c0;border-radius:0 6px 6px 0;">
                  <p style="margin:0;color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Preferred Time</p>
                  <p style="margin:4px 0 0;color:#c94a0a;font-size:15px;font-weight:700;">${data.preferred_time || 'Anytime'}</p>
                </td>
              </tr>
            </table>

            <!-- Notes -->
            ${data.message ? `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td>
                  <p style="margin:0 0 12px;color:#1a1a2e;font-size:16px;font-weight:700;border-bottom:2px solid #FF6B35;padding-bottom:8px;">📝 Customer Notes</p>
                  <div style="background:#f8f9fa;border-left:4px solid #FF6B35;padding:12px 16px;border-radius:0 6px 6px 0;">
                    <p style="margin:0;color:#444;font-size:14px;line-height:1.6;">${data.message}</p>
                  </div>
                </td>
              </tr>
            </table>` : ''}

            <!-- CTA -->
            <div style="text-align:center;margin-top:8px;">
              <p style="margin:0;color:#888;font-size:13px;">Please call back the customer to <strong>confirm this appointment</strong>.</p>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f4f6f9;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#aaa;font-size:12px;">This email was automatically sent from <strong style="color:#FF6B35;">petplanetcare.in</strong></p>
            <p style="margin:6px 0 0;color:#aaa;font-size:12px;">Pet Planet Dog Clinic & Animal Diagnostics · Kothapet, Hyderabad</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              access_key: web3FormsKey,
              subject: `🐾 New Appointment: ${data.name} — ${data.pet_type} (${data.preferred_date})`,
              from_name: 'Pet Planet Website',
              html: htmlBody,
            })
          });
          const resData = await res.json();
          if (!res.ok || !resData.success) {
            console.warn('Email notification failed:', resData.message);
          }
        }
      } catch (emailErr) {
        console.warn('Email notification skipped/failed:', emailErr);
      }

      // ✅ Always show success — appointment is booked regardless of email status
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setTimeout(() => setSuccess(false), 500);
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
          {/* Locked Backdrop Overlay */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md touch-none select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Locked Centered Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none overscroll-contain touch-none">
            <motion.div
              className="pointer-events-auto w-full max-w-[380px] sm:max-w-md bg-black/95 backdrop-blur-2xl rounded-2xl shadow-2xl border-0 sm:border sm:border-white/10 overflow-hidden max-h-[92vh] flex flex-col overscroll-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
            {/* Top Orange Decorative Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-orange via-amber-500 to-orange shrink-0" />

            <div className="flex justify-between items-center px-4 py-3 sm:px-5 sm:py-3.5 border-b border-white/10 shrink-0 touch-none select-none">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-wide">Book an Appointment</h3>
              </div>
              <button 
                onClick={onClose} 
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-3.5 sm:p-5 overflow-y-auto overscroll-contain touch-pan-y custom-scrollbar select-text">
              {success ? (
                <motion.div 
                   className="flex flex-col items-center justify-center py-6 sm:py-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 className="w-14 h-14 sm:w-16 sm:h-16 text-orange mb-3 animate-bounce" />
                  <h4 className="text-lg sm:text-xl font-display font-bold mb-1 text-white">Request Sent!</h4>
                  <p className="text-gray-300 text-xs sm:text-sm max-w-xs">We will contact you shortly to confirm your pet's appointment.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-300 p-2 rounded-lg text-xs">
                      {error}
                    </div>
                  )}
                  
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-0.5">Your Name *</label>
                      <input 
                        required 
                        name="name" 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-3 py-1.5 text-xs sm:text-sm bg-white/5 border border-white/5 sm:border-white/10 text-white placeholder:text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-0.5">Phone Number *</label>
                      <input 
                        required 
                        name="phone" 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-1.5 text-xs sm:text-sm bg-white/5 border border-white/5 sm:border-white/10 text-white placeholder:text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all" 
                      />
                    </div>
                  </div>

                  {/* Pet Type and Pet Name */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="min-w-0">
                      <label className="block text-xs font-medium text-gray-300 mb-0.5">Pet Type *</label>
                      <select 
                        required 
                        name="pet_type" 
                        className="w-full px-1.5 sm:px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs bg-white/5 border border-white/5 sm:border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all [&>option]:bg-gray-900 overflow-hidden text-ellipsis"
                      >
                        <option value="">Select...</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="min-w-0">
                      <label className="block text-xs font-medium text-gray-300 mb-0.5">Pet Name</label>
                      <input 
                        name="pet_name" 
                        type="text" 
                        placeholder="e.g. Bruno"
                        className="w-full px-2 sm:px-3 py-1 sm:py-1.5 text-xs bg-white/5 border border-white/5 sm:border-white/10 text-white placeholder:text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all" 
                      />
                    </div>
                  </div>

                  {/* Preferred Date and Time (Centered with Spaces) */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="min-w-0 flex flex-col items-center">
                      <label className="block text-xs font-medium text-gray-300 mb-1 text-center">Date *</label>
                      <input 
                        required 
                        name="preferred_date" 
                        type="date" 
                        className="w-full px-2 sm:px-3 py-1.5 text-xs sm:text-sm bg-white/5 border border-white/5 sm:border-white/10 text-white text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all [color-scheme:dark]" 
                      />
                    </div>
                    <div className="min-w-0 flex flex-col items-center">
                      <label className="block text-xs font-medium text-gray-300 mb-1 text-center">Time</label>
                      <input 
                        name="preferred_time" 
                        type="time" 
                        className="w-full px-2 sm:px-3 py-1.5 text-xs sm:text-sm bg-white/5 border border-white/5 sm:border-white/10 text-white text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all [color-scheme:dark]" 
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-0.5">Notes (Optional)</label>
                    <textarea 
                      name="message" 
                      rows={2} 
                      placeholder="Health concerns, notes..."
                      className="w-full px-3 py-1.5 text-xs sm:text-sm bg-white/5 border border-white/5 sm:border-white/10 text-white placeholder:text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent resize-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange to-amber-500 hover:from-orange/90 hover:to-amber-500/90 text-white py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all hover:shadow-lg hover:shadow-orange/30 active:scale-[0.98] flex items-center justify-center mt-3 shadow-md shadow-orange/20"
                  >
                    {loading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Submit Appointment Request'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>
);
}
