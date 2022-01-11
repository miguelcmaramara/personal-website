import './css/Card.css';
/*
 * Cards represent projects
 */


/**
 * The front of a project Card
 * @param {*} props 
 *      TODO: edit this once it's solidified
 * @returns A Card Front
 */
function CardFront(props){
    return(
        <div className="CardFront"
            style= {{backgroundImage: `url(${props.img})`}}>
            <h3>{props.title}</h3>
            <h6>{props.sub}</h6>
        </div>
    );
}

/**
 * The front of a project Card
 * @param {*} props
 *      - title
 *      - desc
 *      - 
 * @returns A Card Back
 */
function CardBack(props){
    return(
        <div className="CardBack">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

/**
 * Contains card front and back
 * 
 * @param {*} props Is a dict that must include:
 *      -img & imgAlt
 *      -sub & desc
 *      
 *      - coverImage
 *      - desc
 *      - technologies (list)
 *      - link (can be blank)
 * @returns 
 */
function Card(props){
    return(
        <div className="Card">
            <div className="CardInner">
                <CardFront
                    img={props.img}
                    imgAlt={props.imgAlt}
                    title={props.title}
                    sub={props.sub}
                />
                <CardBack
                    title={props.title}
                    desc={props.desc}
                    tech={props.tech}
                    link={props.link}
                />
            </div>
        </div>
    );
}

export default Card;