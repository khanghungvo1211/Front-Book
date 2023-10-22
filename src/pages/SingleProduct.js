import React, { useState } from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from 'react-rating-stars-component'
const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='col-6'>
              </div>
            </div>
          </div>
          <div className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
              <div className='row'>
                <div className='col-12'>
                  <div className='bg-white p-3'>
                    <h4>Description</h4>
                    <p className='bg-white p-3'>Sữa Tắm On: The Body Perfume Shower Body Wash Hương Nước Hoa là dòng sữa tắm đến từ thương hiệu chăm sóc da On: The Body (thuộc tập đoàn LG của Hàn Quốc). Lấy nguồn cảm hứng từ nước hoa với hương thơm bất tận, Viện nghiên cứu Sent Berry – LG Household & Health care, Hàn Quốc đã sáng chế ra dòng sữa tắm hương nước hoa On: The Body Perfume cao cấp, gửi gắm vẻ đẹp và hương thơm từ thiên nhiên, đánh thức các giác quan với hương thơm độc đáo, mới lạ.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className='reviews-wrapper py-5 home-wrapper-2'>
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
                  <div className='review-form py-4'>
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
      </div >
    </>
  )
}

export default SingleProduct
