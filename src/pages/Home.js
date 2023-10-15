import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import FlashSale from '../components/FlashSale'
const Home = () => {
  return <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img src='image/main-banner.jpg'
                className='img-fluid rounded-3'
                alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h4>NEW PRODUCT</h4>
                <h5>ROUGE COCO</h5>
                <p>Mo ta sp</p>
                <Link className='button'>SHOP NOW</Link>

              </div>



            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative '>
                <img src='image/catbanner-01.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW PRODUCT</h4>
                  <h5>ROUGE COCO</h5>
                  <p>Mo ta <br />sp</p>
                </div>

              </div>
              <div className='small-banner position-relative '>
                <img src='image/catbanner-02.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Demo</h4>
                  <h5>Demo</h5>
                  <p>Demo</p>
                </div>

              </div> <div className='small-banner position-relative '>
                <img src='image/catbanner-03.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Demo</h4>
                  <h5>Demo</h5>
                  <p>Demo</p>
                </div>

              </div> <div className='small-banner position-relative '>
                <img src='image/catbanner-04.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Demo</h4>
                  <h5>Demo</h5>
                  <p>Demo</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='servies d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-15'>
                <img src='image/service.png' alt='services' />
                <div>
                  <h6>Free Shipping</h6>
                  <p className='mb-0'>From all orders over 500.000VND</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='image/service-02.png' alt='services' />
                <div>
                  <h6>Demo</h6>
                  <p className='mb-0'>Demo</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='image/service-03.png' alt='services' />
                <div>
                  <h6>Demo</h6>
                  <p className='mb-0'>Demo</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='image/service-04.png' alt='services' />
                <div>
                  <h6>Demo</h6>
                  <p className='mb-0'>Demo</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='image/service-05.png' alt='services' />
                <div>
                  <h6>Demo</h6>
                  <p className='mb-0'>Demo</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-end cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/Untitled-1.jpg' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-end cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/Untitled-1.jpg' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-end cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/Untitled-1.jpg' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-end cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/Untitled-1.jpg' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-end cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/Untitled-1.jpg' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-end cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/Untitled-1.jpg' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-end cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/Untitled-1.jpg' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-end cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/Untitled-1.jpg' alt='High-end cosmetics ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='best-seller-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Best Seller</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='image/sp2.jpg' className='img-fluid' alt='group' />
              <div className='famous-content position-absolute'>
                <h5>Demo</h5>
                <h6>Nuoc Hoa Hong</h6>
                <p>From 200.000 to 500.000</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='image/sp2.jpg' className='img-fluid' alt='group' />
              <div className='famous-content position-absolute'>
                <h5>Demo</h5>
                <h6>Nuoc Hoa Hong</h6>
                <p>From 200.000 to 500.000</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='image/sp2.jpg' className='img-fluid' alt='group' />
              <div className='famous-content position-absolute'>
                <h5>Demo</h5>
                <h6>Nuoc Hoa Hong</h6>
                <p>From 200.000 to 500.000</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='image/sp2.jpg' className='img-fluid' alt='group' />
              <div className='famous-content position-absolute'>
                <h5>Demo</h5>
                <h6>Nuoc Hoa Hong</h6>
                <p>From 200.000 to 500.000</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section className='flash-sale-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Flash Sale</h3>
          </div>
          <div className='row'>
            <FlashSale />
            <FlashSale />
            <FlashSale />
          </div>
        </div>
      </div>
    </section>
    <section className='best-product-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Best Product</h3>
          </div>
        </div>
        <div className='row'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>

    <section className='marque-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='image/logo1.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo2.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo3.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo4.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo5.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo6.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo7.jpg' alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Beauty Blog</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
          <BlogCard />
          </div>
          <div className='col-3'>
          <BlogCard />
          </div>
          <div className='col-3'>
          <BlogCard />
          </div>
          <div className='col-3'>
          <BlogCard />
          </div>
        </div>
      </div>
    </section>
  </>

}

export default Home
