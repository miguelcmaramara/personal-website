import './App.css';
import CardDeck from './components/CardDeck'
import Landing from './components/Landing'

function App() {
  return (
    <div className="App">
      <Landing />

      <CardDeck />
      <div className="footer">
        <h6>
          Attributions:
          <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Uniconlabs - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Google - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Hight Quality Icons - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/play-button" title="play button icons">Play button icons created by Webalys - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/spotify" title="spotify icons">Spotify icons created by edt.im - Flaticon</a>
        </h6>
      </div>
    </div>
  );
}

export default App;
