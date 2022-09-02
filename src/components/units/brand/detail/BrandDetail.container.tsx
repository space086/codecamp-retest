import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BrandDetailUI from "./BrandDetail.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./BrandDetail.queries";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { basketState } from "../../../../commons/store";

// 카카오 지도
declare const window: typeof globalThis & {
  kakao: any;
};

export default function BrandDetail() {
  const router = useRouter();

  // 중고상품 (한개) 조회
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  // console.log(data)

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const [basketItems, setBasketItems] = useRecoilState(basketState);

  // 삭제 뮤테이션
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  // 목록으로 버튼
  const onClickMoveToMarketsList = () => {
    router.push("/markets");
  };

  const onClickPickBtn = () => {};

  // 수정하기 버튼
  const onClickMoveToMarketsEdit = () => {
    router.push(`/markets/${router.query.useditemId}/edit`);
  };

  const onClickbaskets = () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter(
      (basketEl) => basketEl._id === data?.fetchUseditem._id
    ); // [{...}]
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      return;
    }

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = data?.fetchUseditem._id;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setBasketItems(baskets);
  };

  const onClickMarketsDelete = () => {
    deleteUseditem({
      variables: { useditemId: router.query.useditemId },
    });
    // console.log(router.query.useditemId)
    router.push("/markets/new");
    Modal.success({ content: "상품을 삭제했습니다!" });
  };

  // 카카오 지도
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=b22fcdd40598d9e0b81b04d7a2e012cd&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4848, 126.8967), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress.address !== ""
            ? data?.fetchUseditem.useditemAddress.address
            : "제주특별자치도 제주시 첨단로 242",
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              console.log(coords);

              console.log(coords);
              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              setLat(coords.Ma);
              setLng(coords.La);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [data?.fetchUseditem.useditemAddress?.address]);

  return (
    <BrandDetailUI
      data={data}
      onClickMoveToMarketsList={onClickMoveToMarketsList}
      onClickMoveToMarketsEdit={onClickMoveToMarketsEdit}
      onClickMarketsDelete={onClickMarketsDelete}
      onClickbaskets={onClickbaskets}
      // onClickUpdate={onClickUpdate}
      // onClickLike={onClickLike}
    />
  );
}
