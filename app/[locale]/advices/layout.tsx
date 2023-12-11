import { I18nProviderClient } from '@/locales/client';
import { getCurrentLocale } from '@/locales/server';

export default function Layout({ children }: { children: React.ReactNode }) {
  const locale = getCurrentLocale();
  return (
    <I18nProviderClient locale={locale}>
      <div>{children}</div>
    </I18nProviderClient>
  );
}
