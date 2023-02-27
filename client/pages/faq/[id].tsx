import { GetServerSideProps } from "next";

interface Props {
  data: string;
}
const SingleFaq = (props: Props) => {
  return <div>dynamic page {props.data}</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;

  // fetch data based on the faq id
  //   const data = await fetchData(id);
  return {
    props: {
      data: "hi dynamic",
    },
  };
};

export default SingleFaq;
