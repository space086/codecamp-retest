import { useMutation } from "@apollo/client";
import { useRef, ChangeEvent } from "react";

import UploadUI from "./Uploads.presenter";

import { UPLOAD_FILE } from "./Uploads.queries";
import { Modal } from "antd";

export default function Upload(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  console.log(props.fileUrls);
  console.log(props.index);
  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <UploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrls[props.index]}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
