import React, { useEffect, useState } from 'react';
import './contact.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact(props) {    
    const [success, setSuccess] = useState(false);
    const [sendError, setsendError] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [policy, setPolicy] = useState(false);
    const [policyErrorClass, setPolicyErrorClass] = useState("");
    const { detailed, showMap } = props;
    const [errors, setErrors] = useState({name: '', email: '', message: ''});

    const renderMap = () => {
        return (
            <div className="container map">       
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310846.42013233475!2d13.14455454370644!3d52.50651327269696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sde!2sde!4v1586963324246!5m2!1sde!2sde"/>
            </div>
        );
    }

    const send = (event) => {
        event.preventDefault();
        let errors = {name: '', email: '', message: ''};
        let error = false;

        if (name.length < 3) {
            errors.name = 'error';
            error = true;
        }
        if (email.length < 3) {
            errors.email = 'error';
            error = true;
        }
        if (message.length < 10) {
            errors.message = 'error';
            error = true;
        }
        setErrors(errors);
        if (error) {
            return;
        }

        setPolicyErrorClass("");
        if (!policy) {
            setPolicyErrorClass("error");
            return;
        }       
        setsendError(false); 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email, message: message })
        };        
        fetch('/api/v1/message/', requestOptions)
            .then(async response => {
                const data = await response.json();    
                if (!response.ok) {                    
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }    
                setName('');
                setEmail('');
                setMessage('');
                setPolicy(false);
                setSuccess(true);
            })
            .catch(error => {
                setsendError(true);                
            });
    }
    
    const renderDetailed = () => {
        return (                      
            <div className="container detailed">                                
                <div className="row">
                    <div className="col-lg-8">
                        <div className="title">
                            <h2>Write me</h2>
                            <p>Contact me from here</p>
                        </div>
                        <form className="form-box form-ajax">
                            <div className="row">
                                <div className={errors.name.concat(" col-lg-6")}>
                                    <p>Name</p>
                                    <input id="name" name="name" placeholder="" type="text" className="input-text" required="" value={name} 
                                        onChange={ e=> {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className={errors.email.concat(" col-lg-6")}>
                                    <p>Email</p>
                                    <input id="email" name="email" placeholder="" type="email" className="input-text" required="" value={email} 
                                        onChange={ e=> {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <p className={errors.message}>Message</p>
                            <textarea id="message" name="message" className={errors.message.concat(" input-textarea")} placeholder="" required=""
                                onChange={ e=> {
                                    setMessage(e.target.value);
                                }}
                            >
                                {message}
                            </textarea>
                            <div className={policyErrorClass.concat(" form-checkbox")} >
                                <input type="checkbox" id="check" name="check" value="check" required="" value={policy}
                                    onChange= { e => {
                                        setPolicy(e.target.value);
                                    }}
                                />
                                <label for="check">You accept the terms of service and the privacy policy</label>
                            </div>
                            <button className="btn btn-xs" onClick={e => send(e)}>Send message</button>
                            {success &&
                            <div className="success-box">
                                <div className="alert alert-success">
                                    Congratulations. Your message has been sent successfully.
                                </div>
                            </div>
                            }
                            {sendError &&
                            <div className="error-box">
                                <div className="alert alert-warning">
                                    Error, please retry. Your message has not been sent.
                                </div>
                            </div>
                            }
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <hr className="space visible-md" />
                        <div className="title">
                            <h2>Contacts</h2>
                            <p>Information</p>
                        </div>
                        <p>
                            Request a consultation for your responsive web api project, website project, marketing and more...
                        </p>
                        <ul className="text-list text-list-line">
                            <li><b>Address</b><hr /><p>Goethepark 14, Berlin</p></li>
                            <li><b>Web</b><hr /><p>black-development.de</p></li>

                            <li><b>Email</b><hr /><p>GrinderFX@gmx.de</p></li>
                            <li><b>Phone</b><hr /><p>+49 176 231 22 674</p></li>
                            <li><b>Skype</b><hr /><p>GrinderFX</p></li>
                        </ul>
                        <hr className="space-sm" />
                        <div className="icon-links icon-social icon-links-button social-colors">
                            <a className="facebook"><i className="icon-facebook"></i></a>
                            <a className="twitter"><i className="icon-twitter"></i></a>
                            <a className="instagram"><i className="icon-instagram"></i></a>
                            <a className="pinterest"><i className="icon-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    const renderUnDetailed = () => {
        
        return (       
            <div className="container">
                <div className="row fade-bottom" data-anima="" data-time="1000">
                    <div className="col-lg-6">
                        <div className="title">
                            <h2>Request a free<br />consultation with me</h2>
                            <p>Contact me now</p>
                        </div>
                        <p>
                            Request a consultation for your responsive web api project, website project, marketing and more...
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <form className="form-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input id="Name" name="Name" placeholder="Name" type="text" className="input-text" required="" value={name}
                                        onChange={ e=> {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input id="Email" name="Email" placeholder="Email" type="email" className="input-text" required="" value={email}
                                        onChange={ e=> {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <hr className="space-xs" />
                            <textarea id="Message" name="Message" placeholder="Message" className="input-textarea" required=""
                                onChange={ e=> {
                                    setMessage(e.target.value);
                                }}
                            >
                                {message}
                            </textarea>
                            <div className={policyErrorClass.concat(" form-checkbox")} >
                                <input type="checkbox" id="check" name="check" value="check" required="" value={policy}
                                    onChange= { e => {
                                        setPolicy(e.target.value);
                                    }}
                                />
                                <label for="check">You accept the terms of service and the privacy policy</label>
                            </div>
                            <button className="btn btn-xs" onClick={e => send(e)}>Send message</button>
                            {success &&
                            <div className="success-box">
                                <div className="alert alert-success">
                                    Congratulations. Your message has been sent successfully.
                                </div>
                            </div>
                            }
                            {sendError &&
                            <div className="error-box">
                                <div className="alert alert-warning">
                                    Error, please retry. Your message has not been sent.
                                </div>
                            </div>
                            }
                        </form>
                    </div>
                </div>
            </div> 
        );
    }

    return (
        <section className="contact">
            {showMap &&
                renderMap()
            }
            {detailed ?                
                renderDetailed()
            :            
                renderUnDetailed()
            }
        </section>
    )   
}

export default Contact;