import React from 'react'
import HomeSection from './HomeSection'
import TopDeals from './TopDeals'

const Home = () => {
  return (
    <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="http://www.aamobilestore.com/uploads/images/b0132423f4db4b5425a74c22ab2045c2.jpg" class="d-block w-100" alt="mobile" height="650px"/>
    </div>
    <div class="carousel-item">
    <img src="https://i02.appmifile.com/889_operator_in/27/08/2022/432d6c410f24c9c4e9260aa38fb2d5ea.jpg" class="d-block w-100" alt="mobile" height="650px"/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/originals/07/b4/27/07b427c6bfabfb5d663efaaf05392b0c.png" class="d-block w-100" alt="mobile" height="650px"/>
    </div>
    
    <div class="carousel-item">
    <img src="https://i02.appmifile.com/889_operator_in/27/08/2022/432d6c410f24c9c4e9260aa38fb2d5ea.jpg" class="d-block w-100" alt="mobile" height="650px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<HomeSection/>

<div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          
          <hr />
        </div>
      </div>
    </div>

<div className="container">
<img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/RealmeFanFest/contingencyslotCATPAGE/D45706746_INWLD_realme_narzo_family_Mob_Hero_1242x450-2.jpg" class=" w-100" alt="mobile" height="500px"/>
    </div>

<br/>
<br/>
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 class="text-center">Top Deals</h1>
          <hr />
        </div>
      </div>
    </div>
<TopDeals/>
</div>
  )
}

export default Home