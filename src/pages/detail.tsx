import React from "react";
import styled from "styled-components";

function detail() {
  return (
    <div>
      <Container>
        <FlexWrapper>
          <Left>
            <Cover></Cover>
          </Left>

          <Right>
            <Title>ddd</Title>
            <SubTitle>kkk</SubTitle>
            <Writer>저자</Writer>
            <Buylink>
              <Kyobo>교보문고</Kyobo>
              <Yes24>Yes24</Yes24>
              <Interpark>인터파크</Interpark>
            </Buylink>
          </Right>
        </FlexWrapper>
        <DownWrapper>
          <Description>책 소개</Description>
          <Comment>댓글</Comment>
        </DownWrapper>
      </Container>
    </div>
  );
}

export default detail;

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
  margin: 3%;
  padding: 3%;
`;

const Left = styled.div`
  background-color: #b2bec3;
  border: 2px solid black;
  width: 15rem;
  height: 20rem;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Right = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 80%;
  margin: 5%;
  padding: 2%;
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
  display: flex;
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

const Writer = styled.div`
  font-weight: bold;
`;

const DownWrapper = styled.div`
  font-size: 1rem;
  margin-left: 5%;
`;

const Description = styled.div`
  font-size: 2rem;
  margin-bottom: 5%;
  padding-left: 30px;
  width: 100%;
  height: 100%;
`;

const Comment = styled.div`
  background-color: #b2bec3;
  border-top: 1px solid black;
  padding-top: 30px;
  padding-left: 30px;
  height: 20rem;
`;
