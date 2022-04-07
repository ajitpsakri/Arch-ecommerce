import "./HomePage.css";
import poster from '../../assets/images/pexels-mikhail-nilov-6620338.jpg'
const HomePage = () => {
    return (
        <section className="container__main-content">
            <div className="featured__image">
                <img
                    className="image image-responsive text-center br-radius-8"
                    src="https://picsum.photos/1335/140"
                    alt="featured-image"
                />
            </div>
            <div className="poster__image mg-1rem-0">
                <img
                    className="image poster-image image-responsive text-center br-radius-8"
                    src={poster}
                    alt=""
                />
            </div>
            <div className="card--container">
                <a
                    className="link-reset"
                    href="./pages/product-page-01/product-page-01.html"
                >
                    <div className="card card-basic">
                        <h3>Verticle Product page</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                            praesentium totam reprehenderit.
                        </p>
                        <button className="btn btn-secondary">
                            <a
                                className="link-reset text-white"
                                href="./pages/product-page-01/product-page-01.html"
                            >
                                Button1
                            </a>
                        </button>
                    </div>
                </a>
                <a
                    className="link-reset"
                    href="./pages/product-page-02/product-page-02.html"
                >
                    <div className="card card-basic">
                        <h3>Horizontal Product page</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                            praesentium totam reprehenderit.
                        </p>
                        <button className="btn btn-secondary">
                            <a
                                className="link-reset text-white"
                                href="./pages/product-page-02/product-page-02.html"
                            >
                                Button1
                            </a>
                        </button>
                    </div>
                </a>
            </div>
        </section>)
}
export { HomePage } 
