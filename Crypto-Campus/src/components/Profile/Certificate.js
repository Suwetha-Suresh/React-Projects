import React from 'react'

function Certificate({ name, org, comment}) {

    const styles = {
        width: '100%',
        backgroundColor: 'whitesmoke'
    }

  return (
    <div className="ui card" style={styles}>
            <div className="content">
                <div className="header">{name}, {org}</div>
                <div className="description">
                    Key Skills: {comment}
                </div>
            </div>            
        </div>
  )
}

export default Certificate