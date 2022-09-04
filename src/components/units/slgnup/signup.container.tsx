import { useRouter } from "next/router";
import SignUpUI from "./signup.presenter";
import { useMutation } from "@apollo/client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { CREATE_USER } from "./signup.queries";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .min(8, "비밀번호는 최소 8자리 이상 입력해 주세요.")
    .max(16, "비밀번호는 최대 16자리로 입력해 주세요.")
    .matches(
      /^.*(?=^.{1,8}$)(?=.*\d)(?=.*[a-zA-Z]).*$/,
      "영문+숫자 조합의 비밀번호를 입력해주세요."
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호를 확인해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  name: yup.string().required("이름은 필수 입력입니다."),
});

export default function SignUp(props: any) {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);
  // const client = useApolloClient();

  const onClickCancel = () => {
    router.push("/");
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      // const accessToken = result.data.joinUser.accessToken;
      console.log(result);
      console.log(data);
      // Modal.success({ content: "회원가입 성공하였습니다!" });
      alert("회원가입에 성공하였습니다!!");
      router.push("/");
    } catch (error) {
      console.log(error);
      Modal.error({ content: error.message });
    }
  };

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <SignUpUI
      onClickSubmit={onClickSubmit}
      onClickCancel={onClickCancel}
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
    />
  );
}
