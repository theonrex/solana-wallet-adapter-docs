import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import HomepageWallets from "@site/src/components/SupportedWallets";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          Solana Wallet Adapter+{" "}
        </Heading>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={styles.intro_link} to="/docs/intro">
            View the Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageInfo() {
  return (
    <div className={styles.HomepageInfo}>
      <p>
        <b> SolanaWalletAdapter+</b> is an open-source project designed to
        enhance the official Solana Wallet Adapter, simplifying integration and
        improving functionality for developers. Whether you’re building
        decentralized applications (dApps), marketplaces, or other blockchain
        solutions, this project streamlines connecting Solana wallets to your
        web apps with enhanced features and better user experience.
      </p>{" "}
    </div>
  );
}
function HomepageWalletImage() {
  return (
    <div className={`container ${styles.HomepageWalletImage} `}>
      <div className={styles.wallet_image}>
        <img src="/img/wallets.png" alt="" />
      </div>{" "}
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="SolanaWalletAdapter+ is an open-source project designed to enhance the official Solana Wallet Adapte"
    >
      <HomepageHeader />
      <main className="container">
        <HomepageWalletImage />
        <HomepageInfo />
        <HomepageFeatures />
        <HomepageWallets />
      </main>
    </Layout>
  );
}
