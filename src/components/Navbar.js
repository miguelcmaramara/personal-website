import "./css/Navbar.css"
import useScrollPosition from "./hooks/useScrollPosition";
import useWindowDimensions from "./hooks/useWindowDmensions";

function NavbarFragment(props){
    var scroll = useScrollPosition();
    var upperBound = props.start - scroll;
    var lowerBound = props.end - scroll;
    var clipString = "polygon(0 " + upperBound + "px, 100% " + upperBound + "px, 100% " + lowerBound+ "px, 0 "+ lowerBound + "px)";

    return(
        <div className="NavbarFragment"
            style={{color: props.color,
                    // clipPath: props.clipPath}}>
                    clipPath: clipString,
                    backgroundColor: props.backColor
                        }}>
            <a href="#bio" className="navLink bio">bio</a>
            <a href="#projects" className="navLink projects">projects</a>
            <a href="#Landing" className="navLink home">M|m</a>
            <a href="#resume" className="navLink resume">cv</a>
            <a href="#contact" className="navLink contact">contact</a>
        </div>
    );
}

function Navbar(props){
    const {width, height} = useWindowDimensions();

    return(
        <div className="Navbar">
            <NavbarFragment
                id="white"
                color="#fef8ec"
                start="0"
                end={height}
                />
            <NavbarFragment
                id="black"
                color="black"
                start={height}
                end={2*height}
                backColor="#fef8ec"
                />
        </div>
    );
}

export default Navbar;