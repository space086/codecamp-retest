import * as S from "./BrandList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function BrandListUI(props: any) {
  return (
    <S.AllWrap>
      <S.BestWrap>
        <S.HeadTitle>Best</S.HeadTitle>
        <S.Best>
          {props.bestList?.fetchUseditemsOfTheBest?.map((el: any) => (
            <S.ListItemWrap
              key={uuidv4()}
              data={props.data}
              el={el}
              onClick={props.onClickMoveToMarketsDetail(el)}
            >
              {el.images[0] ? (
                <S.ItemPic
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <S.BlankImage src="../images/no-image.png" />
              )}
              <S.TextWrap>
                <S.RowWrap>
                  <S.ItemTag>{el.tags[0] ? el.tags[0] : "대표태그"}</S.ItemTag>
                  <S.ItemPrice>{el.price} 원</S.ItemPrice>
                </S.RowWrap>
                <S.MarketName>{el.seller?.name}</S.MarketName>
                <S.RowWrap>
                  <S.ItemName>{el.name}</S.ItemName>
                </S.RowWrap>
              </S.TextWrap>
            </S.ListItemWrap>
          ))}
        </S.Best>
      </S.BestWrap>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadMore}
        hasMore={true}
        useWindow={true}
      >
        <S.LeftWrap>
          <S.ItemBtn onClick={props.onClickMoveToMarketsNew}>
            상품등록
          </S.ItemBtn>
          <S.Search>
            <S.SearchbarInput />
            <S.SearchIcon src="../images/search.svg" />
          </S.Search>
        </S.LeftWrap>
        <S.Line></S.Line>
        <S.Wrap>
          {props.data?.fetchUseditems.map((el: any) => (
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
                  <S.ItemTag>{el.tags[0] ? el.tags[0] : "대표태그"}</S.ItemTag>
                  <S.ItemPrice>{el.price} 원</S.ItemPrice>
                </S.RowWrap>
                <S.MarketName>{el.seller?.name}</S.MarketName>
                <S.RowWrap>
                  <S.ItemName>{el.name}</S.ItemName>
                </S.RowWrap>
              </S.TextWrap>
            </S.ListItemWrap>
          ))}
        </S.Wrap>
      </InfiniteScroll>
    </S.AllWrap>
  );
}
