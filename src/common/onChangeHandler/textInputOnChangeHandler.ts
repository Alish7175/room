import { SetStateAction } from "react";
import _ from "lodash.debounce";

function textInputOnChangeHandler(event: React.ChangeEvent<HTMLInputElement>, setState: SetStateAction<any>) {
    event.target && setState(event?.target?.value);
}

export default textInputOnChangeHandler;