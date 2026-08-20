export type AdMode = 'with_ads' | 'no_ads';
export type BillingCycle = 'monthly' | 'yearly';

export interface PlanPrice {
  monthly: number;
  yearlyMonthlyEquivalent: number;
  yearlyBilledTotal: number;
}

export interface BroadcastPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  isPremium?: boolean;
  prices: {
    with_ads: PlanPrice;
    no_ads: PlanPrice;
  };
  tlh: string;
  storage: string;
  musicLicensing: boolean;
  tuneIn: 'Add-on available' | 'Included';
  mobileApps: 'Add-on available' | 'Included';
  alexaSkill: boolean;
  supportLevel: 'Standard' | 'Premium' | 'VIP';
  detailedFeatures?: {
    category: string;
    items: {
      name: string;
      description?: string;
      value: string | boolean;
    }[];
  }[];
}

export interface Footnote {
  id: number;
  text: string;
  highlightText?: string;
}
