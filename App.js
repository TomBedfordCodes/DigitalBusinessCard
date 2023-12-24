import React from "react"
import { About } from "./components/About.js"
import { Footer } from "./components/Footer.js"
import { Info } from "./components/Info.js"
import { Interests } from "./components/Interests.js"

export function App () {
    return (
        <div>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
