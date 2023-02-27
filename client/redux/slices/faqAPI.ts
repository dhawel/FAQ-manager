import axios from "axios";

const BASE_URL = process.env.BASE_URL

const faqApi = {
  getFaqs: async () => {
    const response = await axios.get(`${BASE_URL}/faqs`);

    return response.data;
  },
  postFaq: async (newFaq) => {

    const response = await axios.post(`${BASE_URL}/faqs`, newFaq);
    return response.data;
  },
  updateFaq: async (faq) => {
    const response = await axios.put(`${BASE_URL}/faqs/${faq._id}`, faq);
    return response.data;
  },
  deleteFaq: async (faqId) => {
    const response = await axios.delete(`${BASE_URL}/faqs/${faqId}`);
    return response.data;
  },
  searchFaq: async (searchTerm) => {
    const response = await axios.delete(`${BASE_URL}/faqs/search/${searchTerm}`);
    return response.data;
  },
};

export default faqApi;
