import React from 'react'
import Bootcamp from './Pictures/bootcamp.png'
import Masters from './Pictures/masters.jpeg'

function WhereImGoingBody() {
    return (
        <>
            <div class="container-fluid" id="where-first">
      <h1 class="ed">Where I'm Going</h1>
      <div class="row wig">
        <div class="col-md-6">
          <p>
            I am looking right now into the many different options I have as far as education and work opportunities down the line as I expand my skillset and niche down into a specific field. 
          </p>
        </div>
        <div class="col-md-6">
          <img src={Bootcamp} alt="bootcamp" class="rounded mx-auto d-block whereimgoingpics"></img>
        </div>
        </div>
        <div class="row wig">
        <div class="col-md-6">
          <p>
            At the moment, my biggest interest career-wise is Data Science. Having earned my Bachelor’s in Integrative General Studies at UCF, I am considering pursuing a Master’s in Data Science degree. I have a healthy math background, and I figure that leaning into this background and solidifying my Python skills and learning to apply them to the field would be a good step forward! 
          </p> 
        </div>
    
        <div class="col-md-6" id="masters">
          <img src={Masters} alt="masters" class="rounded mx-auto d-block whereimgoingpics"></img>
        </div>
        </div>
        <div class="row wig text-center">
      <p>
        Only things to do now would be to find a program that fits my needs and keep working on my coding skills.
      </p> 
        </div>
        </div>

    

        </>
    )
}

export default WhereImGoingBody;
