import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter as Router } from 'react-router-dom'
import Context from './Components/Context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Context>
      <App />
    </Context>
  </Router>
)
