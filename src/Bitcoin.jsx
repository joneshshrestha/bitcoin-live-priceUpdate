import React from 'react'
import _ from 'lodash'

const Bitcoin = (props) => {
    const { time, disclaimer, chartName, bpi } = props;
    // _.map(bpi, (USD, index) => <bitcoins key={index} {...USD} {...props}/>);
    return (
        <div>
            <h1>{chartName}</h1>
            <h1>{disclaimer}</h1>
            <div>
                {time.map(i => (
                    <h3>{i.updated}</h3>
                ))}
            </div>
        </div>
    )
}

export default Bitcoin
