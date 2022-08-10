import {
  Wrap,
  ContentsWrap,
  LeftWrap,
  Btn,
  Line,
  RightWrap,
} from "./LayoutNavigation.styles";

export default function LayoutNavigation() {
  return (
    <Wrap>
      <ContentsWrap>
        <LeftWrap>
          <Btn>BRAND</Btn>
          <Btn>CATEGORY</Btn>
          <Btn>LIFE</Btn>
          <Btn>BEAUTY</Btn>
        </LeftWrap>
        <Line></Line>
        <RightWrap>
          <Btn>#STYLE</Btn>
          <Btn>EVENT</Btn>
        </RightWrap>
      </ContentsWrap>
    </Wrap>
  );
}
