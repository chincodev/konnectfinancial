import React, { Component } from 'react'
import FaqForm from './FaqForm';

export default class FaqContent extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
    render() {
        return (
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently ask question</h2>
                        <b>Just find your answers below</b>
                    </div>

                    <div className="tab faq-list-tab">
                        {/* <ul className="tabs-list">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                Top questions
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                General questions
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                About qinix
                            </li>
                        </ul> */}

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <ul className="question-list">
                                    <li>
                                        <h4 className="title">What happens if I get pre-settlement funding from Kaz Enterprises, but later I need more?</h4>
                                        <p>It's not uncommon for individuals who receive pre-settlement funding from Kaz Enterprises to find that the initial amount isn't sufficient, especially if their case extends longer than expected. We recommend applying for only the necessary amount initially to avoid financial strain. However, if circumstances change and additional funding is needed due to ongoing struggles during the pending case, we're open to considering secondary requests for assistance.</p>
                                    </li>
                                    
                                    <li>
                                        <h4 className="title">Should my attorney know about this?</h4>
                                        <p>Certainly. Initially, it's essential to notify your attorney after you've completed your application, allowing us to engage in discussions regarding your case with them. </p>
                                    </li>
                                    
                                    <li>
                                        <h4 className="title">How can I know if I am eligible to receive funding?</h4>
                                        <p>If you’ve been injured in an accident, you are likely eligible. Apply now or give us a call to speak to one of our representatives to learn more.</p>
                                    </li>
    
                                    <li>
                                        <h4 className="title">What states do you offer pre-settlement funding in?</h4>
                                        <p>We currently offer pre-settlement funding exclusively in the state of California.</p>
                                    </li>
                                    
                                    <li>
                                        <h4 className="title">What if I lose my case?</h4>
                                        <p>You keep the money that you received and you do not owe anything.</p>
                                    </li>

                                    <li>
                                        <h4 className="title">What does it cost?</h4>
                                        <p>The pricing for funding can vary depending on the specifics of your case. Apply for free and you will receive full details regarding pricing upon approval.</p>
                                    </li>
                                </ul>
                            </div>

                            {/* <div id="tab2" className="tabs_item">
                            <ul className="question-list">
                                    <li>
                                        <h4 className="title">What is State Aid?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                    
                                    <li>
                                        <h4 className="title">Why do you charge interest on the loan?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                    
                                    <li>
                                        <h4 className="title">Can I apply for a loan if I have poor credit?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
    
                                    <li>
                                        <h4 className="title">How long does the application process take?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                    
                                    <li>
                                        <h4 className="title">My business internationally. Am I still eligible to apply?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">What kind of financial advice do you give?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                </ul>
                            </div>

                            <div id="tab3" className="tabs_item">
                            <ul className="question-list">
                                    <li>
                                        <h4 className="title">What is State Aid?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                    
                                    <li>
                                        <h4 className="title">Why do you charge interest on the loan?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                    
                                    <li>
                                        <h4 className="title">Can I apply for a loan if I have poor credit?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
    
                                    <li>
                                        <h4 className="title">How long does the application process take?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                    
                                    <li>
                                        <h4 className="title">My business internationally. Am I still eligible to apply?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>

                                    <li>
                                        <h4 className="title">What kind of financial advice do you give?</h4>
                                        <p>Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat rorem lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis natoque penatibus. ipsum dolor consectetur Fusce varius Fusce varius euismod lacus eget feugiat...</p>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    {/* Faq Form */}
                    <FaqForm />
                </div>
            </div>
        )
    }
}
