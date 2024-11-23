import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Enhanced Functionality:",
    img: "https://img.icons8.com/arcade/512/code.png",
    description: (
      <>
        Built on top of the Solana Wallet Adapter to provide a more refined,
        feature-rich experience.
      </>
    ),
  },
  {
    title: "Open-Source:",
    img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-open-source-mobile-app-development-flaticons-lineal-color-flat-icons.png",
    description: (
      <>
        Community-driven and free for anyone to use, modify, and contribute to.
      </>
    ),
  },
  {
    title: "Improved Documentation",
    img: "https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-documentation-agile-flaticons-flat-flat-icons.png",

    description: (
      <>
        Easy-to-follow documentation with clear examples to help you integrate
        wallet support in no time.
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={`col col--4  ${styles.feature_div}`}>
      <div className="text--center">
        <img src={img} alt="" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>Why Solana Wallet Adapter+</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
