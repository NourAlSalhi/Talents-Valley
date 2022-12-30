import React from 'react'

const Icons = () => {
    const style = {
        backgroundColor: 'white',
        width: '208px',
        height: '148px',
        borderRadius: '11px',
        padding: '30px 30px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        position: 'absolute',
        margin: '30px -8px',
        display: 'flex',
        flexDirection: 'column',
    }
    const styleBtn={
      backgroundColor:'white',
      marginBottom:'20px',
      border:'none',
      fontWeight:'500',
      fontSize:'18px',
      width: 'fit-content',
    }
    const [open, setOpen] = React.useState(false)
    return (
        <>
            {open && (
                <div style={style}>
                    <button style={styleBtn}>Set as user</button>
                    <button style={styleBtn}>Block</button>
                    <button style={styleBtn}>Delete</button>
                </div>
            )}
            <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                <circle cx="16" cy="8" r="2" fill="currentColor" /><circle cx="16" cy="16" r="2" fill="currentColor" /><circle cx="16" cy="24" r="2" fill="currentColor" /></svg>
        </>
    )
}

export default Icons