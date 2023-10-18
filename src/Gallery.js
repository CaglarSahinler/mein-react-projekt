import './Cat.css';

function Cat() {
  return (
    <div className="Cat">
        <img src="https://i.imgur.com/MK3eW3Am.jpg" className="Cat-img" alt="Katzenbild" />
    </div>
  );
}

// export default Cat;

function Gallery() {
    return (
      <section>
        <h2>Meine Gallery</h2>
        <Cat />
        <Cat />
        <Cat />
      </section>
    );
  }
  
  export default Gallery;