import * as S from "./signup.styles";
import Input01 from "../../commons/input/01";
import Button01 from "../../commons/button/01";
import Button02 from "../../commons/button/02";

export default function SignUpUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Wrap>
        <S.Title>JOIN MEMBER</S.Title>
        <S.Line></S.Line>
        <S.InputWrap>
          <S.ColumnWrap>
            <S.RowWrap>
              <S.Text>아이디</S.Text>
              <Input01
                type="text"
                register={props.register("email")}
                placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
              />
            </S.RowWrap>
            <S.Error>{props.formState.errors.email?.message}</S.Error>
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
                register={props.register("passwordCheck")}
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
          </S.ColumnWrap>
        </S.InputWrap>
        <S.Line2></S.Line2>
        <S.BtnWrap>
          <S.CancelBtn onClick={props.onClickCancel}>취소</S.CancelBtn>
          <Button02 isActive={props.formState.isValid} title="확인" />
        </S.BtnWrap>
      </S.Wrap>
    </form>
  );
}
