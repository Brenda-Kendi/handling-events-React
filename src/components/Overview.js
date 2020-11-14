import React from 'react';
import uniqid from 'uniqid';

const Overview =({tasks})=>{
    
    return (
    <div>
        <ul className='list-group'>
        {tasks.map(task => 
            {return <li className='list-group-item' key={uniqid()}>{task}</li>})}
        </ul>
    </div>)
}
export default Overview;