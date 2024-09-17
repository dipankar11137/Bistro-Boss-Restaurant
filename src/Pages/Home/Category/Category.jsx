import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import s1 from '../../../assets/home/slide1.jpg';
import s2 from '../../../assets/home/slide2.jpg';
import s3 from '../../../assets/home/slide3.jpg';
import s4 from '../../../assets/home/slide4.jpg';
import s5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={'Order Online'}
        subHeading={'From 11.00am to 10.00pm'}
      ></SectionTitle>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={s1} alt="" />
            <h1 className="text-4xl text-white uppercase -mt-16 text-center ">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s2} alt="" />
            <h1 className="text-4xl text-white uppercase -mt-16 text-center ">
              Pizza
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s3} alt="" />
            <h1 className="text-4xl text-white uppercase -mt-16 text-center ">
              Soup
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s4} alt="" />
            <h1 className="text-4xl text-white uppercase -mt-16 text-center ">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s5} alt="" />
            <h1 className="text-4xl text-white uppercase -mt-16 text-center ">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s4} alt="" />
            <h1 className="text-4xl text-white uppercase -mt-16 text-center ">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s3} alt="" />
            <h1 className="text-4xl text-white uppercase -mt-16 text-center ">
              Salad
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
