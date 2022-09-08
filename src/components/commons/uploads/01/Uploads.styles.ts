import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UploadButton = styled.div`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
