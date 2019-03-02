import * as React from 'react'

export default function ModeDetails(props) {
    const model = props.model
    return (<div>
        <ul>
            <li>Name: {model.name}</li>
            <li>Manufacturer: {model.manufacturer}</li>
            <li>Year: {model.year}</li>
            <li>Origin: {model.origin}</li>
        </ul>
    </div>)
}