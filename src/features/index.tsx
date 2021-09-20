import { combineReducers } from "@reduxjs/toolkit";
import formReducer from './form';
import userReducer from './user';

export const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer
});

export type RootState= ReturnType<typeof rootReducer>;
