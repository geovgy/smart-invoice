import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

export function DemoSection() {
  return (
    <Box padding={20}>
      <Flex justify="space-between" align="end">
        <Box maxWidth={700}>
          <Heading mb={2}>Designed for all freelancers</Heading>
          <Text>
            Smart Invoice was created to be a simple and secure tool that
            freelancers in all fields could easily use, regardless of project
            size. You don’t have to be a developer or “technical.”
          </Text>
        </Box>
        <NextLink href="https://app.smartinvoice.xzy">
          <Button background="blue.1">Open dApp</Button>
        </NextLink>
      </Flex>
      <Divider background="blue.1" mt={8} mb={8} />
      <Flex justify="space-between" gap={10}>
        <Accordion width={380} textColor="white" defaultIndex={0}>
          <AccordionItem mb={2}>
            <AccordionButton
              fontWeight={700}
              fontSize={18}
              paddingX={8}
              paddingY={4}
              textColor="gray.dark"
              borderRadius={10}
              _expanded={{
                background: 'blue.dark',
                color: 'white',
                borderBottomRadius: 0,
              }}
            >
              Connect your wallet
            </AccordionButton>
            <AccordionPanel
              paddingX={8}
              paddingTop={0}
              background="blue.dark"
              borderBottomRadius={10}
            >
              No email signup needed. Just connect your crypto wallet and Smart
              Invoice is ready to use.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mb={2}>
            <AccordionButton
              fontWeight={700}
              fontSize={18}
              paddingX={8}
              paddingY={4}
              textColor="gray.dark"
              borderRadius={10}
              _expanded={{
                background: 'blue.dark',
                color: 'white',
                borderBottomRadius: 0,
              }}
            >
              Create your invoice
            </AccordionButton>
            <AccordionPanel
              paddingX={8}
              paddingTop={0}
              background="blue.dark"
              borderBottomRadius={10}
            >
              Add content here
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mb={2}>
            <AccordionButton
              fontWeight={700}
              fontSize={18}
              paddingX={8}
              paddingY={4}
              textColor="gray.dark"
              borderRadius={10}
              _expanded={{
                background: 'blue.dark',
                color: 'white',
                borderBottomRadius: 0,
              }}
            >
              Client deposits funds
            </AccordionButton>
            <AccordionPanel
              paddingX={8}
              paddingTop={0}
              background="blue.dark"
              borderBottomRadius={10}
            >
              Add content here
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mb={2}>
            <AccordionButton
              fontWeight={700}
              fontSize={18}
              paddingX={8}
              paddingY={4}
              textColor="gray.dark"
              borderRadius={10}
              _expanded={{
                background: 'blue.dark',
                color: 'white',
                borderBottomRadius: 0,
              }}
            >
              Funds held in smart contracts
            </AccordionButton>
            <AccordionPanel
              paddingX={8}
              paddingTop={0}
              background="blue.dark"
              borderBottomRadius={10}
            >
              Add content here
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mb={2}>
            <AccordionButton
              fontWeight={700}
              fontSize={18}
              paddingX={8}
              paddingY={4}
              textColor="gray.dark"
              borderRadius={10}
              _expanded={{
                background: 'blue.dark',
                color: 'white',
                borderBottomRadius: 0,
              }}
            >
              Client releases funds
            </AccordionButton>
            <AccordionPanel
              paddingX={8}
              paddingTop={0}
              background="blue.dark"
              borderBottomRadius={10}
            >
              Add content here
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mb={2}>
            <AccordionButton
              fontWeight={700}
              fontSize={18}
              paddingX={8}
              paddingY={4}
              textColor="gray.dark"
              borderRadius={10}
              _expanded={{
                background: 'blue.dark',
                color: 'white',
                borderBottomRadius: 0,
              }}
            >
              Receive funds
            </AccordionButton>
            <AccordionPanel
              paddingX={8}
              paddingTop={0}
              background="blue.dark"
              borderBottomRadius={10}
            >
              Add content here
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              fontWeight={700}
              fontSize={18}
              paddingX={8}
              paddingY={4}
              textColor="gray.dark"
              borderRadius={10}
              _expanded={{
                background: 'blue.dark',
                color: 'white',
                borderBottomRadius: 0,
              }}
            >
              Request arbitration (optional)
            </AccordionButton>
            <AccordionPanel
              paddingX={8}
              paddingTop={0}
              background="blue.dark"
              borderBottomRadius={10}
            >
              Add content here
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Image */}
        <Box height={600} width={600} background="gray.dark" />
      </Flex>
    </Box>
  );
}
