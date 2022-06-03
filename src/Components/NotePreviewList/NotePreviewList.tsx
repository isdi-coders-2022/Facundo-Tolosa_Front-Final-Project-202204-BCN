import styled from "styled-components";
import { useAppSelector } from "../../hooks/hooks";
import NotePreview from "../NotePreview/NotePreview";

const NotePreviewListContainer = styled.div`
  position: absolute;
  top: 100px;
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

const NotePreviewList = () => {
  const { allNotes } = useAppSelector((state) => state.notes);

  return (
    <NotePreviewListContainer>
      <ul>
        {allNotes.map((note, index) => {
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
