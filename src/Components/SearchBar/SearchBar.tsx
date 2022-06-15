import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setNotesToShowActionCreator } from "../../redux/features/notesSlice/notesSlice";

const SearchBarContainer = styled.div`
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

const SearchBar = (): JSX.Element => {
  const initialFormValue = {
    search: "",
  };

  const dispatch = useAppDispatch();
  const { allNotes } = useAppSelector((state) => state.notes);

  const [formValues, setFormValues] = useState(initialFormValue);

  useEffect(() => {
    let notesToShow = allNotes.filter((note) =>
      note.title.toLowerCase().includes(formValues.search.toLowerCase())
    );

    if (!formValues.search) {
      notesToShow = allNotes;
    }

    dispatch(setNotesToShowActionCreator(notesToShow));
  }, [allNotes, dispatch, formValues.search]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <SearchBarContainer>
      <div className="form-field">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          value={formValues.search}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Search..."
        />
      </div>
      <img src="/images/icons8-búsqueda-24.png" alt="lupa" />
    </SearchBarContainer>
  );
};

export default SearchBar;
