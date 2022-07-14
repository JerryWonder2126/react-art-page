import { createContext, useContext, useReducer } from 'react';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Offers from '../components/Offers/Offers';
import OrderOffer from '../components/OrderOffer/OrderOffer';
import DashboardMain from '../components/Dashboard/DashboardMain';

const MainContext = createContext();

const UpdateMainContext = createContext();

const viewReducer = (state, action) => {
  let newView = <Home />;
  if (action.view === 'about') {
    newView = <About />
  } else if (action.view === 'contact') {
    newView = <Contact />
  } else if (action.view === 'dashboard') {
    newView = <DashboardMain />
  } else if (action.view === 'offer') {
    newView = <Offers title={action.title} />
  } else if (action.view === 'order') {
    newView = <OrderOffer offer={action.offer} />
  }
  
  localStorage.setItem('view', JSON.stringify(action))

  return newView;
}

const previousView = () => {
  const view = localStorage.getItem('view')
  const action = view ? JSON.parse(view) : {view: 'home'}
  return viewReducer(null, action)
}

export const AppContextProvider = (props) => {
  const {children} = props;

  const [activeView, setActiveView] = useReducer(viewReducer, previousView());
  
  const changeView = (view) => {
    setActiveView({view})
  }

  const openOffersView = (title) => {
    setActiveView({view: 'offer', title})
  }

  const openOrderView = (offer) => {
    setActiveView({view: 'order', offer})
  }
  

  const mainContext = {activeView}

  const updateMainContext = {changeView, openOffersView, openOrderView}

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
