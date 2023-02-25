import React from 'react';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import {cartAction} from '../store/shopping-cart/cartSlice'


import '../styles/cart-page.css'
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title='Cart'>
      <CommonSection title='حجوزاتك' />
      <Container className='my-5'>
        <Row>
          <Col lg='12'>
            {
              cartItems.length === 0 
              ? <h5 className='text-center'>Your cart is empty</h5>
              : 
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>صورة المنتج</th>
                    <th>عنوان المنتج</th>
                    <th>السعر</th>
                    <th>المجموع</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map(item => <Tr item={item} key={item.id} />)
                  }
                </tbody>
            </table>
            }
            <div className='mt-4'>
              <h6>المجموع <span className='cart__subtotal'>${totalAmount}</span></h6>
              <p>سيتم احتساب الضرائب والشحن عند الخروج</p>
              <div className='d-flex align-items-center gap-3 cart__btns'>
                <button className="addToCart__btn"><Link to='/tasty/foods'>مواصلة التسوق</Link></button>
                <button className="addToCart__btn"><Link to='/tasty/checkout'>اضغط للخروج</Link></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  )
}

const Tr = (props) => {
  const {id, image01, title, price, quantity} = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartAction.deleteItem(id))
  }
  return (
    <tr>
      <td className='text-center cart__img-box'><img src={image01} alt="" /></td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>${price}</td>
      <td className='text-center'>{quantity}x</td>
      <td className='text-center cart__item-del'><i className="ri-delete-bin-line" onClick={deleteItem}></i></td>
    </tr>
  )
}
export default Cart