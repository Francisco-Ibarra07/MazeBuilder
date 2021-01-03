import React from "react";

type ToolButtonProps = {
  iconUrl: string;
  label: string;
  width: number;
};

function ToolButton(props: ToolButtonProps) {
  const { iconUrl, label, width } = props;
  return (
    <button className="flex flex-col min-w-full m-1 hover:bg-yellow-200">
      <img className="ml-4" src={iconUrl} alt={label} width={width} />
      <span>{label}</span>
    </button>
  );
}

export default ToolButton;
