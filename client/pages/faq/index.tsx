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
import { fetchFaqs } from "@/redux/slices/faqSlicenew";

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
          <div className={styles.searchbox}>
            {/* <TextField
                id="outlined-search"
                fullWidth
                label="Search"
                type="search"
                sx={{ fontSize: 12 ,height:30 }}
              /> */}
            <input type="text" placeholder="Search.." name="search"></input>
            {/* <Input defaultValue="Hello world" inputProps={ariaLabel} /> */}
          </div>
          <div className={styles.searchbutton}>
            <Button
              fullWidth
              sx={{
                fontSize: 12,
                height: 50,
                backgroundColor: "rgb(63, 81, 181) ",
              }}
              variant="contained"
              size="medium"
            >
              Search
            </Button>
          </div>
        </div>
        <div className={styles.table}>
          <FaqTable faqs={faq.faqs} />
        </div>
        <div className={styles.footer}>
          <Footer/>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(fetchFaqs());
      // console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);
// export default Faq;
export default connect((state: State) => state)(Faq);
