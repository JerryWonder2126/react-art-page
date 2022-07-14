import { Col, Row, Button } from 'react-bootstrap'
import { useDashboardContext, useUpdateDashboardContext } from '../../../contexts/DashboardContext'
import ItemCard from '../ItemCard/ItemCard'
import ServicesBar from './ServicesBar/ServicesBar'
import styles from './Offers.module.css'

const Offers = () => {

  const {offers} = useDashboardContext()
  const {addOffer} = useUpdateDashboardContext()

  return (
    <Row className='justify-content-center'>
      <Col>
        <ServicesBar />
        {offers ? <Button variant='secondary' onClick={addOffer} className={`${styles.AddButton}`}>+ offer</Button> : ''}
        {
            offers ? offers.map(({id, title, imgurl}, index) => (
                <ItemCard key={index} id={id} title={title} imgurl={imgurl[0]} type='offer'/>
            )) : ''
        }
      </Col>
    </Row>
  )
}

export default Offers