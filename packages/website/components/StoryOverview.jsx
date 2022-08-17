import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import React from 'react';

import ldLogo from '../public/logos/lexdao.svg';
import mdLogo from '../public/logos/molochdao.svg';
import rgLogo from '../public/logos/raidguild.svg';

export function StoryOverviewSection() {
  return (
    <Flex
      direction="row"
      padding={20}
      justify="space-between"
      gap={10}
      background="gray.background"
    >
      <Box>
        <Text fontSize={16} fontWeight={700} textColor="blue.1" mb={4}>
          Not your typical web3 story
        </Text>
        <Heading fontWeight={700} fontSize={40}>
          Built by freelancers,
        </Heading>
        <Heading fontWeight={700} fontSize={40} mb={8}>
          for freelancers
        </Heading>
        <Flex gap={2}>
          <Flex mr={4} align="center">
            <NextImage src={rgLogo} />
          </Flex>
          <Flex align="center">
            <NextImage src={mdLogo} />
          </Flex>
          <Flex align="center">
            <NextImage src={ldLogo} />
          </Flex>
        </Flex>
      </Box>
      <VStack gap={4} align="left" maxWidth={650}>
        <Text>
          Smart Invoice is a free tool, built as a public good, by a team of
          web3 freelancers operating out of the RaidGuild DAO.
        </Text>
        <Text>
          It was originally created as an internal tool by the RaidGuild DAO to
          solve the most common challenges around receiving cryptocurrency
          payments for our service work. It proved to be so effective, simple,
          and secure to use that we decided to spin up a public version.
        </Text>
        <Text>
          Through the generosity of MolochDAO and their grants program, we’ve
          been able to continue building out Smart Invoice for anyone to use
          regardless of economic status, location, or technical ability.
        </Text>
        <NextLink href="/about" passHref>
          <Link textColor="blue.1" fontWeight={700} width="fit-content">
            Learn more
          </Link>
        </NextLink>
      </VStack>
    </Flex>
  );
}
