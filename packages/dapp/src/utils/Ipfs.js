import Base58 from 'base-58';
import IPFSClient from 'ipfs-http-client';

const ipfs = new IPFSClient({
  host: 'ipfs.infura.io',
  port: '5001',
  protocol: 'https',
});

// type Metadata = {
//   name: string;
//   description: string;
//   link: string;
//   startTime: number; // seconds since epoch
//   endTime: number; // seconds since epoch
// }

export const uploadMetadata = async (metadata) => {
  if (!metadata.name) return '0x';
  const objectString = JSON.stringify(metadata);
  const bufferedString = Buffer.from(objectString);
  const node = await ipfs.add(bufferedString);
  const bytes = Buffer.from(Base58.decode(node.path));
  return `0x${bytes.slice(2).toString('hex')}`;
};
