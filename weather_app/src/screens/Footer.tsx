import React from 'react'
import './styles/footer.css'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFacebookF); 


interface Props { }

const Footer: React.FC = () => {

  let date = new Date();
  return (
    <>
      <footer className="footer">
      <div className="container p-4 pb-0">
          <p style={{ color: '#fff',fontWeight: '700', fontSize:'21px' }}>Connect with us</p>
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
              className="btn btn btn-floating m-1"
              href="#!"
              role="button"
              style={{
                background:'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
              }}
              
            ><FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              className="btn btn btn-floating m-1"
              style={{
                background:'#42c0fb'
              }}
              
            
            ><FontAwesomeIcon icon={faTwitter} /></a>
          </section>
           
        </div>
      <p className='text-center footer-text'>Copyright Weather 2022</p>
      </footer>
      
      </>)

}
export default Footer