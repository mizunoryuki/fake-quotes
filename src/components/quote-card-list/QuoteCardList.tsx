
import styles from './quoteCardList.module.css'
import { QuoteCardContainer } from "../quote-card/QuoteCardContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
type Props = {
	generatedCards: string[];
}

import 'swiper/css';
import 'swiper/css/navigation';

export function QuoteCardList({ generatedCards }: Props) {

    return (
        <div className={styles.quoteCardListContainer}>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				slidesPerView={1}
				className={styles.swiper}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				>
				{generatedCards.map((_, index) => (
					<SwiperSlide key={index} className={styles.swiperSlide}>
						<QuoteCardContainer />
					</SwiperSlide>
				))}
				</Swiper>
        </div>
    )
}