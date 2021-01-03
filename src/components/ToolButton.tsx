import React from "react";

type ToolButtonProps = {
  iconUrl: string;
  label: string;
  width: number;
};

function ToolButton(props: ToolButtonProps) {
  const { iconUrl, label, width } = props;
  return (
    <button className="flex flex-col justify-center mb-3 min-w-full hover:bg-yellow-200">
      <img className="m-auto" src={iconUrl} alt={label} width={width} />
      <span className="m-auto text-base">{label}</span>
    </button>
  );
}

export default ToolButton;
