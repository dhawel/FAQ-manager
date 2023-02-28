import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Faq from "@/pages/faq";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
describe("Faq", () => {
  const mockFaq = {
    faqs: [
      {
        _id: 1,
        question: "Question 1",
        category: "Account",
        status: "Draft",
      },
      {
        _id: 2,
        question: "Question 2",
        category: "Account",
        status: "Draft",
      },
    ],
  };

  it("renders the Faq component with a title", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Faq faq={mockFaq} />
      </Provider>
    );

    // Check that the title is rendered
    expect(getByText(/FAQ Manger - iLabs/i)).toBeInTheDocument();
  });
});
