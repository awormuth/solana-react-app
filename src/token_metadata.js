import { Connection, programs } from "@metaplex/js";
const {
  metadata: { Metadata },
} = programs;

const connection = new Connection("mainnet-beta");

export async function getMetadata(tokenPublicKey) {
  try {
    const ownedMetadata = await Metadata.load(connection, tokenPublicKey);
    console.log(ownedMetadata);
  } catch {
    console.log("Failed to fetch metadata");
  }
}
