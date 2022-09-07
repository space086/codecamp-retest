import styled from "@emotion/styled";

// export const Wrap = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   flex-flow: row wrap;
//   overflow: auto;
// `;

// export const ListItemWrap = styled.div`
//   width: 247px;
//   height: 320px;
//   display: flex;
//   flex-direction: column;
//   /* align-items: center; */
//   margin-bottom: 32px;
//   border: 1px solid #555;
//   margin-left: auto;
// `;

// export const ItemPic = styled.img`
//   width: 245px;
//   height: 221px;
// `;
// export const BlankImage = styled.img`
//   width: 245px;
//   height: 221px;
// `;

// export const TextWrap = styled.div`
//   padding: 16px;
// `;
// export const ItemName = styled.div`
//   font-size: 16px;
//   font-weight: 500;
// `;
// export const RowWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin-top: 15px;
// `;
// export const ItemPrice = styled.div`
//   margin-right: 10px;
// `;
// export const ItemTime = styled.div``;

export const Wrap = styled.div`
  width: 98%;
  margin-left: -30px;
  margin-bottom: 130px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const ListItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 261px;
  height: 420px;
  margin-bottom: 50px;
  margin-left: auto;
  /* border: 1px solid #eee; */
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
  margin: 98px auto;
`;
