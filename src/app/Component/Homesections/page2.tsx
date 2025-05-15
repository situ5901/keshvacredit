import React from 'react';
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  { name: 'Vishal Grewal', text: 'Loan disbursement in less than 24 hours is not what I had expected but this is amazing. Thank you very much, Indialends team.', rating: 5 },
  { name: 'pardeep kumar', text: "Highly satisfied with overall loan disbursement experience. Haven't seen any platform giving so many choices to cater to financial needs. Highly recommended!", rating: 5 },
  { name: 'amit kumar', text: 'The customer support was extremely helpful and guided me through the entire process.', rating: 4 },
  { name: 'Nikhil Gupta', text: 'Smooth experience, transparent fees, and quick approval. Highly recommend!', rating: 5 },
  { name: 'Ridhi Yadav', text: 'Easy application, and funds received on time. Very satisfied!', rating: 4 },
  { name: 'Vikram Patil', text: 'Good interest rates and flexible repayment options.', rating: 4 },
  { name: 'Meera Joshi', text: 'The platform is user-friendly and secure.', rating: 5 },
  { name: 'Nikita', text: 'Great experience overall, would use again.', rating: 4 },
  { name: 'Shagun Mehta', text: 'Very professional service and fast disbursement.', rating: 5 },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const RatingAndReviews = () => (
  <section className="py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-2">Rating & Reviews</h2>
      <p className="mb-8">The results speak for themselves, see our reviews from happy users</p>
      <Slider {...sliderSettings} className="-mx-3">
        {reviews.map((review, index) => (
          <div key={index} className="px-3">
            <div className="h-72 flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md">
              <div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <AiFillStar key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 flex-grow">{review.text}</p>
              </div>
              <h3 className="font-semibold text-gray-900 pt-2">{review.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default RatingAndReviews;
