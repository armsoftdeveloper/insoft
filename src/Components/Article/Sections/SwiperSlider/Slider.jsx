import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
/***** Style *****/
import "./_style.scss";
/***** MUI *****/
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
export default function Slider(){
    const [value, setValue] = useState(5);
    const data = useSelector((state) => state)
    return(
        <section className="slider mt-5">
            <Typography className="title-top">{data.article[0].slider[0].topTitle}</Typography>
            <Typography className="title-bottom">{data.article[0].slider[0].bottomTitle}</Typography>
            <Swiper
                spaceBetween={80}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="slider-parent"
                breakpoints={{
                    310: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    311: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    312: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    313: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    314: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    315: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    316: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    317: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    318: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    319: {
                        slidesPerView: 1,
                        spaceBetween: 10     
                      },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30
                      },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 75
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    992: {
                        slidesPerView:3,
                        spaceBetween: 40
                    }
                  }}
            >
                {data.article[0].slider.map((items)=>{
                    return(
                        <>
                            <SwiperSlide>
                                <Box className="inner-slide-component">
                                    <Rating name="simple-controlled" value={value}
                                        onChange={(event, newValue) => {
                                        setValue(newValue);
                                        }}
                                    />
                                    <Typography className="slider-typography">
                                        {items.title[0]}
                                    </Typography>
                                    <Avatar
                                        className="mt-5"
                                        alt="People"
                                        src={items.images[0]}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className="inner-slide-component">
                                    <Rating name="simple-controlled" value={value}
                                        onChange={(event, newValue) => {
                                        setValue(newValue);
                                        }}
                                    />
                                    <Typography className="slider-typography">
                                        {items.title[1]}
                                    </Typography>
                                    <Avatar
                                        className="mt-5"
                                        alt="People"
                                        src={items.images[1]}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className="inner-slide-component">
                                    <Rating name="simple-controlled" value={value}
                                        onChange={(event, newValue) => {
                                        setValue(newValue);
                                        }}
                                    />
                                    <Typography className="slider-typography">
                                        {items.title[0]}
                                    </Typography>
                                    <Avatar
                                        className="mt-5"
                                        alt="People"
                                        src={items.images[2]}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className="inner-slide-component">
                                    <Rating name="simple-controlled" value={value}
                                        onChange={(event, newValue) => {
                                        setValue(newValue);
                                        }}
                                    />
                                    <Typography className="slider-typography">
                                        {items.title[1]}
                                    </Typography>
                                    <Avatar
                                        className="mt-5"
                                        alt="People"
                                        src={items.images[1]}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                </Box>
                            </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </section>
    )
}