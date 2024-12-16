const EducationComponent = () =>{
    return (
        <div style={{background: "#FADADD", borderRadius: "10px", marginBottom: '1rem'}}>
            <div className="w-100 h-100 pt-2 pb-2 flex justify-center">
          <div className="w-100 flex pr-2 pl-2 flex-column justify-center padding-0">
            <div className="font-size-18 pb-1 person-padding-title mobile-padding-text">EDUCATION</div>
            <div className="font-size-16 pt-1 pb-1 text-blackGray person-padding-title  mobile-under-title-description mobile-font-paragraph mobile-padding-text">BSc in Informatics graduate</div>
            <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex mobile-padding-text mobile-under-title">
              <div>University of Singidunum, Belgrade</div>
              <div>October 2018 - March 2024</div>
            </div>
            <div className="mt-1 font-size-13 text-align-justify mobile-font-paragraph mobile-padding-text">
              BSc in Informatics, University of Singidunum gave me an
              opportunity to expand and explore my knowledge of Informatics
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
            <div className="font-size-16 pt-3 pb-1 text-blackGray person-padding-title  mobile-under-title-description mobile-font-paragraph mobile-padding-text">Certificates</div>
            <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex mobile-padding-text mobile-under-title">
              <div><a href="https://drive.google.com/file/d/1RyUHuNSFy9zbOc4DtYFRc7kd2jAtMzYm/view?usp=drive_link" target="_blank">React - The Complete Guide 2023</a></div>
            </div>
            <div className="flex justify-between font-size-12 pt-1 pb-1 w-100 text-bold person-padding-title person-flex mobile-padding-text mobile-under-title">
            <div><a href="https://drive.google.com/file/d/1RoZ6kyRX-plMlY9GHXkLVKH0fXBd3vug/view?usp=drive_link" target="_blank">REST APIs with Flask and Python in 2024</a></div>
            </div>
          </div>
        </div>
        </div>
    )
}

export {EducationComponent}