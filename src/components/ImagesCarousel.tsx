import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, } from 'swiper/modules';


export function SwiperCarousel({ images }: { images: string[] }) {
    return (
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                images.map(
                    image =>
                        <SwiperSlide key={Math.random() * 100000}>
                            <img src={image} alt="slide-image" />
                        </SwiperSlide>
                )
            }
        </Swiper>
    )
}