import React from 'react'
import { Container, Row, Card, Button, Carousel, Col } from 'react-bootstrap';
import { useMainContext, useUpdateMainContext } from '../../contexts/MainContext';
import LatestOffers from '../LatestOffers/LatestOffers';
import styles from './Home.module.css'
import instagramIcon from '../../assets/icons/instagram.png'

const Home = () => {
  const {services} = useMainContext()
  const {openOffersView} = useUpdateMainContext();

  const reviews = [
    {
      id: 0,
      name: 'Josephine Aderiope',
      imgurl: instagramIcon,
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eaque, neque tempore amet molestias soluta harum nemo sunt! Cum iure doloribus debitis at sapilanditiis non qui at consequuntur ab modi veritatis saepe dignissimos reprehenderit incidunt exercitationem dolorum. Quos voluptate quam vel, eos atque quia minima! Vel!`    },
    {
      id: 1,
      name: 'Eniola Omotoyeni',
      imgurl: instagramIcon,
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eaque, neque tempore amet molestias soluta harum nemo sunt! Cum iure doloribus debitis at sapilanditiis non qui at consequuntur ab modi veritatis saepe dignissimos reprehenderit incidunt exercitationem dolorum. Quos voluptate quam vel, eos atque quia minima! Vel!`
    },
    {
      id: 2,
      name: 'Emmanuel Aderiope',
      imgurl: instagramIcon,
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eaque, neque tempore amet molestias soluta harum nemo sunt! Cum iure doloribus debitis at sapilanditiis non qui at consequuntur ab modi veritatis saepe dignissimos reprehenderit incidunt exercitationem dolorum. Quos voluptate quam vel, eos atque quia minima! Vel!`
    }
  ]

  const whatWeDo = [
    {
      title: 'Abstract painting',
      text: 'We do abstract painting'
    },
    {
      title: 'Body and Face painting',
      text: 'We do colourful body and face painting'
    },
    {
      title: 'Craft and Art works',
      text: 'we build crafts and develop art works'
    },
    {
      title: 'Interior decor',
      text: 'we do interior decoration and paint walls'
    },
    {
      title: 'Miscellaneous',
      text: 'we do even more than this. Simply go to our contact page to reach out to us on your specific need.'
    }
  ]

  return (
    <>
    <Container fluid>
      <Row>
        <Col className={`p-0`}>
          <Carousel interval={10000} controls={false} fade>
          {
            services.map(({id, title, imgurl}) => 
              (
                <Carousel.Item className={styles.ServiceItem} style={{backgroundImage: `url(${imgurl})`}} key={id}>
                  <div>
                    <h3 className="text-light text-capitalize text-center">{title}</h3>
                    <Button onClick={() => openOffersView(title)} variant='primary'>view category</Button>
                  </div>
                </Carousel.Item>
              )
            )
          }
          </Carousel>
        </Col>
      </Row>
    </Container>
    <Container className={`my-3`} fluid>

      <Row className='justify-content-center'>
        <Col xs={12} lg={10}>
          <h2 className='text-center mt-5 mb-3'>What we do.</h2>
        </Col>
        <Col xs={12} lg={10} className={`${styles.WeDoDiv}`}>
          <ul>
            {
              whatWeDo.map(({title, text}, index) => (
                  <li key={index}>
                    <h5>{title}</h5>
                    <p>{text}</p>
                  </li>
              ))
            }
          </ul>
        </Col>
      </Row>

      <Row className='text-center py-5 px-sm-1 px-md-5 bg-dark text-light'>
        <h2 className='my-3'>What our clients say about us.</h2>
        
        <Carousel variant='dark' controls={false}>
          {
            reviews.map(({id, name, imgurl, review}) => (
              
                <Carousel.Item key={id}>
                  <Card className={styles.ReviewCard}>
                    <Card.Body>
                      <Card.Text>"{review}"</Card.Text>
                      <Card.Img src={imgurl} />
                      <Card.Subtitle className='mx-2 d-inline'>{name}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
            ))
          }
        </Carousel>
      </Row>

      <LatestOffers />

    </Container>
    </>
  )
}

export default Home