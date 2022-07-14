
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDashboardContext, useUpdateDashboardContext } from '../../contexts/DashboardContext'
import { useUpdateMainContext } from '../../contexts/MainContext'
import Auth from './Auth/Auth'
import styles from './Dashboard.module.css'

const Dashboard = () => {

  const {view} = useDashboardContext()
  const {updateView, logout} = useUpdateDashboardContext()
  const {changeView} = useUpdateMainContext()

  const handleSignOut = () => {
    logout()
    changeView('home')
  }

  return (
    <Auth>
        <Container className={styles.MainDiv}>
            <Row className='pt-3'>
                <Col xs={12} md={4} className={styles.AdminNav}>
                    <Button variant='dark' onClick={() => updateView('services')}>Services</Button>
                    <Button variant='dark' onClick={() => updateView('offers')}>Offers</Button>
                    <Button variant='danger' onClick={handleSignOut}>Sign Out</Button>
                </Col>
                <Col>
                    {view}
                </Col>
            </Row>
        </Container>
    </Auth>
  )
}

export default Dashboard