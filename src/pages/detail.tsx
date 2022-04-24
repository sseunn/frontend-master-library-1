import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { ListFormat } from "typescript";

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: #b2bec3;
  margin-top: 82px;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: auto;
  height: auto;
  /* margin: 3%; */
  padding: 5%;

  /* margin-top: 10px; */
`;

const Left = styled.div`
  background-color: #b2bec3;

  width: 18rem;
  height: 19rem;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Right = styled.div`
  width: 80%;
  height: 80%;
  margin: 5%;
  padding: 3%;
  text-align: left;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;
const SubTitle = styled.div`
  font-size: 1.8rem;
  display: flex;
  margin-top: 10px;
`;

const Buylink = styled.div`
  font-size: 1rem;
  margin-top: 10px;
`;

const Kyobo = styled.div`
  font-size: 1rem;
`;

const Yes24 = styled.div`
  font-size: 1rem;
`;

const Interpark = styled.div`
  font-size: 1rem;
`;

const Author = styled.div`
  font-weight: bold;
`;

const Publisher = styled.div`
  font-weight: bold;
`;

const DownWrapper = styled.div`
  font-size: 1rem;
  margin-left: 5%;
`;

const Summary = styled.div`
  font-size: 2rem;
  margin-bottom: 5%;
  padding-left: 30px;
  width: 100%;
  height: 100%;
`;

const Comment = styled.div`
  background-color: #b2bec3;
  border-top: 1px solid gray;
  padding-top: 30px;
  padding-left: 30px;
  height: 20rem;
`;

function Detail() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/bookMock.json")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        setBookList(data);
      });
  });
  console.log(bookList);

  return (
    <div>
      <Container>
        <FlexWrapper>
          {/* {bookList.map((list) =>
           {Object.entries(list).map(([key, value]) => ( 
            return (
              <List
                bookTitle={list.bookTitle}
                name={list.bookSubTitle}
                comment={list.author}
              />
            ); */}

          <Left>
            <Cover></Cover>
          </Left>
          <Right>
            <Title>Title</Title>
            <SubTitle>SubTitle</SubTitle>
            <Author>저자</Author>
            <Publisher></Publisher>
            <Buylink>
              <Kyobo>교보문고</Kyobo>
              <Yes24>Yes24</Yes24>
              <Interpark>인터파크</Interpark>
            </Buylink>
          </Right>
        </FlexWrapper>
        <DownWrapper>
          <Summary>책 소개</Summary>
          <Comment>
            <h2>Review</h2>
          </Comment>
        </DownWrapper>
      </Container>
    </div>
  );
}

export default Detail;
