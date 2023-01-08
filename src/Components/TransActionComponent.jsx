import { useState, useEffect } from "react";
const TransActionComponent = ({ transAction }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transAction);
  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    FilteredTransAction(e.target.value);
  };
  const FilteredTransAction = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transAction);
      return;
    }

    const filteredItem = transAction.filter((t) =>
      t.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filteredItem);
  };
  useEffect(() => {
    FilteredTransAction(searchItem);
  }, [transAction]);
  if (!transAction.length) return <h3>add some transaction...</h3>;
  return (
    <section>
      <input
        placeholder="search for transaction..."
        value={searchItem}
        onChange={searchHandler}
        type="search"
        className="search"
      />
      {filteredTnx.length > 0
        ? filteredTnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span> {t.description}</span>
              <span> {t.amount} $</span>
            </div>
          ))
        : "no item matchs  !!"}
    </section>
  );
};

export default TransActionComponent;
