import { useReducer } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useUpdateDashboardContext } from '../../../../contexts/DashboardContext'
import styles from './ServiceForm.module.css'

const formReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const ServiceForm = (props) => {
  const isEditMode = props.type === 'edit'
  const {updateView} = useUpdateDashboardContext()
  const initialService = isEditMode ? props.service : {
    title: '',
    image: ''
  }
  const [form, updateForm] = useReducer(formReducer, initialService)

  const handleChange = ev => {
    const action = {
        name: ev.target.name,
        value: ev.target.value
    }

    updateForm(action)
  }
  
  return (
    <Form className={styles.Form}>
      <h5>{isEditMode ? 'Edit' : 'Add'} Service</h5>
      <Form.Group controlId='title' className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='service title goes here' name='title' onChange={handleChange} value={form.title}/>
      </Form.Group>
      {
        !isEditMode ? <Form.Group controlId='image' className='mb-3'>
          <Form.Label>Image</Form.Label>
          <Form.Control type='file' formEncType='image/*' onChange={handleChange} value={form.image} name='image'/>
      </Form.Group> : ''
      }
      <div className='d-flex justify-content-end'>
        <Button variant='danger' className='mx-2' onClick={() => updateView('services')}>cancel</Button>
        <Button variant='dark'>{isEditMode ? 'Update' : 'Add'} Service</Button>
      </div>
    </Form>
  )
}

export default ServiceForm