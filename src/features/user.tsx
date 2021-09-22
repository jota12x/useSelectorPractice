import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
        changePersonalNote(state, action: PayloadAction<{note:string}>){
            state.selectedUser.personal_note = action.payload.note;
        }
    }
})

export const selectedUserSelector = (state:RootState)=>state.user.selectedUser;
export  const selectedUsernameSelector = createSelector(
    [selectedUserSelector],
    (selectedUser) => {
        // console.log("expensive!");
        return selectedUser.name;
    }
  );

export const {changePersonalNote, setSelectedUser} =  userSlice.actions;
export default userSlice.reducer;

export const usernameBannerSelector = createSelector(
    [selectedUsernameSelector],
    (username)=> {
        console.log("expensive!");
        return `${username} is playing music`;
    }
)
