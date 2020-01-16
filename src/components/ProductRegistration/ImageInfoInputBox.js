import React, { useState, useReducer } from "react";
import styled, { css } from "styled-components";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

export default function ImageInfoInputBox({ detail_image, setDetail_image }) {
  const handleEditorChange = e => {
    let tempStr = e.target.getContent();
    setDetail_image(tempStr.slice(3, tempStr.length - 4));
  };
  const reducer = (prev, next) => {
    return {
      ...prev,
      ...next
    };
  };
  const initialState = {
    first: "",
    second: "",
    third: ""
  };
  const [images, setImages] = useReducer(reducer, initialState);

  const fileImageHandler = key => e => {
    let data = new FormData();
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    let url = "http://3.15.9.70:8080/product/mainimageupload";
    data.append("filename", e.target.files[0]);
    axios
      .post(url, data)
      .then(res => {
        console.log("res: ", res);
        // setImages({ [key]: res.data.URL });
      })
      .catch(error => console.log("catch error: ", error));
    reader.onloadend = () => {
      setImages({ [key]: reader.result });
    };
  };
  return (
    <CheckAreaWrapper>
      {/* 과세여부 */}
      <InputWrap>
        <Title>
          <h3>대표 이미지</h3>
        </Title>
        <EventArea>
          <ImageGuideButton>이미지 제작 가이드</ImageGuideButton>
          <MustCheckP>꼭 확인하세요</MustCheckP>
          <ImagesBox>
            {/* 대표 이미지 */}
            <MainImageWrap>
              <Header>
                <h4>대표 이미지</h4>
                <ToolTip>예시</ToolTip>
              </Header>
              <ImageText>
                판매상품의 대표이미지입니다. <br />
                보기 쉬운 간결한 이미지를 활용해 주세요
              </ImageText>
              <ImagePreview image={images.first}>
                {!images.first && (
                  <PreviewText>이미지를 등록해주세요</PreviewText>
                )}
              </ImagePreview>
              <FileLabel>
                <FileInput
                  type="file"
                  onChange={fileImageHandler("first")}
                ></FileInput>
                <FileButton>파일 올리기</FileButton>
              </FileLabel>
            </MainImageWrap>
            {/* 추가 이미지  */}
            <MainImageWrap>
              <Header>
                <h4>추가 이미지</h4>
              </Header>
              <ImageText>
                상품의 다양한 이미지컷을 <br />
                최대 2장까지 넣을 수 있습니다.
              </ImageText>
              <ImagePreview image={images.second}>
                {!images.second && (
                  <PreviewText>이미지를 등록해주세요</PreviewText>
                )}
              </ImagePreview>
              <FileLabel>
                <FileInput
                  type="file"
                  onChange={fileImageHandler("second")}
                ></FileInput>
                <FileButton>파일 올리기</FileButton>
              </FileLabel>
            </MainImageWrap>
            {/* 서브 이미지 */}
            <MainImageWrap>
              <ImagePreview noHeader={true} image={images.third}>
                {!images.second && (
                  <PreviewText>이미지를 등록해주세요</PreviewText>
                )}
              </ImagePreview>
              <FileLabel>
                <FileInput
                  type="file"
                  onChange={fileImageHandler("third")}
                ></FileInput>
                <FileButton>파일 올리기</FileButton>
              </FileLabel>
            </MainImageWrap>
          </ImagesBox>
        </EventArea>
      </InputWrap>
      <InputWrap>
        <Title>
          <h3>상품 상세 설명</h3>
        </Title>
        <EventArea>
          <ImageGuideButton edit={true}>에디터 작성</ImageGuideButton>
          <EditorWrap>
            <Editor
              initialValue="<p>상품 상세 페이지에 본문에 노출할 상품 정보 및 소개 내용을 입력해주세요. <br/> 이미지의 경우, 가이드에 어긋나는 파일은 정상적으로 노출되지 않으니 유의해주세요.</p>"
              init={{
                height: 350,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
              }}
              onChange={handleEditorChange}
            />
          </EditorWrap>
        </EventArea>
      </InputWrap>
    </CheckAreaWrapper>
  );
}

const CheckAreaWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0px auto 24px;
`;
const Title = styled.div`
  display: inline-block;
  width: 15%;
  font-size: 15px;
  font-weight: medium;
  color: #1a1a1a;
  padding: 16px 20px;
  text-align: right;
`;
const EventArea = styled.div`
  width: 80%;
`;
const InputWrap = styled.div`
  display: flex;
  margin-top: 12px;
`;
const ImageGuideButton = styled.button`
  display: inline-block;
  background-color: #fafafa;
  border: 1px solid #0d99de;
  margin-top: 8px;
  color: #0d99de;
  padding: 8px 48px;
  font-size: 14px;
  ${({ edit }) =>
    edit &&
    css`
      background-color: #0d99de;
      color: #fafafa;
    `}
`;
const ImagesBox = styled.div`
  display: flex;
  margin-top: 24px;
`;
const MustCheckP = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: #f66061;
  margin: auto 0 auto 12px;
`;
const MainImageWrap = styled.div`
  width: 36%;
  height: 440px;
`;
const Header = styled.div`
  display: flex;
  padding: 24px 0;
`;
const ToolTip = styled.span`
  padding: 7px 6px;
  margin-left: 8px;
  margin-top: -4px;
  border-radius: 4px;
  border: 1px solid #ff401f;
  background: #fff;
  font-weight: bold;
  font-size: 10px;
  color: #ff401f;
`;
const ImageText = styled.p`
  padding: 4px 0;
  font-size: 13px;
  color: #616161;
`;
const ImagePreview = styled.div`
  margin-top: 12px;
  min-width: 140px;
  width: 78%;
  height: 220px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  display: flex;
  ${({ noHeader }) =>
    noHeader &&
    css`
      margin-top: 134px;
    `}
  ${props =>
    props.image &&
    css`
      background-color: none;
      background-image: url(${props.image});
      background-repeat: no-repeat;
      background-size: cover;
    `}
`;
const PreviewText = styled.span`
  position: relative;
  display: block;
  color: #919191;
  font-size: 14px;
  /* margin-top: 12px; */
  margin: auto auto;
  padding: 12px 0;
`;
const FileLabel = styled.label``;
const FileInput = styled.input`
  border: 1px solid blue;
  display: none;
`;
const FileButton = styled.div`
  margin-top: 16px;
  padding: 12px 24px;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 15px;
`;

const EditorWrap = styled.div`
  margin-top: 16px;
`;
