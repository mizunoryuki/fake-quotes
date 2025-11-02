import { useState } from "react";
import { InputForm } from "./InputForm";
import type { InputMode } from "../../types/types";

type Props = {
	mode : InputMode
}

export function InputFormContainer({ mode }: Props) {
	const [quote, setQuote] = useState(""); // 名言
	const [source, setSource] = useState(""); // 出典
	const [imageReady, setImageReady] = useState(false);// 画像生成完了フラグ


	const handleChangeQuote = (newQuote: string) => {
		setQuote(newQuote);
	};
	const handleChangeSource = (newSource: string) => {
		setSource(newSource);
	};

	const handleGenerate = () => {
		if(quote || source){
			// 画像生成処理をここに追加
			console.log("Generating image for quote:", quote, "by source:", source);
			// 生成完了後にフラグを更新
			setImageReady(true);
		} else {
			alert("Please enter both quote and source.");
		}
	}

	return (
		<InputForm quote={quote} source={source} setQuote={handleChangeQuote} setSource={handleChangeSource} onGenerate={handleGenerate} mode={mode} />
	);
}