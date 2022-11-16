import React, {useState} from 'react'
import './styles/style.css'
 
function App() {
  const [nightMode, setNightMode] = useState('light')

  const Switcher = () => {
    nightMode=='dark'?setNightMode('light'):setNightMode('dark')
  }

  return(
    <div className={'App'+nightMode}>
      <p>Capybara is a giant cavy rodent native to South America.</p>
      <div className={'loader'+nightMode}></div>
      <button onClick={Switcher} className={'btn'+nightMode}>Switcher</button>
    </div>
  )
}

export default App;
