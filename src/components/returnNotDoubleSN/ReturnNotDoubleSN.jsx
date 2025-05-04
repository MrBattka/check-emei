import React from "react";
import style from "./ReturnNotDoubleSN.module.css";
import { copyTable } from "../../helpers/copy";

const ReturnNotDoubleSN = ({ dataFromPhotoChange, dataBase }) => {
  const unique = dataFromPhotoChange.filter((a) => dataBase.indexOf(a) == -1);
  console.log(unique);

  return (
    <div>
      {/* <h3
        onClick={() => {
          copyTable();
        }}
      >
        ❐ Copy
      </h3> */}
      <h2 className={style.title}>Устаревшие S/N / IMEI:</h2>
      <p className={style.p}>
        {unique.map((el) => (
          <div>{el}</div>
        ))}
      </p>
    </div>
  );
};

export default ReturnNotDoubleSN;
