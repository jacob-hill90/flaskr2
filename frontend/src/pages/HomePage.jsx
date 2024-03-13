function HomePage() {
  return (
    <>
      <div id="intro" className="bg-image shadow-2-strong">
        <div className="container d-flex align-items-left justify-content-left text-left h-100 hector">
          <div className="text-dark" data-mdb-theme="dark">
            <h5 className="mb-3 w">
              Whether you're a novice angler or an experienced pro, Fishtories
              equips you with the essential tools and information to elevate
              your performance every time you venture onto the water. Explore
              the crowd-sourced catch map to discover the latest catches in your
              area, gaining valuable insights from fellow anglers. Join us today
              to enhance your fishing prowess and maximize your potential for a
              successful day on the water.
            </h5>
            <button
              data-mdb-ripple-init
              type="button"
              className="btn btn-primary btn-modified-cta me-3"
            >
              Register Now!
            </button>
          </div>
        </div>
      </div>
      <main className="mt-5">
        <div className="container">
          {/* Section: Content */}
          <section className="dozens">
            <h2>Join Nearly Half a Dozen Other Anglers!</h2>
          </section>
          {/* Section: Content */}

          <hr className="my-5" />

          {/* Section: Content */}
          <section className="text-center">
            <div className="container">
              <div id="homepage-map" className="bg-image"></div>
            </div>
          </section>
          {/* Section: Content */}
          <hr className="my-5" />
        </div>
      </main>
    </>
  );
}

export default HomePage;
