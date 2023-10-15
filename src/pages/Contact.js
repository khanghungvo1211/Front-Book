//rafce
import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2311712352457!2d106.80047917578466!3d10.870014157458943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1697357753300!5m2!1svi!2s"
                width="600"
                height="450"
                className='border-0 w-100'
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title'>Contact Us</h3>
                </div>
                <div>
                  <h3 className='contact-title'>Contact Us</h3>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

