import React, { useEffect, useRef } from 'react'
import './Timeline.css';
import Explosion from '../../assets/timeline/explosion.png';
import Bomb from '../../assets/timeline/bomb.png'
import Target from '../../assets/timeline/target.png'
import timeline from './Timeline_data';
import BombDroppingEffect from './Bombdrop';




const Timeline = () => {



    return (
        <React.Fragment>

            <BombDroppingEffect />
            <div className='timeline-bomb' >
                <img src={Bomb} alt='bomb' className='bomb-image' />
            </div>
            <div className='bgDiv'>

                <div

                    className="timeline  timeline--two-columns"
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