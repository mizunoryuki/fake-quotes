import { GoogleGenAI } from "@google/genai";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
	console.error(
		"GEMINI_API_KEY is not set; please set it in your environment.",
	);
	process.exit(1);
}
const genAI = new GoogleGenAI({});

app.post("/api/generate", async (req, res) => {
	const { mode, inputText } = req.body;

	let prompt = "";
	if (mode === "quote") {
		prompt = `
		あなたは架空の文化学者です。
		次の名言にふさわしい架空の出典や著者名を10個提案してください。
		現実の人物や作品は避けてください。
		
		名言：
		「${inputText}」
		
		【出力フォーマット】
		- 各要素は出典または著者名のみ
		- 番号や説明文を含めない
		
		出力例：
		
		  民明書房『架空思想史』より
		  哲学者 レオン・ガルシア
		  架空雑誌『量子時代』特集号
		
`;
	} else if (mode === "source") {
		prompt = `
		あなたは架空の名言作家です。
		次の出典や人物にふさわしい架空の名言を10個提案してください。
		以下の形式を守ってください。

		出典：
		「${inputText}」

		【出力フォーマット】
		次の条件を厳守してください。
		- 各要素は「名言の文章のみ」とする
		- 「名言1」「名言2」などの番号は付けない
		- 余計な文章や説明を一切含めない

		出力例：
		人生は常に書き換え可能なプログラムである。
		失敗は、学習データの一部にすぎない。
		未来を決定するのは、今この瞬間の入力値だ。
`;
	} else {
		return res.status(400).json({ error: "Invalid mode", mode: mode });
	}

	try {
		const result = await genAI.models.generateContent({
			model: "gemini-2.5-flash",
			contents: prompt,
		});

		console.log(result);

		if (result.text === undefined) {
			return res.status(500).json({ error: "生成に失敗しました。" });
		}

		const text = result.text;
		console.log(text);
		res.json({ result: text });
	} catch (error) {
		console.error("Gemini API Error:", error);
		res.status(500).json({ error: "生成に失敗しました。" });
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
	console.log(`✅ Server running on http://localhost:${PORT}`),
);
