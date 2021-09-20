import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export type SelectedUser = {
    selectedUser:{
        name: string;
        personal_note: string;
        profile_image?: string;
    }
};
const initialState: SelectedUser ={
    selectedUser:{
        name: '',
        personal_note: '',
        profile_image:'',
    }
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setSelectedUser(state, action: PayloadAction<SelectedUser>){
            state.selectedUser = action.payload.selectedUser;
        },
    }
})

export const selectedUserSelector = (state:RootState)=>state.user.selectedUser;

export const {setSelectedUser} =  userSlice.actions;
export default userSlice.reducer;
