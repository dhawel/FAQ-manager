import { GetStaticPaths, GetStaticProps } from "next";
import SearchButton from "@/components/SearchButton";
// import SearchBox from "@/components/SearchBox";
import FaqTable from "@/components/FaqTable"
import styles from '@/styles/Myfaq.module.css'
const Faq = () => {
  return (
    <>

    {/* <SearchButton/> */}
    <div className={styles.container}>
     <div className={styles.header} >
        <h2  className={styles.tittle} >FAQ Manger - iLabs </h2>
        <div className={styles.modal}>Add New question</div>
     </div>
     <div className={styles.search} >
        <div className={styles.searchbox}></div>
        <div className={styles.searchbutton}></div>
     </div>
     <div className={styles.table} >
        <FaqTable/>
     </div>
     <div className={styles.footer} >
       footer
     </div>
    </div>

    </>
  )
};

export default Faq;
