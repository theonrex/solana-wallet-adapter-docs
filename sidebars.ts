import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Overview",
      items: ["Overview/installation", "Overview/getting-started"],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        "API Reference/ConnectionProvider",
        "API Reference/WalletModalProvider",
        "API Reference/walletProvider",
      ],
    },
    {
      type: "category",
      label: "Wallet Integration",
      items: [
        "Wallet Integration/allwallets",
        "Wallet Integration/connect-button",
        "Wallet Integration/switch-wallet",
        "Wallet Integration/wallet-info",
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        "examples/connectAndDiscconct",
        "examples/customWalletButton",
        "examples/getSolanaNetwork",
        "examples/showWalletModa",
        "examples/supportedWallet",
        "examples/walletBlance",
        "examples/walletConnectionState",
      ],
    },
    {
      type: "category",
      label: "Demos",
      items: ["Demos/connectWallet"],
    },
  ],
};

export default sidebars;
