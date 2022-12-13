import React from 'react'

export default function Alert(props) {
    const capialize1letter = (value) => {
        let result = value.charAt(0).toUpperCase() + value.slice(1)
        return result
    }
    return (
        <div style={{ height: "20px" }}>
            {props.alert && <div className={`alert alert-${props.alert.typ}`} role="alert">
                <strong>{capialize1letter(props.alert.typ)}</strong>: {props.alert.mess}
            </div>}
        </div>
    )
}