import "./Skillis.css";

function Skillis (){
    return(
        <>
           <section class="skills" id="skills">
               <div className="container">

      <div class="section-title">
        <h2>My Skills</h2>
        <div class="section-line">
          <span class="section-radius"></span>
        </div>
      </div>
      <div class="skills-description">
        <div>
          <h3>My Skills and Experiences</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda vitae fugit, est quam aspernatur suscipit omnis facere minus quia laudantium quis voluptatum fugiat sunt, nobis, alias commodi doloremque. Vitae aliquam unde, minus voluptatum, natus necessitatibus atque cumque, adipisci illo cupiditate omnis eveniet debitis. Soluta vel reprehenderit debitis accusantium quis voluptatibus deleniti veritatis. Provident harum aliquid inventore doloremque dolorem iste tenetur.</p>
        <a href="#" class="content-link">See more</a>

        </div>
        <div class="my-skills">

          <div class="bar">
            <div class="info">
              <span >HTML</span>
              <span>95%</span>
            </div>
            <div class="line html"></div>
          </div>
          <div class="bar">
            <div class="info">
              <span >CSS</span>
              <span>70%</span>
            </div>
            <div class="line css"></div>
          </div>
          <div class="bar">
            <div class="info">
              <span >JavaScript</span>
              <span>20%</span>
            </div>
            <div class="line javascript"></div>
          </div>
          <div class="bar">
            <div class="info">
              <span >jQuery</span>
              <span>0%</span>
            </div>
            <div class="line jquery"></div>
          </div>
        </div>
      </div>
               </div>
    </section>
        </>
    )
}
export default Skillis