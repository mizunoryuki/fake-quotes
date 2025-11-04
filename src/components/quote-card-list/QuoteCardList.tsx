import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { QuoteCardInput } from "../../types/types";
import { QuoteCardContainer } from "../quote-card/QuoteCardContainer";
import styles from "./QuoteCardList.module.css";
import "swiper/swiper-bundle.css";

type Props = {
	generatedCards: QuoteCardInput[];
};

export function QuoteCardList({ generatedCards }: Props) {
	return (
		<div className={styles.quoteCardListContainer}>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				slidesPerView={1}
				className={styles.swiper}
			>
				{generatedCards.map((value) => {
					const key = `${value.quote}::${value.source}`;
					return (
						<SwiperSlide key={key} className={styles.swiperSlide}>
							<QuoteCardContainer quote={value.quote} source={value.source} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
