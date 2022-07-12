import { useState } from 'react'
import { Container, Row, Col, Carousel, Nav } from 'react-bootstrap'
import LatestOffers from '../LatestOffers/LatestOffers'
import OrderForm from './OrderForm/OrderForm'
import styles from './OrderOffer.module.css'

const OrderOffer = (props) => {
  const [formVisible, setFormVisible] = useState(false)
  return (
    <>
    <Container className={`${styles.MainDiv} p-0 m-0`} fluid>
        <Row className='g-0'>
            <Col xs={12} xl={6}>
              <Carousel controls={false} fade>
                {
                  props.offer.imgurl.map((url, index) => 
                    (
                      <Carousel.Item className={styles.OfferImage} style={{backgroundImage: `url(${url})`}} key={index}></Carousel.Item>
                    )
                  )
                }
                </Carousel>
            </Col>
            <Col className='px-3'>
              <Nav className={styles.NavTab} variant='tabs' fill justify>
                <Nav.Item onClick={() => setFormVisible(false)}>
                  <Nav.Link as='h5' active={formVisible ? undefined : true} className={styles.NavLink}>Description</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => setFormVisible(true)}>
                  <Nav.Link as='h5' active={formVisible ? true : undefined} className={styles.NavLink}>Place Order</Nav.Link>
                </Nav.Item>
              </Nav>
              {
                formVisible ? <OrderForm/> : 'Description'
              }
            </Col>

        </Row>
    </Container>
    <Container className='my-5' fluid>
      <LatestOffers />
  </Container>
  </>
  )
}

export default OrderOffer