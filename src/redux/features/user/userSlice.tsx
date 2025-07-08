import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitializeForUser {
  users: IUser[];
}
const initialState: IInitializeForUser = {
  users: [
    {
      id: "974593927q34",
      name: "Minhaz",
      email: "minhaz@gmail.com",
      password: "q785048502q834",
    },
  ],
};

type DraftUser = Pick<IUser, "name" | "email" | "password">;

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },

    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export default userSlice.reducer;
