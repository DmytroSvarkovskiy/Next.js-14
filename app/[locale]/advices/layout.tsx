import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advice',
  description: 'Top tips for handling pets',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
