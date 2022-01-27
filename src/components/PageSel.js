import "./css/PageSel.css";
/**
 * Blinking rectangular cursor
 */

function PageSel(props) {
    return (
        <span className="PageSel">
            <span className="textCursor">&nbsp;</span>
            <div className="pages">
                <div className="pageLinkBox">
                    <a className="pageLink" href=""> bio </a>
                </div>
                <div className="pageLinkBox">
                    <a className="pageLink" href=""> projects </a>
                </div>
                <div className="pageLinkBox">
                    <a className="pageLink" href=""> resume </a>
                </div>
                <div className="pageLinkBox">
                    <a className="pageLink" href=""> contact </a>
                </div>
            </div>
            <input list="pages" placeholder="test"/>
            <datalist id="pages">
                <option>bio</option>
                <option>projects</option>
                <option>resume</option>
                <option>contact</option>
            </datalist>
        </span>
    );
}

export default PageSel;
