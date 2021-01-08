import { Location } from "../../types";
import { ADD_FLAG, REMOVE_FLAG, RESET_FLAGS, FlagActionTypes } from "../actions/flagActions";

const initialState: Location[] = [];

const flagReducer = (state = initialState, action: FlagActionTypes) => {
  switch (action.type) {
    case ADD_FLAG:
      const newFlagLoc = action.payload;
      state.push(newFlagLoc);
      return [...state];

    case REMOVE_FLAG:
      const targetFlag = action.payload;
      let targetIndex = -1;
      state.forEach((element, index) => {
        if (element.row === targetFlag.row && element.col === targetFlag.col) {
          targetIndex = index;
        }
      });
      state.splice(targetIndex, 1);
      return [...state];

    case RESET_FLAGS:
      return [];

    default:
      return state;
  }
};

export default flagReducer;
