import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../redux/filter/slice";
import { selectFilterValue } from "../../redux/filter/selectors";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className="flex mb-12 gap-10">
      <div className="flex flex-col max-w-[350px] w-full">
        <label className="text-[20px] mb-1 text-accent" htmlFor="search">
          Find contacts
        </label>
        <label className="input text-accent">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Search"
            className="h-9 rounded-[5px] text-lg"
            value={filter}
            onChange={(event) => dispatch(setFilter(event.target.value))}
          />
        </label>
      </div>
      <p className="self-end text-accent">Total contacts: {filteredContacts.length}</p>
    </div>
  );
};

export default SearchBox;
