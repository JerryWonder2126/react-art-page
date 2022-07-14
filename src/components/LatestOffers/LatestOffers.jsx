import React from 'react'
import { Row, Col } from 'react-bootstrap'
import OfferCard from '../OfferCard/OfferCard'
import aboutImg from '../../assets/about.jpg'
import contactImg from '../../assets/contact.jpg'
import longImg from '../../assets/long.jpg'
import styles from './LatestOffers.module.css'

const LatestOffers = (props) => {
  let offers = [
        {
            title: props.title,
            short_description: 'short description',
            long_description: 'long description',
            imgurl: [aboutImg],
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
            imgurl: [contactImg],
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
            imgurl: [longImg],
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
            imgurl: [aboutImg],
            price: 90,
            uhash: 4,
            section_hash: 'string',
            artist: 'string',
            year: 2022,
            dimension: 'string',
            orientation: 'string',
            medium: 'string',
            status: 'string'
        }
    ]

  return (
    <>
        <Row className={styles.FirstRow}>
            <Col>
                <h2 className='text-center'>Check these out</h2>
            </Col>
        </Row>
        <Row className={`${styles.SecondRow} g-3`}>
            {
                offers.map(offer => (
                    <Col key={offer.uhash} xs={12} sm={6} md={4} lg={3}>
                        <OfferCard offer={offer} />
                    </Col>
                ))
            }
        </Row>
    </>
  )
}

export default LatestOffers