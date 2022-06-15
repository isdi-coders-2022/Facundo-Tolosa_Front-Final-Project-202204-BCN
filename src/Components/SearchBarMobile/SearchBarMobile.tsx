import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  setFilterActionCreator,
  setNotesToShowActionCreator,
} from "../../redux/features/notesSlice/notesSlice";

const SearchBarMobileContainer = styled.div`
  width: 200px;
  height: 50px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
  font-family: "Koulen";
  z-index: 20;
  justify-content: space-around;
  margin-top: 10px;

  img {
    height: 24px;
    width: 24px;
  }

  label {
    display: none;
  }

  input {
    height: 20px;
    width: 105px;
    border: none;
    margin-left: 2px;
  }

  input:focus {
    outline: none;
  }

  @media (min-width: 600px) {
    display: contents;
    width: 150px;
    height: 30px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: white;
    font-family: "Koulen";
    z-index: 20;
    justify-content: space-around;
    margin-top: 0px;

    img {
      height: 24px;
      width: 24px;
    }

    label {
      display: none;
    }

    input {
      height: 20px;
      width: 105px;
      border: none;
      margin-left: 2px;
    }

    input:focus {
      outline: none;
    }
  }
`;

const SearchBarMobile = (): JSX.Element => {
  const initialFormValue = {
    search: "",
  };

  const dispatch = useAppDispatch();
  const { allNotes } = useAppSelector((state) => state.notes);

  const [formValues, setFormValues] = useState(initialFormValue);

  useEffect(() => {
    const notesToShow = allNotes.filter((note) =>
      note.title.toLowerCase().includes(formValues.search.toLowerCase())
    );

    if (!formValues.search) {
      dispatch(setFilterActionCreator("none"));
      return;
    }

    dispatch(setNotesToShowActionCreator(notesToShow));
  }, [allNotes, dispatch, formValues.search]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      search: event.target.value,
    });
  };

  return (
    <SearchBarMobileContainer>
      <div className="form-field">
        <label htmlFor="search-mobile">Search</label>
        <input
          type="text"
          id="search-mobile"
          value={formValues.search}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Search..."
        />
      </div>
      <img src="/images/icons8-búsqueda-24.png" alt="lupa" />
    </SearchBarMobileContainer>
  );
};

export default SearchBarMobile;
