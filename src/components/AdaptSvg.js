import allColors from "../data/colors";
import allIcons from "../data/icons";

/**
 * Adaptable, color-changing svg
 */
function AdaptSvg(props) {
    let root = document.documentElement;

    var colors = allColors[props.scheme];
    var icon = allIcons[props.icon];
    for (var color in colors)
        root.style.setProperty("--color-" + color, colors[color]);

    return icon;
}

export default AdaptSvg;
