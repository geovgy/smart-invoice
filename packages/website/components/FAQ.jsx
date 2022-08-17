import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export function FAQSection() {
  return (
    <Flex padding={20} direction="column" align="center">
      <Heading fontSize={40} textAlign="center">
        Frequently asked questions
      </Heading>
      <Accordion allowToggle maxWidth={600} mt={10}>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>Can I accept credit card payments and ACH transfers?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>What cryptocurrencies can I accept payment with?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>Can I accept Bitcoin (BTC) payments?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>Is this software really free?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>Do you have your own token?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>How do you make money?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>Why are you doing this for free?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>Do I need to install any software?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>How do I create an account?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>How private are my transactions?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>How does arbitrations work?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border="1px solid #C2CFE0"
          borderRadius={10}
          padding={2}
          mb={2}
        >
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            textColor="gray.dark"
            fontSize={18}
            fontWeight={700}
          >
            <Text>Do you provide support if I need help?</Text>
            <AccordionIcon color="blue.1" />
          </AccordionButton>
          <AccordionPanel>
            No. Smart Invoice is cryptocurrency specific.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
