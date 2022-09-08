import styled from "@emotion/styled";

const Button = styled.button`
  width: 195px;
  height: 77px;
  line-height: 77px;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;

export default function Button03(props: any) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
