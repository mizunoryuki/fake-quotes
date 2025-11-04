import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { QuoteCardListTabContainer } from "./QuoteCardListTabContainer";

const meta = {
	component: QuoteCardListTabContainer,
	title: "QuoteCardListTab",
	tags: ["autodocs"],
} satisfies Meta<typeof QuoteCardListTabContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		generatedCards: [
			{
				quote: "夢を見続けることが、人生を豊かにする。",
				source: "Franklin D. Roosevelt",
			},
			{
				quote: "困難の中にこそ、チャンスがある。",
				source: "Albert Einstein",
			},
			{
				quote:
					"目標を達成することで得られるものよりも、達成することで自分が成長することの方が重要だ。",
				source: "Zig Ziglar",
			},
		],
		isOpen: false,
		setIsOpen: fn(),
	},
};

export const Opened: Story = {
	args: {
		generatedCards: [
			{
				quote: "夢を見続けることが、人生を豊かにする。",
				source: "Franklin D. Roosevelt",
			},
			{
				quote: "困難の中にこそ、チャンスがある。",
				source: "Albert Einstein",
			},
			{
				quote:
					"目標を達成することで得られるものよりも、達成することで自分が成長することの方が重要だ。",
				source: "Zig Ziglar",
			},
		],
		isOpen: true,
		setIsOpen: fn(),
	},
};
