import React from "react";
import NotePreviewContainer from "./NotePreviewStyles";

interface Props {
  note: {
    title: string;
    content: string;
    category: string;
    author: string;
    id: string;
    creationDate: Date;
  };
}

const NotePreview = ({
  note: { title, content, category, author, id, creationDate },
}: Props): JSX.Element => {
  return (
    <NotePreviewContainer>
      <div className="cat-title">
        <p className="category">Programming</p>
        <p className="title">JavaScript theory</p>
      </div>
      <div className="user-date">
        <div className="user">
          <img
            src="images/icons8-nombre-de-usuario-50.png"
            alt="user caricature"
          />
          <p>mariogl84</p>
        </div>
        <p className="date">2 hours ago</p>
      </div>
    </NotePreviewContainer>
  );
};

export default NotePreview;
