//Importing React
const React = require('react')

//Importing Def function from default.jsx page
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-rant</h1>
                <div className="burger">
                    <img src="/images/beautiful-burger.jpg" alt="Beautiful Burger"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eiliv-Sonas Aceron</a> on <a href="https://unsplash.com/s/photos/hamburger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
               {/* <a href="/places">
                    <button className="btn-primary">Places Page</button>
    </a> */}
            </main>
        </Def>
    )
}

module.exports = home