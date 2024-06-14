const EducationComponent = () =>{
    return (
        <div>
            <div className="w-100 pt-2 pb-2  flex justify-center">
          <div className="w-100 flex pr-2 pl-2 flex-column justify-center">
            <div className="font-size-18 pb-1">EDUCATION</div>
            <div className="font-size-14 pt-1 pb-1 text-blackGray">BSc in Computer Science graduate</div>
            <div className="flex justify-between pt-1 pb-1 w-100 text-bold">
              <div>University of Singidunum, Belgrade</div>
              <div>October 2018 - March 2024</div>
            </div>
            <div className="mt-1 font-size-11 text-align-justify">
              BSc in Computer Science, University of Singidunum gave me an
              opportunity to expand and explore my knowledge of Computer Science
              covering Front and Backend side of Web development, Data Science,
              Artificial Intelligence and many more of my interests. My
              graduating thesis covered Chinese culture presented as a Internet
              Website using the technology React. I graduated with an average
              score of 8.40 on a scale to 10, while on the scale to 4 the number is converted to 3.36.
              <div>
                Link to my thesis website: <a href="https://zvoosh.github.io/Chinese-Cultural-Evolution/#/" target="_blank">https://zvoosh.github.io/Chinese-Cultural-Evolution/#/</a>
                </div>
            </div>
            <div className="font-size-14 pt-3 pb-1 text-blackGray">High School graduate</div>
            <div className="flex justify-between pt-1 pb-1 w-100 text-bold">
              <div>High School of "Sveti Sava", Belgrade</div>
              <div>2014 - 2018</div>
            </div>
            <div className="font-size-14 pt-3 pb-1 text-blackGray">Elementary School graduate</div>
            <div className="flex justify-between pt-1 pb-1 w-100 text-bold">
              <div>Elementary School of "Vladislav Ribnikar", Belgrade</div>
              <div>2006 - 2014</div>
            </div>
          </div>
        </div>
        </div>
    )
}

export {EducationComponent}