import React from "react"

function Footer () {
    const currentYear = new Date().getFullYear()
    return  (
        <footer>
            <p> Copyright vasif.will {currentYear} </p>
        </footer>

    )
}

export default Footer