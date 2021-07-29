import "./Contact.css"

function Contact(){
    return (
        <>
        <div className="container">
        <div class="section-title">
        <h2>Contact Me</h2>
        <div class="section-line">
          <span class="section-radius"></span>
        </div>
      </div>
      <ul class="contact-list">
        
        <li class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <h3>Address</h3>
          <address>Toshkent City, Nazarbek</address>
        </li>
        <li class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-phone"> </i>
          </div>
          <h3>Phone</h3>
          <a class="tel-link" href="tel:+998998640246">+99899 864 02 46</a>
        </li>

     
      <li class="contact-item">
        <div class="contact-icon">
          <i class="fas fa-envelope"></i>
        </div>
        <h3>Email Address</h3>
      <p>muhtorovabduhakim09@gmail.com</p>  
      </li>
      <li class="contact-item">
        <div class="contact-icon">
          <i class="fas fa-globe"></i>
        </div>
      <h3>Website</h3>
      <p>drizzyportfolio.netlify.app</p>
      </li>
    </ul>
    
        </div>
        </>
    )
}
export default Contact;