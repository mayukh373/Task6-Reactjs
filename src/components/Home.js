import hii from './images/hii.png'
import { useEffect } from 'react';

export default function Home() {

    return (
        <div>
            <div className="container-fluid">
                <div className="row pt-5">
                    <div className="col-4 text-center position-absolute display-none" id="info">
                        <div className="h1 hii-pos bg-primary text" id="hii">Hey there!</div>
                        <p className="fw-bold text">I am Mayukh Maji.<br/>
                            A 3rd year Btech student currently studying in <br/> VIT Chennai. </p>
                        <div className="display-none">
                            <button className="btn btn-primary"><i className="fa-brands fa-linkedin fa-2x" href="#About"></i></button> 
                            <button className="btn btn-danger mx-2"><i className="fa-solid fa-envelope fa-2x"></i></button>
                            <button className="btn btn-dark"><i className="fa-brands fa-square-github fa-2x"></i></button>
                        </div>
                    </div>
                    <div className="col-4 text-center text-md-start" id="pic"><img src={hii} alt="hii.png" height={400} /></div>
                </div>
            </div>
        </div>
    )
}