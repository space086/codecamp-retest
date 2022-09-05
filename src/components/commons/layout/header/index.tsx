import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  Wrap,
  Logo,
  RightWrap,
  LoginWrap,
  Point,
  LoginOn,
  Text,
} from "./LayoutHeader.styles";
import Head from "next/head";

const FETCH_BOARD_LOGGED_IN = gql`
  query fetchLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export const FETCH_POINT_TRANSCATIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
    }
  }
`;
export default function LayoutHeader() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_LOGGED_IN);

  const { data: PointSumData } = useQuery(FETCH_POINT_TRANSCATIONS);

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
          {data?.fetchUserLoggedIn ? (
            <LoginWrap>
              <LoginOn>{data?.fetchUserLoggedIn.name}</LoginOn>
              <span>님 포인트</span>
              <Point>
                {PointOfLoading?.fetchPointTransactionsOfLoading[0]?.balance} P
              </Point>
              <Head>
                {/* <!-- jQuery --> */}
                <script
                  type="text/javascript"
                  src="https://code.jquery.com/jquery-1.12.4.min.js"
                ></script>
                {/* <!-- iamport.payment.js --> */}
                <script
                  type="text/javascript"
                  src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
                ></script>
              </Head>
            </LoginWrap>
          ) : (
            <Text onClick={onClickMoveToLogin}>로그인</Text>
          )}
        </div>
        {/* <Text onClick={onClickMoveToLogin}>로그인</Text> */}
        <Text onClick={onClickMoveToSignUp}>회원가입</Text>
        <Text>장바구니</Text>
      </RightWrap>
    </Wrap>
  );
}
