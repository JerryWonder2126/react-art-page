import { Container, Row, Col } from 'react-bootstrap'
import LatestOffers from '../LatestOffers/LatestOffers'
import styles from './About.module.css'

const About = () => {
  return (
    <Container className={styles.MainDiv} fluid>
        <Row>
            <Col>
                <h1>About</h1>
            </Col>
        </Row>
        <Row className={`g-3`}></Row>
        <LatestOffers />
    </Container>
  )
}

export default About