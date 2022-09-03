import * as S from "./signup.styles";
import Button01 from "../../commons/button/01";
import Input01 from "../../commons/input/01";

export default function SignUpUI(props: any) {
  return (
    <S.Wrap>
      <S.Title>JOIN MEMBER</S.Title>
      <S.Line></S.Line>
      <S.InputWrap>
        <S.ColumnWrap>
          <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <S.RowWrap>
              <S.Text>아이디</S.Text>
              <Input01
                type="text"
                register={props.register("email")}
                placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
              />
              <S.Error>{props.formState.errors.email?.message}</S.Error>
            </S.RowWrap>
            <S.RowWrap>
              <S.Text>비밀번호</S.Text>
              <Input01
                type="password"
                register={props.register("password")}
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
              />
              <S.Error>{props.formState.errors.password?.message}</S.Error>
            </S.RowWrap>
            <S.RowWrap>
              <S.Text>비밀번호 확인</S.Text>
              <Input01
                type="password"
                register={props.register("password")}
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
              />
              <S.Error>{props.formState.errors.password?.message}</S.Error>
            </S.RowWrap>
            <S.RowWrap>
              <S.Text>이름</S.Text>
              <Input01
                type="text"
                register={props.register("name")}
                placeholder="Ex)홍길동"
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
            </S.RowWrap>
          </form>
        </S.ColumnWrap>
      </S.InputWrap>
      <S.Line2></S.Line2>
      <S.BtnWrap>
        <S.CancelBtn onClick={props.onClickCancel}>취소</S.CancelBtn>
        <S.SubmitBtn onClick={props.onClickSubmit}>확인</S.SubmitBtn>
      </S.BtnWrap>
    </S.Wrap>
  );
}
