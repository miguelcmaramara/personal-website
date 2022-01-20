import './css/Landing.css'
import LinkedImg from './LinkedImg'


/**
 * Stage is a section that emphasizes a stage in my life, a piece of experience that I have
 * @param {*} props should include the following fields:
 *      - title
 *      - description
 */
function Landing(props){
    return (
        <div id="Landing" className="Landing">
            <div className="backgroundBox">
                <img className='backgroundImage'
                    src='/img/background/mountain-clouds.jpg'
                    alt='Snow background image' />
                <div className="darkFilter"> </div>
            </div>

            <div className="landingBox">
                <div className='nameBox'>
                    <h1 className='name landingText'>Miguel Maramara</h1>
                    <h4 className='tag landingText'>Making life easier.</h4>
                </div>
                <div className="logoBox">
                    <LinkedImg 
                        name="email"
                        url="mailto:miguelcmaramara@gmail.com"
                        img="/img/logo/mail-offwhite.png"/>
                    <LinkedImg 
                        name="linkedIn"
                        url="https://www.linkedin.com/in/miguel-maramara/"
                        img="/img/logo/linkedin-offwhite.png"/>
                    <LinkedImg 
                        name="github"
                        url="https://github.com/miguelcmaramara"
                        img="/img/logo/github-offwhite.png"/>
                    <LinkedImg 
                        name="spotify"
                        url="https://open.spotify.com/user/ygwgmkr4oj58wblegzvrh1zyh?si=b6c12b0e04aa44ec"
                        img="/img/logo/spotify-offwhite.png"/>
                </div>
            </div>
        </div>
    );
}


export default Landing;