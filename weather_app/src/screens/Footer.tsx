import React from 'react'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFacebookF); 

interface Props { }

const Footer = () => {
  return (
    <>
      <footer style={{
        background: `linear-gradient(252.44deg, rgba(239,255,253,.7) 0.56%, rgba(239,255,253,0 ) 100.56%)!important`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '10px'
      }} className="d-flex-column text-center text-lg-start">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
              color="#00acee"
              style={{
                background:'#3B5998 !important'
              }}
            ><FontAwesomeIcon icon={['fab', 'facebook-f']} />

            </a>

            <a
              className="btn btn-dark btn-floating m-1"
              href="#!"
              role="button"
              style={{
                background:'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
              }}
              
            ><FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              className="btn btn-dark btn-floating m-1"
              style={{
                background:'#42c0fb'
              }}
              
            
            ><FontAwesomeIcon icon={faTwitter} /></a>
          </section>
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-10 col-12">
                  <div className="form-outline mb-2">
                    <input type="email" id="form5Example27" className="form-control" />
                    <label className="form-label" htmlFor="form5Example27">Email address</label>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
        </div>
        <div className="text-center p-3" >
          © 2022 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer></>)

}
export default Footer