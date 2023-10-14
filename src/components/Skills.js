import cpp from './images/cpp.png'
import java from './images/java.jpg'
import JS from './images/JS.png'

export default function Skills() {
    return (
        <div>
            <div className="h1 text-center text-light skills-h-pos"><span className="border-2 border-bottom border-danger">Skills</span></div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-4 ">
                        <div className="flip">
                            <div className="flip-inner">
                                <div className="flip-front"><h5 className="front-text-1">Code</h5></div>
                                <div className="flip-back">
                                    <div className="text-center my-4"><img src={cpp} alt="cpp.png" height={60} /></div>
                                    <div className="d-flex justify-content-evenly">
                                        <div><img src={java} alt="java.jpg" height={60} /></div>
                                        <div><img src={JS} alt="JS.jpg" height={60}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="flip">
                            <div className="flip-inner">
                                <div className="flip-front"><h5 className="front-text-2">Frontend</h5></div>
                                <div className="flip-back">
                                    <ul className="flip-back-list">
                                        <li>Java</li>
                                        <li>CPP</li>
                                        <li>Javascript</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="flip">
                            <div className="flip-inner">
                                <div className="flip-front"><h5 className="front-text-2">Backend</h5></div>
                                <div className="flip-back">
                                    <ul className="flip-back-list">
                                        <li>Java</li>
                                        <li>CPP</li>
                                        <li>Javascript</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}