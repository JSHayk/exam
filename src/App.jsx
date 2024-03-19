import styled from "styled-components";

import { RecoilRoot } from "recoil";

import { Books } from "./components/Books";
import { Search } from "./components/Search";
import { Pagination } from "./components/Pagination";

export const App = () => {
  return (
    <RecoilRoot>
      <Self>
        <Search />
        <Books />
        <Pagination />
      </Self>
    </RecoilRoot>
  );
};

const Self = styled.div`
  max-width: 1400px;
  margin: 120px auto;
`;
