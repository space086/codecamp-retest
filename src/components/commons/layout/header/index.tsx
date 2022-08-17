import { useRouter } from "next/router";
import { Wrap, Logo, RightWrap, Text } from "./LayoutHeader.styles";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveToLogin = () => {
    router.push("/login");
  };
  return (
    <Wrap>
      <Logo src="/images/logo.png" />
      <RightWrap>
        <Text onClick={onClickMoveToLogin}>로그인</Text>
        <Text>회원가입</Text>
        <Text>장바구니</Text>
      </RightWrap>
    </Wrap>
  );
}
