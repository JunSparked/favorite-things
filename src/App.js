import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header.js';
import Food from './food.js';
import Footer from './footer.js';

function App() {
  return (
    <div className="app">
      <section>
          <Header />
      </section>
      <section>
          <Food />
      </section>
      <section>
          <Footer />
      </section>
    </div>
  );
}
export default App;
