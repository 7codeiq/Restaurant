import React, {useState, useEffect} from 'react';
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import ProductCard from '../components/UI/product-card/ProductCard';
import { useDispatch } from 'react-redux';
import '../styles/product-details.css'
import { cartAction } from '../store/shopping-cart/cartSlice';
const reviewData = [
  {
    userName: 'Mortadha Mohammed',
    useEmail: 'Mortadha@gmail.com',
    userMessage: 'great food and the delivery is so fast ',
  },
  {
    userName: 'Ali khalid',
    useEmail: 'Ali.khalid@gmail.com',
    userMessage: 'hot food and so delish',
  },
  {
    userName: 'osama Rafid',
    useEmail: 'osama@gmail.com',
    userMessage: 'nice one but i want bitches',
  },
]
const FoodDetails = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState('desc');
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [reviews, setReviews] = useState(reviewData);
  const {id} = useParams();
  const product = products.find(product => product.id === id)
  const [previewImg, setPreviewImg] = useState(product.image01);
  const {title, price, category, desc, image01} = product;
  const relatedProduct = products.filter(item => category === item.category);
  const submitHandler = e => {
    e.preventDefault();
    setReviews([...reviews, {userName: enteredName,useEmail: enteredEmail, userMessage:enteredMessage}])
  }
  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])
  const addItem = () => {
    dispatch(cartAction.addItem({
      id,
      title, 
      price, 
      image01,
    }))
  }
  return (
    <Helmet title='Product-details'>
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className="product__images">
                <div className="img__item mb-3" onClick={() => setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className='w-50' />
                </div>
                <div className="img__item mb-3" onClick={() => setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="" className='w-50' />
                </div>
                <div className="img__item mb-3" onClick={() => setPreviewImg(product.image03)}>
                  <img src={product.image03} alt="" className='w-50' />
                </div>
              </div>
            </Col>
            <Col lg='4' md='4'>
              <div className="product__main-img">
                <img src={previewImg} alt="" className='w-100' />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="single__product-content">
                <h2 className='product__title mt-3'>{title}</h2>
                <p className="product__price">Price: <span>${price}</span></p>
                <p className='category mb-5'>Category: <span>{category}</span></p>
                <button onClick={addItem} className="addToCart__btn">اضف الى القائمة</button>
              </div>
            </Col>
            <Col lg='12'>
              <div className="tabs d-flex  align-items-center gap-5 py-3">
                <h6 className={`${tab === 'desc' ? 'tab__active' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                <h6 className={`${tab === 'review' ? 'tab__active' : ''}`}  onClick={() => setTab('review')}>Review</h6>
              </div>
              {
                tab === 'desc'
                ? 
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
                :
                <div className="tab__form mb-3">
                {
                  reviews.map(review => (
                    <div className="review">
                      <p className="user__name mb-0">{review.userName}</p>
                      <p className="user__email">{review.useEmail}</p>
                      <p className='feedback__text'>{review.userMessage}</p>
                    </div>
                  ))
                }
                <form className='form' onSubmit={submitHandler}>
                  <div className='form__group'>
                    <input type="text" placeholder='Enter your name' onChange={e => setEnteredName(e.target.value)} required />
                  </div>
                  <div className='form__group'>
                    <input type="email" placeholder='Enter your email' onChange={e => setEnteredEmail(e.target.value)} required />
                  </div>
                  <div className='form__group'>
                    <textarea rows={5} type="text" placeholder='Message...' onChange={e => setEnteredMessage(e.target.value)} required />
                  </div>
                  <button type='submit' className='addToCart__btn' >Submit</button>
                </form>
              </div>
              }
            </Col>
            <Col lg='12' className='mb-5 mt-4'>
              <h2 className='related__product-title'>You might also like </h2>
            </Col>
            {
              relatedProduct.map(item => (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails