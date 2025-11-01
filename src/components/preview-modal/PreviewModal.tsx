
type Props = {
	isOpen: boolean;
	onClose: () => void;
}

export function PreviewModal({ isOpen, onClose }: Props) {
	console.log({ isOpen });
	console.log({ onClose });
	return (
		<div>
			<h2>Preview</h2>
			<p>This is a preview modal.</p>
		</div>
	)
}