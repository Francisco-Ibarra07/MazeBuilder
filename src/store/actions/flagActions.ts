import { Location } from "../../types";

export const ADD_FLAG = "ADD_FLAG";
export const REMOVE_FLAG = "REMOVE_FLAG";
export const RESET_FLAGS = "RESET_FLAGS";

interface AddFlagAction {
  type: typeof ADD_FLAG;
  payload: Location;
}

interface RemoveFlagAction {
  type: typeof REMOVE_FLAG;
  payload: Location;
}

interface ResetFlagsAction {
  type: typeof RESET_FLAGS;
}

export function addFlag(newFlagLocation: Location): FlagActionTypes {
  return {
    type: ADD_FLAG,
    payload: newFlagLocation,
  };
}

export function removeFlag(target: Location): FlagActionTypes {
  return {
    type: REMOVE_FLAG,
    payload: target,
  };
}
export function resetFlags(): FlagActionTypes {
  return {
    type: RESET_FLAGS,
  };
}

export type FlagActionTypes = AddFlagAction | RemoveFlagAction | ResetFlagsAction;
