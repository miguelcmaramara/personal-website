import "./css/LinkedImg.css"

function LinkedImg(props){
    return(
        <div className={"LinkedImg " + props.name}>
            <a class="LinkedImgLink" href={props.url}>
                <img 
                    class="LinkedImgImg"
                    src={props.img} 
                    alt={props.name.charAt(0).toUpperCase() + props.name.substring(1)}/>
            </a>
        </div>
    );
}


export default LinkedImg;