import axios from 'axios';

const BASE_URL = 'https://faq-manager-production.up.railway.app'; // Replace with your API server URL

const faqApi = {
  getFaqs: async () => {
    const response = await axios.get(`${BASE_URL}/questions`);
    return response.data;
  },
  postFaq: async (newFaq) => {
    console.log("post hit",newFaq);
    const response = await axios.post(`${BASE_URL}/questions`, newFaq);
    return response.data;
  },
  updateFaq: async (faq) => {
    const response = await axios.put(`${BASE_URL}/questions/${faq._id}`, faq);
    return response.data;
  },
  deleteFaq: async (faqId) => {
    const response = await axios.delete(`${BASE_URL}/questions/${faqId}`);
    return response.data;
  },
};

export default faqApi;
