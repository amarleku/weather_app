import React from 'react'
import './styles/footer.css'

interface Props { }

const Footer: React.FC = () => {

  let date = new Date();
  return (
    <>
      <footer className="footer">
      <p className='text-center footer-text'>Copyright Weather 2022</p>
      </footer>
      
      </>)

}
export default Footer