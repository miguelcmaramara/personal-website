import "./css/PageSel.css";
/**
 * Blinking rectangular cursor
 */

function PageSel(props) {
    return (
        <span className="PageSel">
            <span className="textCursor">&nbsp;</span>
            <div className="pages">
                <a className="pageLink" href="">
                    bio
                </a>
                <a className="pageLink" href="">
                    projects
                </a>
                <a className="pageLink" href="">
                    resume
                </a>
                <a className="pageLink" href="">
                    contact
                </a>
            </div>
        </span>
    );
}

export default PageSel;
