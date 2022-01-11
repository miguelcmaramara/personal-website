import './css/Landing.css'


/**
 * Stage is a section that emphasizes a stage in my life, a piece of experience that I have
 * @param {*} props should include the following fields:
 *      - title
 *      - description
 */
function Landing(props){
    return (
        <div className="Landing">
            <img className='backgroundImage'
                src='/img/tech-desk-background.jpg'
                alt='clouds in the background' />
            <div className="darkFilter"> </div>
            <div className='nameBox'>
                <h1 className='name landingText'>Miguel Maramara</h1>
                <h4 className='tag landingText'>Three. Big. Words</h4>
            </div>
        </div>
    );
}


export default Landing;