import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Products() {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="https://sellerseva.com/wp-content/uploads/2022/11/Ajio-Lofo.png" height="50px" width="100px"/>
    </a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    </nav>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.sliderrevolution.com/wp-content/uploads/2023/06/fashion-website-templates.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/original/theme-image-1732946051145.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-beauty-salon-template-design_23-2150850073.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>

<h2 style={{fontWeight: "bold", color: "black" }}>
  SHOP BY CATEGORY </h2>
<br />
<h2 style={{ fontWeight: "bold", color: "black", textAlign: "center" }}>
  WOMEN </h2>
<br />
<div className="container-fluid text-center">
  <div className="row">
    <div className="col-2 bg-dark-subtle">
      <div className="card">
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20240311/6aM2/65eedf5416fd2c6e6a4c3eae/-473Wx593H-467153975-red-MODEL.jpg"
          className="card-img-top"
          height="215px"
          width="200px"
          alt="Ethnic Wear"
        />
        <div className="card-body">
          <h5 className="card-title">Ethnic Wear</h5>
          <p className="card-text">Starting at Rs:2999</p>
          <a href="#" className="btn btn-primary">
            Shop Now</a>
        </div>
      </div>
    </div>

    <div className="col-2 bg-dark-subtle">
      <div className="card">
        <img
          src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/08/hockerty_business_casual_outfits_for_woman_013a099b_0b8b_43a2_886f_754716f88f1a.jpg"
          className="card-img-top"
          height="215px"
          width="200px"
          alt="Formal Wear"
        />
        <div className="card-body">
          <h5 className="card-title">Formal Wear</h5>
          <p className="card-text">Starting at <br></br>Rs:599</p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </div>

    <div className="col-2 bg-dark-subtle">
      <div className="card">
        <img
          src="https://images.meesho.com/images/products/349558649/kndoa_512.webp"
          className="card-img-top"
          height="215px"
          width="200px"
          alt="Casuals"
        />
        <div className="card-body">
          <h5 className="card-title">Casuals</h5>
          <p className="card-text">Starting at <br></br> Rs:199</p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </div>

    <div className="col-2 bg-dark-subtle">
      <div className="card">
        <img
          src="https://images.squarespace-cdn.com/content/v1/575ef1b97da24fd757acb056/95c05b88-6570-4fbf-b2e2-f4418514be5b/casual+blazer+blake+the+drop+.jpg"
          className="card-img-top"
          height="215px"
          width="200px"
          alt="Blazers"
        />
        <div className="card-body">
          <h5 className="card-title">Blazers</h5>
          <p className="card-text">From only Rs:1999</p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </div>

    <div className="col-2 bg-dark-subtle">
      <div className="card">
        <img
          src="https://images.meesho.com/images/products/439591686/3kcr8_512.webp"
          className="card-img-top"
          height="215px"
          width="200px"
          alt="Jeans"
        />
        <div className="card-body">
          <h5 className="card-title">Jeans</h5>
          <p className="card-text">From only Rs:1199</p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </div>

    <div className="col-2 bg-dark-subtle">
      <div className="card">
        <img
          src="https://img.ltwebstatic.com/images3_pi/2024/03/01/ef/17092657417e2b06f854ebcb773e0b930c3390f7ef_wk_1722512160_thumbnail_720x.jpg"
          className="card-img-top"
          height="215px"
          width="200px"
          alt="Sweaters"
        />
        <div className="card-body">
          <h5 className="card-title">Sweaters</h5>
          <p className="card-text">From only Rs:1499</p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
</div> <br></br>

<div className="container-fluid text-center">
  <div className="row">
    <div className="col-6">
      <div className="card">
        <iframe
          width="550"
          height="450"
          src="https://www.youtube.com/embed/eLzXPqyCt0Q"
          title="Cosmetics advertisement Video (Beauty Product Visualization)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div> 
    <div className="col-3 bg-secondary">
      <div className="card">
        <img
          src="https://media.samyakk.com/pub/media/tagalys/product_images/s/r/sr27400.jpg"
          className="card-img-top"
          height="250px"
          width="250px"
          alt="SAREES"
        />
        <div className="card-body">
          <h5 className="card-title">SAREES</h5>
          <p className="card-text">
            Stylish Collection Sarees
            <br />
            Starting at Rs:1299
          </p>
          <p className="card-text">
            <strong>Min. 65% OFF</strong>
          </p>
          <a href="#" className="btn btn-primary">
            BUY NOW
          </a>
        </div>
      </div>
    </div>

    <div className="col-3 bg-secondary">
      <div className="card">
        <img
          src="https://www.westside.com/cdn/shop/files/300983641TAN_1.jpg?v=1720612392"
          className="card-img-top"
          height="250px"
          width="250px"
          alt="FOOTWEAR"
        />
        <div className="card-body">
          <h5 className="card-title">FOOTWEAR</h5>
          <p className="card-text">
            Trendy Footwear Collection
            <br />
            Starting at Rs:499
          </p>
          <p className="card-text">
            <strong>Min. 40% OFF</strong></p>
            <a href="#" className="btn btn-primary">
            BUY NOW
            </a>
            </div>
            </div>
            </div> 
    <h6><br></br></h6>
    <div className="container-fluid text-center">
      <div className="row">
        {/* Sports Wear Card */}
        <div className="col-3 bg-secondary">
          <div className="card">
            <img
              src="https://hummel.net.in/cdn/shop/products/3430146-2001_3.jpg?v=1708681258&width=533"
              className="card-img-top"
              height="200"
              width="250"
              alt="Sports Wear"/>
            <div className="card-body">
              <h5 className="card-title">SPORTS WEAR</h5>
              <p className="card-text">
                New Sports Collection
                <br />
                Starting at Rs:999
              </p>
              <p className="card-text">
                <strong>Min.50% OFF</strong>
              </p>
              <a href="#" className="btn btn-primary">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>

        {/* Beauty & Makeup Card */}
        <div className="col-3 bg-secondary">
          <div className="card">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-06/240610-beauty-awards-2024-face-makeup-winners-vl-social-74fb90.jpg"
              className="card-img-top"
              height="200"
              width="250"
              alt="Beauty & Makeup"
            />
            <div className="card-body">
              <h5 className="card-title">BEAUTY & MAKEUP</h5>
              <p className="card-text">
                Cosmetic Collection
                <br />
                Starting at Rs:299
              </p>
              <p className="card-text">
                <strong>UPTO 60% OFF</strong>
              </p>
              <a href="#" className="btn btn-primary">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>

        {/* Jewellery Card */}
        <div className="col-3 bg-secondary">
          <div className="card">
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/i/f/d/na-na-na-1-nk-4019-trendy-creation-original-imagzews4za55veh.jpeg?q=90&crop=false"
              className="card-img-top"
              height="200"
              width="250"
              alt="Jewellery"
            />
            <div className="card-body">
              <h5 className="card-title">JEWELLERY</h5>
              <p className="card-text">
                Stylish Jewellery Collection
                <br />
                Starting at Rs:199
              </p>
              <p className="card-text">
                <strong>UPTO 70% OFF</strong>
              </p>
              <a href="#" className="btn btn-primary">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>

        {/* Handbags Card */}
        <div className="col-3 bg-secondary">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xPWYGNAGVOJ3M95uiyGvqnimUoRW9KOUtQ&s"
              className="card-img-top"
              height="200"
              width="250"
              alt="Handbags"
            />
            <div className="card-body">
              <h5 className="card-title">HANDBAGS</h5>
              <p className="card-text">
                Fancy Handbag Collection
                <br />
                Starting at Rs:999
              </p>
              <p className="card-text">
                <strong>40-70% OFF</strong>
              </p>
              <a href="#" className="btn btn-primary">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6><br></br></h6>
    <h2 style={{ textAlign: "center", color: "palevioletred" }}>Get a free gift on your first order</h2>
      </div>
      </div>
      
      <div style={{  textAlign:"center" }}>
      <a href="#">
        <img 
          src="https://www.shutterstock.com/image-vector/ukraine-kropyvnytskyi-april-26-2023-260nw-2293917457.jpg" 
          height="100px" 
          width="300px" 
          alt="Download App Banner" />
      </a>
      <h6 style={{ color:"black"}}>Download App Now</h6>
    </div>
  
    <div className="container-fluid text-center">
        <table style={{ backgroundColor: "silver", height: "200px", width: "1140px" }}>
          <tbody>
            <tr>
              <th style={{ color: "black" }}>ABOUT</th>
              <th style={{ color: "black" }}>HELP</th>
              <th style={{ color: "black" }}>FOLLOW US</th>
              <th style={{ color: "black" }}>CONTACT US</th>
            </tr>
            <tr>
              <td style={{ color: "black" }}>
                Contact Us<br />
                About Us <br />
                Careers<br />
                Terms & Conditions<br />
                Join our team<br />
                We respect your Privacy
              </td>
              <td style={{ color: "black" }}>
                Track your order<br />
                FAQ<br />
                Returns<br />
                Cancellations<br />
                Payments<br />
                Customer Care<br />
                Coupons
              </td>
              <td style={{ color: "black" }}>
                Facebook<br />
                Instagram<br />
                Twitter<br />
                Pinterest
              </td>
              <td style={{ color: "black" }}>
                WhatsApp: 765432897<br />
                Call us: 1800-790-1200<br />
                Email: Ajiostore@gmail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Products;
