import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { Modal } from "antd";

const Wrapper = styled.div``;

const PayMentWrapper = styled.div`
  width: 464px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const MoneyButton = styled.div`
  background-color: #2277d8;
  color: #ffffff;
  width: 300px;
  height: 40px;
  text-align: center;
  padding-top: 8px;
  margin-top: 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  cursor: pointer;
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
  padding: 30px 0px 10px 0px;
`;

const SubTitle = styled.div`
  padding-bottom: 20px;
`;

const Contents = styled.input`
  width: 50%;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #2277d2;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #848484;

  &:focus {
    outline: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  left: 0;
  top: 0;
  opacity: 20%;
  background-color: #cccccc;
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

export default function ChargePage(props: any) {
  const [chargePoint] = useMutation(CREATE_POINT_TRANSCATION_OF_LOADING);
  const [point, setPoint] = useState();

  const handleCancel = () => {
    props.setIsCharge(false);
  };

  const onChangeDonate = (event: any) => {
    setPoint(event?.target.value);
  };

  const requestPay = (data: any) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card", // 가상결제 vbanks
        name: "울보훈이",
        amount: data.price?.replace("원", ""), // 가격
        buyer_email: "ehlee086@gmail.com",
        buyer_name: "훈이",
        buyer_tel: "010-1111-4242",
        buyer_addr: "서울특별시 강남구 신사동",
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

  const onClickCharge = async () => {
    console.log(point);

    try {
      await donatePoint({
        variables: {
          donateInput: {
            novelID: props.novelID,
            point: Number(point),
          },
        },
      });
      Modal.success({ content: "후원감사합니다" });
      props.setIsDonate(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Wrapper>
      <Overlay onClick={handleCancel} />
      <PayMentWrapper>
        <CancelImg onClick={handleCancel} src="/modal/delete.png" />
        <Title>작가와 소설을 후원하시겠습니까?</Title>
        <SubTitle>후원 금액을 입력해주세요</SubTitle>
        <Contents type="text" onChange={onChangeDonate} />
        <MoneyButton onClick={onClickDonate}>후원하기</MoneyButton>
      </PayMentWrapper>
    </Wrapper>
  );
}
