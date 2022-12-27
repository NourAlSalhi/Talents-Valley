import React from 'react'

const Icons = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                <circle cx="16" cy="8" r="2" fill="currentColor" /><circle cx="16" cy="16" r="2" fill="currentColor" /><circle cx="16" cy="24" r="2" fill="currentColor" /></svg>
            {open && (
                <div>
                    <div>Block</div>
                    <div>Delete</div>
                </div>
            )}
        </div>
    )
}

export default Icons