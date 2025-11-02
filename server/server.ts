import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
const genAI = new GoogleGenerativeAI(apiKey);

// --- APIエンドポイント ---
app.post("/api/generate", async (req, res) => {
	const { mode, inputText } = req.body;

	let prompt = "";
	if (mode === "quote-to-author") {
		prompt = `
あなたは架空の文化学者です。
次の名言に合いそうな架空の出典や著者を提案してください。
現実の人物や作品は避けてください。

名言：
「${inputText}」

出力形式：
— 出典または著者名 —
`;
	} else if (mode === "author-to-quote") {
		prompt = `
あなたは架空の名言作家です。
次の出典や人物にふさわしい架空の名言を提案してください。

出典：
「${inputText}」

出力形式：
「名言」
`;
	} else {
		return res.status(400).json({ error: "Invalid mode" });
	}

	try {
		const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
		const result = await model.generateContent(prompt);
		const text = result.response.text();
		res.json({ result: text });
	} catch (error) {
		console.error("Gemini API Error:", error);
		res.status(500).json({ error: "生成に失敗しました。" });
	}
});

// --- 本番用のフロント配信 ---
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

app.get(/.*/, (req, res) => {
	res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
	console.log(`✅ Server running on http://localhost:${PORT}`),
);
