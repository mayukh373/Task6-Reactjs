import cpp from './images/cpp.png'
import java from './images/java.jpg'
import JS from './images/JS.jpg'
import BS from './images/BS.jpg'
import React from './images/React.jpg'
import html from './images/html.jpg'
import CSS from './images/CSS.jpg'
import Node from './images/Node.jpg'
import mongo from './images/mongo.jpg'

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
                                        <div><img src={JS} alt="JS.jpg" height={60} /></div>
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
                                    <div className="d-flex justify-content-evenly mt-4">
                                        <div><img src={html} alt="java.jpg" height={60} /></div>
                                        <div><img src={CSS} alt="JS.jpg" height={60} /></div>
                                    </div><br />
                                    <div className="d-flex justify-content-evenly">
                                        <div><img src={BS} alt="java.jpg" height={60} /></div>
                                        <div><img src={React} alt="JS.jpg" height={60} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="flip">
                            <div className="flip-inner">
                                <div className="flip-front"><h5 className="front-text-2">Backend</h5></div>
                                <div className="flip-back">
                                    <div className="d-flex justify-content-evenly mt-5 pt-3">
                                        <div><img src={Node} alt="java.jpg" height={60} /></div>
                                        <div><img src={mongo} alt="JS.jpg" height={60} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}