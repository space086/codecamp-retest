// import { getDate } from  '../../../../commons/libraries/utils';
import * as S from './MarketsDetail.styles'
import DOMPurify from 'dompurify'
// import Icon, { HeartOutlined, } from '@ant-design/icons'
import Icon, { HomeOutlined } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);
export default function MarketsDetailUI(props: any){
  console.log(props.data?.fetchUseditem)
  return (
    <S.Body>
      <S.ItemWrap>
        {props.data?.fetchUseditem?.images[0] ? ( 
          <S.ItemImg 
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]}`}
          />
          ) : (
          <S.ItemImg src="../images/blank.png"/>
        )}
        {/* <S.ItemImg src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]}`}/> */}
        <S.ItemInfoWrap>
          <S.RowWrap>
            <S.ItemName>{props.data?.fetchUseditem.name}</S.ItemName>
            <S.RowWrap>
              {/* <S.CorretIcon src="../images/correct.png" id={el._id} onClick={props.onClickUpdate} /> */}
              <S.CorretIcon src="../images/correct.png" onClick={props.onClickMoveToMarketsEdit} />
              <S.DeleteIcon src="../images/delete.png" onClick={props.onClickMarketsDelete} />
            </S.RowWrap>
          </S.RowWrap>
          <S.RowWrap02>
            <S.ItemPrice>{props.data?.fetchUseditem?.price}</S.ItemPrice>
            <S.ItemPriceWon>원</S.ItemPriceWon>
          </S.RowWrap02>
          <S.Line></S.Line>
          <S.ItemRemarks>{props.data?.fetchUseditem?.remarks}</S.ItemRemarks>
          <S.ItemTagsWrap>
            <S.ItemTag># 중고마켓</S.ItemTag>
            <S.ItemTag># 프리미엄</S.ItemTag>
          </S.ItemTagsWrap>
          <S.Line02></S.Line02>
          <S.ItemBtn>
            <S.PickBtnWrap>
              <HeartIcon style={{ color: 'hotpink' }} />
              <S.PickBtn>찜</S.PickBtn>
              <S.PickCount>{props.data?.fetchUseditem?.pickedCount}</S.PickCount>
            </S.PickBtnWrap>
            <S.BusketBtn onClick={props.onClickbaskets}>장바구니</S.BusketBtn>
            <S.BuyBtn>바로구매</S.BuyBtn>
          </S.ItemBtn>
        </S.ItemInfoWrap>
      </S.ItemWrap>
      <S.DetailWrap>
        <S.ItemDetailWrap>
          <S.ItemDetailTitle>상품정보</S.ItemDetailTitle>
          <S.Line03></S.Line03>
          {props.data?.fetchUseditem?.images
          .filter((el)=> el)
          .map((el: any) => (
              <S.Image2 src={`https://storage.googleapis.com/${el}`}/>
          ))}
         
          {/* <S.Contents>
            contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents 
          </S.Contents> */}
          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></S.Contents>
            ) : (
              <S.Contents />
            )}
          <S.ItemDealWrap>
            <S.ItemDealTitleWrap>
              <S.LocationIcon src="../images/location.png" />
              <S.DealText>거래지역</S.DealText>
            </S.ItemDealTitleWrap>
            <S.Map id='map'></S.Map>
          </S.ItemDealWrap>
        </S.ItemDetailWrap>
        <S.ColumnLine></S.ColumnLine>
        <S.ColumnWrap>
          <S.StoreDetailWrap>
            <S.StoreTitle>상점정보</S.StoreTitle>
            <S.Line04></S.Line04>
            <S.StoreNameWrap>
              <S.StoreIcon></S.StoreIcon>
              <S.StoreName>{props.data?.fetchUseditem.seller.name}</S.StoreName>
            </S.StoreNameWrap>
            <S.Line05></S.Line05>
          </S.StoreDetailWrap>
          {/* <MarketComment /> */}
        </S.ColumnWrap>
      </S.DetailWrap>
    </S.Body>
  )
}
