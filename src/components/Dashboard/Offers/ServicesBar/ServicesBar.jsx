import { Form } from 'react-bootstrap'
import { useDashboardContext } from '../../../../contexts/DashboardContext'
import styles from './ServicesBar.module.css'

const ServicesBar = () => {

  const {services} = useDashboardContext()
    
  return (
    <Form.Select className={`bg-dark text-light ${styles.Select}`}>
        <option>Select service</option>
        {
            services ? services.map((value, index) => (
                <option value={value.title} key={index}>{value.title}</option>
            )) : ''
        }
    </Form.Select>
  )
}

export default ServicesBar