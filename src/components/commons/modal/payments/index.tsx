import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Head from "next/head";

import { useState } from "react";
import { Modal } from "antd";

const Wrapper = styled.div``;

const PayMentWrapper = styled.div`
  width: 464px;
  height: 316px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #cccccc;
  z-index: 50;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const CancelImg = styled.img`
  width: 20px;
  align-self: flex-end;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 29px;
  text-align: center;
  padding: 40px 0px 10px 0px;
`;

const Select = styled.select`
  width: 82.75%;
  border: none;
  border-bottom: 2px solid #000;
  margin: 40px auto;
  padding-bottom: 14px;
  font-size: 1rem;
  color: #848484;

  &:focus {
    outline: none;
  }

  :first-child {
    color: #828282;
  }
`;

const Option = styled.option`
  display: block;
  position: absolute;
  background-color: #fff;
`;

const MoneyButton = styled.div`
  background-color: ${(props) => (props.isActive ? "#000" : "#bdbdbd")};
  color: #ffffff;
  width: 82.75%;
  text-align: center;
  padding: 14px 0px;
  margin-bottom: 40px;
  border-radius: 10px;
  cursor: pointer;
`;
const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const CREATE_POINT_TRANSCATION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ChargePage(props: any) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  const [chargePoint] = useMutation(CREATE_POINT_TRANSCATION_OF_LOADING);
  const [isActive, setIsActive] = useState(false);

  const selectList = ["포인트 선택", "100", "500", "2000", "5000"];
  const [Selected, setSelected] = useState("포인트 선택");

  const handleSelect = (e) => {
    setSelected(e.target.value);
    setIsActive(true);
  };

  const handleCancel = () => {
    props.setIsCharge(false);
  };

  const onClickCharge = () => {
    console.log(Selected);
    console.log(data.fetchUserLoggedIn?.email);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card", // 가상결제 vbanks
        name: "포인트 충전",
        amount: Selected, // 가격
        buyer_email: data.fetchUserLoggedIn?.email,
        buyer_name: data.fetchUserLoggedIn?.name,
        buyer_tel: "010-1111-4242",
        buyer_address: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/28-01-payment"
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);

          try {
            chargePoint({
              variables: { impUid: rsp?.imp_uid },
            });
            Modal.success({ content: "결제 완료" });
            props.setPoint(false);
          } catch (error) {
            Modal.error({ content: error.message });
          }
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
          // router.push('/markets/new')
        }
      }
    );
  };

  // const onClickCharge = async () => {
  //   console.log(point);

  //   try {
  //     await donatePoint({
  //       variables: {
  //         donateInput: {
  //           novelID: props.novelID,
  //           point: Number(point),
  //         },
  //       },
  //     });
  //     Modal.success({ content: "후원감사합니다" });
  //     props.setIsDonate(false);
  //   } catch (error: any) {
  //     Modal.error({ content: error.message });
  //   }
  // };

  return (
    <div>
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
      <Wrapper>
        <Overlay onClick={handleCancel} />
        <PayMentWrapper>
          <CancelImg onClick={handleCancel} src="/images/delete.png" />
          <Title>충전하실 금액을 선택해주세요!</Title>

          <Select onChange={handleSelect} value={Selected}>
            {selectList.map((item, index) => (
              <Option
                value={item}
                key={item}
                disabled={index === 0 ? true : false}
              >
                {item}
              </Option>
            ))}
          </Select>
          <MoneyButton onClick={onClickCharge} isActive={isActive}>
            충전하기
          </MoneyButton>
        </PayMentWrapper>
      </Wrapper>
    </div>
  );
}
