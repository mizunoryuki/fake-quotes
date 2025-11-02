
import type { InputMode } from "../../types/types";
import { Header } from "./Header";

type Props = {
	mode: InputMode;
	setMode: (newMode: InputMode) => void;
}

export function HeaderContainer({ mode, setMode }: Props) {
	return (
		<Header mode={mode} setMode={setMode} />
	);
}
