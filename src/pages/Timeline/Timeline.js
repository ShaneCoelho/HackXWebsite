import React, { useEffect, useState, useRef } from 'react'
import './Timeline.css';
import Explosion from '../../assets/timeline/explosion.png';
import Bomb from '../../assets/timeline/bomb.png'
import Target from '../../assets/timeline/target.png'
import timeline from './Timeline_data';
import BombDroppingEffect from './Bombdrop';




const Timeline = () => {
    const [showBombEffect, setShowBombEffect] = useState(false);
    const [timelineHeight, setTimelineHeight] = useState(0);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const rect = timelineRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

                if (isVisible && !showBombEffect) {
                    setShowBombEffect(true);
                } else if (!isVisible && showBombEffect) {
                    setShowBombEffect(false);
                }
            }
        };

        const updateTimelineHeight = () => {
            if (timelineRef.current) {
                setTimelineHeight(timelineRef.current.getBoundingClientRect().height);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateTimelineHeight);

        updateTimelineHeight(); // Initial update

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateTimelineHeight);
        };
    }, [showBombEffect]);

    return (
        <React.Fragment>

            {showBombEffect && <BombDroppingEffect end={timelineHeight - 30 + window.scrollY} />}
            <div className='timeline-bomb' >
                <img src={Bomb} alt='bomb' className='bomb-image' />
            </div>
            <div className='bgDiv'>

                <div

                    className="timeline  timeline--two-columns"
                    ref={timelineRef}
                >


                    {
                        timeline.map((e) => {
                            console.log(e.date)
                            return (
                                <div className="timeline-element">
                                    <span
                                        className="timeline-element-icon"

                                    ><img
                                            src={Target}
                                            className="target-image"
                                            alt='target'
                                        />
                                    </span>

                                    <div className="timeline-element-content bounce-in">

                                        <p >{e.time}</p>
                                        <h2 className="timeline-element-title">{e.title}</h2>
                                        <p id="description">
                                            {e.description}
                                        </p>
                                        <span className="timeline-date"
                                        >{e.date}</span
                                        >
                                    </div>
                                </div>)

                        }
                        )
                    }


                    {/* <Blast /> */}
                </div>

            </div>


        </React.Fragment>
    );
}


export default Timeline