import { HeroSection } from '@/shared/HeroSection/HeroSection';
import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';

export default async function Home() {
  return (
    <>
      <HeroSection text="HOME" />
      <PageWrapper>Home</PageWrapper>
    </>
  );
}
