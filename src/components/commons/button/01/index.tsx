import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #000;
  color: white;
  border: none;
  width: 186px;
  height: 136px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export default function Button01(props: any) {
  return <Button type={props.type}>{props.title}</Button>;
}
