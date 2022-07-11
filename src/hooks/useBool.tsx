import { useState, useCallback } from "react";

export const useBool = () => {
  const [isOpne, setIsOpen] = useState(false);

  const onClickOpneHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  console.log("hook render");

  return { isOpne, onClickOpneHandler };
};
