const React = require('react')
const Def = require('../default')

function index (data) {
    //Formatting data in place array into HTML so web page can display it.
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    {/*Display contents of placesFormatted array*/} 
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )

  }

module.exports = index