import {createSlice} from '@reduxjs/toolkit';

export interface AuthReducerProps {
  isLoggedIn: boolean;
  user: any; //TODO: Change it to the User type
}

const initialObj: AuthReducerProps = {
  isLoggedIn: false,
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState: initialObj,
  reducers: {
    loginReducer: (state, {payload}) => {
      state.isLoggedIn = true;
      state.user = payload;
    },
    logoutReducer: state => {
      state.isLoggedIn = false;
      state.user = null;
    },
    updateProfileReducer: (state, {payload}) => {
      state.user = {...state.user, ...payload};
    },
  },
});

export const {loginReducer, logoutReducer, updateProfileReducer} =
  slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.user?.access_token;




/**
 * @Redux : Central Global State Manager
 * @Redux Toolkit : Official Redux Toolkit
 * @Redux Persist : To Persist the Redux State
 * 
 * @Action : A function that returns an object with a type property
 * @Dispatcher : A function that dispatches an action
 * @Reducer : A function that returns a new state
 * 
 * @Example : 
 * change the login state to loggedIn---> loginAction :  {type : "login", payload : {user : {name : "John"}}}
 * dispatch the action ---> dispatch(loginAction)
 * change the state in the reducer ---> loginReducer : (state, {payload}) => {state.isLoggedIn = true; state.user = payload}
 * 
 * @Side Effects : 
 */
