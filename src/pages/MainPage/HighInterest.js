import React from "react";
import styled from "styled-components";
import Sec_3_contents from "../../components/Mainpage/Sec_3_contents";

export default function HighInterest() {
  return (
    <div>
      <MainSection>
        <TitleArea>
          <Title>POINT 2</Title>
        </TitleArea>
        <SubTitleArea>
          <SubH1>
            수익률이 <SubB>높은가요?</SubB>
          </SubH1>
        </SubTitleArea>
        <MainTextBox>
          <TextBox>
            <TextBoxImg></TextBoxImg>
            <TextBoxH1>
              연 평균 기대수익률<B>40%</B>이상
            </TextBoxH1>
          </TextBox>
        </MainTextBox>
        <TextBoxSpan>
          저스트셀의 <B>‘인공지능 기반 판매최적화 알고리즘'</B>을 통해
          <br />더 높은 수익률로 판매진행
        </TextBoxSpan>
        <Sec_3_contents />
        <Margin>
          <TextBoxSpan>
            상품 판매에 따른 정산 주기가 평균 1달이므로,
            <br /> <B>12번 이상</B>의 복리효과
          </TextBoxSpan>
        </Margin>
      </MainSection>
    </div>
  );
}

const MainSection = styled.div`
  margin-top: 12rem;
  padding-bottom: 12rem;
`;

const TitleArea = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  border-bottom: 2px solid #007add;
  padding-bottom: 2rem;
  width: 90%;
`;

const Title = styled.h1`
  color: #007add;
  font-family: noto_L;
  font-size: 1.9rem;
  position: relative;
  width: 9rem;
  display: block;
  margin: 0 auto;
`;

const SubTitleArea = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const SubH1 = styled.h1`
  font-size: 3.563rem;
  padding-top: 2rem;
  color: #003f9a;
`;

const SubB = styled.b`
  color: #007add;
  font-family: noto_R;
`;

const MainTextBox = styled.div`
  box-shadow: 0px 8px 10px rgba(0, 63, 154, 0.1);
  background-color: #fff;
  max-width: 1250px;
  margin: 0 auto;
  width: 80%;
  border-radius: 21px;
  margin-top: 7rem;
`;

const TextBox = styled.div`
  padding: 3rem 0;
  text-align: center;
`;
const TextBoxImg = styled.div`
  background-image: url("/assets/images/main_box_icon_1.png");
  background-repeat: no-repeat;
  width: 39px;
  height: 39px;
  background-size: 40px auto;
  display: inline-block;
  margin-right: 1rem;
  vertical-align: middle;
`;
const TextBoxH1 = styled.h1`
  display: inline-block;
  vertical-align: middle;
  color: #333333;
  font-size: 2.5rem;
`;

const B = styled.b`
  color: #007add;
  padding: 0 0.3rem;
`;

const TextBoxSpan = styled.span`
  color: #333333;
  font-size: 2.5rem;
  padding: 3rem 0;
  text-align: center;
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-top: 6rem;
`;

const Margin = styled(MainTextBox)`
  margin-top: 2rem;
`;
