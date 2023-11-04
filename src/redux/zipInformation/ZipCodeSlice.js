import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    zipCodeData:{
        isLoading:false,
        data:null,
        isError:false
    },
}

export const  fetchZipCodeData = createAsyncThunk('fetchZipCodeData', async (zipcode) =>{
    const res = await axios.get(`https://api.zippopotam.us/in/${zipcode}`)
    return res.data
} )

export const zipCodeSlice = createSlice({
    name:"zipCodeData",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchZipCodeData.pending, (state,action)=>{
          state.zipCodeData.isLoading=true
          // console.log("pending")
      })
      builder.addCase(fetchZipCodeData.fulfilled, (state,action)=>{
        state.zipCodeData.isLoading=false
        state.zipCodeData.isError=false
        state.zipCodeData.data=action.payload
        // console.log("sucessfull")
      })
      builder.addCase(fetchZipCodeData.rejected, (state,action)=>{
        state.zipCodeData.isError=true
        // console.log("error")
      })
    },

    reducers:{
      clearData:(state,action)=>{
         state.zipCodeData.isLoading=false
         state.zipCodeData.data=null
         state.zipCodeData.isError=false
      }
    }
})

export const {clearData} = zipCodeSlice.actions

export default zipCodeSlice.reducer