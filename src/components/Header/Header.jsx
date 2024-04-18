import styled from "styled-components";

import Logo from "../Logo/Logo";
import { Search } from "../Search";

export const Header = () => {
  return (
    <HeaderContent>
      <Logo />
      <Search />
    </HeaderContent>
  );
};

const HeaderContent = styled.header`
  background-color: var(--color-white-1);
  padding: 26px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.14);
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
