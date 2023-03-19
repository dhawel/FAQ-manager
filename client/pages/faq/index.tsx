// import SearchBox from "@/components/SearchBox";
import AddQuestion from "@/components/AddQuestion";
import FaqTable from "@/components/FaqTable";
import Footer from "@/components/Layout/Footer";
import Search from "@/components/Search";
import styles from "@/styles/Faq.module.css";
//Redux
import { fetchFaqs } from "@/redux/slices/faqSlice";
import { AppState, wrapper } from "@/redux/store";

import { NextPage } from "next";
import { connect } from "react-redux";

const Faq: NextPage<AppState> = (props) => {
  const ariaLabel = { "aria-label": "description" };

  return (
    <>
      {/* <SearchButton/> */}
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.tittle}>FAQ Manger - Acme </h2>
          <div className={styles.modal}>
            <AddQuestion />
          </div>
        </div>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.table}>
          <FaqTable faqs={props.faq.faqs} />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const serverState = await store.dispatch(fetchFaqs());

      return {
        props: {
          faqsServer: serverState.payload,
        },
      };
    }
);
// export default Faq;
export default connect((state: AppState) => state)(Faq);
