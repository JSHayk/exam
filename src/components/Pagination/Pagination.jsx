import { useRecoilState } from "recoil";
import styled from "styled-components";

import { currentPageState, pageNumbersState } from "../../atoms";

export const Pagination = () => {
  const [pageNumbers] = useRecoilState(pageNumbersState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <PaginationContent>
      <PaginationList>
        {pageNumbers.map((page) => (
          <PaginationListItem
            key={page}
            onClick={() => goToPage(page)}
            disabled={currentPage === page}
          >
            {page}
          </PaginationListItem>
        ))}
      </PaginationList>
    </PaginationContent>
  );
};

const PaginationContent = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: end;
  padding-right: 76px;
`;

const PaginationList = styled.div`
  display: flex;
  align-items: center;
`;

const PaginationListItem = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--color-white-1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  color: var(--color-black-1);

  &:not(:first-child) {
    margin-left: 12px;
  }
`;
