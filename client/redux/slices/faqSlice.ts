import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import { RootState } from "../hooks";

type Question = {

  question: string;
  catagory: string;
  status: string;
};

interface QuestionState {
  questions: Array<Question>;
  loading:boolean
}

export const postQuestion  = createAsyncThunk(
    'questions/addQuestion',
    async (question:Question, { rejectWithValue }) => {
      try {
        const response = await fetch(
          'https://faq-manager-production.up.railway.app/questions',
          {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const data = await response.json()
        return data
      } catch (err) {
        // You can choose to use the message attached to err or write a custom error
        return rejectWithValue('Opps there seems to be an error')
      }
    }
  )


const initialState: QuestionState = {
  questions: [

  ],
  loading:true

};

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Do something while pending if you want.
        builder.addCase(postQuestion.pending, (state, action) => {

        })
        // Do something when passes.
        builder.addCase(postQuestion.fulfilled, (state, action) => {

            state.questions.push(action.payload)

        })
        // Do something if fails.
        builder.addCase(postQuestion.rejected, (state, action) => {
            // console.log(action.payload)
        })
    },
});



export default questionSlice.reducer;
