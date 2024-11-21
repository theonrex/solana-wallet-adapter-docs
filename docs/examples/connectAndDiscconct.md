---
sidebar_position: 1
---

# Connecting and Disconnecting a Wallet

This example demonstrates how to connect and disconnect a wallet using the useWallet hook from @solana/wallet-adapter-react.

```tsx
"use client";

import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export default function WalletConnect() {
  const { connected, publicKey, select, connect, disconnect, wallets } =
    useWallet();
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      setError(null);
      if (wallets.length === 0) {
        throw new Error("No wallets found");
      }
      // Select the first wallet in the list (usually Phantom)
      await select(wallets[0].adapter.name);
      await connect();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      console.error("Failed to connect wallet:", err);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (err) {
      console.error("Failed to disconnect wallet:", err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Solana Wallet Connection</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {connected ? (
        <div className="space-y-4">
          <p className="text-green-500">
            Connected to: {publicKey?.toBase58()}
          </p>
          <button
            onClick={handleDisconnect}
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p>Please connect your wallet to continue.</p>
          <button
            onClick={handleConnect}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
}

```
