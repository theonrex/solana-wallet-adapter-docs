---
sidebar_position: 6
---

# Wallet Balance

This example demonstrates how to display the wallet address and balance after connecting the wallet.

```tsx

"use client"; // Enables React Server Components in Next.js

// Import necessary hooks from Solana wallet adapter and React
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletBalance = () => {
  // Retrieve the connection object to interact with the Solana network
  const { connection } = useConnection();
  // Retrieve the public key of the connected wallet
  const { publicKey } = useWallet();
  // State to store the wallet balance
  const [balance, setBalance] = useState<number | null>(null);

  // useEffect hook to fetch wallet balance when the component mounts or when publicKey/connection changes
  useEffect(() => {
    const fetchBalance = async () => {
      // Check if wallet is connected (i.e., publicKey exists)
      if (publicKey) {
        // Fetch the balance in lamports (1 SOL = 1 billion lamports)
        const solBalance = await connection.getBalance(publicKey);
        // Convert lamports to SOL and set the balance state
        setBalance(solBalance / 1000000000); // Convert lamports to SOL
      }
    };

    // Call the fetchBalance function when dependencies (connection or publicKey) change
    fetchBalance();
  }, [connection, publicKey]);

  return (
    <div>
      <WalletMultiButton />

      {publicKey ? (
        // Display the wallet address and balance if the wallet is connected
        <>
          <p>Wallet Address: {publicKey.toBase58()}</p>
          <p>Balance: {balance ? `${balance} SOL` : "Loading..."}</p>
        </>
      ) : (
        // Show message if no wallet is connected
        <p>Please connect your wallet</p>
      )}
    </div>
  );
};

export default WalletBalance;
```
