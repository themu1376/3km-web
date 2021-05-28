import React from 'react';
import './ReadyPage.css';

const ReadyPage = () => {
  return(
    <div id="ready">
      <div className="speed">
        <div className="speed-line">
          <div className="speed-line-under"/>
          <div className="speed-line-over"/>
          <div className="speed-line-circle"/>
        </div>
        <span className="speed-text">5km&#47;h</span>
      </div>
    </div>
  )
}

export default ReadyPage;