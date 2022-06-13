import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import {
  createNoteThunk,
  editNoteThunk,
} from "../../redux/thunks/notesThunks/notesThunks";
import { INote } from "../../types/noteInterfaces";
import CreateNoteFormContainer from "./CreateNoteFormStyles";

interface ICreateNoteForm {
  title: string;
  content: string;
  category: string;
}

interface Props {
  noteToEdit: INote | null;
}

const CreateNoteForm = ({ noteToEdit }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialFormValue: ICreateNoteForm = {
    title: noteToEdit ? noteToEdit.title : "",
    content: noteToEdit ? noteToEdit.content : "",
    category: noteToEdit ? noteToEdit.category : "",
  };

  const [formValues, setFormValues] =
    useState<ICreateNoteForm>(initialFormValue);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  const handleCategoryInputChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setFormValues({
      ...formValues,
      category: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (noteToEdit) {
      dispatch(editNoteThunk(noteToEdit.id, formValues));
      return;
    }
    dispatch(createNoteThunk(formValues));
    setFormValues(initialFormValue);
    navigate("/home");
  };

  return (
    <CreateNoteFormContainer>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field__title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formValues.title}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Title..."
          />
        </div>

        <div className="form-field__category">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            onChange={handleCategoryInputChange}
            defaultValue={noteToEdit ? noteToEdit.category : ""}
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option value="Programming">Programming</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
          </select>
        </div>

        <div className="form-field__content">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={formValues.content}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Content of the note..."
          />
        </div>

        <input
          type="submit"
          value={noteToEdit ? "Modify" : "Create"}
          className="submit-input"
        />
      </form>
    </CreateNoteFormContainer>
  );
};

export default CreateNoteForm;
