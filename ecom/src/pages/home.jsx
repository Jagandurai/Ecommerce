import React from 'react'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/banner/b17.jpg'
import banner1 from '../assets/images/banner/b10.jpg'
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import Newsletter from '../components/newsletter';
import Marquee from "react-fast-marquee";

const home = () => {
  return <>
  <section className="banner">
    <div className="container-xxl">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <h1>Branded show room</h1>
                  <h2>On all dress</h2>

                  <p className='mb-3'>Save today with JOYFASHION</p>

                  <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>
  <section>
              <div className="col-12 p-3">
            <Marquee className="p-2 slide">
              <div>
                <img src="https://img.icons8.com/?size=100&id=n8ZcLFo6skTx&format=png&color=000000" alt="Quick Shipping" className="img-fluid" />
                <p className="card-text mb-2">Quick Shipping</p>
              </div>
              <div>
                <img src="https://img.icons8.com/?size=100&id=83743&format=png&color=000000" alt="High Saves" className="img-fluid" />
                <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
                <img src="https://img.icons8.com/?size=100&id=58590&format=png&color=000000" alt="24/7 Support" className="img-fluid" />
                <p className="card-text">24/7 Support</p>
              </div>
              <div>
                <img src="https://img.icons8.com/?size=100&id=649Wi2iCZ71j&format=png&color=000000" alt="Online Orders" className="img-fluid" />
                <p className="card-text">Online Orders</p>
              </div>
            </Marquee>
          </div>
  </section>
 

  <section className="featured-products p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Featured Products</h1>
          <p>All Weather New Modern Designs</p>
        </div>
       <Featuredproducts />
      </div>
    </div>
  </section>

  <section className="repair-services p-5">
    <div className="container-xxl">
      <div className="row ">
        <div className="repair-details text-center align-items-center">
          <h5 className='mb-3 text-white'>Repair Services</h5>
          <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  </section>

  <section className="new-arrivals p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1>New Arrivals</h1>
          <p>Your Best Designer Outfits</p>
        </div>
        <Newarrivals />
      </div>
    </div>
  </section>
  <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hot Deals</h5>
                  <h2 className="card-text mb-2">Buy One get One free.</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">The latest best collection in our closet <br />Feel Cute with our outfits</small></p>
                  <Link to='shop'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Season-In</h5>
                  <h2 className="card-text mb-2">All Weather Attire</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                  <Link to='shop'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="mb-3">What our customers say...</h1>
        <p className="mb-4">Our customers never miss a bit on providing feedback</p>
      </div>
      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog1} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque consequuntur impedit!
             Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum..</p>
             <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog2} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque consequuntur impedit! 
            Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 50 mins ago</small></p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog3} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque consequuntur impedit!
             Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum.</p>
             <p className="card-text"><small className="text-body-secondary">Last updated 1 hr ago</small></p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog4} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos iusto rerum architecto a eaque consequuntur impedit!
             Harum earum iste, suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum.</p>
             <p className="card-text"><small className="text-body-secondary">Last updated 20 mins ago</small></p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <Newsletter />
  </>;
}

export default home