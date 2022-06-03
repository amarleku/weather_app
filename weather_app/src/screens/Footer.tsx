import React from 'react'; import './styles/footer.css'

const Footer: React.FC = () => {

  let date = new Date();

  return (
    <>
      <footer className="footer">
        <p className='text-center footer-text'>Copyright Weather {`${date.getFullYear()}`}</p>
      </footer>
    </>)
}


export default Footer