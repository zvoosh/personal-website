const Header = ({ fn }: { fn: () => void }) => {



    return (
        <div className="bg-white w-100 h-100">
            <div className="w-25 h-100 bg-purple pt-1 flex justify-center align-center">
                <div className="w-30 h-80 bg-cian mb-2 flex justify-center align-center headBtn" onClick={fn} id="welcomeDiv">
                    Back to Start
                </div>
            </div>
        </div>
    );
}

export { Header };