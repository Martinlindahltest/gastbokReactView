import React from 'react'

export default function Display(props) {
    //console.log('props display', props)
    return (
        <div><span>Inlägg: </span>
            <span>{props.apiData.text}</span>
            <h6>Författare: {props.apiData.namn}</h6>
            <h6>Skapad: {props.apiData.createdAt}</h6>
        </div>
    )
}
