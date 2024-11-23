---
sidebar_position: 2
---

# Getting Started

## Basic Setup

After installation, you need to set up the wallet adapter in your Next.js application. Here's a basic setup:

1. Create a new file called `WalletConnectionProvider.tsx` in your `src` directory:

```tsx
// WalletConnectionProvider.tsx
"use client"; // Ensure this is a client component

import { createContext, ReactNode, useContext } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletContext = createContext(null);

export const WalletConnectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const network = clusterApiUrl("devnet"); // Change to 'mainnet-beta' if needed
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const useWalletConnection = () => useContext(WalletContext);
```

2. Wrap your main App component with the WalletConnectionProvider in your pages **layout.tsx**:

```tsx
import { WalletConnectionProvider } from "./WalletConnectionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {" "}
      <WalletConnectionProvider>
        <body>{children}</body>
      </WalletConnectionProvider>
    </html>
  );
}
```

### Usage Example

Here's a simple example of how to use the wallet adapter in a Next.js component:

```tsx
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletConnection = () => {
  const { publicKey } = useWallet();

  return (
    <div>
      <WalletMultiButton />
      {publicKey && (
        <p>Your wallet is connected! Public key: {publicKey.toBase58()}</p>
      )}
    </div>
  );
};

export default WalletConnection;
```
