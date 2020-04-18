import React from "react";
import PropTypes from "prop-types";

function Album({ name, image, rating }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name + " Album cover"} width="200" height="200" />
    </div>
  );
}

Album.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const albums = [
  {
    id: 1,
    rating: 4.5,
    name: "Boyhood",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/321/723/81321723_1575013966692_1_600x600.JPG",
  },
  {
    id: 2,
    rating: 5,
    name: "24:26",
    image:
      "https://i.pinimg.com/originals/a8/f5/98/a8f5981839d951c4e3eda830152f2ee5.jpg",
  },
  {
    id: 3,
    rating: 4,
    name: "The Anecdote",
    image:
      "https://w.namu.la/s/f111aea6d5dc7ac53e40449d61f6675e2466ebb6a6b03d33dee50889e30decdf5cd91d3ae02850984fa62314c0277c82ae9a75b6b96a5b471d13ffbf70ec2f85945660cacec9a49f8b7716eb439b89429f0e075875b1fd99f0b32792e3b128d9",
  },
  {
    id: 4,
    rating: 3.5,
    name: "OFF DUTY",
    image:
      "https://post-phinf.pstatic.net/MjAxOTExMTJfMTY4/MDAxNTczNTQ3ODMyODA5.BOHWv6tnGQ7xYXGLd139nbMpDbdhoC8Ez0fX7mxCuPEg.R2e3scLU5ejSzoeRQG8LBA3tc7Zw9z_R_5jEo38RVbAg.JPEG/OFF_DUTY_커버.jpg?type=w800_q75",
  },
];

function renderAlbum(album) {
  return (
    <Album
      key={album.id}
      name={album.name}
      image={album.image}
      rating={album.rating}
    />
  );
}

function App() {
  return <div className="App">{albums.map(renderAlbum)}</div>;
}

export default App;
