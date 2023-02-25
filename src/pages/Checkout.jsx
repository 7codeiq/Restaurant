import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'

import '../styles/checkout.css'
const Checkout = () => {
  const [enterName, setEnterName] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterNumber, setEnterNumber] = useState('');
  const [enterCountry, setEnterCountry] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const shippingInfo = []
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);
  const submitHandler = e => {
    e.preventDefault();
    const userShippingAdress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode
    }
    shippingInfo.push(userShippingAdress);
    console.log(shippingInfo)
  }
  return (
    <Helmet title='checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className='mb-4'>عنوان الطلب</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="text" placeholder='الاسم' required onChange={e => setEnterName(e.target.value)} />
                </div>
                <div className="form__group">
                  <input type="email" placeholder='الايميل' required onChange={e => setEnterEmail(e.target.value)} />
                </div>
                <div className="form__group">
                  <input type="number" placeholder='رقم الهاتف' required onChange={e => setEnterNumber(e.target.value)} />
                </div>
                <div className="form__group">
                  <input type="text" placeholder='الدولة' required onChange={e => setEnterCountry(e.target.value)} />
                </div>
                <div className="form__group">
                  <input type="text" placeholder='المدينة' required onChange={e => setEnterCity(e.target.value)} />
                </div>
                <div className="form__group">
                  <input type="number" placeholder='كود الخصم' required onChange={e => setPostalCode(e.target.value)} />
                </div>
                <button className="addToCart__btn">دفع</button>
              </form>
            </Col>
            <Col lg='4' md='6'>
              <div className='checkout__bill'>
                <h6 className='d-flex align-items-center justify-content-center mb-3'>مجموع الطلب :  <span className='cart__subtotal'>${cartTotalAmount}</span></h6>
                <h6 className='d-flex align-items-center justify-content-center mb-3'>الخصم : <span className="cart__subtotal">${shippingCost}</span></h6>
                <div className='checkout__total'>
                  <h5 className='d-flex align-items-center justify-content-center'>المجموع الكلي : <span className="cart__subtotal">${totalAmount}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout