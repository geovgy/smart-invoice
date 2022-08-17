import React from 'react';

import { CallToAction } from '../components/CallToAction';
import { DemoSection } from '../components/Demo';
import { FAQSection } from '../components/FAQ';
import { FeatureArbitration } from '../components/FeatureArbitration';
import { FeatureCrypto } from '../components/FeatureCrypto';
import { FeatureEscrow } from '../components/FeatureEscrow';
import { FeatureInvoice } from '../components/FeatureInvoice';
import { HeroSection } from '../components/Hero';
import { Layout } from '../components/layout/Layout';
import { StoryOverviewSection } from '../components/StoryOverview';
import { Testimonials } from '../components/Testimonials';

export default function Home() {
  return (
    <Layout>
      <HeroSection maxWidth={1400} />
      <FeatureCrypto maxWidth={1400} />
      <FeatureInvoice maxWidth={1400} />
      <FeatureEscrow maxWidth={1400} />
      <FeatureArbitration maxWidth={1400} />
      <Testimonials maxWidth={1400} />
      <DemoSection maxWidth={1400} />
      <StoryOverviewSection maxWidth={1400} />
      <FAQSection maxWidth={1400} />
      <CallToAction maxWidth={1400} />
    </Layout>
  );
}
