// import SearchBox from "@/components/SearchBox";
import AddQuestion from "@/components/AddQuestion";
import FaqTable from "@/components/FaqTable";
import Footer from "@/components/Layout/Footer";
import Search from "@/components/Search";
import styles from "@/styles/Faq.module.css";
//Redux
import { fetchFaqs } from "@/redux/slices/faqSlice";
import { State, wrapper } from "@/redux/store";
import { connect } from "react-redux";

const Faq = ({ faq }) => {
  const ariaLabel = { "aria-label": "description" };

  return (
    <>
      {/* <SearchButton/> */}
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.tittle}>FAQ Manger - iLabs </h2>
          <div className={styles.modal}>
            <AddQuestion />
          </div>
        </div>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.table}>
          <FaqTable faqs={faq.faqs} />
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
export default connect((state: State) => state)(Faq);
