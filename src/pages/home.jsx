import React from 'react'

export default function home() {
    const VIDEO_URL = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_NAME}/video/upload/q_auto:best/v1746344938/video_yuo2xj.mp4`
    return (
        <div>
            <div>
                {/* this soultion in stackoverflow helped me to add this video https://stackoverflow.com/questions/36230522/adding-a-background-video-with-react */}
                <video id="background-video" loop autoPlay muted style={{
                    backgroundPosition: 'fixed',
                    backgroundSize: 'cover',
                    objectFit: 'fill',
                    backgroundRepeat: 'no-repeat',
                    width:"100vw",
                    height:"110vh"}}>
                    <source src={VIDEO_URL} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='container mb-4 mt-6 pt-1'>
                <h1 className='title has-text-black is-2'>About Saudi</h1>
                    <div className='container mt-3'>
                        <h1 className='title has-text-grey-dark is-3'>Culture</h1>
                        <p className='is-size-4'> Saudi Arabia’s rich heritage and traditions have been shaped by its position as a historic trade hub and the birthplace of Islam. In recent years, the Kingdom has undergone a significant cultural transformation, evolving centuy-old customs to fit the contemporary world we live in today.</p>
                    </div>
                    <div className='container mt-3'>
                        <h1 className='title has-text-grey-dark is-3'>Language</h1>
                        <p className='is-size-4'> Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions. English serves as an informal second language in the Kingdom and is spoken by a large section of its society. All road signs are bilingual, showing information in both Arabic and English.</p>
                    </div>
                    <div className='container mt-3'>
                        <h1 className='title has-text-grey-dark is-3'>Religion</h1>
                        <p className='is-size-4'>Certain shops close briefly during prayer times to allow time for worship. During the holy month of Ramadan, the rhythm of the country changes into a mellow, spiritual one.</p>
                    </div>
            </div>
        </div>
    )
}
