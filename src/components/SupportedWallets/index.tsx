import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type WalletItem = {
  title: string;
  img: string;
};

const WalletList: WalletItem[] = [
  { title: "alpha wallet", img: "/img/wallets/alpha.png" },
  { title: "avana", img: "/img/wallets/avana.png" },
  { title: "bitkeep", img: "/img/wallets/bitkeep.jpg" },
  { title: "bitpie", img: "/img/wallets/bitpie.png" },
  { title: "clover", img: "/img/wallets/clover.jpg" },
  { title: "coin98", img: "/img/wallets/coin98.png" },
  { title: "coinbase", img: "/img/wallets/coinbase.png" },
  { title: "coinhub", img: "/img/wallets/coinhub.jpg" },
  { title: "huobi", img: "/img/wallets/huobi.png" },
  { title: "hyperpay", img: "/img/wallets/hyperpay.png" },
  { title: "keystone", img: "/img/wallets/keystone.png" },
  { title: "krystal", img: "/img/wallets/krystal.png" },
  { title: "ledger", img: "/img/wallets/ledger.png" },
  { title: "mathwallet", img: "/img/wallets/mathwallet.png" },
  { title: "neko", img: "/img/wallets/neko.jpg" },
  { title: "nightly", img: "/img/wallets/nightly.png" },
  { title: "nufi", img: "/img/wallets/nufi.png" },
  { title: "onto", img: "/img/wallets/onto.jpg" },
  { title: "particle", img: "/img/wallets/particle.png" },
  { title: "phantomwallet", img: "/img/wallets/phantomwallet.jpg" },
  { title: "safepal", img: "/img/wallets/safepal.png" },
  { title: "saifu wallet", img: "/img/wallets/saifu wallet.png" },
  { title: "salmon", img: "/img/wallets/salmon.jpg" },
  { title: "sky", img: "/img/wallets/sky.png" },
  { title: "solflarewallet", img: "/img/wallets/solflarewallet.png" },
  { title: "spot-wallet", img: "/img/wallets/spot-wallet.png" },
  { title: "tokenary", img: "/img/wallets/tokenary.jpg" },
  { title: "tokenpocket", img: "/img/wallets/tokenpocket.png" },
  { title: "torus", img: "/img/wallets/torus.png" },
  { title: "trezor", img: "/img/wallets/trezor.png" },
  { title: "trust", img: "/img/wallets/trust.jpg" },
  { title: "walletconnect", img: "/img/wallets/walletconnect.png" },
  { title: "wallets", img: "/img/wallets/wallets.png" },
  { title: "rainbowkit", img: "/img/wallets/www.rainbowkit.com_.png" },
  { title: "xdefi", img: "/img/wallets/xdefi.png" },
];

function Feature({ title, img }: WalletItem) {
  return (
    <div className={styles.WalletItem}>
      <img src={img} alt="" />
    </div>
  );
}

export default function HomepageWallets(): JSX.Element {
  return (
    <section className={styles.HomepageWallets}>
      <h2>Supported Wallets</h2>
      <div className={styles.HomepageWallets_row}>
        {WalletList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
