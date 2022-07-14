import { Button, Card } from "react-bootstrap"
import styles from "./ItemCard.module.css"
import { useUpdateDashboardContext } from '../../../contexts/DashboardContext'


const ItemCard = (props) => {
  const {addService, addOffer} = useUpdateDashboardContext()
  const edit = () => {
    if (props.type === 'service') {
      addService('edit', props.id)
    } else if (props.type === 'offer') {
      addOffer('edit', props.id)
    }
  }
  return (
    <Card className={`${styles.ItemCard} mb-3`}>
        <Card.Body>
            <div style={{backgroundImage: `url(${props.imgurl})`}}></div>
            <div>
              <Card.Title as='h6'>{props.title}</Card.Title>
              <Button variant='secondary'>preview</Button>
              <Button onClick={edit}>edit</Button>
              <Button variant='danger'>delete</Button>
            </div>
        </Card.Body>
    </Card>
  )
}

export default ItemCard