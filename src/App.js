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
    <div className="container" style={{paddingTop:50}}>
      <div className="row">
        <div className="col s6 m6 l6"></div>
        <div className="col s6 m6 l6">
          <div className="center-align">
            <div class="hide-on-small-only">
              <p>share</p>
            </div>
            <div class="hide-on-med-and-up"
            style={{
              paddingLeft:'120px'
            }}>
              <p>more</p>
            </div>
          </div>
        </div>
      </div>
      <header className="profile center-align">
        
        <img id="profile_img" src=""></img>
        <h6 id="twitter">coding_architct id twitter</h6>
        <p className="hide" id="slack">sharon korir id, slack, className hidden</p>
      </header>
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://twitter.com/coding_architct" className='black-text'>Twitter Link</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://training.zuri.team/" className='black-text' id="btn_zuri">Zuri Team id btn_zuri</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://books.zuri.team" className='black-text' id="books" title="Your one stop for books about design and coding">Zuri Books</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://books.zuri.team/python-for-beginners?ref_id=sharon korir" className='black-text' id="book_python" title="Looking to learn python? look no further, go from zero to hero with these books">Python Books</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://background.zuri.team" className=' black-text' id="pitch" title="Hire coders with confidence! Let us do the background check for you">Background Check for Coders</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a href="https://books.zuri.team/design-rules" className='black-text' id="book_design" title="Design 101, the only book you need to learn design, offered to you by Zuri">Design Books id 'book_design'</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="center-align">
          <a
          style={{
            padding: '10px',
          }}
          >slack icon</a>
          <a href="https://github.com/sharonkorir" 
          style={{
            padding: '10px',
          }}
          >github icon</a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col s12 m4 l4 left-align">
          <p>zuri internship icon...flex on wide screen, cascade on mobile</p>
        </div>
        <div className="col s12 m4 l4 center-align">
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div className="col s12 m4 l4 right-align">
          <p>Ingressive for good icon</p>
        </div>
      </div>
    </div>
  )
}

export default App;
