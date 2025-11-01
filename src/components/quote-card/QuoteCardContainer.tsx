import  { useRef } from "react";
import { toPng } from "html-to-image";
import {QuoteCard} from "./QuoteCard";

export  function QuoteCardContainer() {
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
	<QuoteCard ref={ref} handleDownload={handleDownload} />
  );
}
