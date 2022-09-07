import { useRouter } from "next/router";
import * as S from "./LayoutNavigation.styles";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMoveToSignUp = () => {
    router.push("/signup");
  };

  const onClickMoveToList = () => {
    router.push("/brand");
  };
  const onClickMoveToMain = () => {
    router.push("/");
  };

  const HIDDEN_NAVIGATION = ["/login", "/signup"];
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  const HIDDEN_NAVIGATION2 = ["/", "/brand"];
  const isHiddenNavigation2 = HIDDEN_NAVIGATION2.includes(router.asPath);

  return (
    <S.Wrap>
      {/* 로그인/회원가입 네비게이션 */}
      {isHiddenNavigation && (
        <S.ContentsWrap2>
          <S.Logo src="/images/logo-w.png" onClick={onClickMoveToMain} />
          <S.LeftWrap2 onClick={onClickMoveToList}>
            <S.Btn2>BRAND</S.Btn2>
            <S.Btn2>CATEGORY</S.Btn2>
            <S.Btn2>LIFE</S.Btn2>
            <S.Btn>BEAUTY</S.Btn>
          </S.LeftWrap2>
          <S.Line2></S.Line2>
          <S.RightWrap2 onClick={onClickMoveToList}>
            <S.Btn2>#STYLE</S.Btn2>
            <S.Btn2>EVENT</S.Btn2>
            <S.Btn2>BEST</S.Btn2>
            <S.RowWrap>
              <S.Btn3 onClick={onClickMoveToSignUp}>회원가입</S.Btn3>
              <S.Btn3>장바구니</S.Btn3>
            </S.RowWrap>
          </S.RightWrap2>
        </S.ContentsWrap2>
      )}

      {/* 메인화면 네비게이션 */}
      {isHiddenNavigation2 && (
        <S.ContentsWrap>
          <S.LeftWrap onClick={onClickMoveToList}>
            <S.Btn>BRAND</S.Btn>
            <S.Btn>CATEGORY</S.Btn>
            <S.Btn>LIFE</S.Btn>
            <S.Btn>BEAUTY</S.Btn>
          </S.LeftWrap>
          <S.Line></S.Line>
          <S.RightWrap onClick={onClickMoveToList}>
            <S.Btn>#STYLE</S.Btn>
            <S.Btn>EVENT</S.Btn>
            <S.Btn>BEST</S.Btn>
          </S.RightWrap>
        </S.ContentsWrap>
      )}
    </S.Wrap>
  );
}
