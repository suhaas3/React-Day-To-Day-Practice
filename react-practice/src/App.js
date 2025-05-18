import "../src/styles/movies.css";

function App() {
  const movies = [
    { title: "Devara", language: "Telugu", image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/devara--part-1-et00310216-1712750637.jpg" },
    { title: "Pushpa 2", language: "Hindi", image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa-2-the-rule-et00356724-1737184762.jpg" },
    { title: "game changer", language: "Telugu", image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/game-changer-et00311772-1731311322.jpg" },
    { title: "Hit 3", language: "Telugu", image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hit-the-3rd-case-et00410905-1740556769.jpg" },
    { title: "ntr 31", language: "Telugu", image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ntr-31-et00311251-1690259828.jpg" }
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((copyOfMovies) => {
            const {title,image,language} = copyOfMovies;
            return (
              <div className="col-4">
                <div class="card card-main-body">
                  <img src={image} class="card-img-top" alt="..." />
                  <div class="card-body card-body-style">
                    <h5 class="card-title card-title-style">{title}</h5>
                    <p class="card-text card-lang-style">{language}</p>
                    <button className="booking-button">BookYourShow</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
