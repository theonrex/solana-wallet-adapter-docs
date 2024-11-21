---
sidebar_position: 1
---

# Wallet Info

### Displaying Wallet Connection Status

This section demonstrates how to access and display information about the connected wallet, including its connection status and public key.


### What This Does:
- connected tells us if the wallet is connected.
- publicKey gives us the wallet’s unique address in Solana.
- If no wallet is connected, it displays a message saying so.

```tsx
"use client";

import React from "react";
import { useWallet } from "@solana/wallet-adapter-react"; // Correct import
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function WalletInfo() {
  const { connected, publicKey, wallet } = useWallet(); // Access wallet state
  console.log("wallet", wallet);
  return (
    <div>
      <h1>Wallet Information</h1>
      {connected ? (
        <>
          <WalletMultiButton />

          <p>Wallet connected: {wallet?.adapter?.name}</p>
          <p>Public Key: {publicKey?.toBase58()}</p>
        </>
      ) : (
        <div>
          <WalletMultiButton />

          <p>No wallet connected</p>
        </div>
      )}
    </div>
  );
}
```
