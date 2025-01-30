import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../redux/filter/slice";
import { selectFilterValue } from "../../redux/filter/selectors";

import style from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        id="search"
        className={style.input}
        type="text"
        name="search"
        value={filter}
        onChange={(event) => dispatch(setFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
