import { moods } from "../../moods";
import "./Grid.scss";
import Cell from "../Cell/Cell";

type GridProps = {
  selectMood: (text: string, x: number, y: number) => void;
  averageMood: { rowNumber: number; columnNumber: number };
};

const Grid = ({ selectMood, averageMood }: GridProps) => {
  const cell = (
    moodText: string,
    moodColour: string,
    selectMood: (text: string, x: number, y: number) => void,
    rowNumber: number,
    index: number
  ) => {
    let cellClass = "";
    if (
      averageMood.rowNumber === rowNumber &&
      averageMood.columnNumber === index
    ) {
      cellClass = "average-mood";
    }
    return (
      <Cell
        moodText={moodText}
        moodColour={moodColour}
        selectMood={selectMood}
        rowNumber={rowNumber}
        columnNumber={index}
        key={index}
        cellClass={cellClass}
      />
    );
  };

  const gridRow = (row: any, rowNumber: number) => {
    return (
      <div className="row" key={rowNumber}>
        {row.map((mood_data: any, index: number) =>
          cell(mood_data[0], mood_data[1], selectMood, rowNumber, index)
        )}
      </div>
    );
  };

  return (
    <div className="grid">{moods.map((row, index) => gridRow(row, index))}</div>
  );
};

export default Grid;
