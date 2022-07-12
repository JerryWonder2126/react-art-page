import { createContext, useContext, useState } from 'react';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Offers from '../components/Offers/Offers';
import aboutImg from '../assets/about.jpg'
import contactImg from '../assets/contact.jpg'
import longImg from '../assets/long.jpg'
import boxImg from '../assets/sample-box.png'
import OrderOffer from '../components/OrderOffer/OrderOffer';

const MainContext = createContext();

const UpdateMainContext = createContext();

export const AppContextProvider = (props) => {
  const {children} = props;
  const defaultServices = [
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

  const [activeView, setActiveView] = useState(<Home />);
  const [services, setServices] = useState(defaultServices);

  const viewMappings = {
    'home': <Home />,
    'about': <About />,
    'contact': <Contact />,
    'offer': (title) => <Offers title={title} />,
    'order': (offer) => <OrderOffer offer={offer} />
  }

  const changeView = (view) => {
    setActiveView(viewMappings[view])
  }

  const openOffersView = (title) => {
    setActiveView(viewMappings.offer(title))
  }

  const openOrderView = (offer) => {
    setActiveView(viewMappings.order(offer))
  }
  

  const mainContext = {activeView, services}

  const updateMainContext = {changeView, openOffersView, openOrderView, setServices}

  return (
    <MainContext.Provider value={mainContext}>
      <UpdateMainContext.Provider value={updateMainContext}>
        { children }
      </UpdateMainContext.Provider>
    </MainContext.Provider>
  )
}

export const useUpdateMainContext = () => {
  return useContext(UpdateMainContext);
}

export const useMainContext = () => {
  return useContext(MainContext);
}
