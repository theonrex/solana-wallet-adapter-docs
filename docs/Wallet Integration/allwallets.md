---
sidebar-position: 4
---

# Available Wallets

#### Description: This state is an array that holds all the available wallets. Each item in the array represents a wallet object with its adapter and readiness state.

```tsx
"use client";

import { useWallet } from "@solana/wallet-adapter-react";

export default function WalletsExample() {
  const { wallets } = useWallet();

  return (
    <div>
      <h3>Available Wallets</h3>
      <ul>
        {wallets.map((wallet, index) => (
          <li key={index}>{wallet.adapter.name}</li>
        ))}
      </ul>
    </div>
  );
}
```
