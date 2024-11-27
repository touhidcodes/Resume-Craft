import { Dispatch } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type TTextEditorProps = {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
};

const TextEditor = ({ value, setValue }: TTextEditorProps) => {
  const handleChange = (value: string) => {
    setValue(value);
  };
  return (
    <ReactQuill
      value={value}
      theme="snow"
      onChange={handleChange}
      className="h-60"
      modules={{
        toolbar: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link"],
          ["clean"],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
      ]}
    />
  );
};

export default TextEditor;
