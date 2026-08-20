import { motion } from 'motion/react';
import { AdMode, BillingCycle } from '../types';

interface PricingHeaderTogglesProps {
  adMode: AdMode;
  setAdMode: (mode: AdMode) => void;
  billingCycle: BillingCycle;
  setBillingCycle: (cycle: BillingCycle) => void;
}

export function PricingHeaderToggles({
  adMode,
  setAdMode,
  billingCycle,
  setBillingCycle,
}: PricingHeaderTogglesProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4">
      {/* Ad Options Toggle */}
      <div className="relative inline-flex p-1 rounded-md border border-[#833026] bg-[#220d18]/90 shadow-inner">
        <button
          type="button"
          id="btn-ad-mode-with-ads"
          onClick={() => setAdMode('with_ads')}
          className={`relative z-10 px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 rounded cursor-pointer ${
            adMode === 'with_ads'
              ? 'text-white'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          {adMode === 'with_ads' && (
            <motion.div
              layoutId="adModePill"
              className="absolute inset-0 bg-[#8a2f23] rounded shadow"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">
            Ads by Live365<sup className="text-[10px] ml-0.5 font-bold">1</sup>
          </span>
        </button>

        <button
          type="button"
          id="btn-ad-mode-no-ads"
          onClick={() => setAdMode('no_ads')}
          className={`relative z-10 px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 rounded cursor-pointer ${
            adMode === 'no_ads'
              ? 'text-white'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          {adMode === 'no_ads' && (
            <motion.div
              layoutId="adModePill"
              className="absolute inset-0 bg-[#8a2f23] rounded shadow"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">Your ads (optional)</span>
        </button>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="relative inline-flex p-1 rounded-md border border-[#833026] bg-[#220d18]/90 shadow-inner">
        <button
          type="button"
          id="btn-billing-monthly"
          onClick={() => setBillingCycle('monthly')}
          className={`relative z-10 px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 rounded cursor-pointer ${
            billingCycle === 'monthly'
              ? 'text-white'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          {billingCycle === 'monthly' && (
            <motion.div
              layoutId="billingPill"
              className="absolute inset-0 bg-[#8a2f23] rounded shadow"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">Monthly</span>
        </button>

        <button
          type="button"
          id="btn-billing-yearly"
          onClick={() => setBillingCycle('yearly')}
          className={`relative z-10 px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 rounded flex items-center gap-2 cursor-pointer ${
            billingCycle === 'yearly'
              ? 'text-white'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          {billingCycle === 'yearly' && (
            <motion.div
              layoutId="billingPill"
              className="absolute inset-0 bg-[#8a2f23] rounded shadow"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">Yearly</span>
          <span className="relative z-10 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-bold bg-[#d7ff65] text-[#1c3800] tracking-tight whitespace-nowrap shadow-sm">
            2 months free!
          </span>
        </button>
      </div>
    </div>
  );
}
