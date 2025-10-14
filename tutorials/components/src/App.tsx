import "./App.css";

function App() {
  return (
    <>
      <header>
            <h1 className="animate__animated animate__bounce">We love Pizza</h1>
          </header>

          <main>
            <p>My HomePage</p>
            <p>
              Because we love JS, you can also click on the header to stop / start the
              music ; )
            </p>

            <audio id="audioPlayer" controls autoPlay>
              <source
                src="./sound/Infecticide-11-Pizza-Spinoza.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </main>

          <footer>
            <h1 className="animate__animated animate__bounce animate__delay-2s">
              But we also love JS
            </h1>
            <img src="./img/js-logo.png" alt="" />
          </footer>
        </>
  );
}

export default App;
