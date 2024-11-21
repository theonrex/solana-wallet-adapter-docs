---
sidebar_position: 5
---

# Connect and Disconnect Wallet

This example demonstrates how to check if the wallet is supported by the @solana/wallet-adapter-wallets.

```tsx
"use client"; // Enables React Server Components in Next.js
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const SupportedWalletCheck = () => {
  const { wallet, wallets } = useWallet(); // Access wallet and list of available wallets from WalletProvider
  const [isSupported, setIsSupported] = useState<boolean | null>(null); // `null` for loading state

  // Define a list of supported wallets (adjust this to your actual supported wallets)
  const supportedWallets = ["Phantom", "Solflare", "Saber", "Sollet"];

  useEffect(() => {
    // Ensure that wallet exists before proceeding and using optional chaining
    if (wallet?.adapter?.name) {
      // Check if the wallet is in the list of supported wallets
      setIsSupported(supportedWallets.includes(wallet.adapter.name));
    } else {
      setIsSupported(false); // Handle case when no wallet is connected
    }
  }, [wallet]); // Re-run effect when wallet changes

  return (
    <div>
      <WalletMultiButton />{" "}
      {/* Render the wallet multi-button for users to connect their wallet */}
      {/* Display loading message while checking wallet support */}
      {isSupported === null ? (
        <p>Checking wallet support...</p>
      ) : isSupported ? (
        <p>Your wallet ({wallet?.adapter?.name}) is supported!</p> // Show success message when wallet is supported
      ) : (
        <>
          <p>
            Your wallet ({wallet?.adapter?.name || "Unknown"}) is not supported.
          </p>
          <p>Supported wallets are:</p>
          <ul>
            {supportedWallets.map((walletName, index) => (
              <li key={index}>{walletName}</li> // List only the supported wallets
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SupportedWalletCheck;
```
