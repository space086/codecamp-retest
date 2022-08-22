import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

// 엑세스 토큰 재발급해주는
export async function getAccessToken() {
  try {
    // 2-1.refreshToken으로 accessToken을 재발급 받기
    const graphQLClient = new GraphQLClient(
      "https://backend07.codebootcamp.co.kr/graphql14",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
