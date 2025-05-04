import React from "react";
import style from "./ReturnNotDoubleSN.module.css"

const ReturnNotDoubleSN = ({ dataFromPhotoChange, dataBase }) => {
  const unique = dataFromPhotoChange.filter((a) => dataBase.indexOf(a) == -1);

  return (
    <div>
      <h2 className={style.title}>Устаревшие S/N / IMEI:</h2>
      <p className={style.p}>{unique}</p>
    </div>
  );
};

export default ReturnNotDoubleSN;
