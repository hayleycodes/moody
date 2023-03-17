import React, { useEffect, useState } from "react";
import "./App.scss";
import Grid from "./components/Grid/Grid";

function App() {
  const [selectedMoods, setSelectedMoods] = useState(Array<any>);
  const [averageMood, setAverageMood] = useState({
    rowNumber: -1,
    columnNumber: -1,
  });

  let selectMood = (
    text: string,
    rowNumber: number,
    columnNumber: number
  ): void => {
    const newSelectedMoods = [
      ...selectedMoods,
      { text: text, rowNumber: rowNumber, columnNumber: columnNumber },
    ];
    setSelectedMoods(newSelectedMoods);
  };

  useEffect(() => {
    let averageRow = 0;
    let averageColumn = 0;
    console.log(selectedMoods);
    selectedMoods.map((mood: any) => {
      // averageRow = averageRow
      //   ? mood.rowNumber
      //     ? averageRow + mood.rowNumber
      //     : averageRow
      //   : mood.rowNumber;

      averageRow = mood.rowNumber ? averageRow + mood.rowNumber : averageRow;
      averageColumn = mood.columnNumber
        ? averageColumn + mood.columnNumber
        : averageColumn;
      return mood;
    });
    averageRow = Math.round(averageRow / selectedMoods.length);
    averageColumn = Math.round(averageColumn / selectedMoods.length);

    setAverageMood({ rowNumber: averageRow, columnNumber: averageColumn });
  }, [selectedMoods]);

  return (
    <div className="App">
      <h1>Moody</h1>
      <Grid selectMood={selectMood} averageMood={averageMood} />
    </div>
  );
}

export default App;
