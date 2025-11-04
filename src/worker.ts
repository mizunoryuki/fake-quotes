import { Hono } from "hono";
import { cors } from "hono/cors";

type Bindings = {
	GEMINI_API_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use("/api/*", cors());

app.post("/api/generate", async (c) => {
	try {
		const { mode, inputText } = await c.req.json();

		if (!mode || !inputText) {
			return c.json({ error: "Invalid request body" }, 400);
		}

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
			return c.json({ error: "Invalid mode" }, 400);
		}

		const model = "gemini-2.5-flash";
		const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${c.env.GEMINI_API_KEY}`;

		const resp = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				contents: [{ role: "user", parts: [{ text: prompt }] }],
			}),
		});

		if (!resp.ok) {
			const errText = await resp.text();
			return c.json(
				{ error: `Gemini API error: ${resp.status} ${errText}` },
				500,
			);
		}

		const data = await resp.json();

		const text =
			data?.candidates?.[0]?.content?.parts?.[0]?.text ??
			"生成に失敗しました。";

		return c.json({ result: text });
	} catch (err: any) {
		console.error("Error:", err);
		return c.json({ error: err.message || "Unknown error" }, 500);
	}
});

export default app;
