import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!navRef.current) return;
  //     if (window.scrollY > 0) {
  //       navRef.current.classList.add("navbar-bg");
  //       console.log("scrolled");
  //     } else {
  //       navRef.current.classList.remove("navbar-bg");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: "bottom top",
      },
    });

    navTween.fromTo(
      navRef.current,
      { backgroundColor: "transparent" },
      {
        backgroundColor: "black",
        duration: 1,
        backgroundFilter: "blur(10px)",
        ease: "power1.inOut",
      }
    );
  });

  return (
    <>
      <nav ref={navRef}>
        <div>
          <a href="#home" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" />
            <p>Velvet Pour</p>
          </a>

          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
