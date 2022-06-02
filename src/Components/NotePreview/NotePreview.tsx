import React from "react";
import { INote } from "../../types/noteInterfaces";
import NotePreviewContainer from "./NotePreviewStyles";

interface Props {
  note: INote;
}

const NotePreview = ({
  note: { title, category, author, id, creationDate },
}: Props): JSX.Element => {
  return (
    <NotePreviewContainer>
      <div className="cat-title">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
      </div>
      <div className="user-date">
        <div className="user">
          <img
            src="images/icons8-nombre-de-usuario-50.png"
            alt="user caricature"
          />
          <p>vitorbraz</p>
        </div>
        <p className="date">{`${creationDate}`}</p>
      </div>
    </NotePreviewContainer>
  );
};

export default NotePreview;
