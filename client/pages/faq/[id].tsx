import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { GetServerSideProps } from "next";
import * as React from "react";
interface Props {
  data: {
    question: string;
    category: string;
    status: string;
  };
}
const SingleFaq = (props: Props) => {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Card
          variant="outlined"
          sx={{ minWidth: 275, maxWidth: 400, color: "black" }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {props.data.question}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.data.category}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const BASE_URL = process.env.BASE_URL;
  // fetch data based on the faq id
  const response = await axios.get(`${BASE_URL}/faqs/${id}`);

  const data = response.data;
  

  // Pass data to the page via props
  return { props: { data } };
};

export default SingleFaq;
