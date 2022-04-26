import './Product2.css'
const Product2 = () => {
    return (
        <div className='product-body'>
            <aside className="bg-white pd-1_5rem product-aside">
                <div className="header__content flex flex-align-center flex-justi-spac-betw">
                    <h2>Filter</h2>
                    <p className="text-underline">Clear</p>
                </div>
                <h2>Price</h2>

                <datalist className="text-grey" list="price">
                    <option value="50" label="50"></option>
                    <option value="70"></option>
                    <option value="90"></option>
                    <option value="110"></option>
                    <option value="130"></option>
                    <option value="150" label="150"></option>
                    <option value="160"></option>
                    <option value="170"></option>
                    <option value="180"></option>
                    <option value="190"></option>
                    <option value="100" label="200"></option>
                </datalist>
                <input className="input--range" type="range" list="price" />
                <h2>Category</h2>
                <ul className="list-reset">
                    <li>
                        <input type="checkbox" name="category" value="bow" id="bow" />
                        <label for="bow"> Bow</label>
                    </li>
                    <li>
                        <input type="checkbox" name="category" value="quivers" id="quivers" />
                        <label for="quivers"> Quivers</label>
                    </li>
                    <li>
                        <input type="checkbox" name="category" value="targets" id="targets" />
                        <label for="targets"> Targets</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="category"
                            value="bowstring"
                            id="bowstring"
                        />
                        <label for="bowstring"> Bowstring</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="category"
                            value="protective-gear"
                            id="protective-gear"
                        />
                        <label for="protective-gear"> Protective Gear</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="category"
                            value="arrow-bolts"
                            id="arrow-bolts"
                        />
                        <label for="arrow-bolts"> Arrow Bolts</label>
                    </li>
                    <li>
                        <input type="checkbox" name="category" value="nocks" id="nocks" />
                        <label for="nocks"> Nocks</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="category"
                            value="fletches"
                            id="fletches"
                        />
                        <label for="fletches"> Fletches</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="category"
                            value="bow-slings"
                            id="bow-slings"
                        />
                        <label for="bow-slings"> Bow Slings</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="category"
                            value="finger-tabs"
                            id="finger-tabs"
                        />
                        <label for="finger-tabs"> Finger Tabs</label>
                    </li>
                </ul>
                <h2>Rating</h2>
                <ul className="list-reset">
                    <li>
                        <input type="radio" name="rating" value="4" id="four" />
                        <label for="four">4 Stars & above</label>
                    </li>
                    <li>
                        <input type="radio" name="rating" value="3" id="three" />
                        <label for="three">3 Stars & above</label>
                    </li>
                    <li>
                        <input type="radio" name="rating" value="3" id="two" />
                        <label for="two">2 Stars & above</label>
                    </li>
                    <li>
                        <input type="radio" name="rating" value="3" id="one" />
                        <label for="one">1 Stars & above</label>
                    </li>
                </ul>
                <h2>Sort by</h2>
                <ul className="list-reset">
                    <li>
                        <input type="radio" name="sortby" value="0" id="low" />
                        <label for="low">Price - Low to High </label>
                    </li>
                    <li>
                        <input type="radio" name="sortby" value="1" id="high" />
                        <label for="high">Price - High to Low </label>
                    </li>
                </ul>
            </aside>
            <section className="product__main-content flex gap-1rem flex-justi-spac-even">
                <div className="card card-ecommerce flex max-wid-50rem">
                    <div className="card-ecom-header max-wid-20rem">
                        <img
                            src="https://live.staticflickr.com/7105/7139684419_4c993fb528_b.jpg"
                            alt="random image"
                        />
                        <span className="card-ecom-header-offer-icon">
                            <i className="fas fa-bookmark"></i>
                            <p>25% off</p>
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-ecom-title">
                            <h3>Compound bow</h3>
                            <p>author name</p>
                        </div>
                        <div className="card-ecom-price">
                            <span className="price-show">
                                <strike>3499₹</strike>
                                <p>150₹</p>
                            </span>
                            <span className="price-change">
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <p>3</p>
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div className="card-ecom-footer">
                            <button className="btn btn-primary">
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-list-ul"></i> Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-ecommerce flex max-wid-50rem">
                    <div className="card-ecom-header max-wid-20rem">
                        <img
                            src="https://live.staticflickr.com/7105/7139684419_4c993fb528_b.jpg"
                            alt="random image"
                        />
                        <span className="card-ecom-header-offer-icon">
                            <i className="fas fa-bookmark"></i>
                            <p>25% off</p>
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-ecom-title">
                            <h3>Compound bow</h3>
                            <p>author name</p>
                        </div>
                        <div className="card-ecom-price">
                            <span className="price-show">
                                <strike>3499₹</strike>
                                <p>150₹</p>
                            </span>
                            <span className="price-change">
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <p>3</p>
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div className="card-ecom-footer">
                            <button className="btn btn-primary">
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-list-ul"></i> Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-ecommerce flex max-wid-50rem">
                    <div className="card-ecom-header max-wid-20rem">
                        <img
                            src="https://live.staticflickr.com/7105/7139684419_4c993fb528_b.jpg"
                            alt="random image"
                        />
                        <span className="card-ecom-header-offer-icon">
                            <i className="fas fa-bookmark"></i>
                            <p>25% off</p>
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-ecom-title">
                            <h3>Compound bow</h3>
                            <p>author name</p>
                        </div>
                        <div className="card-ecom-price">
                            <span className="price-show">
                                <strike>3499₹</strike>
                                <p>150₹</p>
                            </span>
                            <span className="price-change">
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <p>3</p>
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div className="card-ecom-footer">
                            <button className="btn btn-primary">
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-list-ul"></i> Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-ecommerce flex max-wid-50rem">
                    <div className="card-ecom-header max-wid-20rem">
                        <img
                            src="https://live.staticflickr.com/7105/7139684419_4c993fb528_b.jpg"
                            alt="random image"
                        />
                        <span className="card-ecom-header-offer-icon">
                            <i className="fas fa-bookmark"></i>
                            <p>25% off</p>
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-ecom-title">
                            <h3>Compound bow</h3>
                            <p>author name</p>
                        </div>
                        <div className="card-ecom-price">
                            <span className="price-show">
                                <strike>3499₹</strike>
                                <p>150₹</p>
                            </span>
                            <span className="price-change">
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <p>3</p>
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div className="card-ecom-footer">
                            <button className="btn btn-primary">
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-list-ul"></i> Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-ecommerce flex max-wid-50rem">
                    <div className="card-ecom-header max-wid-20rem">
                        <img
                            src="https://live.staticflickr.com/7105/7139684419_4c993fb528_b.jpg"
                            alt="random image"
                        />
                        <span className="card-ecom-header-offer-icon">
                            <i className="fas fa-bookmark"></i>
                            <p>25% off</p>
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-ecom-title">
                            <h3>Compound bow</h3>
                            <p>author name</p>
                        </div>
                        <div className="card-ecom-price">
                            <span className="price-show">
                                <strike>3499₹</strike>
                                <p>150₹</p>
                            </span>
                            <span className="price-change">
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <p>3</p>
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div className="card-ecom-footer">
                            <button className="btn btn-primary">
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-list-ul"></i> Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-ecommerce flex max-wid-50rem">
                    <div className="card-ecom-header max-wid-20rem">
                        <img
                            src="https://live.staticflickr.com/7105/7139684419_4c993fb528_b.jpg"
                            alt="random image"
                        />
                        <span className="card-ecom-header-offer-icon">
                            <i className="fas fa-bookmark"></i>
                            <p>25% off</p>
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-ecom-title">
                            <h3>Compound bow</h3>
                            <p>author name</p>
                        </div>
                        <div className="card-ecom-price">
                            <span className="price-show">
                                <strike>3499₹</strike>
                                <p>150₹</p>
                            </span>
                            <span className="price-change">
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <p>3</p>
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div className="card-ecom-footer">
                            <button className="btn btn-primary">
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-list-ul"></i> Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-ecommerce flex max-wid-50rem">
                    <div className="card-ecom-header max-wid-20rem">
                        <img
                            src="https://live.staticflickr.com/7105/7139684419_4c993fb528_b.jpg"
                            alt="random image"
                        />
                        <span className="card-ecom-header-offer-icon">
                            <i className="fas fa-bookmark"></i>
                            <p>25% off</p>
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-ecom-title">
                            <h3>Compound bow</h3>
                            <p>author name</p>
                        </div>
                        <div className="card-ecom-price">
                            <span className="price-show">
                                <strike>3499₹</strike>
                                <p>150₹</p>
                            </span>
                            <span className="price-change">
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <p>3</p>
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div className="card-ecom-footer">
                            <button className="btn btn-primary">
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-list-ul"></i> Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-ecommerce flex max-wid-50rem">
                    <div className="card-ecom-header max-wid-20rem">
                        <img
                            src="https://live.staticflickr.com/7105/7139684419_4c993fb528_b.jpg"
                            alt="random image"
                        />
                        <span className="card-ecom-header-offer-icon">
                            <i className="fas fa-bookmark"></i>
                            <p>25% off</p>
                        </span>
                    </div>
                    <div className="card-content">
                        <div className="card-ecom-title">
                            <h3>Compound bow</h3>
                            <p>author name</p>
                        </div>
                        <div className="card-ecom-price">
                            <span className="price-show">
                                <strike>3499₹</strike>
                                <p>150₹</p>
                            </span>
                            <span className="price-change">
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <p>3</p>
                                <button className="btn btn-float btn-primary">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </span>
                        </div>
                        <div className="card-ecom-footer">
                            <button className="btn btn-primary">
                                <i className="fas fa-shopping-cart"></i> Add to cart
                            </button>
                            <button className="btn btn-primary">
                                <i className="fas fa-list-ul"></i> Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export { Product2 }
