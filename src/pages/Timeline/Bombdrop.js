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
        const handleScroll = () => {


            const newScrollY = window.scrollY;
            if (newScrollY > end + 50) {
                render.current = false;
            }
            setScrollDirection(newScrollY > scrollY ? 'down' : 'up');
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
                !render ? <div /> :

                    scrollY > end ? <img src={Blast} className={`bomb-image ${(scrollY > end && scrollDirection === 'down') ? 'show' : ''}`} alt='blast' /> :
                        <img src={Bomb} className={`bomb-image ${(scrollY > 1000 && scrollDirection === 'down') ? 'show' : ''}`} alt='bomb' />
            }


        </div>
    );
};

export default BombDroppingEffect;
