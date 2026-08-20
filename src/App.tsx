import { useState } from 'react';
import { AdMode, BillingCycle } from './types';
import { PricingHeaderToggles } from './components/PricingHeaderToggles';
import { PricingTable } from './components/PricingTable';
import { FootnotesSection } from './components/FootnotesSection';

export default function App() {
  const [adMode, setAdMode] = useState<AdMode>('with_ads');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <div className="min-h-screen bg-[#0e0a29] text-white flex flex-col justify-between py-6 sm:py-10 px-2 sm:px-6 antialiased selection:bg-orange-500 selection:text-white">
      {/* Main Pricing Container */}
      <main className="w-full flex-1 flex flex-col items-center justify-center">
        {/* Toggle Selectors */}
        <PricingHeaderToggles
          adMode={adMode}
          setAdMode={setAdMode}
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />

        {/* Pricing Matrix Table */}
        <PricingTable
          adMode={adMode}
          billingCycle={billingCycle}
        />

        {/* Footnotes 1 to 6 */}
        <FootnotesSection />
      </main>
    </div>
  );
}
