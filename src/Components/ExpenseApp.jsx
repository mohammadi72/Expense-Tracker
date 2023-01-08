import { useState } from "react";
import TransActionComponent from "./TransActionComponent";
import OverViweComponent from "./OverViweComponenet";
import { useEffect } from "react";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);
  const addTransaction = (formValue) => {
    const date = { ...formValue, id: Date.now() };
    setTransAction([...transAction, date]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;

    transAction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transAction]);
  return (
    <section className="container">
      <OverViweComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransActionComponent transAction={transAction} />
    </section>
  );
};

export default ExpenseApp;
