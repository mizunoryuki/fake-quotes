import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { HeaderContainer } from "./HeaderContainer";

const meta = {
	component: HeaderContainer,
	title: "Header",
	tags: ["autodocs"],
} satisfies Meta<typeof HeaderContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		mode: "quote",
		setMode: fn(),
	},
};

export const SourceMode: Story = {
	args: {
		mode: "source",
		setMode: fn(),
	},
};
