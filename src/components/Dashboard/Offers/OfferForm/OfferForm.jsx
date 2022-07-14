import { useReducer } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useUpdateDashboardContext } from '../../../../contexts/DashboardContext'
import styles from './OfferForm.module.css'

const formReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  }
}

const OfferForm = (props) => {
  const isEditMode = props.type === 'edit'
  const initialOffer = isEditMode ? props.offer : {
    title: '',
    short_description: '',
    long_description: '',
    // imgurl: [aboutImg],
    price: '',
    id: 4,
    section_hash: '',
    artist: '',
    year: '',
    dimension: '',
    orientation: '',
    medium: '',
    status: ''
  }
  const [form, updateForm] = useReducer(formReducer, initialOffer)
  const {updateView} = useUpdateDashboardContext()
  const handleChange = ev => {
    const action = {
      name: ev.target.name,
      value: ev.target.value
    }

    updateForm(action)
  }
  return (
    <Form className={styles.Form}>
      <h5>{isEditMode ? 'Edit' : 'Add'} Offer</h5>
      <Form.Group controlId='title' className='mb-3'>
        <Form.Label>title</Form.Label>
        <Form.Control type='text' name='title' placeholder='Enter offer title' onChange={handleChange} value={form?.title}/>
      </Form.Group>
      <Form.Group controlId='short_description' className='mb-3'>
        <Form.Label>short description</Form.Label>
        <Form.Control type='text' name='short_description' placeholder='Enter short description for offer' onChange={handleChange} value={form?.short_description}/>
      </Form.Group>
      <Form.Group controlId='long_description' className='mb-3'>
        <Form.Label>long description</Form.Label>
        <Form.Control as='textarea' name='long_description' placeholder='Enter long description for offer' onChange={handleChange} value={form?.long_description}/>
      </Form.Group>
      <Form.Group  controlId='price' className='mb-3'>
        <Form.Label>Price</Form.Label>
        <Form.Control type='number' step={0.01} name='price' placeholder='Enter price for offer' onChange={handleChange} value={form?.price}/>
      </Form.Group>
      <Form.Group controlId='artist' className='mb-3'>
        <Form.Label>Artist</Form.Label>
        <Form.Control type='text' name='artist' placeholder='Artist here' onChange={handleChange} value={form?.artist}/>
      </Form.Group>
      <Form.Group controlId='dimension' className='mb-3'>
        <Form.Label>Dimension</Form.Label>
        <Form.Control type='text' name='dimension' placeholder='Dimension here' onChange={handleChange} value={form?.dimension}/>
      </Form.Group>
      <Form.Group controlId='medium' className='mb-3'>
        <Form.Label>Medium</Form.Label>
        <Form.Control type='text' name='medium' placeholder='Medium goes here' onChange={handleChange} value={form?.medium}/>
      </Form.Group>
      <Form.Group controlId='status' className='mb-3'>
        <Form.Label>Status</Form.Label>
        <Form.Select onChange={handleChange} value={form?.status}>
          <option value=''>--select status--</option>
          <option value='sold'>sold</option>
          <option value='onsale'>on sale</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId='year' className='mb-3'>
        <Form.Label>Year</Form.Label>
        <Form.Control type='number' name='year' placeholder={new Date().getFullYear()} onChange={handleChange} value={form?.year}/>
      </Form.Group>
      <Form.Group controlId='orientation' className='mb-3'>
        <Form.Label>Orientation</Form.Label>
        <Form.Control type='text' name='orientation' placeholder='Enter offer title' onChange={handleChange} value={form?.orientation}/>
      </Form.Group>
      {
        !isEditMode ? <Form.Group controlId='images' className='mb-3'>
          <Form.Label>Images</Form.Label>
          <Form.Control type='file' name='images' formEncType='image/*' placeholder='Select offer images' multiple onChange={handleChange} value={form?.images}/>
        </Form.Group> : ''
      }
      <div className='d-flex justify-content-end'>
        <Button variant='danger' className='mx-2' onClick={() => updateView('offers')}>cancel</Button>
        <Button variant='dark'>{isEditMode ? 'Update' : 'Add'} Offer</Button>
      </div>
    </Form>
  )
}

export default OfferForm