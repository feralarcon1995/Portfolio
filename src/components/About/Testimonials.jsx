import PER1 from '../../assets/images/testimonials/martin.png';
import PER3 from '../../assets/images/testimonials/luis.jpg';
import PER4 from '../../assets/images/testimonials/luciano.jpg';

import styled from "styled-components";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";



const TestimionalStyle = styled.div`

margin: 20vh 0;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap:1vw;

h2{
    font-size: calc(var(--VW)*4);
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        font-size: calc(var(--VW)*8);
    }
}

p{
    margin-bottom: 1vw;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        margin-bottom: 5vw;
    }
    
}

.swiper{
    width: 80%;
    margin:  0;
}

.testimonial{
    display:flex;
    flex-direction:column;
    margin: 4vh 0;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
}

.review{


    p{
        font-size: calc(var(--VW)*2);
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        font-size: calc(var(--VW)*6);
    }
    }
}
.author{
    display:flex;
    justify-content: flex-start;
    gap: 1vw;
    align-items: center;
    }

    img{
        width: 5vw;
        height: 100%;
        objet-fit:cover;
        border-radius:0.6vw;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 25vw;
        }
    }

    .info{
        display:flex;
        flex-direction:column;
        gap: 1vw;


        h2,p{
            margin:0;
        }

        h2{
            font-size: calc(var(--VW)*1);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*4)
        }
    }
}
`


const Testimonials = () => {

    const data = [
        {
            id: 0,
            avatar: PER1,
            name: 'Martin Leon ',
            job: 'Software Engineer at Globant',
            review: '"Fernando has been an incredible contributor to the projects he is involved in, being active with any questions or suggestions and bringing new topics to the discussions and meetings."'
        }
        ,
        {
            id: 1,
            avatar: PER3,
            name: 'Luis Pirela ',
            job: "Frontend Developer at Fulljaus",
            review: '"Good developer, self-taught and versed in CCS styles with a lot of initiative and knowledge that he can apply in a practical way to the projects he is involved in."'
        }
        ,
        {
            id: 3,
            avatar: PER4,
            name: 'Luciano Andres Ceballos ',
            job: 'Commercial Sector at SanCor Salud  ',
            review: '"Excellent tutor, who accompanied me both with knowledge, as well as always encouraging me to improve. I would choose him without hesitation as a tutor, and I would recommend him as a teacher, as he has a lot of technical knowledge, as well as teaching in a simple and practical way, so that one understands and learns the tools that he is using in the learning process."'
        }

    ]


    return (
        <TestimionalStyle data-scroll-section className='testimonial-section bg-dark' id="testimonials">
            <p>What they say about me</p>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={40}
                slidesPerView={1}
                autoplay={{ delay: 32500 }}
                pagination={{ clickable: true }}
            >

                {
                    data.map(({ avatar, name, review, id, job }, index) => {
                        return (
                            <SwiperSlide className="testimonial" key={id}>
                                <div className="review">
                                    <p>{review} </p>
                                </div>
                                <div className="author">
                                    <img src={avatar} alt={name} />
                                    <div className="info">
                                        <h2 className='name'>{name}</h2>
                                        <p className='job'>{job}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </TestimionalStyle>

    )
}

export default Testimonials