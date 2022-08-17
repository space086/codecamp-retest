import styled from "@emotion/styled";

const Button = styled.button`
  background-color: #FFD600;
  border: none;
  width: 600px;
  height: 88px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
`;

export default function Button01(props:any) {
  return <Button type={props.type}>{props.title}</Button>;
}
