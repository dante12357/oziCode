import React, {useCallback, useState} from "react";
import PropTypes from 'prop-types';

import classnames from "classnames";
import {SecondLevel} from "./components";
import useWindowSize from "../UseWindowSize";
import Arrows from "../Arrow";

const FirstLevel = props => {
    const {pages, mouseLeaveEvent, mouseEnterEvent, show, state} = props;
    const [showSecondLevelBlockMobile, setShowSecondLevelBlockMobile] = useState(0);

    const size = useWindowSize();

    const click = useCallback(id => (event) => {
            setShowSecondLevelBlockMobile(id);
            let rect = event.target.getBoundingClientRect();
            document.getElementById("submenu").scrollBy(0, rect.y)
        },
        [],
    );

    return (
        <ul className={classnames("navigationContainer", {'show': show})}>
            {pages.map(firstLevel => (
                <li className="firstLevel"
                    onMouseEnter={(size.width > 767 && firstLevel.subtitles) ? mouseEnterEvent(firstLevel.title) : null}
                    onMouseLeave={(size.width > 767 && firstLevel.subtitles) ? mouseLeaveEvent : null}><a
                    href="#">{firstLevel.title}</a>
                    {size.width <= 767 && firstLevel.subtitles ?
                        <Arrows click={click} value={showSecondLevelBlockMobile} name={firstLevel.title}/>
                        : null}
                    {((state == firstLevel.title || showSecondLevelBlockMobile == firstLevel.title) && firstLevel.subtitles) ?
                        <SecondLevel firstLevel={firstLevel.subtitles}/>
                        : null}
                </li>
            ))}
        </ul>
    )
}

SecondLevel.propTypes = {
    pages: PropTypes.array.isRequired,
    mouseEnterEvent: PropTypes.func,
    mouseLeaveEvent: PropTypes.func,
    show: PropTypes.string,
    state: PropTypes.string,

};

export default FirstLevel;
