import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, Sparkles, Clock, Radio, ArrowRight } from 'lucide-react';
import { BroadcastPlan, AdMode, BillingCycle } from '../types';

interface PlanSelectionModalProps {
  plan: BroadcastPlan | null;
  adMode: AdMode;
  billingCycle: BillingCycle;
  onClose: () => void;
}

export function PlanSelectionModal({
  plan,
  adMode,
  billingCycle,
  onClose,
}: PlanSelectionModalProps) {
  const [stationName, setStationName] = useState('');
  const [email, setEmail] = useState('');
  const [genre, setGenre] = useState('Pop / Top 40');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!plan) return null;

  const currentPrice =
    adMode === 'with_ads'
      ? billingCycle === 'monthly'
        ? plan.prices.with_ads.monthly
        : plan.prices.with_ads.yearlyMonthlyEquivalent
      : billingCycle === 'monthly'
      ? plan.prices.no_ads.monthly
      : plan.prices.no_ads.yearlyMonthlyEquivalent;

  const billedAnnuallyTotal =
    adMode === 'with_ads'
      ? plan.prices.with_ads.yearlyBilledTotal
      : plan.prices.no_ads.yearlyBilledTotal;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-800"
        >
          {/* Header */}
          <div className="bg-[#0e0a29] text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Selected Plan</span>
            </div>
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-slate-300 text-sm mt-1">
              Configure your online radio station and launch with full broadcasting power.
            </p>
          </div>

          {!isSubmitted ? (
            <div className="p-6">
              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-extrabold text-slate-900">
                      ${currentPrice}
                    </span>
                    <span className="text-slate-600 text-sm font-medium"> / month</span>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-200 text-slate-700">
                    {adMode === 'with_ads' ? 'Ads by Live365' : 'Your ads (optional)'}
                  </span>
                </div>

                <div className="mt-2 text-xs text-slate-500 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>
                    Billed:{' '}
                    <strong className="text-slate-700 font-semibold">
                      {billingCycle === 'yearly'
                        ? `$${billedAnnuallyTotal}/year (2 months free)`
                        : 'Monthly'}
                    </strong>
                  </span>
                  <span>•</span>
                  <span>
                    TLH: <strong className="text-slate-700 font-semibold">{plan.tlh} hrs</strong>
                  </span>
                  <span>•</span>
                  <span>
                    Storage:{' '}
                    <strong className="text-slate-700 font-semibold">{plan.storage}</strong>
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Station Name
                  </label>
                  <div className="relative">
                    <Radio className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Urban Beats Radio"
                      value={stationName}
                      onChange={(e) => setStationName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work or Station Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="broadcaster@soundstack.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Music Genre / Format
                  </label>
                  <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                  >
                    <option>Pop / Top 40</option>
                    <option>Rock / Classic Rock / Alternative</option>
                    <option>Hip Hop / R&B / Urban</option>
                    <option>Electronic / Dance / House</option>
                    <option>Jazz / Blues / Soul</option>
                    <option>Country / Americana</option>
                    <option>Talk / News / Sports / Podcasts</option>
                    <option>Classical / Ambient</option>
                    <option>Eclectic / Variety</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#ff5a1f] hover:bg-[#e04a10] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Start Your Station</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>Licensed in US, CA, MX</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Instant station creation</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Station Provisioned!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your station setup for <strong>{stationName || 'your station'}</strong> on the{' '}
                <strong>{plan.name}</strong> plan is ready. Check{' '}
                <strong>{email || 'your email'}</strong> for credentials to log into Live365 Studio.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#2b2559] hover:bg-[#383072] text-white font-semibold rounded-lg text-sm transition cursor-pointer"
                >
                  Return to Pricing Table
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
