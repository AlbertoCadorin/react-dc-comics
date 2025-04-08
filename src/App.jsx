// App.jsx

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import BluStrip from "./components/BluStrip";
import comics from "./data/comics"


function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Main comics={comics} />
        <BluStrip />
        <Footer />
      </div>
    </>
  )
}

export default App;