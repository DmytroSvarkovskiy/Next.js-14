import { I18nProviderClient } from '@/locales/client';
import { getCurrentLocale } from '@/locales/server';
import { Footer } from '@/widgets/Footer/Footer';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const locale = getCurrentLocale();
  return (
    <Suspense fallback={null}>
      <I18nProviderClient locale={locale}>
        <div>{children}</div>
        <Footer />
      </I18nProviderClient>{' '}
    </Suspense>
  );
}
