import React from 'react'

function Theme({ handleDarkmode }) {
    const handleChange = () => {
        
    }
    return (
        <>
            <div className="form-check form-switch">
                <input onChange={handleDarkmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label text-white" htmlFor="flexSwitchCheckDefault"></label>
            </div>
        </>
    )
}

export default Theme
