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

export const NoQuote: Story = {
	args: {
		quote: "",
		source: "Albert Einstein",
	},
};

export const LongQuote: Story = {
	args: {
		quote:
			"人生は一度きり。だからこそ、自分の夢を追い求め、情熱を持って生きることが大切だ。困難に直面しても、諦めずに前進し続けることで、真の幸福と成功を手に入れることができる。",
		source: "Albert Einstein",
	},
};

export const NoSource: Story = {
	args: {
		quote: "困難の中にこそ、チャンスがある。",
		source: "",
	},
};

export const LongSource: Story = {
	args: {
		quote:
			"目標を達成することで得られるものよりも、達成することで自分が成長することの方が重要だ。",
		source:
			"Zig Ziglar, Motivational Speaker and Author of 'See You at the Top'",
	},
};

export const LongQuoteAndSource: Story = {
	args: {
		quote:
			"人生は一度きり。だからこそ、自分の夢を追い求め、情熱を持って生きることが大切だ。困難に直面しても、諦めずに前進し続けることで、真の幸福と成功を手に入れることができる。",
		source:
			"Zig Ziglar, Motivational Speaker and Author of 'See You at the Top'",
	},
};
