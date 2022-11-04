import zuri from '../images/zuri.png';
import I4G from '../images/I4G.png';
import './footer.css';

function Footer(){
  return(
    <div className='container'>
      <div className="divider"></div>
      <div className='row' id='row'>
        <div className='col s12 m4 l4'>
          <img
            src={zuri}
            alt="zuri logo"
            className='responsive-img'>
          </img>
        </div>
        <div className='col s12 m4 l4'>
          <p className="grey-text center-align hide-on-small-only">HNG Internship 9 Frontend Task</p>
          <p className="grey-text hide-on-med-and-up">HNG Internship 9 Frontend Task</p>
        </div>
        <div className='col s12 m4 l4'>
          <img
            src={I4G}
            alt="I4G logo"
            className='responsive-img hide-on-small-only right'>
          </img>
          <img
            src={I4G}
            alt="I4G logo"
            className='responsive-img hide-on-med-and-up'>
          </img>
        </div>
      </div>
    </div>
  )
}

export default Footer;