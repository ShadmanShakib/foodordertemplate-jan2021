import {ChakraProvider} from '@chakra-ui/react';
import {Router} from '@reach/router'
import Homepage from './Pages/Homepage'
import ResturantDetail from './Pages/ResturantDetail'


function App() {
  return (
   
    <ChakraProvider>
      <Router >

      <Homepage path='/'/>
      <ResturantDetail path ='rd'/>
      </Router>
    </ChakraProvider>
    
   
  );
}

export default App;
