import { TextField } from "@mui/material";
import { Dispatch, KeyboardEvent, useState } from "react";

type TMultipleSelectProps = {
  label: string;
  placeholder?: string;
  setValue: Dispatch<React.SetStateAction<string[]>>;
};

const MultipleSelect = ({
  label,
  placeholder,
  setValue,
}: TMultipleSelectProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setValue((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <p className="mb-3">
        {label} <span className="text-red-500">*</span>
      </p>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        placeholder={placeholder}
        value={inputValue}
        fullWidth
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default MultipleSelect;
