import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setFilterActionCreator } from "../../redux/features/notesSlice/notesSlice";
import FilterContainer from "./FilterStyles";

const Filter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { activeFilter } = useAppSelector((state) => state.notes);

  const setFilter = (category: string) => {
    dispatch(setFilterActionCreator(category));
    window.scrollTo(0, 0);
  };

  return (
    <FilterContainer>
      <div className="filter-container">
        <button className="filter-button">Filter by: {activeFilter}</button>
        <ul className="filter-items">
          <li onClick={() => setFilter("none")}>None</li>
          <li onClick={() => setFilter("Programming")}>Programming</li>
          <li onClick={() => setFilter("Sports")}>Sports</li>
          <li onClick={() => setFilter("Travel")}>Travel</li>
          <li onClick={() => setFilter("Food")}>Food</li>
        </ul>
      </div>
    </FilterContainer>
  );
};

export default Filter;
