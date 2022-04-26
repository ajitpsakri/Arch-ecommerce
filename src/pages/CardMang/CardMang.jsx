import './CardMang.css'

const CardMang = () => {
    return (
        <div className='card-body'>
            <section class="card__main-content">
                <h2 class="cart-heading text-black">Cart items(2)</h2>
                <section class="main-wrapper">
                    <section
                        class="container--manag-cart flex gap-1rem flex-justi-spac-even mg-1rem shadow-basic"
                    >
                        <div class="card card-ecommerce">
                            <div class="card-ecom-header">
                                <img
                                    src="https://live.staticflickr.com/7105/7139684419_4c993fb528_b.jpg"
                                    alt="random image"
                                />
                                <span class="card-ecom-header-offer-icon">
                                    <i class="fas fa-bookmark"></i>
                                    <p>25% off</p>
                                </span>
                            </div>
                            <div class="card-content flex flex-col flex-justi-spac-betw">
                                <div class="card-ecom-title">
                                    <h3>Compound bow</h3>
                                    <p>author name</p>
                                </div>
                                <div class="card-ecom-price">
                                    <span class="price-show">
                                        <strike>3499₹</strike>
                                        <p>150₹</p>
                                    </span>
                                    <span class="price-change">
                                        <button class="btn btn-float btn-primary">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <p>3</p>
                                        <button class="btn btn-float btn-primary">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </span>
                                </div>
                                <div class="card-ecom-footer">
                                    <button class="btn btn-secondary width-100">
                                        <i class="fas fa-shopping-cart"></i> Add to cart
                                    </button>
                                    <button class="btn btn-outline-secondary width-100">
                                        <i class="fas fa-list-ul"></i> Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="container--price bg-white pd-1_5rem br-radius-9 mg-1rem shadow-basic"
                    >
                        <h2>PRICE DETAILS</h2>
                        <div class="flex flex-justi-spac-betw mg-1rem-0">
                            <p>Price (2 items)</p>
                            <p>₹3499</p>
                        </div>
                        <div class="flex flex-justi-spac-betw mg-1rem-0">
                            <p>Discount</p>
                            <p>- ₹3339</p>
                        </div>
                        <div class="flex flex-justi-spac-betw mg-1rem-0">
                            <p>Delivery Charges</p>
                            <p>₹10</p>
                        </div>
                        <hr />
                        <div class="flex flex-justi-spac-betw mg-1rem-0">
                            <b> TOTAL AMOUNT</b>
                            <p>₹150</p>
                        </div>
                        <hr />
                        <p>You will save ₹3339 on this order</p>
                        <button class="price-btn btn btn-primary width-100 mg-1rem-0">
                            PLACE ORDER
                        </button>
                    </section>
                </section>
            </section>
        </div>
    )
}
export { CardMang }
