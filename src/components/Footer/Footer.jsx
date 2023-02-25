import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import logo from "../../assets/images/res-logo.png";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>مطعم الانعام</h5>
              <p>مطعم مميز اطلالة جميلة على النيل يتميز بالاكلات البحرية الرائعة جميع ما يقدم ذو مستوى راقي
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>اوقات الدليفري</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>الخميس - السبت</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>الجمعة</span>
                <p>استراحة العمال</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>اتصل بنا</h5>
            <ListGroup className='delivery__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p>العنوان - بغداد - الكرخ - الشعلة</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>رقم الهاتف : 07733013115</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>الايميل : mortada.teach@outlook.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>النشرة الاخبارية</h5>
            <p>اشترك في نشرتنا الاخبارية</p>
            <div className="newsletter">
              <input type="email" placeholder='ادخل الايميل' />
              <span><i className="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>Copyright - 2022, website made by Mortadha Al Jazaery</p>
          </Col>
          <Col lg='6' md='6' >
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>تابعنا: </p>
              <span> <Link to='#'><i className="ri-facebook-line"></i></Link> </span>
              <span> <Link to='#'><i className="ri-github-line"></i></Link> </span>
              <span> <Link to='#'><i className="ri-instagram-line"></i></Link> </span>
              <span> <Link to='#'><i className="ri-linkedin-line"></i></Link> </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer