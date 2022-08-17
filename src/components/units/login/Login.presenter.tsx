import * as S from "./Login.styles";
import Button01 from "../../commons/button/01";
import Input01 from "../../commons/input/01";

export default function LoginUI(props: any) {
  return (
    <S.Wrap>
      <S.Title>Login</S.Title>
      <S.Line></S.Line>
      <S.InputWrap>
        <S.ColumnWrap>
          <S.RowWrap>
            <S.Text>아이디</S.Text>
            <Input01 />
          </S.RowWrap>
          <S.RowWrap>
            <S.Text>비밀번호</S.Text>
            <Input01 />
          </S.RowWrap>
        </S.ColumnWrap>
        <Button01 isActive={props.formState.isValid} title="로그인" />
      </S.InputWrap>
    </S.Wrap>
  );
}
