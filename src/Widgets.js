import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon></InfoIcon>
            </div>
            {newsArticle("PAPA REACT Course", "Top News -9099 Readers")}
            {newsArticle("PAPA REACT Course", "Top News -9099 Readers")}
            {newsArticle("PAPA REACT Course", "Top News -9099 Readers")}
            {newsArticle("PAPA REACT Course", "Top News -9099 Readers")}
            {newsArticle("PAPA REACT Course", "Top News -9099 Readers")}
            {newsArticle("PAPA REACT Course", "Top News -9099 Readers")}
        </div>
    )
}

export default Widgets
