import {useState} from 'react';
import './App.css';

function App() {
const [Mailit, setMailit] = useState('')
const [Kilometrit, setKilometrit] = useState('')
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
      <output>{Kilometrit}</output>
    </div>
    <button>Laske</button>
  </form>
 </div>
  );
}

export default App;
