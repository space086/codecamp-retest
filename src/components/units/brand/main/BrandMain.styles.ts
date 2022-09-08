import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 98%;
  /* margin-left: -30px; */
  margin-bottom: 130px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const ListItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 261px;
  height: 420px;
  margin: 50px auto;
  margin-left: auto;
`;

export const PicWrap = styled.div`
  position: relative;
`;

export const Heart = styled.img`
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 24px;
`;

export const ItemPic = styled.img`
  width: 260px;
  height: 350px;
`;
export const BlankImage = styled.img`
  width: 260px;
  height: 350px;
`;

export const TextWrap = styled.div`
  padding: 13px;
`;

export const ItemTag = styled.div`
  font-size: 20px;
  color: #f65656;
  font-weight: 700;
`;
export const ItemName = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: "robo";
`;
export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemPrice = styled.div``;
export const MarketName = styled.div`
  font-size: 0.88em;
  color: #555;
  padding: 13px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
export const ItemTime = styled.div``;

export const Title = styled.h3`
  font-size: 1.38em;
  text-align: center;
  margin: 98px auto 48px;
`;
