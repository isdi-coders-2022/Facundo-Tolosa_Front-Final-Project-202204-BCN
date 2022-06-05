import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotePreviewList from "../../Components/NotePreviewList/NotePreviewList";
import UserCard from "../../Components/UserCard/UserCard";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { userObjectMock } from "../../mocks/userMocks";
import { getUserThunk } from "../../redux/thunks/userThunks/userThunks";
import UserPageContainer from "./UserPageStyles";

const UserPage = () => {
  const { username } = useParams();
  const dispatch = useAppDispatch();
  const { notesToShow } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getUserThunk(username as string));
  }, [dispatch, username]);

  return (
    <UserPageContainer>
      <UserCard user={userObjectMock} />
      <NotePreviewList notesToShow={notesToShow} />
    </UserPageContainer>
  );
};

export default UserPage;
