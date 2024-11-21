---
sidebar_position: 3
---

# Connect Button

## Using and customising the ConnectButton

This is the main component. It is responsible for rendering the connect/disconnect button, as well as chain-swapping UI.

``` tsx
"use client";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
export default function page() {

  return (
    <div>
      <WalletMultiButton />
    </div>
  );
}



```


## Examples

## Add Label
Use the label prop to set a custom ConnectButton text.

```tsx

"use client";

import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Page() {
  const { connected } = useWallet();

  return (
    <div>
      <WalletMultiButton>
        {!connected ? "Click to Connect" : undefined}
      </WalletMultiButton>
    </div>
  );
}


```