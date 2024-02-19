import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Content from './components/navegacao.jsx'

function App() {
  return (
    <div>
        <Router>
              <Content />
        </Router>
      
      </div>    
  );
}

export default App;