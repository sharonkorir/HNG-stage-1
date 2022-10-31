// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import M from 'materialize-css';

function App() {
  return(
    <div className="container">
      <header className="profile">
        <p>profile pic here id profile_img</p>
        <h6>coding_architct id twitter</h6>
        <p>sharon korir id, slack, className hidden</p>
        <p>share button /flex..more button on small screen</p>
      </header>
      <div className="link-section">
        <a href="https://twitter.com/coding_architct">Twitter Link</a>
        <a href="https://training.zuri.team/">Zuri Team id btn_zuri</a>
        <a href="https://books.zuri.team">Zuri Books id 'books'</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=sharon korir">Python Books id 'book_python'</a>
        <a href="https://background.zuri.team">Background Check for Coders 'pitch'</a>
        <a href="https://books.zuri.team/design-rules">Design Books id 'book_design'</a>
      </div>
      <div className="icons">
        <p>slack icon</p>
        <a href="https://github.com/sharonkorir">github icon</a>
      </div>
      <div className="footer">
        <p>zuri internship icon...flex on wide screen, cascade on mobile</p>
        <p>HNG Internship 9 Frontend Task</p>
        <p>Ingressive for good icon</p>
      </div>
    </div>
  )
}

export default App;
