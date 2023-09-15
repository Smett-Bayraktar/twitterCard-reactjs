import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="_nasch_" name="Nicolás Schürmann" /> 
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
            <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
            <TwitterFollowCard userName="SoyDalto" name="Soy Dalto" /> 
        </section>   
    )
}
