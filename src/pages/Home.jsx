import React from 'react'
import CardX from '../components/CardX'
import FooterX from '../components/FooterX'
import NavBarx from '../components/NavBarx'
import SliderX from '../components/SliderX'
import MainContent from '../components/MainContent'


const Home = () => {
  return (
   <div>
   <NavBarx />
   <MainContent PageName="HOME PAGE" Desinger=": Mohamed Malek Bouraoui" OWNER=": Check Pictures for more info"/>
   <SliderX />
   <CardX />
   <FooterX />
   
   </div>
  )
}

export default Home