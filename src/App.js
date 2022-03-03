import logo from './logo.svg';
import './App.css';

function App() {

  const os = ["Android" , "Blackberry" , "iPhone" , "Windows Phone"];
  const mobile = ["Samsung" , "HTC" , "Micromax" , "Apple"];

  return (
    
    <div id='container'>
      <h1>Mobile Operating System</h1>
      {os.map( (el) => (<li>{el}</li>))}
      <h1>Mobile Manufacturers</h1>
      {mobile.map( (el) => (<li>{el}</li>))}
    </div>
    
  );
}

export default App;
