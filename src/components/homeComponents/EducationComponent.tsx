const EducationComponent = () =>{
    return (
        <div>
            <div className="w-100 h-100 pt-2 pb-2  flex justify-center">
          <div className="w-100 flex pr-2 pl-2 flex-column justify-center padding-0">
            <div className="font-size-18 pb-1 person-padding-title mobile-padding-text">EDUCATION</div>
            <div className="font-size-16 pt-1 pb-1 text-blackGray person-padding-title  mobile-under-title-description mobile-font-paragraph mobile-padding-text">BSc in Computer Science graduate</div>
            <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex mobile-padding-text mobile-under-title">
              <div>University of Singidunum, Belgrade</div>
              <div>October 2018 - March 2024</div>
            </div>
            <div className="mt-1 font-size-13 text-align-justify mobile-font-paragraph mobile-padding-text">
              BSc in Computer Science, University of Singidunum gave me an
              opportunity to expand and explore my knowledge of Computer Science
              covering Front and Backend side of Web development, Data Science,
              Artificial Intelligence and many more of my interests. My
              graduating thesis covered Chinese culture presented as a Internet
              Website using the technology React. I graduated with an average
              score of 8.31 on a scale to 10, while on the scale to 4 the number is converted to 3.324.
              <div className="mobile-font-paragraph ">
                Link to my thesis website:<a href="https://zvoosh.github.io/Chinese-Cultural-Evolution/#/" target="_blank">https://zvoosh.github.io/Chinese-Cultural-Evolution/#/</a>
                </div>
            </div>
            <div className="font-size-16 pt-3 pb-1 text-blackGray person-padding-title  mobile-under-title-description mobile-font-paragraph mobile-padding-text">High School graduate</div>
            <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex mobile-padding-text mobile-under-title">
              <div>High School of "Sveti Sava", Belgrade</div>
              <div>2014 - 2018</div>
            </div>
            <div className="font-size-16 pt-3 pb-1 text-blackGray person-padding-title  mobile-under-title-description mobile-font-paragraph mobile-padding-text">Elementary School graduate</div>
            <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex mobile-padding-text mobile-under-title">
              <div>Elementary School of "Vladislav Ribnikar", Belgrade</div>
              <div>2006 - 2014</div>
            </div>
          </div>
        </div>
        </div>
    )
}

export {EducationComponent}