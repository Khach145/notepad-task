import './App.css';
import createRoutes from './routes/createRoutes';


function App() {

  const routes = createRoutes()

  return (
    <>
    {routes}
    </>
    
  );
}

export default App;
