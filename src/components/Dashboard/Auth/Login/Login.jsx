import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useUpdateDashboardContext } from '../../../../contexts/DashboardContext'
import styles from './Login.module.css'

const Login = () => {
  const {login} = useUpdateDashboardContext()
  return (
    <Container>
        <Row className={styles.MainDiv}>
            <Col className='d-flex justify-content-center align-items-center'>
                <Form className={styles.Form}>
                    <h1 className='text-center'>Authentication Checkpoint</h1>
                    <Form.Group controlId='email' className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='email' placeholder='Enter your email here' />
                    </Form.Group>
                    <Form.Group  controlId='password' className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder='Enter your password here' />
                    </Form.Group>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='m-0 p-0'>Forgot password? <a href='#reset'>reset it</a></p>
                        <Button variant='secondary' onClick={login}>Login</Button>
                    </div>
                    <div className='text-center mt-3'>
                        Copyright&copy; {new Date().getFullYear()} SinaArtz.com
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Login