import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import '../../../styles/slider.css'

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      <div className='slider__content'>
        <p className="review__text">
          "من المكان الممتاز الي الهدوء والنظافة والاكل الرائع والمستوي العالي
ان حدث ووجت الطعام بارد او لم يعجبك عليك اخبارهم وهم اما سيغيروة او سيعفونك من دفعة ولكن لن تحدث الا مرة في المليون
"
        </p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava01} alt="Avatar" className='rounded' />
          <h6>حسين علي</h6>
        </div>
      </div>
      <div  className='slider__content'>
      <p className="review__text">
          "وجد في مدينتي مطاعم كثيرة ولكن هناك مطعم مفضل لدي، انه مطعم غير مشهور ولكنه يقدم اطباق لذيدة جدا وسعرها رخيص، ولذلك انا افضله عن المطاعم الاخرى، كما انه يتميز بالنظافة  وحسن معاملة الزبائن،"
        </p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava02} alt="Avatar" className='rounded' />
          <h6>زهراء علي</h6>
        </div>
      </div>
      <div className='slider__content'>
      <p className="review__text">
          "في الاسبوع الماضي دعوت اصدقائي لتناول الغداء في هذا المطعم، لقد شكروا كثيرا في نظافة المطعم وطريقة التعامل مع الزبائن، بالاضافة الى انهم استمتعوا بالوجبات اللذيذة،"
        </p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava03} alt="Avatar" className='rounded' />
          <h6>جعفر ماجد</h6>
        </div>
      </div>
    </Slider>
  )
}

export default TestimonialSlider