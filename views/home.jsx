//Importing React
const React = require('react')

//Importing Def function from default.jsx page
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>
    )
}

module.exports = home