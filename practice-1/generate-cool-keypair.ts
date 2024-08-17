import { Keypair } from "@solana/web3.js";

let keypair = Keypair.generate();
while (!keypair.publicKey.toBase58().startsWith("max")) {
    keypair = Keypair.generate();
} 

console.log(`Generated cool keypair!`, keypair.publicKey.toBase58());