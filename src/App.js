import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import menu1 from './Images/menu1.jpg'
import menu2 from './Images/menu2.jpg'
import menu3 from './Images/menu3.jpg'
import menu4 from './Images/menu4.jpg'
import pizza1 from './Images/pizza1.jpg'
import pizza2 from './Images/pizza2.jpg'
import pizza3 from './Images/pizza3.jpg'

function App() {
  return (
    <>
      <div className='container-fluid bg-dark text-white'>
        <div className="row">
          <div className="col-lg-12">
            <div className='container'>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                  <a className="navbar-brand" href="#">Pizza House</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                      <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                    </ul>
                    <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-danger" type="submit"><i className='fa fa-search'></i></button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='col-lg-12 mb-5'>
            <div className='row'>
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={pizza1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={pizza2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={pizza3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-12 mb-5'>
            <div className='container'>
              <div className='row'>
                <h2>Our Menu</h2>
                <div className='col-md-3 mb-2'>
                  <div className="card">
                    <img src={menu1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Pizza 1</h5>
                      <p className="text-muted">400.00 đ</p>
                      <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 mb-2'>
                  <div className="card">
                    <img src={menu2} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Pizza 2</h5>
                      <p className="text-muted">450.00 đ</p>
                      <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 mb-2'>
                  <div className="card">
                    <img src={menu3} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Pizza 3</h5>
                      <p className="text-muted">300.00 đ</p>
                      <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 mb-2'>
                  <div className="card">
                    <img src={menu4} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Pizza 4</h5>
                      <p className="text-muted">3750.00 đ</p>
                      <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-12'>
            <div className='container'>
              <div className='row'>
                <h2 className='text-center'>Book your table</h2>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your name" aria-label="Your name" />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your email" aria-label="Your email" />
                  </div>
                  <div className="col">
                    <select id="inputState" className="form-select">
                      <option selected>Select a Service</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <textarea className="form-control" rows="5" placeholder="Please write your comment" aria-label="Please write your comment"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input type='submit' className='btn btn-warning text-white' value="Send your message"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
