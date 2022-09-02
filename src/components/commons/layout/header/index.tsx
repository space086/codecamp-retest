import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Wrap, Logo, RightWrap, Text } from "./LayoutHeader.styles";

const FETCH_BOARD_LOGGED_IN = gql`
  query fetchLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LayoutHeader() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_LOGGED_IN);

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
        <div>
          <div>
            {data?.fetchUserLoggedIn
              ? `${data?.fetchUserLoggedIn.name}님 환영합니다.`
              : ""}
          </div>
          <Text onClick={onClickMoveToLogin}>로그인</Text>
        </div>
        {/* <Text onClick={onClickMoveToLogin}>로그인</Text> */}
        <Text onClick={onClickMoveToSignUp}>회원가입</Text>
        <Text>장바구니</Text>
      </RightWrap>
    </Wrap>
  );
}
