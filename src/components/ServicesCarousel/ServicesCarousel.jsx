import { Button, Carousel } from "react-bootstrap"
import styles from './ServicesCarousel.module.css'
import { useUpdateMainContext } from '../../contexts/MainContext';
import aboutImg from '../../assets/about.jpg'
import contactImg from '../../assets/contact.jpg'
import longImg from '../../assets/long.jpg'
import boxImg from '../../assets/sample-box.png'

const ServicesCarousel = () => {

  const services = [
    {
      id: 0,
      title: 'title2',
      imgurl: boxImg,
    },
    {
      id: 1,
      title: 'title1',
      imgurl: longImg,
    },
    {
      id: 2,
      title: 'title3',
      imgurl: contactImg,
    },
    {
      id: 3,
      title: 'title4',
      imgurl: aboutImg,
    }
  ]
  
  const {openOffersView} = useUpdateMainContext();


  return (
    <Carousel interval={10000} controls={false} fade>
        {
        services.map(({id, title, imgurl}) => 
            (
            <Carousel.Item className={styles.ServiceItem} style={{backgroundImage: `url(${imgurl})`}} key={id}>
                <div>
                <h3 className="text-light text-capitalize text-center">{title}</h3>
                <Button onClick={() => openOffersView(title)} variant='primary'>view category</Button>
                </div>
            </Carousel.Item>
            )
        )
        }
    </Carousel>
  )
}

export default ServicesCarousel