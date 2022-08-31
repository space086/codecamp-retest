import { Modal } from "antd";
import * as S from "./BrandWrite.styles";
import DaumPostcode from "react-daum-postcode";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
// import Upload from "../../../../components/commons/uploads/01/Uploads.container";
import { v4 as uuidv4 } from "uuid";
import Input01 from "../../../commons/input/01";
import Button01 from "../../../commons/button/01";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function BrandWriteUI(props: any) {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.FormWrap>
          <S.MainTitle>{props.isEdit ? "상품 수정" : "상품 등록"}</S.MainTitle>
          <S.Line></S.Line>
          <form
            onSubmit={props.handleSubmit(
              props.isEdit ? props.onClickUpdate : props.onClickSubmit
            )}
          >
            <S.Label>상품명</S.Label>
            <Input01
              type="text"
              placeholder="상품명을 작성해주세요."
              register={props.register("name")}
              defaultValue={props.data?.fetchUseditem.name}
            />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
            <S.Label>상품요약</S.Label>
            <Input01
              type="text"
              placeholder="상품요약을 작성해주세요."
              register={props.register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <S.Error>{props.formState.errors.remarks?.message}</S.Error>
            <S.EditorWrap>
              <S.Label>상품내용</S.Label>
              <S.ColumnWrap>
                <ReactQuill
                  style={{ width: "1117px", height: "361px", display: "block" }}
                  onChange={props.onChangeContents}
                  defaultValue={props.data?.fetchUseditem.contents}
                  modules={props.modules}
                  formats={props.formats}
                  placeholder={"내용을 입력해주세요"}
                />
                <S.ContentsError>
                  {props.formState.errors.contents?.message}
                </S.ContentsError>
              </S.ColumnWrap>
            </S.EditorWrap>
            <S.Label>판매가격</S.Label>
            <Input01
              type="text"
              placeholder="상품가격을 입력해 주세요"
              register={props.register("price")}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <S.Error>{props.formState.errors.price?.message}</S.Error>
            <S.DealWrap>
              <S.MapLabel>거래위치</S.MapLabel>
              <S.MapWrap>
                <S.Map id="map"></S.Map>
                <S.PositionWrap>
                  <S.AddressWrap>
                    <S.Postcode
                      placeholder="07250"
                      readOnly
                      {...props.register("useditemAddress.zipcode")}
                      value={
                        props.zipcode ||
                        props.data?.fetchUseditem.useditemAddress?.zipcode
                      }
                    />
                    <S.AddressBtn
                      onClick={props.onClickAddressSearch}
                      type="button"
                    >
                      우편번호 검색
                    </S.AddressBtn>
                  </S.AddressWrap>
                  <S.AddressDetail
                    readOnly
                    {...props.register("useditemAddress.address")}
                    value={
                      props.address ||
                      props.data?.fetchUseditem.useditemAddress?.address
                    }
                  />
                  <S.AddressDetail
                    {...props.register("useditemAddress.addressDetail")}
                    // onChange={props.onChangeAddressDetail}
                    defaultValue={
                      props.data?.fetchUseditem.useditemAddress?.addressDetail
                    }
                  />
                </S.PositionWrap>
              </S.MapWrap>
            </S.DealWrap>
            <S.Label>사진첨부</S.Label>
            <S.ImageUploadWrap>
              {/* {new Array(3).fill(1).map((el: any, index: any) => (
                <Upload
                  key={uuidv4()}
                  index={index}
                  // fileUrl={el}
                  fileUrls={props.fileUrls}
                  type="button"
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))} */}
            </S.ImageUploadWrap>
            <S.Line></S.Line>
            <S.BtnWrap>
              <S.CancelBtn onClick={props.onClickCancle} type="button">
                취소
              </S.CancelBtn>
              <Button01
                isActive={props.formState.isValid}
                title={props.isEdit ? "수정" : "등록"}
                type="submit"
              />
            </S.BtnWrap>
          </form>
        </S.FormWrap>
      </S.Wrapper>
    </>
  );
}
