import React, { useState, useEffect, useRef } from 'react';
import './bombdrop.css';
import Bomb from '../../assets/timeline/bomb.png'
import Blast from '../../assets/timeline/blast.gif'
import { unmountComponentAtNode } from 'react-dom';

const BombDroppingEffect = () => {
    const end = 2700;
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down');
    const render = useRef(false);

    useEffect(() => {
        console.log(window.innerWidth, "width")
        const handleScroll = () => {


            const newScrollY = window.scrollY;
            if (newScrollY > end + 50) {
                render.current = false;
            }
            setScrollDirection(newScrollY > scrollY ? 'down' : 'up');
            if (newScrollY > scrollY)
                setScrollY(newScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        //end = 2837
        <div className='bomb-container'>

            {
                !render ? <div> </div> :

                    scrollY > end ? <img src={Blast} className={`bomb-image ${(scrollY > end && scrollDirection === 'down' && scrollY < end + 200) ? 'show' : ''}`} alt='blast' /> :
                        <img src={Bomb} className={`bomb-image ${(scrollY > 1000 && scrollDirection === 'down' && scrollY < end) ? 'show' : ''}`} alt='bomb' />
            }


        </div>
    );
};

export default BombDroppingEffect;
