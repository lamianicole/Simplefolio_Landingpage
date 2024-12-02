import "./Hero.css"

const Hero = () => {
    return ( 
        <div className="hero-div">
            <h1>Hi, I am <span>Lamia Nicole.</span></h1>
            <h3>A Front End Developer.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptate ullam eligendi enim iusto autem est vitae minima repellendus, soluta aliquid, error earum cupiditate magnam quidem omnis nemo natus veritatis!</p>
            <button className="btn-with-border">resume</button>
        </div>
    );
}

export default Hero;