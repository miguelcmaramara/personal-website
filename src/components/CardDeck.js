import data from '../data/projects';
import Card from './Card';

/**
 * fetches JSON and returns it as object
 */

function CardDeck(props){
    console.log("..................................");
    console.log(data);
    console.log("..................................");
    return data.map((proj) =>
        <Card
            img={"/img/" + proj.img}
            title={proj.title}
            sub={proj.sub}
            desc={proj.desc}
            tech={proj.tech}
            imgAlt={proj.imgAlt}
            link={proj.link}
        />
    );

    // return(
    //     <h1>CardDeck imported</h1>
    // );
}

export default CardDeck;