import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import catagoreyImg01 from '../../../assets/images/category-01.png';
import catagoreyImg02 from '../../../assets/images/category-02.png';
import catagoreyImg03 from '../../../assets/images/category-03.png';
import catagoreyImg04 from '../../../assets/images/category-04.png';
import '../../../styles/catagory.css'

const catagoryData = [
  {
    display: 'الهامبرغر',
    imgUrl: catagoreyImg01
  },
  {
    display: 'البيتزا',
    imgUrl: catagoreyImg02
  },
  {
    display: 'الاطباق',
    imgUrl: catagoreyImg03
  },
  {
    display: 'الاكل الشرقي',
    imgUrl: catagoreyImg04
  },
]

const Catagory = () => {
  return (
    <>
      <Container>
        <Row>
          {
            catagoryData.map((item, index) => (
              <Col lg='3' md='4' sm='6' xs='6' key={index} className='mb-4' >
                <div className="catagory__item d-flex align-items-center gap-3">
                  <div className="catagory__img">
                    <img src={item.imgUrl} alt="catagory__item" />
                  </div>
                  <h6>{item.display}</h6>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default Catagory