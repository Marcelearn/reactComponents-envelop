import React from 'react';
import EnvelopeFrom from './components/envelopeFrom'
import EnvelopeTo from './components/envelopeTo'
import Stamp from './components/Stamp'
import "./App.css"

const to = {
    fullName: "Mr. Max ",
    street: "4. Avenue",
    city: "Berlin 14109",
}
const from = {
    fullName: "Mrs. Mustermann",
    street: "Banhofstrasse 2.",
    city: "Leipzig 04255",
}

export default function App() {
    return (
        <div className='container'>
            <EnvelopeFrom  personFrom={from}/>
            <EnvelopeTo  personTo={to}/>
            <Stamp />
        </div>
    )
}
