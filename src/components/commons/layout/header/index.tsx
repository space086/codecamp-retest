import { useRouter } from "next/router";
import { Wrap, Logo, RightWrap, Text } from "./LayoutHeader.styles";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveToMain = () => {
    router.push("/");
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickMoveToSignUp = () => {
    router.push("/signup");
  };
  return (
    <Wrap>
      <Logo src="/images/logo.png" onClick={onClickMoveToMain} />
      <RightWrap>
        <Text onClick={onClickMoveToLogin}>로그인</Text>
        <Text onClick={onClickMoveToSignUp}>회원가입</Text>
        <Text>장바구니</Text>
      </RightWrap>
    </Wrap>
  );
}
