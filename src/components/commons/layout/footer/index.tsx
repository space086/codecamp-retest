import { Wrap, Logo, TextWrap, ColumnWrap, Row } from "./LayoutFooter.styles";

export default function LayoutFooter() {
  return (
    <Wrap>
      <Logo src="/images/logo.png " />
      <TextWrap>
        <ColumnWrap>
          <Row>(주)딩코</Row>
          <Row>대표: 안우엽</Row>
        </ColumnWrap>
        <ColumnWrap>
          <Row>사업자등록번호 717-87-02373</Row>
        </ColumnWrap>
        <ColumnWrap>
          <Row>주소: 서울특별시 구로구 디지털로 300, 패스트파이브</Row>
        </ColumnWrap>
        <ColumnWrap>
          <Row>학원 등록 번호: 제 5845호</Row>
        </ColumnWrap>
        <ColumnWrap>
          <Row>개인정보 처리방침</Row>
          <Row>서비스 이용 약관</Row>
        </ColumnWrap>
        <ColumnWrap>
          <Row>Copyright © 2022. Dingco Corp., Ltd.</Row>
        </ColumnWrap>
      </TextWrap>
    </Wrap>
  );
}
