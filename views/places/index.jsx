const React = require("react");
const Def = require("../default");

function index(data) {
  //Formatting data in place array into HTML so web page can display it.
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${index}`}>
          {place.name}
          </a>
        </h2>
        <p className="text-center">{place.cuisines}</p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  {
    /*Display contents of placesFormatted array*/
  }
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
