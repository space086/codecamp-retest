import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

export const Logo = styled.img`
  width: 181px;
  height: 49px;
  margin-left: 75px;
  margin-top: 26px;
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 60px;
  margin-top: 36px;
`;

export const LoginWrap = styled.div`
  cursor: pointer;
`;

export const Point = styled.span`
  text-decoration: underline;
`;

export const LoginOn = styled.span`
  color: #75975e;
  margin-right: 10px;
`;
export const Text = styled.span`
  font-family: "Roboto";
  font-size: 16px;
  margin-left: 66px;
  cursor: pointer;

  :first-child {
    margin-left: 0px;
  }
`;
