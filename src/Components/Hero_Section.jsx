
import React from 'react';


const Hero_  = () =>{
    return(
        <>
        <section id='Hero'>
        <div className="content">
            <h1>Hi!</h1>
            <h3>i am <span>Erwin Victorio</span></h3>
            <h5>I am a Wev Developer</h5>
            <p>Up to now I am just grow up my skills! Thanks to come i here!</p>
            <button>Download My CV</button>
        </div>
        <picture >
              <img src="/image/profile.png" width={400} alt="profile" />
        </picture>
        </section>
        </>
        
    )
}
export default Hero_;