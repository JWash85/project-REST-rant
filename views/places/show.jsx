const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <img src={data.place.pic} />
        <h1>{data.place.name}</h1>
        <h3>Rating</h3>
        <p>Not Rated</p>
        <h3>Description</h3>
        <p>
          Located {data.place.city}, {data.place.state} and serving{" "}
          {data.place.cuisines}
        </p>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        <h3>Comments</h3>
        <p>No comments yet!</p>
      </main>
    </Def>
  );
}

module.exports = show;