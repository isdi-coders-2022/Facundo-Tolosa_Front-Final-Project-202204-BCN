import React from "react";
import NotePreviewContainer from "./NotePreviewStyles";

// interface Props {
//   note: {
//     title: string;
//     content: string;
//     category: string;
//     author: string;
//     id: string;
//     creationDate: Date;
//   };
// }

const NotePreview = (): JSX.Element => {
  return (
    <NotePreviewContainer>
      <p>Programming</p>
      <p>JavaScript theory</p>
      <p>mariogl84</p>
      <p>2 hours ago</p>
    </NotePreviewContainer>
  );
};

export default NotePreview;
