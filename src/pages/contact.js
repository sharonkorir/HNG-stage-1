import Footer from "../components/footer";

function Contact(){
  return(
    <div style={{paddingTop:'64px'}} className='body'>
      <main className="container">
        <h4>Contact Me</h4>
        <p className="grey-text text-darken-3">Hi there, contact me to ask me about anything you have in mind.</p>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 m6 l6">
              <input placeholder="Enter your first name" id="first_name" type="text"/>
              <label htmlFor="first_name" className="active">First Name</label>
            </div>
            <div className="input-field col s12 m6 l6">
              <input id="last_name" type="text" placeholder="Enter your last name"/>
              <label htmlFor="last_name" className="active">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" placeholder="yourname@email.com"/>
              <label htmlFor="email" className="active">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="message" className="materialize-textarea" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
              <label htmlFor="textarea1" className="active">Message</label>
            </div>
          </div>
          <div className="row">
            <label className="input-field col s12">
              <input type="checkbox"/>
              <span style={{color:'#475467'}}>You agree to providing your data to Sharon who may contact you</span>
            </label>
          </div>
          <div className="row">
            <button className="btn col s12" id="btn_submit">Send message</button>
          </div>
        </form>
      </main>
      <Footer/>
    </div>
  )
}

export default Contact;