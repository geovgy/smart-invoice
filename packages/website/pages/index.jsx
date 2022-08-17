import { Box, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import { CallToAction } from '../components/CallToAction';
import { DemoSection } from '../components/Demo';
import { FAQSection } from '../components/FAQ';
import { FeatureArbitration } from '../components/FeatureArbitration';
import { FeatureCrypto } from '../components/FeatureCrypto';
import { FeatureEscrow } from '../components/FeatureEscrow';
import { FeatureInvoice } from '../components/FeatureInvoice';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/Hero';
import { NavBar } from '../components/NavBar';
import { StoryOverviewSection } from '../components/StoryOverview';
import { Testimonials } from '../components/Testimonials';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Smart Invoice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <HeroSection />
      <FeatureCrypto />
      <FeatureInvoice />
      <FeatureEscrow />
      <FeatureArbitration />
      <Testimonials />
      <DemoSection />
      <StoryOverviewSection />
      <FAQSection />
      <CallToAction />
      <Footer />
    </Box>
  );
}
