import { TextField } from "@mui/material";
import { Dispatch, KeyboardEvent, useState } from "react";

type TMultipleSelectProps = {
  label: string;
  placeholder?: string;
  value: string[];
  setValue: Dispatch<React.SetStateAction<string[]>>;
};

const MultipleSelect = ({
  label,
  placeholder,
  value,
  setValue,
}: TMultipleSelectProps) => {
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const isValueAlreadyExist = value.find((val) => val === inputValue);

      if (!isValueAlreadyExist) {
        setValue((prev) => [...prev, inputValue]);
        setInputValue("");
        setShowError(false);
      } else {
        setShowError(true);
      }
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
      {showError && (
        <p className="mt-1 text-red-500 text-xs">This value already exists</p>
      )}
    </div>
  );
};

export default MultipleSelect;
