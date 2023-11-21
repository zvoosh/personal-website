const NewHome = () => {
    return (
        <div className="w-100 h-100 flex bg-red font-family">
            <div className="w-100 h-100 bg-green">

                <div className="w-100 h-100 background">
                    <div className="rotate_text" >
                        DUŠAN ILIĆ
                    </div>
                    <div className="rotate_text" >
                        SOFTWARE ENGINEER
                    </div>
                    <div className="rotate_text" style={{ color: '#10239e', textShadow: " 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000" }}>
                        GRADUATING STUDENT
                    </div>
                </div>
            </div>
            <div className="bg-green tagSection">
                <div style={{ marginLeft: '6rem' }}>
                    <div className="title">
                        DUŠAN ILIĆ
                    </div>
                    <div className="flex flex-row justify-between w-40 mt-1">
                        <div className="flex flex-column">
                            <div className="mb-05">Web developer</div>
                            <div>React developer</div>
                        </div>
                        <div className="flex flex-column">
                            <div className="mb-05">University student</div>
                            <div>dusan.ilic1999@gmail.com</div>
                        </div>
                        <div className="flex flex-column">
                            <div className="mb-05">#Profile</div>
                            <div>#Skills</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { NewHome }