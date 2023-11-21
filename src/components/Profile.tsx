const Profile = () => {
    return (
        <div className="w-100 h-100" style={{ background: 'white' }}>
            <div className="w-100 h-100 flex justify-center align-center flex-column">
                <div className="profileTitle">
                    <span>DUŠAN ILIĆ</span>
                    <span className="font-10 mt-1">FRONT END DEVELOPER</span>
                </div>
                <div className="profilslika">
                    <div className="detailscontet">
                        <div className="details">DETAILS</div>
                        <div className="detailsSection">
                            ADDRESS
                            <div className="detailsSectionContent">
                                <div>Resavksa 8</div>
                                <div>Belgrade, 11000</div>
                                <div>Serbia</div>
                            </div>
                        </div>
                        <div className="detailsSection">
                            PHONE
                            <div className="detailsSectionContent">+381603311553</div>
                        </div>
                        <div className="detailsSection">
                            EMAIL
                            <div className="detailsSectionContent">dusan.ilic1999@gmail.com</div>
                        </div>
                        <div className="detailsSection">
                            DATE/PLACE OF BIRTH
                            <div className="detailsSectionContent">
                                <div>23.12.1999</div>
                                <div>Belgrade</div>
                            </div>
                        </div>
                        <div className="detailsSection">
                            DRIVING LICENSE
                            <div className="detailsSectionContent">B License</div>
                        </div>
                        <div className="detailsSection">
                            NATIONALITY
                            <div className="detailsSectionContent">Serbian</div>
                        </div>
                        <div className="details mt-1">LINKS</div>
                        <a target="_blank" href="https://www.linkedin.com/in/dusan-ilic-0997b4166/">LinkedIn</a>
                        <div className="details mt-1">SKILLS</div>
                        <div className="mt-05">Node.js - intermediate</div>
                        <div className="mt-05">HTML & CSS - intermediate</div>
                        <div className="mt-05">React - intermediate</div>
                        <div className="mt-05">Git - intermediate</div>
                        <div className="mt-05">JavaScript - intermediate</div>
                        <div className="mt-05">TypeScript - intermediate</div>
                        <div className="details mt-1">LANGUAGES</div>
                        <div className="mt-05">English - Fluent</div>
                        <div className="details mt-1">HOBBY</div>
                        <div className="mt-05">Tenis, Gaming, Swimming</div>
                    </div>
                    <div className="profileSection">
                        <div className="profileSectionTitle mt-1">PROFILE</div>
                        <div className="profileSectionText">I'm an junior web front-end developer with 11 months of solid industry experience. I'm dedicated, positive, and I build trust and collaboration within teams by sticking to important work values. I'm always improving my skills and consistently deliver great results.
                            I started my career as a junior developer in a supportive team, which laid a strong foundation for my professional growth. In the past ten months, I've gained a lot of knowledge from various sources like team interactions and online research.
                            I tackle each task with flexibility and a problem-solving attitude, always looking for the best solutions and fostering a good team dynamic. I'm known for my commitment to confidentiality, strong sense of responsibility, passion for my work, analytical skills, and unwavering motivation.
                        </div>
                        <div className="profileSectionTitle mt-1">EMPLOYMENT HISTORY</div>
                        <div className="jobTitle">
                            <div>
                                Software Engeener, Factory World Wide
                            </div>
                            <div>
                                Belgrade
                            </div>
                        </div>
                        <div className="dates">
                            July 2022 - June 2023
                        </div>
                        <div className="profileSectionText">I have had the privilege of working within a forward-thinking manufacturing facility
                            that embraces cutting-edge technology across both equipment and software tools.
                            My primary focus has been in the realm of software development, specifcally
                            utilizing the React.js library in conjunction with TypeScript.
                            During my tenure, I actively contributed to two pivotal projects, ŠKODA and
                            Ministry of Finance, where I honed my expiriance in independently creating and
                            maintaining projects. This experience exposed me to the latest advancements
                            in technology, encompassing key frameworks and libraries such as Redux, React
                            Context, React Navigation, React/Query, Axios, AntD, React Router, and various other
                            complementary libraries.
                            Furthermore, I possess an intermediate level of proficiency in testing, leveraging the
                            Jest.js library to ensure the reliability and quality of the software solutions I develop.
                            My commitment to staying with of the latest technological trends underscores
                            my dedication to delivering top-tier results in software development.</div>
                        <div className="profileSectionTitle mt-1">EDUCATION</div>
                        <div className="uniTitle">
                            <div>
                                BSc Compter science, University of Singidunum
                            </div>
                            <div>
                                Belgrade
                            </div>
                        </div>
                        <div className="dates">
                            Jul 2022 - May 2023 ~ Finishing
                        </div>
                        <div className="profileSectionText">I finished all my exams with an average score of 8,31|10 and currently working on my
                            graduation thesis.</div>

                        <div className="profileSectionTitle mt-1">REFERENCES</div>
                        <div className="refTitle">
                            <div>
                                Rastko Ilic from Factory World Wide
                            </div>
                            <div>
                                Belgrade
                            </div>
                        </div>
                        <div className="profileSectionText">rastko.ilic@factoryww.com | +381603311553</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Profile }