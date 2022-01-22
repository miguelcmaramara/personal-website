import "./css/EditorText.css";
/**
 * Editor text
 */
function EditorText(props) {
    return (
        <span
            className="EditorText"
            style={{
                color: "var(--color-" + props.color + ")",
            }}
        >
            {props.children}
        </span>
    );
}

export default EditorText;
