import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import '.././App.css';

// not handle: reload
function Counter({...rest}) {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <CountUp {...rest} start={viewPortEntered ? null : 0} suffix=" %">
            {({ countUpRef }) => {
                return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                        }}
                        delayedCall
                    >
                        <h4 className="counter" ref={countUpRef} />
                    </VisibilitySensor>
                );
            }}
        </CountUp>
    );
}

export default Counter;