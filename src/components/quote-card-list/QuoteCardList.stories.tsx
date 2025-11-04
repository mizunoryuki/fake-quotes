import type { Meta, StoryObj } from "@storybook/react-vite";
import { QuoteCardListContainer } from "./QuoteCardListContainer";

const meta = {
	component: QuoteCardListContainer,
	title: "QuoteCardList",
	tags: ["autodocs"],
} satisfies Meta<typeof QuoteCardListContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		generatedCards: [
			{
				quote:
					"The only limit to our realization of tomorrow is our doubts of today.",
				source: "Franklin D. Roosevelt",
			},
			{
				quote: "In the middle of every difficulty lies opportunity.",
				source: "Albert Einstein",
			},
			{
				quote:
					"What you get by achieving your goals is not as important as what you become by achieving your goals.",
				source: "Zig Ziglar",
			},
		],
	},
};
