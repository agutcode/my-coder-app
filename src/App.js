import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';
import {NavigationBar} from './components/Navbar'

function App() {
  return (
    <>
      <NavigationBar />
      <ItemListContainer text="Aquí verás próximamente nuestros productos"/>
    </>
  );
}

export default App;
