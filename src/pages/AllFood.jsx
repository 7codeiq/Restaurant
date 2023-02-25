import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard'
import ReactPaginate from 'react-paginate';


import '../styles/all-foods.css'
import '../styles/pagination.css'
const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const searchedProduct = products.filter(item => {
    if(searchTerm === '') 
      return item
    
    if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return item
  })
  const productPrePage = 8;
  const visitedPage = pageNumber * productPrePage;
  const dispalyPage = searchedProduct.slice(visitedPage, visitedPage + productPrePage) ;
  const  pageCount = Math.ceil(searchedProduct.length / productPrePage);
  const changePage = (({selected}) => {
    setPageNumber(selected);
  })
  return (
    <Helmet title='الوجبات'>
      <CommonSection title='الوجبات' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12' >
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input type="text" placeholder=" البحث ....." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' xs='12' className='mb-5' >
              <div className="sorting__widget text-end">
                <select className='w-50'>
                  <option>الفئات</option>
                  <option value="ascending">ابجديا من الاف الى الياء</option>
                  <option value="descending">الاكثر طلبا</option>
                  <option value="hight-price">الاعلى سعرا</option>
                  <option value="low-price">الارخص سعرا</option>
                </select>
              </div>
            </Col>
            {
              dispalyPage
              .map(item => (
                <Col lg='3' md='4' sm='6' xs="6" key={item.id} className='mb-4' >
                  <ProductCard item={item} />
                </Col>
              ))
            }
            <div>
              <ReactPaginate 
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel='الرجوع'
              nextLabel='التالي'
              containerClassName='paginationBtns'
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFood