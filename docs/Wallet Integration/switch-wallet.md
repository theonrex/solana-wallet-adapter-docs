---
sidebar_position: 2
---

# Switch Wallet

This section covers how to provide the user with the option to select from a list of available wallets.

## What This Does:

- wallets provides the list of available wallets.

- select() lets us choose a wallet from the list.

```tsx
"use client";

import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export default function SelectWallet() {
  const { select, wallets, publicKey, wallet } = useWallet(); // Access wallet list, select function, publicKey, and current wallet

  const handleSelectWallet = (walletName: string) => {
    select(walletName); // Select the wallet by name
  };

  return (
    <div>
      <h2>Select Wallet</h2>

      {/* Show connected wallet details if a wallet is connected */}
      {publicKey ? (
        <div>
          <p>
            <strong>Connected Wallet:</strong>
          </p>
          <p>
            <strong>Address:</strong> {publicKey.toBase58()}
          </p>
          <p>
            <strong>Wallet Name:</strong> {wallet?.adapter.name}
          </p>
        </div>
      ) : (
        <p>No wallet connected</p>
      )}

      {/* List available wallets to choose from */}
      <h3>Available Wallets</h3>
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.adapter.name}>
            <button onClick={() => handleSelectWallet(wallet.adapter.name)}>
              {wallet.adapter.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```
