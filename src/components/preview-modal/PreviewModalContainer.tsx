import { PreviewModal } from "./PreviewModal";

type Props = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export function PreviewModalContainer({isOpen, setIsOpen}: Props) {
	if(!isOpen) {
		return null;
	}

	const handleClose = () => {
		setIsOpen(false);
	}

  return (
	<PreviewModal isOpen={isOpen} onClose={handleClose} />
  );
}