import { I18nProviderClient } from '@/locales/client';
import { getCurrentLocale } from '@/locales/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advice',
  description: 'Top tips for handling pets',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const locale = getCurrentLocale();
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
