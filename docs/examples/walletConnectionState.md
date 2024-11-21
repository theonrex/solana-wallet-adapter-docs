---
sidebar_position: 7
---

# Wallet Connection State
This example displays the wallet's connection state and its public key.

```tsx
"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
const WalletConnectionState = () => {
  const { connected, publicKey, wallet } = useWallet();

  return (
    <div>
      <WalletMultiButton />
      {connected ? (
        <>
          <p>Connected to {wallet?.adapter.name} wallet</p>
          <p>Public Key: {publicKey?.toBase58()}</p>
        </>
      ) : (
        <p>Wallet is not connected</p>
      )}
    </div>
  );
};

export default WalletConnectionState;


```
