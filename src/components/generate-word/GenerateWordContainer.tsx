import  { useRef } from "react";
import { toPng } from "html-to-image";

export default function QuoteCard() {
  const ref = useRef(null);

  const handleDownload = async () => {
    if (ref.current === null) return;
    const dataUrl = await toPng(ref.current);
    const link = document.createElement("a");
    link.download = "quote.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center">
      <div
        ref={ref}
        id="quote-card"
        style={{
          width: 600,
          padding: 40,
          background: "#f9f9f9",
          borderRadius: 20,
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontSize: 24, marginBottom: 20, color: "#333" }}>
          だれもが創作をはじめ、続けられるようにする。
        </p>
        <p style={{ fontSize: 16, color: "#555" }}>note株式会社のミッション</p>
      </div>

      <button
        onClick={handleDownload}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          borderRadius: 10,
          background: "#007aff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        画像として保存
      </button>
    </div>
  );
}
