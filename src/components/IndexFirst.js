import React from 'react'
import Self from './Pictures/Self.png'
import Angela from './Pictures/Angela.jpg'
function IndexFirst() {
    return (
        <>
            <div class="container-fluid page1_1st text-center">
                <img src={Self} class="rounded mx-auto d-block" id="profile" alt="self" />
                <h1 id="name">I'm Edwin,</h1>
                <h3 id="title">a programmer.</h3>
            </div>
            <div class="container-fluid page1_2nd">
                <h1 class="text-center header">How I Got Started</h1>
                <div class="row" id="angela-row">
                    <div class="col col-lg-4">
                        <img src={Angela} class="text-center" alt="Angela Yu's Course" id="angela" />
                    </div>
                    <div class="col col-lg-8">
                        <p id="got_started">
                                I started learning web development through Angela Yu's online course on Udemy and have learned a
                                lot since having started the course! I have also been employing the existing documentation along with other
                                tutorial videos and established courses both to work on different projects and to broaden and deepen my
                                skillset.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container-fluid page1_3rd">
                <h1 class="text-center header">What I Can Do</h1>
                <div class="row text-center">
                    <div class="col col-lg-4 col-sm-6 tools">
                        <i class="fab fa-html5 fa-10x"></i>
                        <h3 class="do">The content you have.</h3>
                    </div>
                    <div class="col col-lg-4 col-sm-6 tools">
                        <i class="fab fa-css3-alt fa-10x"></i>
                        <h3 class="do">The style you want.</h3>
                    </div>
                    <div class="col col-lg-4 tools">
                        <i class="fab fa-js-square fa-10x"></i>
                        <h3 class="do">The functionality you need.</h3>
                    </div>
                </div>
            </div>
            <div class="container-fluid page1_4th">
                <div class="page1_4th_content">
                    <h1 class="page1-4th-header header">As of today, I have...</h1>
                    <p class="page1-4th-p">A good grasp of the basics of HTML, CSS, and Javascript.</p>
                    <h1 class="page1-4th-header"> I am currently focusing on...</h1>
                    <p class="page1-4th-p">Ironing out my skills...</p>
                    <p class="page1-4th-p">Learning as much as I can...</p>
                    <p class="page1-4th-p">and most importantly...</p>
                    
                    <h1 class="page1-4th-header header" id="creating">CREATING!</h1>
                </div>
            </div>
        </>
    )
}

export default IndexFirst
