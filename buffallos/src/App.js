import GlobalStyle from "./globalStyle";
import Main from "../src/pages/Main/Main";
import Shows from "../src/pages/Shows/Shows";
import Footer from "../src/pages/Footer/Footer";
import Location from "./pages/Location/Locations";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
      <Shows />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
