import React from "react";

const IconButton=({ icon: Icon, text, style, url })=> {
    return(
        <a href={url} style={style} className="icon-button">
            <Icon/>
            <span>{text}</span>
        </a>
    );
};

export default IconButton;