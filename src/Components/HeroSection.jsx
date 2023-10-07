export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vishal Saini</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I'm a passionate Full-stack Web Developer
            <br /> With a strong foundation in both front-end and back-end development
          </p>
        </div>
        <a href="https://drive.google.com/file/d/15X1I1eDnPq6c5uDMjVWQDNPzzDQugRTe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
  RESUME
</a>

      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
