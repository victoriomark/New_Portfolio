const About_ = () => {
  return (
    <>
      <h1 id="About_h1">About</h1>
      <section className="about">
      <picture id="aboutCover">
      <img src={'public/image/cover.png'} width={400} alt="cover" />
        </picture>
        <div className="contentAbout">
          <h5>
            Hello! I'm Erwin Victorio, and I'm passionate about crafting
            exceptional web experiences. As a web developer, I've dedicated
            myself to the art of creating stunning and functional websites that
            not only meet my clients' needs but also exceed their expectations.
          </h5>
        </div>
      </section>
    </>
  );
};
export default About_;
