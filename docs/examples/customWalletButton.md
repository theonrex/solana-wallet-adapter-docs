---
sidebar_position: 2
---

# Creating a Custom Wallet Button

This example shows how to create a custom wallet button that triggers the useWalletModal to open.

```tsx
"use client"; // Enables React Server Components in Next.js

import { useWallet } from "@solana/wallet-adapter-react"; // Hook for wallet state
import { useWalletModal } from "@solana/wallet-adapter-react-ui"; // Hook for modal visibility
import { useCallback } from "react"; // Hook for memoized functions

const CustomWalletButton = () => {
  // Get wallet state and actions from the Solana wallet adapter
  const { connected, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal(); // Control visibility of the wallet modal

  // Function to open the wallet modal
  const handleConnectClick = useCallback(() => {
    setVisible(true); // Show the wallet modal
  }, [setVisible]);

  // Function to disconnect the wallet
  const handleDisconnectClick = useCallback(() => {
    disconnect(); // Disconnect the wallet
  }, [disconnect]);

  return (
    <button
      onClick={connected ? handleDisconnectClick : handleConnectClick} // Handle click based on connection state
      aria-label={connected ? "Disconnect Wallet" : "Connect Wallet"} // Improve accessibility for screen readers
    >
      {/* Display "Connect Wallet" if not connected; otherwise, show the shortened wallet address */}
      {connected
        ? `Disconnect (${publicKey?.toString().slice(0, 4)}...${publicKey
            ?.toString()
            .slice(-4)})`
        : "Connect Wallet"}
    </button>
  );
};

export default CustomWalletButton;
```
