import React, { useState } from "react";
import "./Cell.scss";

type CellProps = {
  moodText: string;
  moodColour: string;
  selectMood: (text: string, rowNumber: number, columnNumber: number) => void;
  rowNumber: number;
  columnNumber: number;
  cellClass: string;
};

const Cell = ({
  moodText,
  moodColour,
  selectMood,
  rowNumber,
  columnNumber,
  cellClass,
}: CellProps) => {
  const [isSelected, setIsSelected] = useState("");

  const inlineStyles = {
    backgroundColor: moodColour,
    "&:hover": {
      backgroundColor: "white",
    },
  };

  const handleClick = () => {
    setIsSelected("selected");
    selectMood(moodText, rowNumber, columnNumber);
  };

  return (
    <button
      type="button"
      className={`cell ${cellClass} ${isSelected}`}
      style={inlineStyles}
      onClick={handleClick}
    >
      {moodText}
    </button>
  );
};

export default Cell;
