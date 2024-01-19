import { createAppSlice } from "../../app/createAppSlice"
import { fetchCount } from "./productAPI"

const initialState = {
  value: 0,
  status: "idle",
}

export const counterSlice = createAppSlice({
  name: "counter",
  initialState,
  reducers: create => ({
    increment: create.reducer(state => {
      state.value += 1
    }),
    incrementAsync: create.asyncThunk(
      'Counter/fetchCount',
      async amount => {
        const response = await fetchCount(amount)
        return response.data
      }
    ),
    extraReducers:(builder)=>{
      builder
      .addCase(incrementAsync.pending,(state)=>{
        state.status='loading';
      })
      .addCase(incrementAsync.fulfilled,(state)=>{
        state.status='idle';
        state.value+=action.payload;
      })
    }
  }),
  selectors: {
    selectCount: counter => counter.value,
    selectStatus: counter => counter.status,
  },
})

export const { decrement, increment, incrementAsync } =
  counterSlice.actions

export const { selectCount, selectStatus } = counterSlice.selectors

export default counterSlice.reducer;