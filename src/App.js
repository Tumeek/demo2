import {useState} from 'react';
import './App.css';

function App() {
const [Mailit, setMailit] = useState(0)
const [Kilometrit, setKilometrit] = useState(0)
function laske(e){
  e.preventDefault()
  const tulos = Mailit * 1.609
  setKilometrit(tulos)
}




  return (
 <div id="content">
  <h3>Mailit kilometreiksi</h3>
  <form onSubmit={laske}>
    <div>
      <label>Mailit</label>
      <input value={Mailit} onChange={e => setMailit(e.target.value)}/>
    </div>
    <div>
      <label>Kilometrit</label>
      <output>{Kilometrit.toFixed(2)}</output>
    </div>
    <button>Laske</button>
  </form>
 </div>
  );
}

export default App;
