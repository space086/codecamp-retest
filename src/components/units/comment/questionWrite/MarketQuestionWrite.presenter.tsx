
import * as D from './MarketQuestionWrite.styles'
import { IMarketQuestionWriteProps } from './MarketQuestionWrite.types'

export default function MarketQuestionWriteUI(props : IMarketQuestionWriteProps) {

  return (
    <D.Wrap>
      <D.CommentsWrap>
        <D.CommentsTitleWrap>
          <D.CommentIcon src="../images/comment.png" />
          <D.CommentTitle>댓글</D.CommentTitle>
        </D.CommentsTitleWrap>
        {/* 빈칸 댓글 창 */}
        <D.Comments1Wrap>
          {/* <D.CommentsInfoWrap>
            <D.CommentInput type="text" placeholder="작성자"  onChange={props.onChangeWriter} />
            <D.CommentInput type="password" placeholder="비밀번호" onChange={props.onChangePassword} />
            <D.RatingStar onChange={props.setRating}></D.RatingStar>
          </D.CommentsInfoWrap> */}
          <D.CommentsContentWrap>
            <D.CommentContentsText 
            maxLength={100}
            defaultValue={props.el?.contents}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
            <D.CommentSubmitWrap>
              <D.CommentCount>{props.contents.length}/100</D.CommentCount>
              <D.CommentSubmitBnt onClick={props.isEdit ? props.onClickQuestionEdit : props.onClickQuestionSubmit}
              >
                {props.isEdit ? "수정" : "등록"}하기
              </D.CommentSubmitBnt>
            </D.CommentSubmitWrap>
          </D.CommentsContentWrap>
        </D.Comments1Wrap>
      </D.CommentsWrap>
    </D.Wrap>
  )

}


/*
<D.Wrap>
      <D.CommentsWrap>
        <D.CommentsTitleWrap>
          <D.CommentIcon src="../images/comment.png" />
          <D.CommentTitle>댓글</D.CommentTitle>
        </D.CommentsTitleWrap>
        <D.Comments1Wrap>
          <D.CommentsInfoWrap>
            <D.CommentInput type="text" placeholder="작성자"  onChange={props.onChangeWriter} />
            <D.CommentInput type="password" placeholder="비밀번호" onChange={props.onChangePassword} />
            <div>
              <D.RatingStar src="../images/star.png" />
              <D.RatingStar src="../images/star.png" />
              <D.RatingStar src="../images/star.png" />
              <D.RatingStar src="../images/star.png" />
              <D.RatingStar src="../images/star.png" />
            </div>
          </D.CommentsInfoWrap>
          <D.CommentsContentWrap>
            <D.CommentContentsText 
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
            <D.CommentSubmitWrap>
              <D.CommentCount>{props.contents.length}/100</D.CommentCount>
              <D.CommentSubmitBnt>등록하기</D.CommentSubmitBnt>
            </D.CommentSubmitWrap>
          </D.CommentsContentWrap>
        </D.Comments1Wrap>
        <D.Comments2Wrap>
          <D.CommentsInfoWrap>
            <D.CommentInput2 type="text" placeholder="노원두" />
            <D.CommentInput2 type="password" placeholder="12345" />
            <div>
              <D.RatingStar src="../images/star-y.png" />
              <D.RatingStar src="../images/star-y.png" />
              <D.RatingStar src="../images/star-y.png" />
              <D.RatingStar src="../images/star.png" />
              <D.RatingStar src="../images/star.png" />
            </div>
          </D.CommentsInfoWrap>
          <D.CommentsContentWrap>
            <D.CommentContentsText placeholder="진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!" />
            <D.CommentSubmitWrap>
              <D.CommentCount>46/100</D.CommentCount>
              <D.CommentCorrectBnt>수정하기</D.CommentCorrectBnt>
            </D.CommentSubmitWrap>
          </D.CommentsContentWrap>
        </D.Comments2Wrap>
      </D.CommentsWrap>
    </D.Wrap>
  */