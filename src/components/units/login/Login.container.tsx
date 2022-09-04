import * as yup from "yup";
import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./Login.queries";
import { useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리 문자열입니다"
    )
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function Login() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: any) => {
    const result = await loginUser({
      variables: { email: data.email, password: data.password },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;

    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    Modal.success({ content: "로그인에 성공하였습니다!" });
    router.push("/");
  };

  return (
    <LoginUI
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
    />
  );
}
