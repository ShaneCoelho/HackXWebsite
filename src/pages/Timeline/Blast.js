import React from 'react';
import BlastGif from '../../assets/Timer/HPO1.gif';

const Blast = () => {
    return (
        <React.Fragment>
            <div className='blast-animation'>
                <img src={BlastGif} alt="blast" className='blast-img' />
            </div>
        </React.Fragment>
    )
}

export default Blast