import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, img: "assest/img/portfolio/cabin.png", target: "#portfolioModal1" },
    { id: 2, img: "assest/img/portfolio/cake.png", target: "#portfolioModal2" },
    { id: 3, img: "assest/img/portfolio/circus.png", target: "#portfolioModal3" },
    { id: 4, img: "assest/img/portfolio/game.png", target: "#portfolioModal4" },
    { id: 5, img: "assest/img/portfolio/safe.png", target: "#portfolioModal5" },
    { id: 6, img: "assest/img/portfolio/submarine.png", target: "#portfolioModal6" },
  ];

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* Portfolio Section Heading */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        {/* Icon Divider */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        {/* Portfolio Grid Items */}
        <div className="row justify-content-center">
          {portfolioItems.map((item) => (
            <div className="col-md-6 col-lg-4 mb-5" key={item.id}>
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={item.target}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={item.img} alt="..." />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;