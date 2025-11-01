import { useState } from "react";
import { InputForm } from "./InputForm";

export function InputFormContainer() {
	const [quote, setQuote] = useState(""); // 名言
	const [author, setAuthor] = useState(""); // 著者
	const [imageReady, setImageReady] = useState(false);// 画像生成完了フラグ


	const handleChangeQuote = (newQuote: string) => {
		setQuote(newQuote);
	};
	const handleChangeAuthor = (newAuthor: string) => {
		setAuthor(newAuthor);
	};

	const handleGenerate = () => {
		if(quote || author){
			// 画像生成処理をここに追加
			console.log("Generating image for quote:", quote, "by author:", author);
			// 生成完了後にフラグを更新
			setImageReady(true);
		} else {
			alert("Please enter both quote and author.");
		}
	}

	return (
		<InputForm quote={quote} author={author} setQuote={handleChangeQuote} setAuthor={handleChangeAuthor} onGenerate={handleGenerate} />
	);
}