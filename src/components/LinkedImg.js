import "./css/LinkedImg.css";
import AdaptSvg from "./AdaptSvg";

function LinkedImg(props) {
    var img = null;
    if (props.type === "svg") {
        img = (
            <AdaptSvg
                className="LinkedImgSvg"
                scheme={props.scheme}
                icon={props.name}
                // alt={
                //     props.name.charAt(0).toUpperCase() + props.name.substring(1)
                // }
            />
        );
    } else if (props.type === "jpg") {
        img = (
            <img
                class="LinkedImgImg"
                src={props.img}
                alt={
                    props.name.charAt(0).toUpperCase() + props.name.substring(1)
                }
            />
        );
    } else console.log("Image type not supported");
    return (
        <div className={"LinkedImg " + props.name}>
            <a class="LinkedImgLink" href={props.url}>
                {img}
            </a>
        </div>
    );
}

export default LinkedImg;
