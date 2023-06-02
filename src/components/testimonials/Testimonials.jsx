// import React from 'react';
// import './Testimonials.css';
// import AVTR1 from '../../assets/avatar1.jpg';
// import AVTR2 from '../../assets/avatar2.jpg';
// import AVTR3 from '../../assets/avatar3.jpg';

// // import Swiper core and required modules
// import { Pagination, Navigation } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// import 'swiper/css/pagination';

// const data = [
//   {
//     id: 1,
//     avatar: AVTR1,
//     name: 'Tina Snow',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus fugit veritatis dicta ad accusantium? Ipsum ea impedit hic ratione!',
//   },
//   {
//     id: 2,
//     avatar: AVTR2,
//     name: 'Joe Bloggs',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus fugit veritatis dicta ad accusantium? Ipsum ea impedit hic ratione!',
//   },
//   {
//     id: 3,
//     avatar: AVTR3,
//     name: 'Bloggy Joe',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus fugit veritatis dicta ad accusantium? Ipsum ea impedit hic ratione!',
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials">
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>
//       <Swiper
//         className="container testimonials__container"
//         // install Swiper modules
//         modules={[Pagination, Navigation]}
//         spaceBetween={40}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//       >
//         {data.map(({ id, avatar, name, review }) => {
//           return (
//             <SwiperSlide key={id} className="testimonial">
//               <div className="client__avatar">
//                 <img src={avatar} alt="Avatar One" />
//               </div>
//               <h5 className="client__name">{name}</h5>
//               <small className="client__review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonials;
