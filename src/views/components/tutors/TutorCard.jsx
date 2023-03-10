import { Link } from 'react-router-dom'
import React from 'react'

function TutorCard({lname,fname,university,description,subjects,price,id}) {
    
    return (
    
        <div className="tutor-card">
            <img src="https://cdn.mytutor.co.uk/images/tutor-profiles/1354443.180_1-1_8.jpg?v=1" className="profile-pic" alt=""/>
            <div className="presentation">
                <h1 className="name">{fname} {lname}</h1>
                <p className="university">{university}</p>
                <p className="description">
                {description}
                </p>
               <div className="offers-program-container">
               <h3 className="program-offers-heading">Program Offers</h3>
                <div className="offer-programers">
      
                    {subjects.map(eachData=>(
                        <p>{eachData.name}</p>
                    ))}
                </div>
               </div>
            </div>
            <div className="price-area">
                <p>£{price} / HR</p>
               <div className="view-profile-container">
               <Link className="view-profile-button" to={`/tutor/${id}`}>
                    View profile
                </Link>
               </div>
            </div>
        </div>
    )
}

export default TutorCard
