import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watch from './Components/Watch';
import MainContainer from './Components/MainContainer';
function App() {
  const appRouter= createBrowserRouter([
    {
      path : "/",
      element: <Body/>,
      children : [
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"/watch",
          element:<Watch/>
        }
      ]
    },
   
  ]);
  return (
    
      <Provider store={appStore}>
        <div>
        <Header/>
          <RouterProvider router={appRouter} />
        </div>
         
      </Provider>
    
   
  

  );
}

export default App;
