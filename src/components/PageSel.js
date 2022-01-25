import "./css/PageSel.css";
/**
 * Blinking rectangular cursor
 */

function PageSel(props) {
    return (
        <div className="PageSel">
            <span className="textCursor">&nbsp;</span>
            <div className="pages">
                <a href="">bio</a>
                <a href="">projects</a>
                <a href="">resume</a>
                <a href="">contact</a>
            </div>
        </div>
    );
}

export default PageSel;
