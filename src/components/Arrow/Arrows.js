import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";

const Arrows = props => {
    const {click, name, value} = props
    return (
        <div>
            <img
                className={classnames({'hide': value == name ? value : false})}
                onClick={click(name)}
                src="https://img.icons8.com/fluent-systems-filled/24/000000/expand-arrow.png"/>
            {value == name ?
                <img className={classnames({'hide': !value})}
                     onClick={click(false)}
                     src="https://img.icons8.com/android/24/000000/collapse-arrow.png"/>
                : null}
        </div>
    )
};

Arrows.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    click: PropTypes.func,

};

export default Arrows;
