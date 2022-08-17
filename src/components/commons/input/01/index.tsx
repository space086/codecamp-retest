
import styled from "@emotion/styled";

const IdInput = styled.input`
  width: 600px;
  height: 77px;
  padding: 29px 41px;
  background-color: #f6f6f6;
  border: 1px solid #ccc;
  border-radius: 10px;
`

export default function Input01(props) {
  return <IdInput type={props.type} {...props.register} placeholder={props.placeholder} />;
}
