import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { expandGrid, shrinkGrid } from "../store/actions/gridActions";
import { resetFlags } from "../store/actions/flagActions";

// Connect Redux
const mapStateToProps = (state: RootState) => ({
  grid: state.grid,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type SliderProps = PropsFromRedux;

function Slider(props: SliderProps) {
  const { grid, dispatch } = props;

  const handleDecrement = () => {
    dispatch(shrinkGrid());
    dispatch(resetFlags());
  };

  const handleIncrement = () => {
    dispatch(expandGrid());
    dispatch(resetFlags());
  };

  return (
    <div className="flex justify-center">
      <div className="bg-gray-50 flex p-2">
        <button
          className="rounded w-6 bg-red-400 mx-2"
          onClick={handleDecrement}
        >
          -
        </button>
        <p className="text-lg">{grid.length}</p>
        <button
          className="rounded w-6 bg-red-400 mx-2"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default connector(Slider);
