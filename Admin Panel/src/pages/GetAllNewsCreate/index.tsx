import axios from "axios";
import { useState } from "react";
import { Modal, Switch, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd/es/upload";
import { Input, Button } from "../../components/fields";
import type { UploadFile } from "antd/es/upload/interface";

const index = () => {
  const [file, setFile] = useState<any>("");
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [category, setCategory] = useState<string>("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isReklama, setIsReklama] = useState<boolean>(false);

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
    formData.append("upload_preset", "chat-app");
    setFile(formData);
  };

  const UploadButton = () => {
    return (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Rasm Yuklash</div>
      </div>
    );
  };

  const sendData = () => {
    const object = {
      text,
      title,
      place,
      category,
      isReklama,
      full_image_url: file,
    };

    axios
      .post("https://taknews-backend.uz/api/postnews/", { ...object })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <form className="form" action="#">
        <label className="form__label" htmlFor="#">
          <Input
            type="text"
            value={title}
            placeholder="Title"
            className="form__input"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="form__label" htmlFor="#">
          <TextArea
            value={text}
            placeholder="Text"
            className="form__texterea"
            onChange={(e) => setText(e.target.value)}
          ></TextArea>
        </label>
        <label className="form__label" htmlFor="#">
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
        </label>
        <label htmlFor="#">
          <Switch onChange={(e) => setIsReklama(e)} />
        </label>
        <label className="form__label" htmlFor="#">
          <Input
            type="text"
            value={place}
            placeholder="Place"
            className="form__input"
            onChange={(e) => setPlace(e.target.value)}
          />
        </label>
        <label className="form__label" htmlFor="#">
          <Input
            type="text"
            value={category}
            placeholder="Category"
            className="form__input"
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label className="form__label" htmlFor="#">
          <Input
            type="number"
            className="form__input"
            placeholder="Created By"
          />
        </label>
        <Button onClick={() => sendData()} type="primary">
          Send To Data
        </Button>
      </form>
    </>
  );
};

export default index;
