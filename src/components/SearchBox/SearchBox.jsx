import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from "../../redux/slices/filterSlice";
import { selectFilter } from "../../redux/slices/selectors";

import style from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

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
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
