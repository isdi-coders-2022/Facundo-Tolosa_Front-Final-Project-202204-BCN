import styled from "styled-components";
import { INote } from "../../types/noteInterfaces";
import NotePreview from "../NotePreview/NotePreview";

const NotePreviewListContainer = styled.div`
  ul {
    width: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    display: inline;
  }
`;

interface Props {
  notesToShow: INote[];
}

const NotePreviewList = ({ notesToShow }: Props) => {
  return (
    <NotePreviewListContainer>
      <ul>
        {notesToShow.map((note, index) => {
          return (
            <li key={index}>
              <NotePreview note={note} />
            </li>
          );
        })}
      </ul>
    </NotePreviewListContainer>
  );
};

export default NotePreviewList;
