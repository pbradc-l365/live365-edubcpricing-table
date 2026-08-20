import { BroadcastPlan, Footnote } from '../types';

export const BROADCAST_PLANS: BroadcastPlan[] = [
  {
    id: 'broadcast_1',
    name: 'BROADCAST 1',
    prices: {
      with_ads: {
        monthly: 47,
        yearlyMonthlyEquivalent: 39,
        yearlyBilledTotal: 472,
      },
      no_ads: {
        monthly: 63,
        yearlyMonthlyEquivalent: 53,
        yearlyBilledTotal: 632,
      },
    },
    tlh: '1,500',
    storage: '30 GB',
    musicLicensing: true,
    tuneIn: 'Add-on available',
    mobileApps: 'Add-on available',
    alexaSkill: false,
    supportLevel: 'Standard',
  },
  {
    id: 'broadcast_2',
    name: 'BROADCAST 2',
    isPopular: true,
    badge: 'MOST POPULAR',
    prices: {
      with_ads: {
        monthly: 79,
        yearlyMonthlyEquivalent: 66,
        yearlyBilledTotal: 792,
      },
      no_ads: {
        monthly: 111,
        yearlyMonthlyEquivalent: 93,
        yearlyBilledTotal: 1112,
      },
    },
    tlh: '3,500',
    storage: '50 GB',
    musicLicensing: true,
    tuneIn: 'Add-on available',
    mobileApps: 'Add-on available',
    alexaSkill: true,
    supportLevel: 'Standard',
  },
  {
    id: 'broadcast_3',
    name: 'BROADCAST 3',
    prices: {
      with_ads: {
        monthly: 159,
        yearlyMonthlyEquivalent: 133,
        yearlyBilledTotal: 1592,
      },
      no_ads: {
        monthly: 223,
        yearlyMonthlyEquivalent: 186,
        yearlyBilledTotal: 2232,
      },
    },
    tlh: '7,000',
    storage: '100 GB',
    musicLicensing: true,
    tuneIn: 'Add-on available',
    mobileApps: 'Included',
    alexaSkill: true,
    supportLevel: 'Standard',
  },
  {
    id: 'broadcast_4',
    name: 'BROADCAST 4',
    isPremium: true,
    badge: 'PREMIUM',
    prices: {
      with_ads: {
        monthly: 399,
        yearlyMonthlyEquivalent: 333,
        yearlyBilledTotal: 3992,
      },
      no_ads: {
        monthly: 559,
        yearlyMonthlyEquivalent: 466,
        yearlyBilledTotal: 5592,
      },
    },
    tlh: '10,000',
    storage: '200 GB',
    musicLicensing: true,
    tuneIn: 'Included',
    mobileApps: 'Included',
    alexaSkill: true,
    supportLevel: 'Premium',
  },
  {
    id: 'broadcast_5',
    name: 'BROADCAST 5',
    isPremium: true,
    badge: 'PREMIUM',
    prices: {
      with_ads: {
        monthly: 799,
        yearlyMonthlyEquivalent: 666,
        yearlyBilledTotal: 7992,
      },
      no_ads: {
        monthly: 1119,
        yearlyMonthlyEquivalent: 933,
        yearlyBilledTotal: 11192,
      },
    },
    tlh: '20,000',
    storage: '500 GB',
    musicLicensing: true,
    tuneIn: 'Included',
    mobileApps: 'Included',
    alexaSkill: true,
    supportLevel: 'VIP',
  },
];

export interface ExpandedFeatureRow {
  name: string;
  footnoteRef?: string;
  category: string;
  values: (string | boolean)[];
}

export const EXPANDED_FEATURES: ExpandedFeatureRow[] = [
  // Distribution & Discovery
  {
    category: 'Distribution & Players',
    name: 'Live365 Station Directory & Search',
    values: [true, true, true, true, true],
  },
  {
    category: 'Distribution & Players',
    name: 'Embeddable HTML5 Web Player',
    values: [true, true, true, true, true],
  },
  {
    category: 'Distribution & Players',
    name: 'iHeartRadio Listing Eligibility',
    footnoteRef: '5',
    values: [false, false, 'Add-on available', 'Included', 'Included'],
  },
  {
    category: 'Distribution & Players',
    name: 'Audacy Distribution Opportunity',
    values: [false, false, 'Eligible', 'Included', 'Included'],
  },
  {
    category: 'Distribution & Players',
    name: 'Benztown Radio Imaging Package',
    values: [false, false, false, 'Included', 'Included'],
  },

  // Automation & Streaming
  {
    category: 'Broadcasting & Automation',
    name: 'Cloud AutoDJ (24/7 Non-stop streaming)',
    values: [true, true, true, true, true],
  },
  {
    category: 'Broadcasting & Automation',
    name: 'Live Source Streaming (SAM, Mixxx, BUTT)',
    values: [true, true, true, true, true],
  },
  {
    category: 'Broadcasting & Automation',
    name: 'Streaming Bitrate (MP3 & AAC)',
    values: ['Up to 128 kbps', 'Up to 192 kbps', 'Up to 320 kbps', 'Up to 320 kbps', 'Up to 320 kbps'],
  },
  {
    category: 'Broadcasting & Automation',
    name: 'Simultaneous Stream Relays',
    values: ['1 Relay', '2 Relays', '5 Relays', 'Unlimited', 'Unlimited'],
  },

  // Analytics & Management
  {
    category: 'Analytics & Management',
    name: 'Analytics Suite',
    values: ['Basic', 'Advanced', 'Pro (Dayparting)', 'Pro (Advanced)', 'Enterprise VIP'],
  },
  {
    category: 'Analytics & Management',
    name: 'ASCAP, BMI, SESAC, SoundExchange Royalty Reporting',
    footnoteRef: '3',
    values: [true, true, true, true, true],
  },
  {
    category: 'Analytics & Management',
    name: 'DJ / Contributor Accounts',
    values: ['1 Account', '3 Accounts', '10 Accounts', 'Unlimited', 'Unlimited'],
  },
  {
    category: 'Analytics & Management',
    name: 'First Response SLA',
    footnoteRef: '6',
    values: ['24 Hours', '24 Hours', '24 Hours', '12 Hours', '3 Hours (VIP)'],
  },
];

export const FOOTNOTES: Footnote[] = [
  {
    id: 1,
    text: 'Packages with Ads by Live365 include ads delivered by Live365 with 50/50 revenue share, in addition to discounted pricing. Note that you may run your own ads on any package configuration.',
  },
  {
    id: 2,
    text: 'Overages billed at $0.05 per listened hour',
  },
  {
    id: 3,
    text: 'Your listeners are covered in the USA via ASCAP, BMI, SESAC, GMR, AllTrack, Word Collections and SoundExchange, in Mexico via EMMAC/SACM and SOMEXFON, and in Canada via SOCAN and Re:Sound.',
    highlightText: 'Licensing coverage is dependent on the real-time metadata you provide for each track played.',
  },
  {
    id: 4,
    text: 'You will also need both an Apple Developer membership ($99/yr.) and a Google Play Developer account ($25 one-time).',
  },
  {
    id: 5,
    text: 'Limited seats. Subject to iHeart approval based on policy compliance and performance standards. Listings are in the United States and Mexico only.',
  },
  {
    id: 6,
    text: 'First response times are Standard 24 hours, Premium 12 hours, VIP 3 hours.',
  },
];
