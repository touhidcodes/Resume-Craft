import { TextField } from "@mui/material";
import { Dispatch, KeyboardEvent, useState } from "react";

type TMultipleSelectProps = {
  label: string;
  setValue: Dispatch<React.SetStateAction<string[]>>;
};

const MultipleSelect = ({ label, setValue }: TMultipleSelectProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setValue((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={inputValue}
        fullWidth
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default MultipleSelect;
