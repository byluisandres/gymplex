import React from "react";
import Image from "next/image";
import styles from "../styles/Instructores.module.css";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = ({ data }) => {
  return (
    <section className={styles.instructores}>
      <div className="container">
        <section className={styles.instructoresheader}>
          <h1>Nuestros instructores</h1>
          <span>
            Instructores Profesionales que te ayudarán a lograr tus objetivos
          </span>
        </section>
        <Swiper
          spaceBetween={30}
          slidesPerView={2.2}
          navigation={true}
          modules={[Navigation]}
        >
          {data.map((instructor, index) => (
            <SwiperSlide key={index}>
              <section className={styles.instructorescontent}>
                <article key={instructor.id} className={styles.card}>
                  <div className={styles.cardimage}>
                    {/* TODO: colocar imágen de producción */}
                    <Image
                      src="/img/cursos_bg.jpg"
                      alt="logo"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className={styles.cardbody}>
                    <p>{instructor.title.rendered}</p>
                    <div className={styles.especialidades}>
                      {instructor.acf.configuracion.map(
                        (especialidad, index) => (
                          <span className={styles.especialidad} key={index}>
                            {especialidad}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </article>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
