import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Categories from './components/categories/Categories';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
