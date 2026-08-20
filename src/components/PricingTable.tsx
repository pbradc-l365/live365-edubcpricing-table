import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BroadcastPlan, AdMode, BillingCycle } from '../types';
import { BROADCAST_PLANS, EXPANDED_FEATURES } from '../data/plans';
import { GreenCheckIcon, GrayCrossIcon } from './CheckIcon';

interface PricingTableProps {
  adMode: AdMode;
  billingCycle: BillingCycle;
}

export function PricingTable({
  adMode,
  billingCycle,
}: PricingTableProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper to get formatted current price for a plan
  const getPlanPrice = (plan: BroadcastPlan) => {
    if (adMode === 'with_ads') {
      return billingCycle === 'monthly'
        ? plan.prices.with_ads.monthly
        : plan.prices.with_ads.yearlyMonthlyEquivalent;
    } else {
      return billingCycle === 'monthly'
        ? plan.prices.no_ads.monthly
        : plan.prices.no_ads.yearlyMonthlyEquivalent;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-2">
      {/* Outer scroll wrapper for responsive table */}
      <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-700">
        <div className="min-w-[980px]">
          {/* Main Grid Structure */}
          <div className="grid grid-cols-12 gap-0 relative items-stretch">
            
            {/* Left Header Column (cols 1-3) */}
            <div className="col-span-3 flex flex-col justify-between pr-2">
              {/* Header Box aligned with plan cards */}
              <div className="flex flex-col">
                <div className="h-7 w-full bg-transparent" />
                <div className="bg-white rounded-tl-xl p-4 sm:p-5 border-b border-slate-200 flex flex-col justify-center items-start h-[105px]">
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    Compare Features
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#110c33] tracking-tight mt-0.5">
                    Station Plans
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Broadcasting tiers tailored to your station's audience and storage.
                  </p>
                </div>
              </div>

              {/* Feature Header Labels (matches table rows) */}
              <div className="bg-[#dde2eb] rounded-bl-xl flex-1 flex flex-col overflow-hidden text-xs sm:text-sm font-medium text-slate-800 divide-y divide-slate-300/80">
                <div className="h-[52px] flex items-center px-4">
                  <span>
                    Total listening hours (TLH)<sup className="font-bold text-slate-600">2</sup>
                  </span>
                </div>
                <div className="h-[52px] flex items-center px-4">
                  <span>Media storage</span>
                </div>
                <div className="h-[52px] flex items-center px-4">
                  <span>
                    Music licensing<sup className="font-bold text-slate-600">3</sup>
                  </span>
                </div>
                <div className="h-[52px] flex items-center px-4">
                  <span>TuneIn On Air</span>
                </div>
                <div className="h-[52px] flex items-center px-4">
                  <span>
                    Mobile Apps<sup className="font-bold text-slate-600">4</sup>
                  </span>
                </div>
                <div className="h-[52px] flex items-center px-4">
                  <span>Alexa skill</span>
                </div>
                <div className="h-[52px] flex items-center px-4">
                  <span>
                    Support level<sup className="font-bold text-slate-600">6</sup>
                  </span>
                </div>

                {/* Expanded Feature Row Labels */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="divide-y divide-slate-300/80"
                    >
                      {EXPANDED_FEATURES.map((item, idx) => (
                        <div
                          key={`label-${idx}`}
                          className="h-[48px] flex items-center px-4 text-xs font-medium text-slate-700 bg-[#d5dbe5]"
                        >
                          <span className="truncate pr-1">
                            {item.name}
                            {item.footnoteRef && (
                              <sup className="font-bold text-slate-600 ml-0.5">
                                {item.footnoteRef}
                              </sup>
                            )}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Plan Columns (cols 4-12, i.e. 9 columns wide split into 5 equal columns) */}
            <div className="col-span-9 grid grid-cols-5 gap-0 relative">
              
              {/* Broadcast 1 */}
              <div className="flex flex-col bg-white border-r border-slate-200/90 rounded-none first:rounded-tl-none">
                {/* Header top spacer to align with most popular / premium banners */}
                <div className="h-7 w-full bg-transparent" />
                
                {/* Plan Header Card */}
                <div className="p-3 sm:p-4 flex flex-col items-center justify-center h-[105px] border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {BROADCAST_PLANS[0].name}
                  </span>
                  
                  <div className="flex items-baseline gap-1 mt-1.5">
                    <motion.span
                      key={`price-0-${getPlanPrice(BROADCAST_PLANS[0])}`}
                      initial={{ opacity: 0.5, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl sm:text-3xl font-extrabold text-[#110c33] tracking-tight"
                    >
                      ${getPlanPrice(BROADCAST_PLANS[0])}
                    </motion.span>
                    <span className="text-xs text-slate-500 font-normal">/ mo</span>
                  </div>
                </div>

                {/* Base Rows */}
                <div className="flex-1 flex flex-col divide-y divide-slate-200/80 text-xs sm:text-sm text-slate-700">
                  <div className="h-[52px] flex items-center justify-center font-medium">
                    {BROADCAST_PLANS[0].tlh}
                  </div>
                  <div className="h-[52px] flex items-center justify-center font-medium">
                    {BROADCAST_PLANS[0].storage}
                  </div>
                  <div className="h-[52px] flex items-center justify-center">
                    <GreenCheckIcon />
                  </div>
                  <div className="h-[52px] flex items-center justify-center text-slate-600 text-center px-1">
                    {BROADCAST_PLANS[0].tuneIn}
                  </div>
                  <div className="h-[52px] flex items-center justify-center text-slate-600 text-center px-1">
                    {BROADCAST_PLANS[0].mobileApps}
                  </div>
                  <div className="h-[52px] flex items-center justify-center">
                    {BROADCAST_PLANS[0].alexaSkill ? <GreenCheckIcon /> : <GrayCrossIcon />}
                  </div>
                  <div className="h-[52px] flex items-center justify-center font-medium">
                    {BROADCAST_PLANS[0].supportLevel}
                  </div>

                  {/* Expanded Rows */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="divide-y divide-slate-200/80"
                      >
                        {EXPANDED_FEATURES.map((item, idx) => (
                          <div
                            key={`b1-exp-${idx}`}
                            className="h-[48px] flex items-center justify-center text-xs text-slate-600 px-1 text-center"
                          >
                            {typeof item.values[0] === 'boolean' ? (
                              item.values[0] ? <GreenCheckIcon className="w-4 h-4" /> : <GrayCrossIcon className="w-4 h-4" />
                            ) : (
                              <span>{item.values[0]}</span>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Broadcast 2 (MOST POPULAR) with Full Cyan Frame */}
              <div className="flex flex-col bg-white relative z-20 shadow-md ring-2 ring-[#00b4d8] rounded-t-lg">
                {/* Most Popular Top Banner */}
                <div className="h-7 w-full bg-[#03597d] text-cyan-200 text-[11px] font-bold tracking-wider uppercase flex items-center justify-center rounded-t-md">
                  MOST POPULAR
                </div>

                {/* Plan Header Card */}
                <div className="p-3 sm:p-4 flex flex-col items-center justify-center h-[105px] border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {BROADCAST_PLANS[1].name}
                  </span>

                  <div className="flex items-baseline gap-1 mt-1.5">
                    <motion.span
                      key={`price-1-${getPlanPrice(BROADCAST_PLANS[1])}`}
                      initial={{ opacity: 0.5, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl sm:text-3xl font-extrabold text-[#110c33] tracking-tight"
                    >
                      ${getPlanPrice(BROADCAST_PLANS[1])}
                    </motion.span>
                    <span className="text-xs text-slate-500 font-normal">/ mo</span>
                  </div>
                </div>

                {/* Base Rows */}
                <div className="flex-1 flex flex-col divide-y divide-slate-200/80 text-xs sm:text-sm text-slate-700">
                  <div className="h-[52px] flex items-center justify-center font-medium">
                    {BROADCAST_PLANS[1].tlh}
                  </div>
                  <div className="h-[52px] flex items-center justify-center font-medium">
                    {BROADCAST_PLANS[1].storage}
                  </div>
                  <div className="h-[52px] flex items-center justify-center">
                    <GreenCheckIcon />
                  </div>
                  <div className="h-[52px] flex items-center justify-center text-slate-600 text-center px-1">
                    {BROADCAST_PLANS[1].tuneIn}
                  </div>
                  <div className="h-[52px] flex items-center justify-center text-slate-600 text-center px-1">
                    {BROADCAST_PLANS[1].mobileApps}
                  </div>
                  <div className="h-[52px] flex items-center justify-center">
                    <GreenCheckIcon />
                  </div>
                  <div className="h-[52px] flex items-center justify-center font-medium">
                    {BROADCAST_PLANS[1].supportLevel}
                  </div>

                  {/* Expanded Rows */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="divide-y divide-slate-200/80"
                      >
                        {EXPANDED_FEATURES.map((item, idx) => (
                          <div
                            key={`b2-exp-${idx}`}
                            className="h-[48px] flex items-center justify-center text-xs text-slate-600 px-1 text-center"
                          >
                            {typeof item.values[1] === 'boolean' ? (
                              item.values[1] ? <GreenCheckIcon className="w-4 h-4" /> : <GrayCrossIcon className="w-4 h-4" />
                            ) : (
                              <span>{item.values[1]}</span>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Broadcast 3 */}
              <div className="flex flex-col bg-white border-l border-r border-slate-200/90">
                {/* Spacer */}
                <div className="h-7 w-full bg-transparent" />

                {/* Plan Header Card */}
                <div className="p-3 sm:p-4 flex flex-col items-center justify-center h-[105px] border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {BROADCAST_PLANS[2].name}
                  </span>

                  <div className="flex items-baseline gap-1 mt-1.5">
                    <motion.span
                      key={`price-2-${getPlanPrice(BROADCAST_PLANS[2])}`}
                      initial={{ opacity: 0.5, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl sm:text-3xl font-extrabold text-[#110c33] tracking-tight"
                    >
                      ${getPlanPrice(BROADCAST_PLANS[2])}
                    </motion.span>
                    <span className="text-xs text-slate-500 font-normal">/ mo</span>
                  </div>
                </div>

                {/* Base Rows */}
                <div className="flex-1 flex flex-col divide-y divide-slate-200/80 text-xs sm:text-sm text-slate-700">
                  <div className="h-[52px] flex items-center justify-center font-medium">
                    {BROADCAST_PLANS[2].tlh}
                  </div>
                  <div className="h-[52px] flex items-center justify-center font-medium">
                    {BROADCAST_PLANS[2].storage}
                  </div>
                  <div className="h-[52px] flex items-center justify-center">
                    <GreenCheckIcon />
                  </div>
                  <div className="h-[52px] flex items-center justify-center text-slate-600 text-center px-1">
                    {BROADCAST_PLANS[2].tuneIn}
                  </div>
                  <div className="h-[52px] flex items-center justify-center font-medium text-slate-800 text-center px-1">
                    {BROADCAST_PLANS[2].mobileApps}
                  </div>
                  <div className="h-[52px] flex items-center justify-center">
                    <GreenCheckIcon />
                  </div>
                  <div className="h-[52px] flex items-center justify-center font-medium">
                    {BROADCAST_PLANS[2].supportLevel}
                  </div>

                  {/* Expanded Rows */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="divide-y divide-slate-200/80"
                      >
                        {EXPANDED_FEATURES.map((item, idx) => (
                          <div
                            key={`b3-exp-${idx}`}
                            className="h-[48px] flex items-center justify-center text-xs text-slate-600 px-1 text-center"
                          >
                            {typeof item.values[2] === 'boolean' ? (
                              item.values[2] ? <GreenCheckIcon className="w-4 h-4" /> : <GrayCrossIcon className="w-4 h-4" />
                            ) : (
                              <span>{item.values[2]}</span>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Broadcast 4 & Broadcast 5 (PREMIUM GROUP with Shared Purple Frame) */}
              <div className="col-span-2 grid grid-cols-2 bg-white relative z-10 shadow-md ring-2 ring-[#7c3aed] rounded-t-lg">
                {/* Premium Banner Spanning across both columns */}
                <div className="col-span-2 h-7 w-full bg-[#361a6b] text-purple-200 text-[11px] font-bold tracking-wider uppercase flex items-center justify-center rounded-t-md">
                  PREMIUM
                </div>

                {/* Broadcast 4 Column */}
                <div className="flex flex-col border-r border-slate-200">
                  <div className="p-3 sm:p-4 flex flex-col items-center justify-center h-[105px] border-b border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {BROADCAST_PLANS[3].name}
                    </span>

                    <div className="flex items-baseline gap-1 mt-1.5">
                      <motion.span
                        key={`price-3-${getPlanPrice(BROADCAST_PLANS[3])}`}
                        initial={{ opacity: 0.5, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl font-extrabold text-[#110c33] tracking-tight"
                      >
                        ${getPlanPrice(BROADCAST_PLANS[3])}
                      </motion.span>
                      <span className="text-xs text-slate-500 font-normal">/ mo</span>
                    </div>
                  </div>

                  {/* Base Rows */}
                  <div className="flex-1 flex flex-col divide-y divide-slate-200/80 text-xs sm:text-sm text-slate-700">
                    <div className="h-[52px] flex items-center justify-center font-medium">
                      {BROADCAST_PLANS[3].tlh}
                    </div>
                    <div className="h-[52px] flex items-center justify-center font-medium">
                      {BROADCAST_PLANS[3].storage}
                    </div>
                    <div className="h-[52px] flex items-center justify-center">
                      <GreenCheckIcon />
                    </div>
                    <div className="h-[52px] flex items-center justify-center font-medium text-slate-800 text-center px-1">
                      {BROADCAST_PLANS[3].tuneIn}
                    </div>
                    <div className="h-[52px] flex items-center justify-center font-medium text-slate-800 text-center px-1">
                      {BROADCAST_PLANS[3].mobileApps}
                    </div>
                    <div className="h-[52px] flex items-center justify-center">
                      <GreenCheckIcon />
                    </div>
                    <div className="h-[52px] flex items-center justify-center font-medium">
                      {BROADCAST_PLANS[3].supportLevel}
                    </div>

                    {/* Expanded Rows */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="divide-y divide-slate-200/80"
                        >
                          {EXPANDED_FEATURES.map((item, idx) => (
                            <div
                              key={`b4-exp-${idx}`}
                              className="h-[48px] flex items-center justify-center text-xs text-slate-600 px-1 text-center"
                            >
                              {typeof item.values[3] === 'boolean' ? (
                                item.values[3] ? <GreenCheckIcon className="w-4 h-4" /> : <GrayCrossIcon className="w-4 h-4" />
                              ) : (
                                <span>{item.values[3]}</span>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Broadcast 5 Column */}
                <div className="flex flex-col">
                  <div className="p-3 sm:p-4 flex flex-col items-center justify-center h-[105px] border-b border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {BROADCAST_PLANS[4].name}
                    </span>

                    <div className="flex items-baseline gap-1 mt-1.5">
                      <motion.span
                        key={`price-4-${getPlanPrice(BROADCAST_PLANS[4])}`}
                        initial={{ opacity: 0.5, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl font-extrabold text-[#110c33] tracking-tight"
                      >
                        ${getPlanPrice(BROADCAST_PLANS[4])}
                      </motion.span>
                      <span className="text-xs text-slate-500 font-normal">/ mo</span>
                    </div>
                  </div>

                  {/* Base Rows */}
                  <div className="flex-1 flex flex-col divide-y divide-slate-200/80 text-xs sm:text-sm text-slate-700">
                    <div className="h-[52px] flex items-center justify-center font-medium">
                      {BROADCAST_PLANS[4].tlh}
                    </div>
                    <div className="h-[52px] flex items-center justify-center font-medium">
                      {BROADCAST_PLANS[4].storage}
                    </div>
                    <div className="h-[52px] flex items-center justify-center">
                      <GreenCheckIcon />
                    </div>
                    <div className="h-[52px] flex items-center justify-center font-medium text-slate-800 text-center px-1">
                      {BROADCAST_PLANS[4].tuneIn}
                    </div>
                    <div className="h-[52px] flex items-center justify-center font-medium text-slate-800 text-center px-1">
                      {BROADCAST_PLANS[4].mobileApps}
                    </div>
                    <div className="h-[52px] flex items-center justify-center">
                      <GreenCheckIcon />
                    </div>
                    <div className="h-[52px] flex items-center justify-center font-bold text-purple-700">
                      {BROADCAST_PLANS[4].supportLevel}
                    </div>

                    {/* Expanded Rows */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="divide-y divide-slate-200/80"
                        >
                          {EXPANDED_FEATURES.map((item, idx) => (
                            <div
                              key={`b5-exp-${idx}`}
                              className="h-[48px] flex items-center justify-center text-xs text-slate-600 px-1 text-center"
                            >
                              {typeof item.values[4] === 'boolean' ? (
                                item.values[4] ? <GreenCheckIcon className="w-4 h-4" /> : <GrayCrossIcon className="w-4 h-4" />
                              ) : (
                                <span>{item.values[4]}</span>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Expand / Collapse "See all features" Button */}
          <div className="bg-white rounded-b-xl border-t border-slate-200 p-4 pl-6 flex items-center">
            <button
              type="button"
              id="btn-toggle-all-features"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#ff5a1f] hover:text-[#e04a10] font-bold text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>Hide features</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span>See all features</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
