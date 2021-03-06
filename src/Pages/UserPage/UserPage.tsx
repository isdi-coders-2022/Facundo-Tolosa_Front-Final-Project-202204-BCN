import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import NotePreviewList from "../../Components/NotePreviewList/NotePreviewList";
import UserCard from "../../Components/UserCard/UserCard";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getUserThunk } from "../../redux/thunks/userThunks/userThunks";
import UserPageContainer from "./UserPageStyles";

const UserPage = () => {
  const { username } = useParams();
  const dispatch = useAppDispatch();
  const { notesToShow, userToShow } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getUserThunk(username as string));
  }, [dispatch, username]);

  return (
    <>
      <Header />
      <UserPageContainer>
        <UserCard user={userToShow} />
        <NotePreviewList notesToShow={notesToShow} />
      </UserPageContainer>
    </>
  );
};

export default UserPage;
