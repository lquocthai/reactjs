import videoHomepage from '../../assets/video-homepage.mp4'
const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    type="video/mp4"
                    src={videoHomepage}
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>
                    Get 3.5x more data with a form expert
                </div>
                <div className='title-2'>
                    Backed by over a decade of experience, Typeform AI helps you build expertly-designed, best-practice forms proven to get more responses.
                </div>
                <div className='title-3'>
                    <button>Get's stared ,it's free</button>
                </div>

            </div>
        </div>
    )
}
export default HomePage