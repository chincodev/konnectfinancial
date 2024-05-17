import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const WhyPeopleChooseUsTwo = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="choose-area pt-100 pb-70">
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="choose-title">
                            <span>Quick and Easy Process</span>
                            <h2>Funding All Types Of Personal Injury Cases</h2>
                            <p>We fund a wide variety of personal injury cases. Don’t see your case on the list? Give us a call at +1 (833) 660-4343 for a free consultation.</p>
                        </div>

                        <div className="choose-image">
                            <img src="/images/choose.png" alt="image" />

                        
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="process-item bg-top1">
                                    <div className="icon">
                                        <i className="flaticon-guarantee"></i>
                                    </div>
                                    <h3>Motor Vehicle Accident Cases</h3>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> */}
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-md-6">
                                <div className="process-item bg-top2">
                                    <div className="icon">
                                        <i className="flaticon-speed"></i>
                                    </div>
                                    <h3>Workplace Accidents and Negligence Claims</h3>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> */}
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-md-6">
                                <div className="process-item bg-top3">
                                    <div className="icon">
                                        <i className="flaticon-reliability"></i>
                                    </div>
                                    <h3>Premises Liability Cases </h3>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> */}
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-md-6">
                                <div className="process-item bg-top4">
                                    <div className="icon">
                                        <i className="flaticon-user-experience"></i>
                                    </div>
                                    <h3>Medical Malpractice Cases</h3>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyPeopleChooseUsTwo;