import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const heroRef = useRef(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#hero",
  //         // pin: true,
  //         start: "top top",
  //         end: "+=500",
  //         scrub: 1,
  //         // markers: true,
  //       },
  //     });

  //     tl.to(".right-leaf", {
  //       y: 200,
  //       autoAlpha: 0,
  //       ease: "none",
  //     }).to(
  //       ".left-leaf",
  //       {
  //         y: -200,
  //         autoAlpha: 0,
  //         ease: "none",
  //       },
  //       "<"
  //     );
  //   }, heroRef);

  //   return () => ctx.revert();
  // }, []);

  useGSAP(
    () => {
      const heroSplit = new SplitText(".title", { type: "chars, words" });
      const paraSplit = new SplitText(".subtitle", { type: "lines" });

      heroSplit.chars.forEach((char) => {
        char.classList.add("text-gradient");
      });

      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.05,
      });

      gsap.from(paraSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.7,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            pin: true,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        })
        .to(
          ".right-leaf",
          {
            y: 200,
            // autoAlpha: 0,
            // ease: "circ.inOut",
          },
          0
        )
        .to(
          ".left-leaf",
          {
            y: -200,
            // autoAlpha: 0,
            // ease: "circ.inOut",
          },
          0
        );
    },
    { scope: heroRef }
  );

  return (
    <>
      <section ref={heroRef} id="hero" className="noisy overflow-y-hidden">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br />
                of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative, falir, and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
