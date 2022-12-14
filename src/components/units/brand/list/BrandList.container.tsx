import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BrandListUI from "./BrandList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./BrandList.queries";

export default function BrandList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: fetchUseditemsOfTheBest } = useQuery(
    FETCH_USED_ITEMS_OF_THE_BEST
  );

  // 상품 등록페이지로 이동
  const onClickMoveToMarketsNew = () => {
    router.push("/brand/new");
  };

  const onClickMoveToMarketsDetail = (el: any) => () => {
    onClickRow(el);
    router.push(`/brand/${el._id}`);
  };

  const onClickRow = (el: any) => {
    const todays = JSON.parse(localStorage.getItem("today") || "[]");

    const temp = todays.filter((todaysEl: any) => todaysEl._id === el._id);
    if (temp.length === 1) {
      return;
    }

    if (todays.length === 3) {
      todays.splice(0, 1);
    }

    const { __typename, ...newEl } = el;
    todays.push(newEl);
    localStorage.setItem("today", JSON.stringify(todays));
  };

  const loadFunc = () => {
    if (!data) return; // 데이터가 없으면 종료해라

    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 5) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <BrandListUI
      data={data}
      bestList={fetchUseditemsOfTheBest}
      onClickMoveToMarketsNew={onClickMoveToMarketsNew}
      onClickMoveToMarketsDetail={onClickMoveToMarketsDetail}
      loadMore={loadFunc}
    />
  );
}
