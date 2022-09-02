import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useAuth } from "../../../commons/hooks/useAuth";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import BrandWriteUI from "./BrandWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./BrandWrite.queries";

// 카카오 지도
declare const window: typeof globalThis & {
  kakao: any;
};

// 상품 등록 에러 검증
export const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력입니다."),
  remarks: yup.string().required("한 줄 요약은 필수 입력입니다."),
  contents: yup.string(),
  // .required("내용 입력은 필수 사항입니다."),
  price: yup
    .number()
    .typeError("숫자만 입력해 주세요.")
    .required("가격 입력은 필수 사항입니다."),
});

export default function BrandWrite(props: any) {
  // 권한분기
  // useAuth();

  const router = useRouter();

  // 위도, 경도 스테이트
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const [isOpen, setIsOpen] = useState(false);

  // 주소
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  // 이미지파일 등록 스테이트
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // 주소 검색
  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  // 우편번호 setState
  // const onCompleteZipcode = (data) => {
  //   // setValue("useditemAddress.zipcode",data.zipcode)
  //   console.log(data)
  // }

  const onClickCancle = () => {
    router.push("/markets");
  };

  // 주소 검색 성공하면 값을 바꿔주고
  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setValue("useditemAddress.zipcode", data.zonecode);
    setValue("useditemAddress.address", data.address);
    setIsOpen(false);
  };

  // 등록하기 버튼
  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            images: fileUrls,
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address,
              addressDetail: data.useditemAddress.addressDetail,
              lat,
              lng,
            },
          },
        },
      });
      Modal.success({ content: "상품을 등록했습니다!!" });
      console.log(result);
      router.push(`/markets/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error);
      Modal.error({ content: error.message });
    }
  };

  // 유즈폼
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 내용 변경
  const onChangeContents = (value: string) => {
    // console.log(value)

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form 에 알려주는 기능!
    trigger("contents");
  };

  // 카카오 지도 시작 //
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
          props.data?.fetchUseditem.useditemAddress?.address === ""
            ? "제주특별자치도 제주시 첨단로 242"
            : props.data?.fetchUseditem.useditemAddress?.address || address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // console.log(coords)
              // console.log(address)
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
  }, [address]);

  useEffect(() => {
    onChangeContents(props.data?.fetchUseditem.contents);
  }, []);

  // console.log(props.data)

  // 수정하기
  const onClickUpdate = async (data: any) => {
    console.log(data);
    console.log(fileUrls);
    // const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(props.data.fetchUseditem.images);
    // const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !data.name &&
      !data.remarks &&
      !data.contents &&
      !data.price &&
      !data.tags &&
      !data.fileUrls
    ) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }

    // 게시글 수정 제목이랑 내용만 고칠 수 있게
    const updateUseditemInput: any = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = data.price;
    // if (data.tags) updateUseditemInput.tags = data.tags;
    if (address || addressDetail || lat || lng) {
      updateUseditemInput.useditemAddress = {};
      if (data.useditemAddress.address)
        updateUseditemInput.useditemAddress.address =
          data.useditemAddress.address;
      if (data.useditemAddress.addressDetail)
        updateUseditemInput.useditemAddress.addressDetail =
          data.useditemAddress.addressDetail;
      if (lat) updateUseditemInput.useditemAddress.lat = lat;
      if (lng) updateUseditemInput.useditemAddress.lng = lng;
    }
    if (fileUrls) updateUseditemInput.images = fileUrls;

    try {
      await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput, // updateUseditmeInput{
          // name :  data.name
        },
      });
      Modal.success({ content: "상품 수정에 성공하였습니다!" });
      router.push(`/markets/${router.query.useditemId}`);
    } catch (error) {
      // Modal.error({ content: error.message })
      console.log(error);
    }
  };

  // // 이미지 파일 수정
  const onChangeFileUrls = (fileUrl: any, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  return (
    <BrandWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      handleSubmit={handleSubmit}
      onChangeFileUrls={onChangeFileUrls}
      formState={formState}
      register={register}
      fileUrls={fileUrls}
      onChangeContents={onChangeContents}
      isOpen={isOpen}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickCancle={onClickCancle}
      data={props.data}
      isEdit={props.isEdit}
    />
  );
}
