import './App.css';
import RandomQuoteMachine from './RandomQuoteMachine';
import MarkdownPreviewer from './MarkdownPreviewer';
import DrumMachine from './DrumMachine';
import Calculator from './Calculator';

function App() {
  
  return (
    <div className="App">
      <h1>Free Code Camp challenges</h1>
      <h6>Deployed to <a target="_blank" href="https://evasive-thumb-1234.surge.sh">https://evasive-thumb-1234.surge.sh</a></h6>
      <h2>Random Quote Machine</h2>
      <RandomQuoteMachine/>
      <br/>
      <h2>Markdown Previewer</h2>
      <MarkdownPreviewer/>
      <h2>Drum Machine</h2>
      <DrumMachine/>
      <h2>Calculator</h2>
      <Calculator/>
    </div>
  );
}


export default App;
