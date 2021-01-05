import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { expandGrid, shrinkGrid, solveGrid } from "../store/actions/gridActions";
import { resetFlags } from "../store/actions/flagActions";

// Connect Redux
const mapStateToProps = (state: RootState) => ({
  grid: state.grid,
  flagLocations: state.flagLocations,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type SliderProps = PropsFromRedux;

function Slider(props: SliderProps) {
  const { grid, flagLocations, dispatch } = props;

  const handleDecrement = () => {
    dispatch(shrinkGrid());
    dispatch(resetFlags());
  };

  const handleIncrement = () => {
    dispatch(expandGrid());
    dispatch(resetFlags());
  };

  const handleSolve = () => {
    if (flagLocations.length !== 2) {
      console.log("Not enough flags on the board");
      return;
    }

    const start = flagLocations[0];
    const end = flagLocations[1];
    dispatch(solveGrid(start, end));
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="bg-gray-50 flex p-2">
        <button className="rounded w-6 bg-red-400 mx-2" onClick={handleDecrement}>
          -
        </button>
        <p className="text-lg">
          {grid.length}x{grid.length}
        </p>
        <button className="rounded w-6 bg-red-400 mx-2" onClick={handleIncrement}>
          +
        </button>
      </div>

      <button className="bg-blue-400" onClick={handleSolve}>
        Solve!
      </button>
    </div>
  );
}

export default connector(Slider);
