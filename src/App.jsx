import './components/MainContent'
import MainContent from './components/MainContent';
import './components/Sidebar'
import Sidebar from './components/Sidebar';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <h1>Leandro Espindula dos Passos</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App
