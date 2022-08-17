import * as S from "./BrandMain.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BrandMainUI(props: any) {
  return (
    <>
      <S.Title>New Arrival</S.Title>
      <S.Wrap>
        {props.data?.fetchUseditems.slice(0, 8).map((el: any) => (
          <S.ListItemWrap
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToMarketsDetail(el)}
          >
            <S.PicWrap>
              <S.Heart src="/images/heart.svg" />
              {el.images[0] ? (
                <S.ItemPic
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <S.BlankImage src="../images/no-image.png" />
              )}
            </S.PicWrap>
            <S.TextWrap>
              <S.RowWrap>
                <S.ItemTag>{el.tags[0]}</S.ItemTag>
                <S.ItemPrice>{el.price} 원</S.ItemPrice>
              </S.RowWrap>
              <S.MarketName>{el.seller.name}</S.MarketName>
              <S.RowWrap>
                <S.ItemName>{el.name}</S.ItemName>
                <S.ItemTime>{getDate(el.createdAt)}</S.ItemTime>
              </S.RowWrap>
            </S.TextWrap>
          </S.ListItemWrap>
        ))}
      </S.Wrap>
    </>
  );
}
