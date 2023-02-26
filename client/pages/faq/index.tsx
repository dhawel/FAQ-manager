import { GetStaticPaths, GetStaticProps } from "next";
import SearchButton from "@/components/SearchButton";
// import SearchBox from "@/components/SearchBox";
import AddQuestion from "@/components/AddQuestion";
import FaqTable from "@/components/FaqTable"
import styles from '@/styles/Myfaq.module.css'
import {connect} from 'react-redux';
import { wrapper,State } from "@/redux/store";
import { fetchFaqs } from "@/redux/slices/faqSlicenew";
const Faq = ({faq}) => {
  console.log("props",faq.faqs);
  return (
    <>

    {/* <SearchButton/> */}
    <div className={styles.container}>
     <div className={styles.header} >
        <h2  className={styles.tittle} >FAQ Manger - iLabs </h2>
        <div className={styles.modal}>
            <AddQuestion/>
        </div>
     </div>
     <div className={styles.search} >
        <div className={styles.searchbox}></div>
        <div className={styles.searchbutton}></div>
     </div>
     <div className={styles.table} >
        <FaqTable faqs={faq.faqs}/>
     </div>
     <div className={styles.footer} >
       footer
     </div>
    </div>

    </>
  )
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(fetchFaqs());
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);
// export default Faq;
export default connect((state: State) => state)(Faq);