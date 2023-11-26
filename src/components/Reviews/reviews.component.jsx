import React from 'react';
import Slider from 'react-slick';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './reviews.style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import women from '../../assets/casual-life-3d-avatar-girl-with-glasses.png'
import women2 from '../../assets/casual-life-3d-profile-picture-of-blonde-woman-in-blue-shirt.png'
import men from '../../assets/casual-life-3d-profile-picture-of-man-in-green-shirt-and-orange-hat.png'
export default function Reviews() {

    const reviews = [
        {
            id: 1, date: "08.07.2023", from: "Ирины", authorPhoto: women, name: "Ирина", surname: "Сивидова", rate: 5, desc: "Спасибо вам, я купила это платье! Поняла уже, что никогда не наступит «подходящий момент»! И просто пошла и купила!Наконец то!Буду брать займы только у вас, все классно!"
        },
        { id: 2, date: "22.06.2023", from: "Екатерины", authorPhoto: women2, name: "Екатерина", surname: "", rate: 4, desc: "Современные проблемы требуют современных решений. Займы решают? Очень удобно: знать, что тебе ВСЕГДА есть где взять деньги.Супер." },
        {
            id: 3, date: "08.07.2023", from: "Евгения", authorPhoto: men, name: "Евгений", surname: "", rate: 5, desc: "Когда человеку нужны деньги меньше всего ему хочется бегать и просить. Тут все четко: надо? бери. вот тебе деньги. У меня претензий нет. Я доволен."
        },
        { id: 4, date: "22.06.2023", from: "Максима", authorPhoto: men, name: "Максим", surname: "Карасев", rate: 4, desc: "Все нормально, у меня претензий нет. Сейчас намного лучше, чем было: чик-пык и ты в дамках. Просто. Взял. С телефона. Реально 15 минут.Одобрямс." }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        zIndex: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div className='reviews' id='reviews'>
            <h1 className='reviews_title'>Отзывы наших клиентов</h1>
            <Slider {...settings}>
                {reviews.map((el) => (
                    <div key={el.id} className='review_item'>
                        <div className="review_text">
                            <div className='rw  '>
                                <p className='review_from'>Отзыв от {el.from}</p>
                                <div className="star_rating">
                                    {[...Array(el.rate)].map((star, index) => (
                                        <FontAwesomeIcon icon={faStar} key={index} className='star' />
                                    ))}
                                </div>
                                <p className='review_desc'>{el.desc}</p>
                                <p className='review_date'>{el.date}</p>
                            </div>
                        </div>
                        <div className='author'>
                            <img src={el.authorPhoto} alt={el.name} width={65} height={65} style={{ borderRadius: 65 }} />
                            <p className='author_name'>{el.name} {el.surname} </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
