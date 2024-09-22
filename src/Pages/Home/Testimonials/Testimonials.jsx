import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [reviews]);
  return (
    <section>
      <SectionTitle
        subHeading={'What our client said'}
        heading={'Testimonials'}
      />
      <div className="my-20">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map(review => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-10">
                <Rating style={{ maxWidth: 130 }} value={3} readOnly />
                <FaQuoteLeft className="text-5xl mt-3 " />
                <p className="py-3"> {review?.details}</p>
                <h2 className="text-2xl text-orange-400">{review?.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
