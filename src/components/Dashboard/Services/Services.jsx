import { Button, Col, Row } from 'react-bootstrap'
import { useDashboardContext, useUpdateDashboardContext } from '../../../contexts/DashboardContext'
import ItemCard from '../ItemCard/ItemCard'
import styles from './Services.module.css'

const Services = () => {
  const {services} = useDashboardContext()
  const {addService} = useUpdateDashboardContext()
  return (
    <Row className='justify-content-center'>
        <Col>
            <Button variant='secondary' onClick={addService} className={`${styles.AddButton}`}>+ services</Button>
            {
                services ? services.map(({id, title, imgurl}, index) => (
                    <ItemCard key={index} id={id} title={title} imgurl={imgurl} type='service'/>
                )) : ''
            }
            </Col>
    </Row>
  )
}

export default Services