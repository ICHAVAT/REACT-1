import './App.css'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"aca van los productos"}/>
    </>
  );
}

export default App;
