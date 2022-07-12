// ** Icons Import
import { Heart } from 'react-feather'
import FooterLogo from '@src/assets/images/logo/gimalogo.png'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
       <img src={FooterLogo} width="20px"/>  © {date}{" "} 
        <a href='https://1.envato.market/pixinvent_portfolio' target='_blank' rel='noopener noreferrer' style={{color:"#8DC454"}}>
          DDEP
        </a>
        <span className='d-none d-sm-inline-block'> - powered by a4appz Limited. Member of SiiA Group, All rights Reserved</span>
      </span>
      {/* <span className='float-md-right d-none d-md-block'>
        Hand-crafted & Made with
        <Heart size={14} />
      </span> */}
      <span className='float-md-right d-none d-md-block'>
        Version 1.0
      </span>
    </p> 
  )
}

export default Footer
