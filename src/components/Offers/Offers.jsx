import { useEffect, useMemo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import OfferCard from '../OfferCard/OfferCard'
import LatestOffers from '../LatestOffers/LatestOffers'
import styles from './Offers.module.css'

const Offers = (props) => {
  let offers = useMemo(() => [
        {
            title: props.title,
            short_description: 'short description',
            long_description: 'long description',
            imgurl: ['/assets/about.jpg', '/assets/long.jpg', '/assets/contact.jpg', '/assets/sample-box.png'],
            price: 90,
            uhash: 1,
            section_hash: 'string',
            artist: 'string',
            year: 2022,
            dimension: 'string',
            orientation: 'string',
            medium: 'string',
            status: 'string'
        },
        {
            title: 'title',
            short_description: 'short description',
            long_description: 'long description',
            imgurl: ['/assets/contact.jpg'],
            price: 90,
            uhash: 2,
            section_hash: 'string',
            artist: 'string',
            year: 2022,
            dimension: 'string',
            orientation: 'string',
            medium: 'string',
            status: 'string'
        },
        {
            title: 'title',
            short_description: 'short description',
            long_description: 'long description',
            imgurl: ['/assets/long.jpg'],
            price: 90,
            uhash: 3,
            section_hash: 'string',
            artist: 'string',
            year: 2022,
            dimension: 'string',
            orientation: 'string',
            medium: 'string',
            status: 'string'
        },
        {
            title: 'title',
            short_description: 'short description',
            long_description: 'long description',
            imgurl: ['/assets/about.jpg'],
            price: 90,
            uhash: 4,
            section_hash: 'string',
            artist: 'string',
            year: 2022,
            dimension: 'string',
            orientation: 'string',
            medium: 'string',
            status: 'string'
        }], [props.title])
  
  useEffect(() => {
    offers.push({
        title: props.title,
        short_description: 'short description',
        long_description: 'long description',
        imgurl: ['/assets/long.jpg'],
        price: 90,
        uhash: 10,
        section_hash: 'string',
        artist: 'string',
        year: 2022,
        dimension: 'string',
        orientation: 'string',
        medium: 'string',
        status: 'string'
    })
  }, [offers, props.title])

  return (
    <Container className={styles.MainDiv} fluid>
        <Row>
            <Col>
                <h1>Offers for {props.title}</h1>
            </Col>
        </Row>
        <Row className={`g-3`}>
            {
                offers.map(offer => (
                    <Col key={offer.uhash} xs={12} md={4} lg={3}>
                        <OfferCard offer={offer} />
                    </Col>
                ))
            }
        </Row>
        <LatestOffers />
    </Container>
  )
}

export default Offers