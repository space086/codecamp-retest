
import { useState, ChangeEvent } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_USED_ITEM_QUESTION,UPDATE_USED_ITEM_QUESTION } from './MarketQuestionWrite.queries'
import MarketQuestionWriteUI from './MarketQuestionWrite.presenter';
import { FETCH_USED_ITEM_QUESTIONS } from '../questionList/MarketQuestion.queries';
// import { FETCH_BOARD_COMMENTS } from '../list/CommentList.queries'
// import { AiFillStar } from "react-icons/ai";
// import { printIntrospectionSchema } from 'graphql';


export default function MarketQuestionWrite(props :any) {
  const router = useRouter()
  

  // 댓글 input창 값 입력하기
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION)
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION)

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  }

  // 경고
  const onClickQuestionSubmit = async () => {
      try {
        const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {useditemId: router.query.useditemId},
          }
        ]
      });
       console.log(result);
      alert("질문이 등록되었습니다.")
    } catch(error) {
    alert(error.message)
  }
};

const onClickQuestionEdit = async () => {
  try {
    await updateUseditemQuestion({
    variables: {
      updateUseditemQuestionInput: {
        contents
      },
      useditemQuestionId: props.questionId,
    },
    refetchQueries: [
      {
        query: FETCH_USED_ITEM_QUESTIONS,
        variables: {useditemId: router.query.useditemId},
      }
    ]
  });
  props.setQuestionId("");
  // console.log(result);
  alert("댓글이 수정되었습니다.")
  } catch(error) {
  alert(error.message)
  };
};
  return (
    <MarketQuestionWriteUI
    onChangeContents={onChangeContents}
    onClickQuestionSubmit={onClickQuestionSubmit}
    onClickQuestionEdit={onClickQuestionEdit}
    contents={contents}
    isEdit={props.isEdit}
    el={props.el}
    />
    )
}
