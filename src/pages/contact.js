import Footer from "../components/footer";

function Contact(){
  return(
    <body style={{paddingTop:'50px'}} className='container'>
      <header>
        <h4>Contact Me</h4>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>
      <main>
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
              <textarea id="message" className="materialize-textarea" placeholder="Send me a message and I'll reply you as soon as possible "></textarea>
              <label htmlFor="textarea1" className="active">Textarea</label>
            </div>
          </div>
          <div className="row">
            <label>
              <input type="checkbox" />
              <span>You agree to providing your data to Sharon who may contact you</span>
            </label>
          </div>
          <div className="row">
            <button className="btn col s12" id="btn_submit">Send message</button>
          </div>
        </form>
      </main>
      <Footer/>
    </body>
  )
}

export default Contact;