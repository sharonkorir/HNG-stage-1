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

// import M from 'materialize-css';

function App() {
  return(
    <div className="container">
      <header className="profile">
        <p>profile pic here id profile_img</p>
        <h6>coding_architct id twitter</h6>
        <p>sharon korir id, slack, className hidden</p>
        <p>share button /flex..more button on small screen</p>
      </header>
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://twitter.com/coding_architct" className='black-text'>Twitter Link</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://training.zuri.team/" className='black-text'>Zuri Team id btn_zuri</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://books.zuri.team" className='black-text'>Zuri Books id 'books'</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://books.zuri.team/python-for-beginners?ref_id=sharon korir" className='black-text'>Python Books id 'book_python'</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://background.zuri.team" className=' black-text'>Background Check for Coders 'pitch'</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://books.zuri.team/design-rules" className='black-text'>Design Books id 'book_design'</a>
          </div>
        </div>
        {/* <a href="https://twitter.com/coding_architct" className='col s12 m12 l12 card-panel grey lighten-2 black-text center-align'>Twitter Link</a>
        <a href="https://training.zuri.team/" className='col s12 m12 l12 card-panel grey lighten-2 black-text center-align'>Zuri Team id btn_zuri</a>
        <a href="https://books.zuri.team" className='col s12 m12 l12 card-panel grey lighten-2 black-text center-align'>Zuri Books id 'books'</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=sharon korir" className='col s12 m12 l12 card-panel grey lighten-2 black-text center-align'>Python Books id 'book_python'</a>
        <a href="https://background.zuri.team" className='col s12 m12 l12 card-panel grey lighten-2 black-text center-align'>Background Check for Coders 'pitch'</a>
        <a href="https://books.zuri.team/design-rules" className='col s12 m12 l12 card-panel grey lighten-2 black-text center-align'>Design Books id 'book_design'</a> */}
      </div>
      <div className="icons">
        <p>slack icon</p>
        <a href="https://github.com/sharonkorir">github icon</a>
      </div>
      <div className="divider"></div>
      <div className="footer">
        <p>zuri internship icon...flex on wide screen, cascade on mobile</p>
        <p>HNG Internship 9 Frontend Task</p>
        <p>Ingressive for good icon</p>
      </div>
    </div>
  )
}

export default App;
