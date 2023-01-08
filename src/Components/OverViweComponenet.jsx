import { Fragment } from "react";
import { useState } from "react";
import TransActionForm from "./TransActionForm";
const OverViweComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <Fragment>
      <div className="topSection">
        <p>Balance: {income - expense}</p>
        <button
          className={`btn ${isShow && "cancel"}`}
          onClick={() => {
            setIsShow((prevState) => !prevState);
            console.log(isShow);
          }}
        >
          {isShow ? "cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}
      <div className="resultSection">
        <div className="expenseBox">
          expense : <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expenseBox">
          income : <span>{income} $</span>
        </div>
      </div>
    </Fragment>
  );
};

export default OverViweComponent;
