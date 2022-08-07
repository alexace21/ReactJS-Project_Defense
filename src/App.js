import Top_Bar from './components/Header/TopBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Clock from './components/Clock/Clock';

function App() {
  return (
    <main id='main-content'>
      <div id="box">
        <Top_Bar />

        <Clock />

        <Home />


        <Footer />
      </div>
    </main>
  );
}

export default App;
