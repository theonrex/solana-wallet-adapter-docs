---
sidebar_position: 3
---

# Getting Solana Network Version

This example demonstrates how to fetch the Solana network version using the useConnection hook from @solana/wallet-adapter-react.

```tsx
"use client"; // Enables React Server Components in Next.js

import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

const SolanaNetworkVersion = () => {
  const { connection } = useConnection(); // Access Solana connection
  const [version, setVersion] = useState(null); // State to store the network version

  useEffect(() => {
    (async () => {
      try {
        const versionInfo = await connection.getVersion(); // Fetch Solana network version
        setVersion(versionInfo["solana-core"]); // Update state with the version
      } catch (error) {
        console.error("Failed to fetch Solana network version:", error);
        setVersion("Error fetching version"); // Update state with an error message
      }
    })();
  }, [connection]); // Dependency on the connection object

  return (
    <div>
      {/* Display network version or a loading message */}
      <h3>Solana Network Version</h3>
      <p>{version ? version : "Loading..."}</p>
    </div>
  );
};

export default SolanaNetworkVersion;
```
