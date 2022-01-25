import "./css/Landing.css";
import LinkedImg from "./LinkedImg";
import Et from "./EditorText";
import PageSel from "./PageSel";

function LandingText(props) {
    return (
        <div className="LandingText">
            <Et color="purple">import </Et>
            <Et color="fg">&#123;</Et>
            <Et color="red">bio</Et>
            <Et color="fg">, </Et>
            <Et color="red">projects</Et>
            <Et color="fg">, </Et>
            <Et color="red">resume</Et>
            <Et color="fg">, </Et>
            <Et color="red">contact</Et>
            <Et color="fg">&#125; </Et>
            <Et color="purple">from </Et>
            <Et color="green">'pages' </Et>
            <br /> <br /> <br /> <br /> <br /> <br />
            <Et color="cm">// Type what you'd like to see! </Et>
            <br />
            <Et color="purple">function </Et>
            <Et color="blue">MiguelMaramara</Et>
            <Et color="fg">(</Et>
            <Et color="orange">props</Et>
            <Et color="fg">)</Et>
            <Et color="fg">&#123;</Et>
            <br />
            <Et color="purple">&nbsp;&nbsp;&nbsp;&nbsp;return</Et>
            <Et color="fg">(</Et>
            <PageSel />
            <Et color="fg">)</Et> <br /> <Et color="fg">&#125;</Et>
        </div>
    );
}

/**
 * Stage is a section that emphasizes a stage in my life, a piece of experience that I have
 * @param {*} props should include the following fields:
 *      - title
 *      - description
 */
function Landing(props) {
    return (
        <div id="Landing" className="Landing">
            <div className="backgroundBox">
                <img
                    className="backgroundImage"
                    src="/img/background/ball.jpg"
                    alt="Snow background"
                />
                <div className="darkFilter"> </div>
            </div>

            <div className="landingBox">
                <div className="nameBox">
                    <LandingText />
                </div>
                <div className="logoBox">
                    <LinkedImg
                        name="email"
                        url="mailto:miguelcmaramara@gmail.com"
                        scheme={props.scheme}
                        type="svg"
                        // img="/img/logo/mail-offwhite.png"
                    />
                    <LinkedImg
                        name="linkedIn"
                        url="https://www.linkedin.com/in/miguel-maramara/"
                        scheme={props.scheme}
                        type="svg"
                        // img="/img/logo/linkedin-offwhite.png"
                    />
                    <LinkedImg
                        name="github"
                        url="https://github.com/miguelcmaramara"
                        scheme={props.scheme}
                        type="svg"
                        // img="/img/logo/github-offwhite.png"
                    />
                    <LinkedImg
                        name="spotify"
                        url="https://open.spotify.com/user/ygwgmkr4oj58wblegzvrh1zyh?si=b6c12b0e04aa44ec"
                        scheme={props.scheme}
                        type="svg"
                        // img="/img/logo/spotify-offwhite.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Landing;
