import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';

const Contact = () => {
  const submitHendler = e => {
    e.preventDefault()
  }
  return (
    <Helmet title='اتصل بنا'>
      <CommonSection title='اتصل بنا' />
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <form className="checkout__form" onSubmit={submitHendler}>
                <div className="form__group">
                  <input type="text" placeholder='الاسم'/>
                </div>
                <div className="form__group">
                  <input type="email" placeholder='الايميل' />
                </div>
                <div className="form__group">
                  <textarea rows={8} type="text" placeholder='اترك رسالة ....' />
                </div>
                <button className="addToCart__btn">ارسال</button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Contact