// import M from 'materialize-css';
import profile from '../images/profile.jpeg';
import github from '../images/github.png';
import more from '../images/more.png';
import share from '../images/share.png';
import slack from '../images/slack.png';

function Home(){
  return(
    <div className="container" style={{paddingTop:50}}>
      <div className="row">
        <div className="col s6 m6 l6"></div>
        <div className="col s6 m6 l6">
          <div className="right-align">
            <div class="hide-on-small-only">
              <img src={share} alt="more button" className="responsive-img"></img>
            </div>
            <div class="hide-on-med-and-up"
            style={{
              paddingLeft:'120px'
            }}>
              <img src={more} alt="more button" className="responsive-img"></img>
            </div>
          </div>
        </div>
      </div>
      <header className="profile center-align">
        <img src={profile} id="profile_img" alt="my profile" class="circle responsive-img" style={{maxHeight:'100px', minWidth:'100px'}}></img>
        <h5 id="twitter"><strong>coding_architct</strong></h5>
        <p className="hide" id="slack">sharon korir</p>
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
            <a href="https://books.zuri.team/design-rules" className='black-text' id="book_design" title="Design 101, the only book you need to learn design, offered to you by Zuri">Design Books</a>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <div className="card-panel grey lighten-3 center-align">
            <a className='black-text' id='contact' href='/contact'>Contact Me</a>
          </div>
        </div>
      </div>
      <div className="row" style={{maxHeight:'50px'}}>
        <div className="center-align">
            <img src={slack} alt='slack-logo' className='responsive-img'></img>
            <a href="https://github.com/sharonkorir" 
            style={{
              padding: '10px',
            }}
            ><img src={github} alt="github logo" className="responsive-img"></img></a>
        </div>
      </div>
    </div>
  )
}
export default Home;