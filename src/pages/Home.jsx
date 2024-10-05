import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Special } from '../components/special/Special'
import { Docters } from '../components/docter/Docters'
import { Bookappointment } from '../components/bookappointment/Bookappointment'


export const Home = () => {
  return (
    <div>
       <Hero/>
        <Special/>
        <Docters/>
        <Bookappointment/>
       
    </div>
  )
}
