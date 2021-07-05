import React from 'react';
import Serie from './Serie';

export default function SerieList(props){
    const elements = props.serie.map(serie => <Serie key={serie.id} serie={serie}/>)
    return(
        <div>{elements}</div>
    )
}