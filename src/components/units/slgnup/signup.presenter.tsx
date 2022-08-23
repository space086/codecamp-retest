import * as S from "./signup.styles";
import Button01 from "../../commons/button/01";
import Input01 from "../../commons/input/01";

export default function SignUpUI(props: any) {
  return (
    <S.Wrap>
      <S.Title>JOIN</S.Title>
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
          <S.RowWrap>
            <S.Text>비밀번호</S.Text>
            <Input01
              type="password"
              register={props.register("password")}
              placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
            />
          </S.RowWrap>
        </S.ColumnWrap>
        <Button01 isActive={props.formState.isValid} title="로그인" />
      </S.InputWrap>
    </S.Wrap>
  );
}
