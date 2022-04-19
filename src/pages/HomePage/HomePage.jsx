import "./HomePage.css";
import poster from '../../assets/images/pexels-mikhail-nilov-6620338.jpg'
import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <section className="home__main-content">
            <div className="featured__image">
                <img
                    className="image image-responsive text-center br-radius-8 width-100"
                    src="https://picsum.photos/1335/140"
                    alt="featured-image"
                />
            </div>
            <div className="poster__image mg-1rem-0">
                <img
                    className="image poster-image image-responsive text-center br-radius-8 width-100"
                    src={poster}
                    alt=""
                />
            </div>
            <div className="card--container max-wid-100 flex flex-justi-spac-betw">
                <Link to="/productpage1"
                    className="link-reset"
                >
                    <div className="card card-basic max-wid-78rem">
                        <h3>Verticle Product page</h3>
                        <p className="text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                            praesentium totam reprehenderit.
                        </p>
                        <button className="btn btn-secondary">
                            <Link
                                to="/productpage1"
                                className="link-reset text-white"
                            >
                                Button1
                            </Link>
                        </button>
                    </div>
                </Link>
                <Link
                    className="link-reset"
                    to="/productpage2"
                >
                    <div className="card card-basic max-wid-78rem">
                        <h3>Horizontal Product page</h3>
                        <p className="text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                            praesentium totam reprehenderit.
                        </p>
                        <button className="btn btn-secondary">
                            <Link
                                to="/productpage2"
                                className="link-reset text-white"
                            >
                                Button1
                            </Link>
                        </button>
                    </div>
                </Link>
            </div>
        </section>)
}
export { HomePage } 
