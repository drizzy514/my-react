import "./Intro.css";

const IntroSection = ()=>{
    return (
        <>
        <section className="intro">
            <div className="container">

      <div className="content">
        <h2>Hello I'm <span> Abduhakim Muhtorov</span></h2>
        <div className="animated">
          <h3>Student</h3>
          <h3>Communicator</h3>
          <h3> Fronted Developer</h3>
        </div>
        <a className="content-link" href="#">See my work</a>
        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/_khakimjan_/"><i className="fab fa-instagram"></i></a>
          <a href="t.me/drizyy"><i className="fab fa-telegram"></i></a>
        </div>
      </div>
            </div>
    </section>
    </>
    )
}
export default IntroSection;