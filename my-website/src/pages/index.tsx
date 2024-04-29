import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';


import styles from './index.module.css';



function HomepageHeader() {
  //const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading> */}
        <p className="hero__subtitle">
          {
          "Hello! Welcome to the DAV IP Catalog. Here, you’ll find modules designed by past DAV students for a variety of applications. Any module published on this website is available to you to use for your own DAV capstone or any other Verilog project. Happy coding :-)"
          }</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`DAV IP Catalog}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main >
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
