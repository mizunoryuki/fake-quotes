import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { QuoteCardInput } from "../../types/types";
import { QuoteCardContainer } from "../quote-card/QuoteCardContainer";
import styles from "./quoteCardList.module.css";

type Props = {
	generatedCards: QuoteCardInput[];
};

import "swiper/css";
import "swiper/css/navigation";

export function QuoteCardList({ generatedCards }: Props) {
	console.log(generatedCards);
	return (
		<div className={styles.quoteCardListContainer}>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				slidesPerView={1}
				className={styles.swiper}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{generatedCards.map((value, index) => (
					<SwiperSlide key={index} className={styles.swiperSlide}>
						<QuoteCardContainer quote={value.quote} source={value.source} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
