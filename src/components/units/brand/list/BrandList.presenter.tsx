import * as S from "./BrandList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../../commons/libraries/utils";
import { IBrandListUIProps } from "./BrandList.types";

export default function BrandListUI(props: IBrandListUIProps) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.loadMore}
      hasMore={true}
      useWindow={true}
    >
      <S.Wrap>
        {props.data?.fetchUseditems.map((el: any) => (
          <S.ListItemWrap
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToMarketsDetail(el)}
          >
            {el.images[0] ? (
              <S.ItemPic
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            ) : (
              <S.BlankImage src="../images/blank.png" />
            )}
            <S.TextWrap>
              <S.ItemName>{el.name}</S.ItemName>
              <S.RowWrap>
                <S.ItemPrice>{el.price} 원</S.ItemPrice>
                <S.ItemTime>{getDate(el.createdAt)}</S.ItemTime>
              </S.RowWrap>
            </S.TextWrap>
          </S.ListItemWrap>
        ))}
      </S.Wrap>
    </InfiniteScroll>
  );
}
