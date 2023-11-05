import { useState } from "react";
import { Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

const index = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }: any) => {
    setFileList(newFileList);
    const formData = new FormData();
    formData.append("file", newFileList[0]);
  };

  const UploadButton = () => {
    return (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Rasm Yuklash</div>
      </div>
    );
  };
  return (
    <>
      <Upload
        fileList={fileList}
        listType="picture-card"
        onChange={handleChange}
        onPreview={handlePreview}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      >
        {fileList.length >= 8 ? null : <UploadButton />}
      </Upload>
      <Modal
        footer={null}
        open={previewOpen}
        title={previewTitle}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default index;
