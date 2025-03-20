
import { ISettings } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSettingsState {
  userSettings: ISettings | {};
}

const initialState: UserSettingsState = {
  userSettings: {},
};

const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setUserSettings: (state, action: PayloadAction<ISettings>) => {
      state.userSettings = action.payload;
    },
    clearUserSettings: (state) => {
      state.userSettings = {};
    },
  },
});

export const { setUserSettings, clearUserSettings } = userSettingsSlice.actions;
export default userSettingsSlice.reducer;
