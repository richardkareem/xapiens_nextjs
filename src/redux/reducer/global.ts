import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateResponse } from "../../types/global.type";

type InitialProps = {
    datas: CreateResponse[]
}

const initialState : InitialProps = {
    datas:[]
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers:{
        saveData: (state, actions: PayloadAction<CreateResponse[]>) =>{
            state.datas = actions.payload
        }
    },
})

export const {saveData} = globalSlice.actions;
export default globalSlice.reducer