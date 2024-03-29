const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h4 className="inactive">No comments yet!</h4>;
  let rating = <h4 className="inactive">Not yet rated</h4>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐️";
    }
    rating = <h3>{stars} stars</h3>;
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form
            method="POST"
            action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}
          >
            <input
              type="submit"
              className="btn btn-danger"
              value="Delete Comment"
            />
          </form>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} />
            <h1 className="locName">{data.place.name}</h1>
            <h4>
              Located {data.place.city}, {data.place.state} and serving{" "}
              {data.place.cuisines}
            </h4>
          </div>
          <div className="col-sm-6">
            <h4>Rating</h4>
            {rating}
            <h4>Description</h4>
            <h4>{data.place.showEstablished()}</h4>
            <h4>Serving {data.place.cuisines}</h4>
            <a
              href={`/places/${data.place.id}/edit`}
              className="btn btn-warning"
            >
              Edit
            </a>
            <form
              method="POST"
              action={`/places/${data.place.id}?_method=DELETE`}
            >
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <h4>Comments</h4>
        {comments}
        <form action={`/places/${data.place.id}/comment?_method=POST`}>
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="author">Author</label>
              <input id="author" name="author" className="form-control" />
            </div>
            <div className="form-group col-sm-4">
              <form action="/action_page.php">
                <label htmlFor="stars">Star Rating</label>
                <input
                  type="range"
                  className="form-range"
                  step="0.5"
                  min="1"
                  max="5"
                  id="stars"
                  name="stars"
                  //className="form-control"
                />
              </form>
            </div>
            <div className="form-group col-sm-2">
              <label htmlFor="rant">Rant?</label>
              <input
                type="checkbox"
                id="rant"
                name="rant"
                className="form-control"
              />
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add Comment"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
