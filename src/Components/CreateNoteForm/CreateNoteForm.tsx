import React, { ChangeEvent, FormEvent, useState } from "react";
import CreateNoteFormContainer from "./CreateNoteFormStyles";

interface ICreateNoteForm {
  title: string;
  content: string;
  category: string;
}

const CreateNoteForm = (): JSX.Element => {
  const initialFormValue: ICreateNoteForm = {
    title: "",
    content: "",
    category: "",
  };

  const [formValues, setFormValues] =
    useState<ICreateNoteForm>(initialFormValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  const handleContentInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
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
  };

  return (
    <CreateNoteFormContainer>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field__title">
          <label htmlFor="title">Title:</label>
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
          <label htmlFor="cars">Category</label>
          <select
            name="category"
            id="category"
            placeholder="Select a category"
            onChange={handleCategoryInputChange}
            defaultValue={""}
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            <option value="Category 4">Category 4</option>
          </select>
        </div>

        <div className="form-field__content">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={formValues.content}
            onChange={handleContentInputChange}
            autoComplete="off"
            placeholder="Content of the note..."
          />
        </div>

        <input type="submit" value="Create" className="submit-input" />
      </form>
    </CreateNoteFormContainer>
  );
};

export default CreateNoteForm;
