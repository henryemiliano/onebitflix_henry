import Head from "next/head";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth/index";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import styles from "@/styles/HomeNotAuth.module.scss";

const HomeNotAuth = () => {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil"
        />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
      </main>
    </>
  );
};

export default HomeNotAuth;
