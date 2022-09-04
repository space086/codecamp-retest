import styled from "@emotion/styled";

const Button = styled.button`
  width: 186px;
  height: 56px;
  line-height: 56px;
  background-color: #000;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

export default function Button02(props: any) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
