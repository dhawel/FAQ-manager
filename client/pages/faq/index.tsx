import { GetStaticPaths, GetStaticProps } from "next";
import SearchButton from "@/components/SearchButton";
// import SearchBox from "@/components/SearchBox";
import AddQuestion from "@/components/AddQuestion";
import FaqTable from "@/components/FaqTable";
import styles from "@/styles/Myfaq.module.css";
import Search from "@/components/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Footer from "@/components/Layout/Footer";
//Redux
import { connect } from "react-redux";
import { wrapper, State } from "@/redux/store";
import { fetchFaqs } from "@/redux/slices/faqSlice";

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
          <Search/>
          
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
