import project1 from './images/project1.jpg'
import project2 from './images/project2.jpg'
import project3 from './images/project3.jpg'
import project4 from './images/project4.jpg'
import project5 from './images/project5.jpg'
import project6 from './images/project6.jpg'
import project7 from './images/project7.jpg'
import project8 from './images/project8.jpg'
import project9 from './images/project9.jpg'


export default function Work() {
    return (
        <div>
            <div className="h1 text-center text-light work-h-pos"><span className="border-2 border-bottom border-danger">Work</span></div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade pt-4" data-interval="false">
                <div className="carousel-inner">

                    <div className="carousel-item active">  
                        <div className="card-group">
                            <div className="card">
                                <img src={project1} className="card-img-top" height={300} alt="project.jpg" />
                            </div>
                            <div className="card">
                                <img src={project2} className="card-img-top" height={300} alt="project.jpg" />
                            </div>
                            <div className="card">
                                <img src={project3} className="card-img-top" height={300} alt="project.jpg" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card-group">
                            <div className="card">
                                <img src={project4} className="card-img-top" height={300} alt="project.jpg" />
                            </div>
                            <div className="card">
                                <img src={project5} className="card-img-top" height={300} alt="project.jpg" />
                            </div>
                            <div className="card">
                                <img src={project6} className="card-img-top" height={300} alt="project.jpg" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card-group">
                            <div className="card">
                                <img src={project7} className="card-img-top" height={300} alt="project.jpg" />
                            </div>
                            <div className="card">
                                <img src={project8} className="card-img-top" height={300} alt="project.jpg" />
                            </div>
                            <div className="card">
                                <img src={project9} className="card-img-top" height={300} alt="project.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}