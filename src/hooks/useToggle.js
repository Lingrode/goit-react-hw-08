import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  return { isOpen, open, close };
};

export default useToggle;
