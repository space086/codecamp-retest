import styled from "@emotion/styled";

const IdInput = styled.input`
  width: 80%;
  height: 56px;
  padding: 21px 18px;
  background-color: #e9e9e9;
  border: none;
`;

export default function Input02(props) {
  return (
    <IdInput
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
}
