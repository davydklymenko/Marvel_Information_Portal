import React from "react";
import './teachersList.css';
import {physics, history, white, germanyvsukraine, english, math} from '../recourses/indextc';

function TeachersList() {
    return(
        <>
            <div className="info-banner">
                <h1>Ugly Teachers</h1>
                <div className="line"></div>  
                <h3>Part 1: Teachers</h3>      
            </div>  

            <div className="teachers">
                <img className="block-teacher" src={physics} alt="teacher_1" />
                <img className="block-teacher" src={history} alt="teacher_2" />
                <img className="block-teacher" src={white} alt="teacher_3" />
                <img className="block-teacher" src={germanyvsukraine} alt="teacher_4" />
                <img className="block-teacher" src={english} alt="teacher_5" />
                <img className="block-teacher" src={math} alt="teacher_6" />
            </div>
        </>
    )
}

export default TeachersList;