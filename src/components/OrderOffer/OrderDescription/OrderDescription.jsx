import styles from "./OrderDescription.module.css"

const OrderDescription = (props) => {
  const offer = props.offer
  return (
    <div className="text-center">
      <p>
        {offer.long_description}&nbsp; 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, vel culpa? 
        Minus doloremque veniam facilis eveniet perspiciatis aut vero! Omnis velit ea 
        temporibus magni eius aliquam minima, recusandae qui numquam.
      </p>
      <h6>-- Artist Ikeji</h6>
      <div className={styles.OrderTags}>
        <span>120px by 240px</span>
        <span>portrait or landscape</span>
        <span>medium</span>
      </div>
    </div>
  )
}

export default OrderDescription