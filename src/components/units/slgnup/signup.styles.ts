import styled from "@emotion/styled";

export const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: 400;
  text-align: center;
  margin: 95px auto 115px;
`;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: #555;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 175px auto 312px;
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const Text = styled.span`
  font-size: 1em;
  width: 113px;
`;
export const Error = styled.div`
  color: red;
  font-size: 9px;
  margin-bottom: 30px;
  margin-top: 14px;
`;

export const CancelBtn = styled.div`
  width: 186px;
  height: 56px;
  border: 1px solid #000;
  cursor: pointer;
`;
export const SubmitBtn = styled.div`
  width: 186px;
  height: 56px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;
