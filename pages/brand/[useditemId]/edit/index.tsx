import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BrandWrite from "../../../../src/components/units/brand/new/BrandWrite.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      seller {
        name
        createdAt
      }
      useditemAddress {
        address
        addressDetail
        lat
        lng
        zipcode
      }
    }
  }
`;

export default function BrandEditPage() {
  const router = useRouter();
  const { data, loading } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return loading ? <></> : <BrandWrite isEdit={true} data={data} />;
}
