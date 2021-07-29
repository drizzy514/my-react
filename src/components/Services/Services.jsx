import "./Services.css";


function   Services (){
    return (
        <>
        
         <section className="services" id="services">
             <div className="container">

      <div className="section-title">
        <h2>My Services</h2>
        <div className="section-line">
          <span className="section-radius"></span>
        </div>
      </div>
      <div className="services">
        <p className="services-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus tenetur dicta numquam suscipit possimus fugit vel, veniam, cumque nisi perferendis optio nesciunt modi temporibus! Alias, magni at cum perferendis, a rerum laboriosam, pariatur eum illum hic quaerat? Quas voluptatibus impedit ab quo, voluptates exercitationem, ratione repellendus distinctio amet, voluptatem eligendi!</p>
        <ul className="services__list">
          <li className="services__item">
          <div className="services__icon">
          <i className="fas fa-palette"></i> 
          </div>
            <h3>Student</h3>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem rerum adipisci corrupti veniam assumenda quasi quos illo suscipit rem minima, odit doloribus ipsa maiores eius corporis possimus voluptates sunt.</p>
          </li>
          <li className="services__item">
            <div className="services__icon">
              <i className="fas fa-file-code"></i> 
              </div>
            <h3>Fronted developer</h3>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem rerum adipisci corrupti veniam assumenda quasi quos illo suscipit rem minima, odit doloribus ipsa maiores eius corporis possimus voluptates sunt.</p>
          </li>
          <li className="services__item">
            <div className="services__icon">
              <i className="fas fa-object-group"></i> 
              </div>
            <h3>Communicator</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem rerum adipisci corrupti veniam assumenda quasi quos illo suscipit rem minima, odit doloribus ipsa maiores eius corporis possimus voluptates sunt.</p>
          </li>
        </ul>
      </div>
             </div>
    </section>
        </>
    )
}

export default Services;