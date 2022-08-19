import { ChangeEvent, useState } from "react";

export function useText() {
  const [text, setText] = useState<string>("");
  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return {
    text,
    onTextChange,
  };
}
