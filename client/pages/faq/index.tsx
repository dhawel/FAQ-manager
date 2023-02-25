import { GetStaticPaths, GetStaticProps } from "next";
import SearchButton from "@/components/SearchButton";
import SearchBox from "@/components/SearchBox";
const Faq = () => {
  return (
    <>
    <SearchBox/>
    <SearchButton/>
    </>
  )
};

export default Faq;
