import { gql, useMutation, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import {
  Wrap,
  Logo,
  RightWrap,
  LoginWrap,
  Charge,
  ChargeName,
  ChargePoint,
  ChargeBtn,
  JoinLogoutBtn,
  Busket,
  Point,
  LoginOn,
  Text,
} from "./LayoutHeader.styles";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Badge, Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState, basketState } from "../../../../commons/store";

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

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
  const [logoutUser] = useMutation(LOGOUT_USER);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [basketItems, setBasketItems] = useRecoilState(basketState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickMoveToMain = () => {
    router.push("/");
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickMoveToSignUp = () => {
    router.push("/signup");
  };

  const onClickJoinLogout = () => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken("");
      localStorage.removeItem("accessToken");
      logoutUser();
      router.push("/login");
    } else {
      router.push("/join");
    }
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <Wrap>
      <Logo src="/images/logo.png" onClick={onClickMoveToMain} />
      <RightWrap>
        <div>
          {data?.fetchUserLoggedIn ? (
            <Charge>
              <ChargeName>{data?.fetchUserLoggedIn.name}님 포인트 </ChargeName>
              <ChargePoint>
                {PointSumData?.fetchPointTransactions[0]?.balance} P
              </ChargePoint>
            </Charge>
          ) : (
            ""
          )}
          {data?.fetchUserLoggedIn ? (
            <ChargeBtn type="primary" onClick={showModal}>
              충전
            </ChargeBtn>
          ) : (
            <Text onClick={onClickMoveToLogin}>로그인</Text>
          )}
        </div>
        <Modal
          title="포인트 충전하기"
          visible={isModalVisible}
          onOK={handleOk}
          onCancel={handleCancel}
        />
        <JoinLogoutBtn onClick={onClickJoinLogout}>
          {data?.fetchUserLoggedIn ? "로그아웃" : "회원가입"}
        </JoinLogoutBtn>
        <Busket>장바구니</Busket>
        <a href="#">
          <Badge count={basketItems.length}></Badge>
        </a>
      </RightWrap>
    </Wrap>
  );
}
