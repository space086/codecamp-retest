import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  overflow: auto;
`;

export const ListItemWrap = styled.div`
  width: 247px;
  height: 320px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 32px;
  border: 1px solid #555;
  margin-left: auto;
`;

export const ItemPic = styled.img`
  width: 245px;
  height: 221px;
`;
export const BlankImage = styled.img`
  width: 245px;
  height: 221px;
`;

export const TextWrap = styled.div`
  padding: 16px;
`;
export const ItemName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;
export const ItemPrice = styled.div`
  margin-right: 10px;
`;
export const ItemTime = styled.div``;
