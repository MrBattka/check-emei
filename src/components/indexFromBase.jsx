import React from "react";
import style from "./indexPicrFromBase.module.css";
import ReturnNotDoubleSN from "./returnNotDoubleSN/ReturnNotDoubleSN";

const IndexFromBase = ({ handleImportFromBase, dataFromPhotoChange, dataBase }) => {
  

  return (
    <div className={style.wrapper}>
      <div className={style.flexbox}>
        <div className={style.wrapper_control}>
          <div>
            <div className={style.row}>
              <div>
                <div className={style.input_group}>
                  <div className={style.custom_file}>
                    <label for="inputGroupFile" className={style.custom_file_upload}>
                      Select File...
                    </label>
                    <input
                      type="file"
                      name="file"
                      className={style.custom_file_input}
                      id="inputGroupFile"
                      required
                      onChange={handleImportFromBase}
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    />
                  </div>
                </div>
              </div>
              <div>
                <ReturnNotDoubleSN dataFromPhotoChange={dataFromPhotoChange} dataBase={dataBase} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.wrapper_cat}>
      </div>
    </div>
  );
};

export default IndexFromBase;