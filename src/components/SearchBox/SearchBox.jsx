import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../redux/filter/slice";
import { selectFilterValue } from "../../redux/filter/selectors";
import { selectContacts } from "../../redux/contacts/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);
  const contacts = useSelector(selectContacts);

  return (
    <div className="flex mb-12 gap-10">
      <div className="flex flex-col max-w-[350px] w-full">
        <label className="text-[20px] mb-1" htmlFor="search">
          Find contacts by name
        </label>
        <input
          id="search"
          className="h-9 rounded-[5px] border-2 border-solid border-[#b3b3b3] px-4 py-2 text-lg bg-[bisque] transition-colors focus:border-black focus:bg-[#ffc181]"
          type="text"
          name="search"
          value={filter}
          onChange={(event) => dispatch(setFilter(event.target.value))}
        />
      </div>
      <p className="self-end">Total conatcts: {contacts.length}</p>
    </div>
  );
};

export default SearchBox;
