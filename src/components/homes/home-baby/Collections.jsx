import { collections12 } from "@/data/collections";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Collections() {
  return (
    <section className="px_15 pt_20 px_xl-40">
      <Swiper
        className="swiper tf-sw-collection"
        dir="ltr"
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".spd2",
        }}
      >
        {collections12.map((collection) => (
          <SwiperSlide key={collection.id} className="swiper-slide">
            <div
              className="collection-default abs-left-bottom radius-20 hover-img wow fadeInUp"
              data-wow-delay="0s"
            >
              <a className="img-style">
                <img
                  className="lazyload"
                  data-src={collection.imageSrc}
                  alt="banner-cls"
                  src={collection.imageSrc}
                  width={600}
                  height={450}
                />
              </a>
              <div className="content text-start">
                <div className="box-title">
                  <h3 className="title">
                    <Link
                      to={`/shop-default-grid`} // Link added directly in JSX
                      className="link text-white"
                    >
                      {collection.title}
                    </Link>
                  </h3>
                  <p className="text-white body-text">
                    {collection.description}
                  </p>
                </div>
                <div className="box-btn">
                  <Link
                    to={`/shop-default-grid`} // Link added directly in JSX
                    className="btn-line style-white"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="sw-pagination-collection sw-dots type-circle justify-content-center spd2" />
      </Swiper>
    </section>
  );
}
