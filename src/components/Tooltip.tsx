import React from "react";
import { TooltipTypes } from "../types";
import { connect, ConnectedProps } from "react-redux";
import { changeTool } from "../store/actions/tooltipActions";

const connector = connect();
type PropsFromRedux = ConnectedProps<typeof connector>;

type TooltipProps = PropsFromRedux & {
  hoverColor: string;
};

function Tooltip(props: TooltipProps) {
  const { dispatch } = props;
  const handleClick = () => {
    dispatch(changeTool(TooltipTypes.CLEAR));
    console.log("Changed tool");
  };

  return (
    <div>
      <button onClick={handleClick}>Change tool</button>
    </div>
  );
}

export default connector(Tooltip);
