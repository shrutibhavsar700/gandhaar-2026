import { useEffect, useRef, useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const bodyContainerRef = useRef(null);
  const bodyMainRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
const handleMouseMove = (e) => {
  const ax = -((window.innerWidth / 2 - e.pageX) / 120);

  if (bodyMainRef.current) {
    bodyMainRef.current.style.transform =
      `rotate3D(0,1,0,${ax}deg)`;
    bodyMainRef.current.style.marginLeft = `${ax / 5}px`;
  }



      if (bodyMainRef.current) {
        bodyMainRef.current.style.transform = `rotate3D(0,1,0,${ax}deg)`;
        bodyMainRef.current.style.marginLeft = `${ax / 5}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        /* ---------- DESKTOP BAR ---------- */
        .desktop-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 64px;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .desktop-navbar ul {
          list-style: none;
          display: flex;
          gap: 32px;
          margin: 0;
          padding: 0;
        }

        .desktop-navbar li {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          cursor: pointer;
        }

        /* ---------- REMOTE ---------- */
        main {
  min-height: 100vh;
  display: block;          /* ❗ stop flex centering */
  background: radial-gradient(
    100% 100% at 49.97% 0%,
    #7d8ba1 0%,
    #627591 100%
  );
}


        .body-container {
  width: 226px;
  height: 852px;
  perspective: 1000px;
  position: fixed;
  top: 20px;         
  left: 50%;                 /* ✅ center horizontally */
  transform: translateX(-50%); /* ✅ true centering */
  z-index: 1000;
  transition: top0.4s ease, opacity 0.3s ease;
}


        .body-main-border {
          padding: 1px;
          border-radius: 42px;
          background: linear-gradient(180deg, #d6d7d9, #ffffff, #818183);
          filter: drop-shadow(0px 140px 150px rgba(21, 31, 47, 0.55));
        }

        .body-main {
          height: 100%;
          border-radius: 41px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(180deg, #e9eaec, #959699);
        }

        .container-btns-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 25px;
        }

        .btn-power {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #000;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
        }

        .invis {
          opacity: 0;
        }

        .mic-outer {
          flex: 1;
          height: 8px;
          margin: 0 20px;
          padding: 2px;
          border-radius: 20px;
          background: linear-gradient(180deg, #6d6f72, #fefeff);
        }

        .mic-inner {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: #383838;
        }

        .container-btns-main {
          width: 100%;
          height: 194px;
          padding: 13px;
        }

        .btn-main-outer {
          width: 100%;
          height: 100%;
          border-radius: 1000px;
          background: #202020;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 42px;
        }

        .btn-main-inner {
          width: 100%;
          height: 100%;
          border-radius: 1000px;
          background: linear-gradient(180deg, #191919, #3e3e3e);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }

        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #dfdfdf;
          position: absolute;
        }

        .dot-top { top: 9px; }
        .dot-right { right: 9px; }
        .dot-bottom { bottom: 9px; }
        .dot-left { left: 9px; }

        .container-btns-bottom {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 24px;
        }

        .btns-col-left,
        .btns-col-right {
          width: 78px;
          display: flex;
          flex-direction: column;
        }

        .btn-basic,
        .btn-volume {
          background: #202020;
          border-radius: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          color: #dfdfdf;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .btn-basic {
          height: 78px;
          text-align: center; 
        }

        .btn-volume {
          flex: 1;
          padding: 24px 0;
          flex-direction: column;
          justify-content: space-between;
        }

        .btn-side {
          width: 4px;
          height: 93px;
          background: #d9dadc;
          position: relative;
          left: -1px;
          margin-top: 133px;
        }

        /* ---------- RESPONSIVE ---------- */
        @media (min-width: 769px) {
          .mobile-remote { display: none; }
        }

        @media (max-width: 768px) {
          .desktop-navbar { display: none; }
        }
          /* ---------- MOBILE COLLAPSE BEHAVIOR ---------- */

.mobile-power-toggle {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #000;
  color: #fff;
  border: none;
  font-size: 20px;
  z-index: 1100;
  cursor: pointer;
}

/* Remote hidden */
/* Remote fully hidden */
.mobile-remote.closed .body-container {
  top: 100vh;              /* completely below viewport */
  opacity: 0;
  pointer-events: none;
}

/* Remote visible */
.mobile-remote.open .body-container {
  top: 20px;               /* original visible position */
  opacity: 1;
}



/* Remote visible */
.mobile-remote.open .body-container {
  transform: translateY(0);
  opacity: 1;
}

/* Smooth animation */
.body-container {
  transition: transform 0.35s ease, opacity 0.3s ease;
}

/* Desktop should NOT see toggle */
@media (min-width: 769px) {
  .mobile-power-toggle {
    display: none;
  }
}

      `}</style>

      {/* DESKTOP BAR */}
      <nav className="desktop-navbar">
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>Schedule</li>
          <li>Star Lineup</li>
          <li>About Us</li>
          <li>Themes</li>
          <li>Meet Team</li>
        </ul>
      </nav>
{/* MOBILE TOGGLE BUTTON */}
{!isOpen && (
  <button
    className="mobile-power-toggle"
    onClick={() => setIsOpen(true)}
  >
    ⏻
  </button>
)}


      {/* MOBILE REMOTE */}
      <main className={`mobile-remote ${isOpen ? "open" : "closed"}`}>
        <div className="body-container" ref={bodyContainerRef}>
          <div className="body-main-border">
            <div className="body-main" ref={bodyMainRef}>
              <div className="container-btns-top">
                <div className="btn-power invis"></div>
                <div className="mic-outer"><div className="mic-inner" /></div>
                <button
  className="btn-power"
  onClick={() => setIsOpen(false)}
>
  ⏻
</button>

              </div>

              <div className="container-btns-main">
                <div className="btn-main-outer">
                  <div className="dot dot-top" />
                  <div className="dot dot-right" />
                  <div className="dot dot-bottom" />
                  <div className="dot dot-left" />
                  <div className="btn-main-inner">Home</div>
                </div>
              </div>

              <div className="container-btns-bottom">
                <div className="btns-col-left">
                  <div className="btn-basic">Events</div>
                  <div className="btn-basic">Schedule</div>
                  <div className="btn-basic">About Us</div>
                  <div className="btn-basic">Themes</div>
                </div>

                <div className="btns-col-right">
                  <div className="btn-basic">Star Lineup</div>
                  <div className="btn-volume">
                    <div>＋</div>
                    <div>－</div>
                  </div>
                  <div className="btn-basic">Meet Team</div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-side"></div>
        </div>
      </main>
    </>
  );
}
