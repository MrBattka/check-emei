import React, { useState } from "react";
import { read, utils } from "xlsx";
import "./App.css";
import IndexFromBase from "./components/indexFromBase";
import icon from "./source/icon/icon.png";

function App() {

  const [dataBase, setDataBase] = useState([]);
  const [dataFromPhotoChange, setDataFromPhotoChange] = useState([]);

  const base = [];
  const middle = []
  const middle2 = []
  const fromChanel = [];

  dataBase.map((baseEl) => {
    baseEl.Наименование &&
      baseEl.Наименование.length > 7 &&
      typeof baseEl.Наименование === "string" &&
      middle2.push(baseEl.Штрих);
  });

  middle2.map((m2El) => {
    const newName = m2El[0] === "S" ? m2El.substring(1) : m2El
    base.push(newName)
  })

  
  

  dataFromPhotoChange.map((fromChanelEl) => {
    fromChanelEl.Used &&
      fromChanelEl.Used.length > 3 &&
      fromChanelEl.Used.indexOf("S/N / IMEI: ") !== -1 &&
      typeof fromChanelEl.Used === "string" &&
      middle.push(fromChanelEl.Used);
  });

  middle.map((mEl) => {
    const removeSN = mEl.indexOf("S/N / IMEI: ") !== -1 ? mEl.replace("S/N / IMEI: ", "") : mEl
    const removeSpaces = removeSN.replace(/\s/g, "")
    fromChanel.push(removeSpaces)
  })

  const deleteDoubleProduct = base.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.place === value.place && t.name === value.name)
  );

  const handleImportFromBase = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const baseRows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setDataBase(baseRows);
          const fromChanelRows = utils.sheet_to_json(wb.Sheets[sheets[1]]);
          setDataFromPhotoChange(fromChanelRows);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="App">

      <img className="img" src={icon} alt="Not found" />

      <IndexFromBase
        handleImportFromBase={handleImportFromBase}
        dataFromPhotoChange={fromChanel}
        dataBase={base}
      />
    </div>
  );
}

export default App;
