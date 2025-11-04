import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { InputFormContainer } from "./InputFormContainer";

const meta = {
	component: InputFormContainer,
	title: "InputForm",
	tags: ["autodocs"],
} satisfies Meta<typeof InputFormContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		mode: "quote",
		setGeneratedCards: fn(),
	},
};

export const SourceMode: Story = {
	args: {
		mode: "source",
		setGeneratedCards: fn(),
	},
};
