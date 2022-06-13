import styled from "styled-components";

const UserPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 85px;
  width: 100%;

  @media (min-width: 600px) {
    top: 125px;
  }
`;

export default UserPageContainer;
