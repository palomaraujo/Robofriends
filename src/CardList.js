import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {

    const robotList = robots.map((user, index) => {
        return(
            <Card id={ robots[index].id } name= { robots[index].name} email= { robots[index].email }/>
        );
    })

    return (
        <div>
           {robotList}
        </div>
    );
}

export default CardList;