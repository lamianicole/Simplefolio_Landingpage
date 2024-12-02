import "./Skills.css"

const Skills = () => {
    return ( 
        <section>
            <h2>SKILLS</h2>
            <div className="btn-row">
                <button className="btn-without-border">HTML</button>
                <button className="btn-without-border">CSS</button>
                <button className="btn-without-border">JavaScript</button>
                <button className="btn-without-border">React</button>
            </div>
            <div className="btn-row">
                <button className="btn-without-border">SASS</button>
                <button className="btn-without-border">Tailwind CSS</button>
                <button className="btn-without-border">Git</button>
                <button className="btn-without-border">UX/UI</button>
            </div>
        </section>
    );
}

export default Skills;