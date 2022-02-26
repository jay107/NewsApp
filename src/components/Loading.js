import React from 'react'
import loading from "../images/loading.gif";

const Loading = () => {
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <img src={loading} style={{
                width: "50px",
              
            }} />
        </div>
    )
}

export default Loading
