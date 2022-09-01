import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/',
  forum: 'https://ludonft.io/',
  moralis: 'https://ludo-nft-1.gitbook.io/whitepaper/about-us/ludo-nft',
};

const Footer = () => {
  return (
    <Box textAlign={'center'}  w="full" p={6}>
      <Text>
        ⭐️ Dashboard Ludo NFT{' '}
        <Link href={links.github} isExternal alignItems={'center'}>
           <ExternalLinkIcon />
        </Link>
        , every star makes us very happy!
      </Text>
      <Text>
        🙋 You have questions? Ask them on the{' '}
        <Link href={links.forum} isExternal alignItems={'center'}>
          Contact  <ExternalLinkIcon />
        </Link>
      </Text>
      <Text>
        📖 Read our whitepaper{' '}
        <Link href={links.moralis} isExternal alignItems={'center'}>
          Moralis <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
