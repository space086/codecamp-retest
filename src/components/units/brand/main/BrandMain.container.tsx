import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BrandListUI from "./BrandMain.presenter";
import { FETCH_USED_ITEMS } from "./BrandMain.queries";

export default function BrandMain() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const onClickMoveToMarketsDetail = (el: any) => () => {
    onClickRow(el);
    router.push(`/brand/${el._id}`);
  };

  const onClickRow = (el: any) => {
    const todays = JSON.parse(localStorage.getItem("today") || "[]");

    const temp = todays.filter((todaysEl: any) => todaysEl._id === el._id);
    if (temp.length === 1) {
      alert("asdaf");
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
      onClickMoveToMarketsDetail={onClickMoveToMarketsDetail}
      loadMore={loadFunc}
    />
  );
}
