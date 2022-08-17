import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export function HeroSection() {
  return (
    <Flex background="gray.background" paddingY={20} paddingX={20}>
      <VStack align="left" gap={4}>
        <Box
          textColor="charcoal"
          fontSize={50}
          fontWeight={700}
          fontFamily="Poppins"
        >
          <Heading>Crypto invoicing</Heading>
          <Heading fontStyle="italic">that&apos;s simple & free</Heading>
        </Box>
        <Text maxWidth={400}>
          Smart Invoice is an easy-to-use tool that provides web3 freelancers
          with cryptocurrency invoicing, escrow, and arbitration.
        </Text>
        <Button background="blue.1" maxWidth={164} paddingY={6}>
          Open dApp
        </Button>
        <Text
          fontSize={12}
          fontWeight={400}
          fontStyle="italic"
          textColor="gray.light"
        >
          Free to use. No email signup required.
        </Text>
      </VStack>

      {/* Image */}
    </Flex>
  );
}
