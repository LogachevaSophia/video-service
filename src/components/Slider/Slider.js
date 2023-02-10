import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import RoboService from "../../service/roboService";
import { useSelector } from "react-redux";

const Slider = ({data}) => {
  const [hrefVideo, setHrefVideo] = useState("")
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg",
  //     link: "www.google.com",
  //   },
  //   {
  //     id: 2,
  //     img: "https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg",
  //     link: "www.google.com",
  //   },
  //   {
  //     id: 3,
  //     img: "https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg",
  //     link: "www.google.com",
  //   },
  //   {
  //     id: 4,
  //     img: "https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg",
  //     link: "www.google.com",
  //   },
  // ];
  useEffect(()=>{
    if (hrefVideo.length!=0){window.location=hrefVideo}
  },[hrefVideo])


  const roboService = new RoboService();
  const {user} = useSelector((state) => state.auth);

  const getPaymentUrlForVideo = async ( video) => {
    const res = await roboService.getPaymentUrlForVideo(user.id, video ).then(res => setHrefVideo(res.link)).catch();
    
    
  };



  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((elem) => {
          return(
          <SwiperSlide>
            {" "}
            <div key={elem.id}>
              <img src={elem.img}></img>
              <button className="swiper-button" onClick={()=>getPaymentUrlForVideo(elem.id)}>
                {/* <a href={elem.buy_link}>Купить</a> */}
                Купить
              </button>
            </div>
          </SwiperSlide>);
        })}
      </Swiper>
    </>
  );
};
export default Slider;
