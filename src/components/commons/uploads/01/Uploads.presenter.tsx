import { UploadImage, UploadButton, UploadFileHidden } from "./Uploads.styles";

export default function UploadUI(props: any) {
  return (
    <div>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
      )}
      <div>
        <UploadFileHidden
          type="file"
          ref={props.fileRef}
          onChange={props.onChangeFile}
        />
      </div>
    </div>
  );
}
