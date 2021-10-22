import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

export default function useHideOnClickOutside<T extends HTMLElement>(
  initialHiddenState: boolean
): [boolean, Dispatch<SetStateAction<boolean>>, RefObject<T>] {
  const elementRef = useRef<T>(null);
  const [isHidden, setIsHidden] = useState(initialHiddenState);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event: any) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setIsHidden(true);
    }
  };

  return [isHidden, setIsHidden, elementRef];
}
