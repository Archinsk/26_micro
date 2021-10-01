function Button(props) {
    const content = props.content;
    const bgColor = props.bgColor;
    const txColor = props.txColor + "-text";

    let bgTone = "";
    if (props.bgTone) {
        if (props.bgTone.startsWith("lt")) {
            bgTone = "lighten-" + props.bgTone.slice(-1);
        } else if (props.bgTone.startsWith("dk")) {
            bgTone = "darken-" + props.bgTone.slice(-1);
        } else if (props.bgTone.startsWith("ac")) {
            bgTone = "accent-" + props.bgTone.slice(-1);
        }
    }

    let clName = "waves-effect waves-light btn " + bgColor + " " + bgTone + " " + txColor;

// Button size
    if (props.size==="lg") {
        clName += "btn-large"
    }
    if (props.size==="sm") {
        clName += "btn-small"
    }

    return (
        <a className={clName}>
            <i className="material-icons left ">settings</i>
            {content}
        </a>
    )
}

export default Button;