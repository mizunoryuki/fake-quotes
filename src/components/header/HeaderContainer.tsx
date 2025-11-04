import { useCallback } from "react";
import type { InputMode } from "../../types/types";
import { Header } from "./Header";

type Props = {
	mode: InputMode;
	setMode: (newMode: InputMode) => void;
};

export function HeaderContainer({ mode, setMode }: Props) {
	const handleSetMode = useCallback(
		(newMode: InputMode) => {
			setMode(newMode);
		},
		[setMode],
	);

	return <Header mode={mode} setMode={handleSetMode} />;
}
