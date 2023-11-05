import React, { useState } from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const props = { width: 1000, height: 600, zoomWidth: 600, img: "https://media.hcdn.vn/wysiwyg/minhchau/sua-tam-on-the-body-duong-am-huong-nuoc-hoa-500g-1.jpg" };
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
                <div><img src='https://media.hcdn.vn/catalog/product/s/u/sua-tam-on-the-body-huong-nuoc-hoa-violet-dream-1000g-1687933774_img_358x358_843626_fit_center.jpg' className='img-fluid' alt='' />
                </div>
                <div><img src='https://media.hcdn.vn/catalog/product/s/u/sua-tam-on-the-body-huong-nuoc-hoa-violet-dream-1000g-1687933774_img_358x358_843626_fit_center.jpg' className='img-fluid' alt='' />
                </div>
                <div><img src='https://media.hcdn.vn/catalog/product/s/u/sua-tam-on-the-body-huong-nuoc-hoa-violet-dream-1000g-1687933774_img_358x358_843626_fit_center.jpg' className='img-fluid' alt='' />
                </div>
                <div><img src='https://media.hcdn.vn/catalog/product/s/u/sua-tam-on-the-body-huong-nuoc-hoa-violet-dream-1000g-1687933774_img_358x358_843626_fit_center.jpg' className='img-fluid' alt='' />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3>
                    Sua Tam On: The Body Duong Am Huong Quyen Ru 1000g
                  </h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>200.000 đ</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ff6600"
                    />
                    <p className="mb-0 t-review">| Based on 2 Reviews</p>
                  </div>
                  <a className='review-btn' href='#review'>Write a Review</a>
                </div>
                <div className='border-bottom'>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type: </h3> <p className='product-data'>Skin Care</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand: </h3> <p className='product-data'>ON</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Category: </h3> <p className='product-data'>Body Care</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags: </h3> <p className='product-data'>Skin Care</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Smell: </h3> 
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border-1 bg-white text-dark border-secondary'>Pearl</span>
                      <span className='badge border-1 bg-white text-dark border-secondary'>Pearl</span>
                      <span className='badge border-1 bg-white text-dark border-secondary'>Pearl</span>
                      <span className='badge border-1 bg-white text-dark border-secondary'>Pearl</span>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity </h3>
                  <div className=''>
                      <input type='number' name='' min={1} max={10}
                      className='form-control'
                       style={{width: "70px"}} id='' />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      type="button"
                    >
                      Add to Cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                    <div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <a href=''>
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>

                <p className='bg-white p-3'>Sữa Tắm On: The Body Perfume Shower Body Wash Hương Nước Hoa là dòng sữa tắm đến từ thương hiệu chăm sóc da On: The Body (thuộc tập đoàn LG của Hàn Quốc). Lấy nguồn cảm hứng từ nước hoa với hương thơm bất tận, Viện nghiên cứu Sent Berry – LG Household & Health care, Hàn Quốc đã sáng chế ra dòng sữa tắm hương nước hoa On: The Body Perfume cao cấp, gửi gắm vẻ đẹp và hương thơm từ thiên nhiên, đánh thức các giác quan với hương thơm độc đáo, mới lạ.</p>
              </div>
            </div>
          </div>
        </div>
        <section id='review' className='reviews-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className="col-12">
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className="mb-2">Reviews</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 Reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a className="text-dark text-decoration-underline" href="/">
                          Write a Review
                        </a>
                      </div>
                    )}
                  </div>
                  <div  className='review-form py-4'>
                    <h4>Write a review</h4>
                    <form action="" className="d-flex flex-column gap-15">

                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div>
                        <button className="button border-0">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div className='reviews mt-4 '>
                    <div className='review'>
                      <div className='d-flex gap-10 align-items-center'>
                        <h6 className='mb-0'>Khang</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />

                      </div>
                      <p className='mt-3'>
                        Hàng dỏm quá
                      </p>


                    </div>
                  </div>
                </div>
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
      </div >

    </>
  )
}

export default SingleProduct
