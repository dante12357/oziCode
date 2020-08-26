import React, {useCallback, useState} from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import useWindowSize from "../../../UseWindowSize";
import Arrows from "../../../Arrow";


const SecondLevel = props => {
    const {firstLevel} = props;
    const [showThirdLevelBlock, setShowThirdLevelBlock] = useState(false);

    const click = useCallback(id => (event) => {
            setShowThirdLevelBlock(id);
            let rect = event.target.getBoundingClientRect();
            document.getElementById("submenu").scrollBy(0,rect.y)
        },
        [],
    );

    const size = useWindowSize();
    return (
        <div className="secondLevelBlock">
            {firstLevel.map(secondLevel => (
                <ul className="secondLevel">
                    <li>
                        <a href="#">{secondLevel.titleSecondLevel}</a>
                        {size.width <= 767 && secondLevel.subtitlesSecondLevel ?
                            <Arrows click={click} value={showThirdLevelBlock} name={secondLevel.titleSecondLevel}/>
                            : null}
                        {(size.width <= 767 ? showThirdLevelBlock == secondLevel.titleSecondLevel && secondLevel.subtitlesSecondLevel : secondLevel.subtitlesSecondLevel) ?
                            <div
                                className={classnames("thirdLevelBlock", size.width <= 767 ? {'show': showThirdLevelBlock} : null)}>
                                {secondLevel.subtitlesSecondLevel.map(thirdLevel => (
                                    <ul className="thirdLevel">
                                        <li>
                                            {thirdLevel.titleThirdLevel}
                                        </li>
                                    </ul>
                                ))}</div>
                            : null
                        }
                    </li>
                </ul>))}
        </div>
    )
}
SecondLevel.propTypes = {
    firstLevel: PropTypes.array.isRequired,
    showThirdLevelBlock: PropTypes.func,
};

export default SecondLevel;
