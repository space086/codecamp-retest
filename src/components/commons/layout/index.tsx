import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const Wrap = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`;

export default function Layout(props: any) {
  const router = useRouter();

  const HIDDEN_HEADER = ["/login/", "/signup/"];
  const HIDDEN_NAVIGATION = ["/login/", "/signup/"];
  const HIDDEN_BANNER = ["/login/", "/signup/"];
  const HIDDEN_FOOTER = ["/login/", "/signup/"];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrap>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenNavigation && <LayoutNavigation />}
      {!isHiddenBanner && <LayoutBanner />}
      <div>{props.children}</div>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrap>
  );
}
