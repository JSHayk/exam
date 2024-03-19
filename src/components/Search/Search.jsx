import styled from "styled-components";
import { useRecoilState } from "recoil";

import { booksCopyState, booksState, searchValueState } from "../../atoms";

import searchIcon from "../../assets/search.svg";
import { useEffect } from "react";

export const Search = () => {
  const [, setBooks] = useRecoilState(booksState);
  const [booksCopy] = useRecoilState(booksCopyState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  const handleChangeOnInput = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const doSearch = () => {
    if (!searchValue.trim()) {
      setBooks(booksCopy);
      return;
    }

    setBooks((prev) => {
      return prev.filter((book) => {
        return book.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    });
  };

  // useEffect(() => {
  //   doSearch();
  // }, [searchValue]);

  return (
    <SearchContent>
      <SearchField>
        <SearchInput>
          <input
            type="text"
            placeholder="Write something"
            onChange={handleChangeOnInput}
          />
        </SearchInput>
        <SearchIcon>
          <img src={searchIcon} alt="search" />
        </SearchIcon>
      </SearchField>
    </SearchContent>
  );
};

const SearchContent = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 76px;
`;

const SearchField = styled.div`
  position: relative;
`;

const SearchInput = styled.div`
  > input {
    height: 44px;
    width: 340px;
    border-radius: 8px;
    padding: 8px;
    padding-right: 43px;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`;
