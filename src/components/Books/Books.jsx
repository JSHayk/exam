import { useMemo, useEffect } from "react";

import styled from "styled-components";
import { useRecoilState } from "recoil";

import {
  booksState,
  currentPageDataState,
  currentPageState,
  pageNumbersState,
  pageSizeState,
} from "../../atoms";

import bookPicture from "../../assets/book.png";
import downloadPicture from "../../assets/download.svg";

export const Books = () => {
  const [books] = useRecoilState(booksState);
  const [pageSize] = useRecoilState(pageSizeState);
  const [pageNumbers, setPageNumbers] = useRecoilState(pageNumbersState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [currentPageData, setCurrentPageData] =
    useRecoilState(currentPageDataState);

  const totalPages = useMemo(() => {
    return () => {
      return Math.ceil(books.length / pageSize);
    };
  }, [books, pageSize]);

  useEffect(() => {
    console.log(totalPages());
    const numbers = [];
    for (let i = 1; i <= totalPages(); i++) {
      numbers.push(i);
    }
    setPageNumbers(numbers);
  }, [totalPages]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, books.length - 1);

    setCurrentPageData(books.slice(startIndex, endIndex + 1));
  }, [pageSize, books, currentPage]);

  console.log(currentPage);

  return (
    <BooksContent>
      <BooksList>
        {currentPageData?.map((book) => {
          const { id, title, authors, pdf, picture } = book;
          return (
            <BooksListItem key={id}>
              <BooksListItemPicture>
                <img src={picture || bookPicture} alt="book" />
              </BooksListItemPicture>
              <BooksListItemInfo>
                <Column>
                  <BooksListItemName>{title}</BooksListItemName>
                  <BooksListItemAuthors>
                    {authors.map((author) => {
                      return <span>{author}</span>;
                    })}
                  </BooksListItemAuthors>
                </Column>
                <BooksListItemDownload as="a" href={pdf} download>
                  <img src={downloadPicture} alt="download" />
                </BooksListItemDownload>
              </BooksListItemInfo>
            </BooksListItem>
          );
        })}
      </BooksList>
    </BooksContent>
  );
};

const BooksContent = styled.div`
  margin-top: 84px;
`;

const BooksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const BooksListItem = styled.li`
  background-color: var(--color-white-1);
  width: 400px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  margin: 12px;

  /* &:not(:first-child) {
    margin-left: 24px;
  } */
`;

const BooksListItemPicture = styled.div`
  width: 100%;

  > img {
    border-radius: 8px 8px 0 0;
    width: 100%;
  }
`;

const BooksListItemName = styled.h4`
  font-size: 18px;
`;

const BooksListItemAuthors = styled.h4`
  margin-top: 4px;
  display: flex;
  flex-direction: column;

  > span {
    font-size: 16px;
    color: var(--color-gray-2);

    &:not(:first-child) {
      margin-top: 2px;
    }
  }
`;

const BooksListItemInfo = styled.div`
  padding: 18px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Column = styled.div``;

const BooksListItemDownload = styled.div`
  cursor: pointer;
`;
