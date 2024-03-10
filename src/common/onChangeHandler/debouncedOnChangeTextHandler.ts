import { ChangeEvent } from "react";

type HandledebouncedText = <T extends string>(text: T) => void;
export const onChangeTextHandler = (e: ChangeEvent<HTMLInputElement> , HandledebouncedText: HandledebouncedText) => {
    e.preventDefault();
    HandledebouncedText(e.target.value);
}