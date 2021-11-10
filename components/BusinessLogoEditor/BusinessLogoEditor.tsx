import React from "react";
import AvatarEditor from "react-avatar-editor";
import Button from "../Button";
import Slider from "../Slider";
import { useRouter } from "next/router";
import { Container, BottomSection, ErrorText, ButtonContainer } from "./styles";

export interface Props {
  onClose: () => void;
}

const BusinessLogoEditor: React.FC<Props> = ({ onClose }) => {
  const [scaleValue, setScaleValue] = React.useState(1);
  const [file, setFile] = React.useState<any>(null);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const editor = React.useRef<any>(null);
  const uploadInput = React.useRef<any>(null);
  const router = useRouter();

  const { business_id } = router.query;

  const handleUpload = (ev: any) => {
    let file = uploadInput.current.files[0];
    setFile(file);
  };

  const onClickSave = async () => {
    if (editor && file !== null) {
      setLoading(true);
      setErrorMsg("");

      const data = {
        base64: editor.current.getImage().toDataURL(),
        businessId: business_id,
      };

      const rootUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3001/"
          : "https://www.smsasdflkjasdf.co/";

      fetch(rootUrl + "api/picture", {
        method: "POST",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          setLoading(false);
          onClose();
        })
        .catch(() => {
          setLoading(false);
          setErrorMsg(
            "There was an error uploading your profile picture. Please try again later."
          );
        });
    } else {
      setErrorMsg("Please select an image.");
    }
  };

  return (
    <Container>
      <BottomSection>
        <AvatarEditor
          ref={editor}
          image={file}
          width={250}
          height={250}
          border={10}
          borderRadius={10000}
          color={[0, 0, 0, 0.5]} // RGBA
          scale={scaleValue}
          rotate={0}
        />
        <Slider
          value={scaleValue}
          onChange={(event: any) => setScaleValue(event.target.value)}
        />
        <input
          onChange={handleUpload}
          ref={uploadInput}
          type="file"
          style={{ textAlign: "right" }}
        />
        <ButtonContainer>
          <Button invert onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClickSave} style={{ marginLeft: 15 }}>
            Save
          </Button>
        </ButtonContainer>
        {errorMsg.length > 0 ? <ErrorText>{errorMsg}</ErrorText> : <div />}
      </BottomSection>
    </Container>
  );
};

export default BusinessLogoEditor;
