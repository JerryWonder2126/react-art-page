import { createContext, useContext, useReducer, useState } from 'react';
import Services from '../components/Dashboard/Services/Services';
import Offers from '../components/Dashboard/Offers/Offers';

import aboutImg from '../assets/about.jpg'
import contactImg from '../assets/contact.jpg'
import longImg from '../assets/long.jpg'
import boxImg from '../assets/sample-box.png'
import ServiceForm from '../components/Dashboard/Services/ServiceForm/ServiceForm';
import OfferForm from '../components/Dashboard/Offers/OfferForm/OfferForm';

const DashboardContext = createContext();

const UpdateDashBoardContext = createContext();

const viewReducer = (state, action) => {
  let activeView
  if (action.view === 'offers') {
    activeView = <Offers />
  } else if (action.view === 'services') {
    activeView = <Services />
  } else if (action.view === 'addService') {
    activeView = <ServiceForm type={action.type} service={action.item}/>
  } else if (action.view === 'addOffer') {
    activeView = <OfferForm type={action.type} offer={action.item}/>
  }
  return activeView
}

const authStateReducer = (state, action) => {
  const authState = {
    ...state
  }
  if (action === 'login') {
    authState.active = true
    sessionStorage.setItem('authState', JSON.stringify(authState))
  } else if (action === 'logout') {
    authState.active = false
    sessionStorage.removeItem('authState')
  }
  
  return authState
}

const sessionAuthState  = () => {
  let authState = sessionStorage.getItem('authState')
  return authState && JSON.parse(authState)?.active
}

export const DashboardContextProvider = (props) => {
  const {children} = props;

  const defaultOffers = [
    {
        title: 'title',
        short_description: 'short description',
        long_description: 'long description',
        imgurl: [aboutImg, longImg, contactImg, boxImg],
        price: 90,
        id: 1,
        section_hash: 'string',
        artist: 'string',
        year: 2022,
        dimension: 'string',
        orientation: 'string',
        medium: 'string',
        status: 'sold'
    },
    {
        title: 'title',
        short_description: 'short description',
        long_description: 'long description',
        imgurl: [contactImg],
        price: 90,
        id: 2,
        section_hash: 'string',
        artist: 'string',
        year: 2022,
        dimension: 'string',
        orientation: 'string',
        medium: 'string',
        status: 'onsale'
    },
    {
        title: 'title',
        short_description: 'short description',
        long_description: 'long description',
        imgurl: [longImg],
        price: 90,
        id: 3,
        section_hash: 'string',
        artist: 'string',
        year: 2022,
        dimension: 'string',
        orientation: 'string',
        medium: 'string',
        status: 'onsale'
    },
    {
        title: 'title',
        short_description: 'short description',
        long_description: 'long description',
        imgurl: [aboutImg],
        price: 90,
        id: 4,
        section_hash: 'string',
        artist: 'string',
        year: 2022,
        dimension: 'string',
        orientation: 'string',
        medium: 'string',
        status: 'sold'
    }]

  const defaultService = [
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

  const [view, setView] = useReducer(viewReducer, <Services />)

  const [serviceHash, setServiceHash] = useState('')
  const [authState, setAuthState] = useReducer(authStateReducer, sessionAuthState())
  const [services, setServices] = useState(defaultService)
  const [offers, setOffers] = useState(defaultOffers)

  const updateView = (view) => {
    setView({view})
  }

  const addService = (type='add', identifier) => setView({view: 'addService', type, item: services[identifier]})
  const addOffer = (type='add', identifier) => setView({view: 'addOffer', type, item: offers[identifier]})
  const login = () => setAuthState('login')
  const logout = () => setAuthState('logout')

  const dashboardContext = {
    serviceHash, view, services, offers, authState
  }

  const updateDashboardContext = {
    setServiceHash, updateView, setServices, setOffers,
    addService, addOffer, login, logout
  }

  return (
    <DashboardContext.Provider value={dashboardContext}>
      <UpdateDashBoardContext.Provider value={updateDashboardContext}>
        { children }
      </UpdateDashBoardContext.Provider>
    </DashboardContext.Provider>
  )
}

export const useUpdateDashboardContext = () => {
  return useContext(UpdateDashBoardContext);
}

export const useDashboardContext = () => {
  return useContext(DashboardContext);
}
