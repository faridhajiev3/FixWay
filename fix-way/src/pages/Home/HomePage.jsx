import React from 'react'
import Bringing from './Bringing'
import Works from './Works'
import Services from './Services'
import Platform from './Platform'
import Trusted from './Trusted'
import Matched from './Matched'
import Solutions from './Solutions'

function HomePage() {
    return (
        <main>
            <Solutions/>
            <Bringing/>
            <Matched/>
            <Works/>
            <Services/>
            <Platform/>
            <Trusted/>
        </main>
    )
}

export default HomePage