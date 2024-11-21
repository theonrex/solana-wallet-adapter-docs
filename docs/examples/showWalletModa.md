---
sidebar_position: 4
---

# Display Wallet Modal

This example shows how to toggle the wallet modal visibility using the useWalletModal hook from @solana/wallet-adapter-react-ui.

```tsx
"use client"; // Enables React Server Components in Next.js

import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const WalletModalToggle = () => {
  const { visible, setVisible } = useWalletModal(); // Access wallet modal state and toggle function

  return (
    <div>
      <h3>Wallet Modal State</h3>
      {/* Display the current state of the wallet modal */}
      <p>The wallet modal is currently: {visible ? "Visible" : "Hidden"}</p>
      {/* Toggle button to show or hide the modal */}
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Wallet Modal" : "Show Wallet Modal"}
      </button>
    </div>
  );
};

export default WalletModalToggle;
```
