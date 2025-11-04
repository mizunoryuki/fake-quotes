import type { Meta, StoryObj } from "@storybook/react-vite";
import { QuoteCardContainer } from "./QuoteCardContainer";

const meta = {
	component: QuoteCardContainer,
	title: "QuoteCard",
	tags: ["autodocs"],
} satisfies Meta<typeof QuoteCardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		quote: "夢を見続けることが、人生を豊かにする。",
		source: "Franklin D. Roosevelt",
	},
};
