import { configureStore } from "@reduxjs/toolkit";
import zipCodeSlice from "./zipInformation/ZipCodeSlice";

export const store = configureStore({

    reducer:{
        zipCodeData:zipCodeSlice,
    }
})