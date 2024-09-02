/* eslint-disable no-unused-vars */
import React from 'react'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsSlack, BsGithub } from 'react-icons/bs'
import playstore from '../assets/images/pay/play.jpg'
import appstore from '../assets/images/pay/app.jpg'
import visa from '../assets/images/pay/pay.png'

const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container-xxl">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3'><b>JOY FASHION</b></h2>
          <div className='mb-3'><p><b>A great playstore to buy a branded dress for your<br></br> fantastic days. We have 365 days of offer in all dress.</b></p> </div>
          <div className="socials d-flex gap-3">
          <Link to='#' id='footer-link' target='_blank' className='gap-3'>
          <BsDiscord />
          </Link>
          <Link to='#' id='footer-link' target='_blank' className='gap-3'>
          <BsTwitter />
          </Link>
          <Link to={'#'} className='gap-3' id='footer-link'>
          <BsGithub />
          </Link>
          <Link to='#' id='footer-link' target='_blank' className='gap-3'>
          <BsSlack />
          </Link>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>QUICK LINKS</b></h2>
          <div className='mb-3'> <Link to='/' id='footer-links'>Home</Link>  </div>
          <div className='mb-3'> <Link to='/shop' id='footer-links'>Shop</Link>  </div>
          <div className='mb-3'> <Link to='/contact' id='footer-links'>Contact</Link>  </div>
        </div>

        <div className="col-md-4 col-lg-4">
          <h2 className='footer-title mb-3'><b>INSTALL APP</b></h2>
          <p className='mb-3'>Available On Google Play Services & App Store</p>
          <div className="className='mb-3 col-md-6 col-12 pay">
          <div className='mb-3'>
          <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
          <img src={playstore} alt="" />
          </Link>
          </div>
          <div className='mb-3'>
          <Link to='https://www.apple.com/app-store/' target='_blank'>
          <img src={appstore} alt="" />
          </Link>
          </div>
          </div>
          <p className="mb-3">
            Payment Methods
          </p>
          <div className="pay">
          <Link to='https://www.paypal.com/signin' target='_blank'>
          <img src={visa} alt="" />
          </Link>
          </div>
        </div>
      </div>
      <hr className='my-4' />
      <div className="row">
        <div className="col-12 col-md-6">
        <p className="text-center text-md-start">&copy;All rights reserved Jagan</p>
        </div>
        <div className="col-12 col-md-6">
        <ul className="list-inline text-center text-md-end">
          <li className="list-inline-item"><Link to="#" className="text-dark">Privacy Policy</Link></li>
          <li className="list-inline-item"><Link to="#" className="text-dark">Terms of Use</Link></li>
        </ul>
      </div>
      </div>
    </div>
  </footer>
  </>;
}

export default footer