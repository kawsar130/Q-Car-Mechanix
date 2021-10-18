import React from 'react';

import mechanic1 from '../../../images/mechanic/1.jpg'
import mechanic2 from '../../../images/mechanic/2.jpg'
import mechanic3 from '../../../images/mechanic/3.jpg'
import mechanic4 from '../../../images/mechanic/4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Kawsar Ahmed',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'Rahmat Ullah',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Sujon Islam',
        expertize: '-Software Expert-'
    },
    {
        img: mechanic4,
        name: 'Nahid Chowdhury',
        expertize: '-BokBok Expert-'
    }
]

const Experts = () => {
    return (
        <div className="container" id="experts">
            <h1 className="text-primary py-5">Our Experts</h1>
            <div className="row">
                {experts.map(expert => <Expert
                    key={expert.name}
                    expert={expert}
                >
                </Expert>)}
            </div>
        </div>
    );
};

export default Experts;