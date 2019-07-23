import React from 'react'

export default function Display(props) {
    //console.log('props display', props)
    return (
        <div>
            <h4>inlägg</h4>
            <p>{props.apiData.text}</p>
            <h6>Författare: {props.apiData.namn}</h6>
        </div>
    )
}
