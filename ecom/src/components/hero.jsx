import React from 'react'

const Hero = () => {
  return (
    <section className="hero p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 hero-details">
            <div className="row g-4 justify-content-center justify-content-md-between align-items-center">


              <div className="col-6 col-md-4 col-lg-2">
                <div className="card text-center m-auto">
                  <img src="https://img.icons8.com/?size=100&id=n8ZcLFo6skTx&format=png&color=000000" className="card-img-top img-fluid m-auto" alt="Quick Shipping" />
                  <div className="card-body">
                    <p className="card-text mb-0">Quick Shipping</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 col-lg-2">
                <div className="card text-center m-auto">
                  <img src="https://img.icons8.com/?size=100&id=83743&format=png&color=000000" className="card-img-top img-fluid m-auto" alt="High Saves" />
                  <div className="card-body">
                    <p className="card-text mb-0">Money Saving</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 col-lg-2">
                <div className="card text-center m-auto">
                  <img src="https://img.icons8.com/?size=100&id=58590&format=png&color=000000" className="card-img-top img-fluid m-auto" alt="24/7 Support" />
                  <div className="card-body">
                    <p className="card-text mb-0">24/7 Support</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 col-lg-2">
                <div className="card text-center m-auto">
                  <img src="https://img.icons8.com/?size=100&id=649Wi2iCZ71j&format=png&color=000000" className="card-img-top img-fluid m-auto" alt="Online Orders" />
                  <div className="card-body">
                    <p className="card-text mb-0">Online Orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
