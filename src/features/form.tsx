import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export type SubmittedUser = {
    submittedUser:{
        name: string;
        personal_note: string;
        profile_image?: string;
    }
};
const initialState: SubmittedUser ={
    submittedUser:{
        name: '',
        personal_note: '',
        profile_image:'',
    }
}
const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        submitUser(state, action: PayloadAction<SubmittedUser>){
            state.submittedUser = action.payload.submittedUser;
        },
    }
})

export const submittedUserSelector = (state:RootState)=>state.form.submittedUser;

export const {submitUser} =  formSlice.actions;
export default formSlice.reducer;
