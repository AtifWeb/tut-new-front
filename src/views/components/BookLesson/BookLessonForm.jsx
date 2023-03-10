import React from 'react'

function BookLessonForm() {
    return (
        <form className="BookLessonForm">
            <div className="input-wrapper">
                <label htmlFor="meeting-name">Meeting Name</label>
                <input type="text" id="meeting-name" placeholder="Enter Meeting Name"/>
            </div>
            <div className="input-wrapper date-wrapper">
                <label htmlFor="date-BookLessonForm">date</label>
                <input type="date" name="" id="date-BookLessonForm"/>
            </div>

            <div className="input-wrapper date-wrapper">
                <label htmlFor="time-BookLessonForm">time</label>
                <input type="time" name="" id="time-BookLessonForm"/>
            </div>

            <div className="input-wrapper select-wrapper">
                <label htmlFor="duration-BookLessonForm">duration</label>
                <select name="" id="duration-BookLessonForm">
                    <option value="30">30 mintues</option>
                    <option value="60">60 mintues</option>
                    <option value="90">90 mintues</option>
                    <option value="120">120 mintues</option>
                </select>
            </div>

            <div className="input-wrapper select-wrapper">
                <label htmlFor="mode-BookLessonForm">meeting mode</label>
                <select name="" id="mode-BookLessonForm">
                    <option value="Classroom">Classroom</option>
                    <option value="Lecture+">Lecture +</option>
                    <option value="Lecture">Lecture</option>
                    <option value="Livestream">Livestream</option>
                    <option value="whiteboard">White board</option>
                </select>
            </div>


            <input type="submit" value="Schedule meeting"className="Schedule-button" />

        </form>
    )
}

export default BookLessonForm
