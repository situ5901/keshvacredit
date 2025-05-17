import React from 'react';
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  { name: 'parveen chouhan', text: 'Loan disbursement in less than 24 hours is not what I had expected but this is amazing. Thank you very much, Indialends team.', rating: 5 },
  { name: 'pardeep kumar', text: "Highly satisfied with overall loan disbursement experience. Haven't seen any platform giving so many choices to cater to financial needs. Highly recommended!", rating: 5 },
  {
    name: 'Aryan Verma',
    text: 'The process was smooth and quick. Minimal paperwork and clear instructions made it hassle-free. Approval was fast, and the flexible repayment options made managing finances easier. Highly recommended!',
    rating: 5
  },
  {
    name: 'Pooja Sharma',
    text: 'Fantastic experience! The digital application process saved time, and customer support was very professional. Transparent fees, no hidden charges, and quick disbursement made it highly reliable. Will recommend to others.',
    rating: 5
  },
  {
    name: 'Simran Kaur',
    text: 'This platform changed my view of online loans. Safe, user-friendly, and quick disbursement. Clear updates and flexible repayment options made the experience stress-free. Perfect for urgent financial needs!',
    rating: 5
  },
  {
    name: 'Karan Singh',
    text: 'Reliable and easy-to-use platform! Smooth application, helpful customer support, and flexible repayment plans. Competitive interest rates and fast approval make it a great choice for financial assistance.',
    rating: 4
  },
  {
    name: 'Sneha Kapoor',
    text: 'Streamlined application with minimal documentation. Quick approval and no hidden charges. Transparent process from start to finish, making it simple to plan repayments. A hassle-free and reliable service!',
    rating: 5
  },
  {
    name: 'Rahul Mehta',
    text: 'Superb service! The entire loan process was smooth, from application to disbursement. Minimal documentation and prompt support made it stress-free. Highly appreciate the flexible repayment options offered.',
    rating: 5
  },
  {
    name: 'Priya Nair',
    text: 'User-friendly platform with transparent fees. The quick disbursement process and flexible payment terms impressed me. Customer support was helpful throughout. Highly recommend this reliable financial solution to everyone.',
    rating: 4
  },
  {
    name: 'Ankit Sharma',
    text: 'Applying for a loan has never been easier. The platform is intuitive, and the approval process is fast. Competitive interest rates and professional support make it a top choice!',
    rating: 5
  },
  {
    name: 'Neha Malhotra',
    text: 'Seamless experience from start to finish. Fast approval, clear terms, and flexible repayment made it hassle-free. Customer support was responsive and addressed all my queries. Highly recommend this service!',
    rating: 5
  },
  {
    name: 'Rohan Bhatia',
    text: 'Exceptional platform! Quick and hassle-free application, minimal paperwork, and fast disbursement. The flexible repayment structure and low interest rates made it an excellent choice for personal finance needs.',
    rating: 5
  },
  {
    name: 'Kriti Desai',
    text: 'Highly satisfied with the efficient process and professional support. The approval was quick, and funds were transferred without any delays. Flexible repayment options made managing finances much easier. Great experience!',
    rating: 4
  },
  {
    name: 'Vikas Jha',
    text: 'Quick approval and disbursement! The platform is reliable and transparent, with no hidden fees. Customer support was prompt and helpful, making it a smooth and satisfying experience overall.',
    rating: 5
  },
  {
    name: 'Riya Goswami',
    text: 'Highly professional and responsive service. The application process was simple, and I got approved quickly. Flexible repayment options and competitive rates make it the best choice for financial assistance.',
    rating: 4
  },
  {
    name: 'Sahil Arora',
    text: 'A reliable and efficient platform for quick loans. The digital process saved time, and the customer support team was excellent. I’m really happy with the overall experience. Highly recommended!',
    rating: 5
  },
  {
    name: 'Tanya Mishra',
    text: 'Great experience! The online application was easy, and the approval came within hours. Flexible repayment and clear instructions made it hassle-free. Will definitely use this platform again if needed.',
    rating: 4
  }


];

const sliderSettings = {
  dots: false,
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
