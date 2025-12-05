import { useEffect } from "react";
import "../style/Theme.css"; // <-- important

export default function Theme() {
  useEffect(() => {
    const tv = () => {
      var cnv = document.getElementById("static"),
        c = cnv.getContext("2d"),
        cw = cnv.offsetWidth,
        ch = cnv.offsetHeight,
        staticScrn = c.createImageData(cw, ch),
        staticFPS = 30,
        isStatic = false,
        staticTO,
        gifData = [
          {
            file: "https://assets.codepen.io/416221/willie.gif",
            desc: "Steamboat Willie (Mickey Mouse) steering a ship",
          },
          {
            file: "https://assets.codepen.io/416221/skeletons.gif",
            desc: "Spooky scary skeletons sending shivers down your spine",
          },
          {
            file: "https://assets.codepen.io/416221/kingkong.gif",
            desc: "King Kong waving on Empire State Building",
          },
          {
            file: "https://assets.codepen.io/416221/tracks.gif",
            desc: "Looking at train tracks from behind a train",
          },
          {
            file: "https://assets.codepen.io/416221/nuke.gif",
            desc: "Nuclear explosion at sea",
          },
        ],
        gifs = [],
        channel = 0;

      for (let g in gifData) {
        gifs.push(new Image());
        gifs[g].src = gifData[g].file;
        gifs[g].alt = gifData[g].desc;
      }

      var runStatic = function () {
        isStatic = true;
        c.clearRect(0, 0, cw, ch);

        for (var i = 0; i < staticScrn.data.length; i += 4) {
          let shade = 127 + Math.round(Math.random() * 128);
          staticScrn.data[i] = shade;
          staticScrn.data[i + 1] = shade;
          staticScrn.data[i + 2] = shade;
          staticScrn.data[i + 3] = 255;
        }
        c.putImageData(staticScrn, 0, 0);

        staticTO = setTimeout(runStatic, 1000 / staticFPS);
      };
      runStatic();

      var changeChannel = function () {
        var displayed = document.getElementById("displayed");

        ++channel;
        if (channel > gifData.length) channel = 1;

        //this.classList.remove("pristine");
        this.style.transform = `rotate(${
          (channel * 360) / (gifData.length + 1)
        }deg)`;

        cnv.classList.remove("hide");
        displayed.classList.add("hide");

        if (!isStatic) runStatic();

        setTimeout(function () {
          cnv.classList.add("hide");
          displayed.classList.remove("hide");

          displayed.src = gifs[channel - 1].src;
          displayed.alt = gifs[channel - 1].alt;

          isStatic = false;
          clearTimeout(staticTO);
        }, 300);
      };

      document
        .getElementById("channel")
        .addEventListener("click", changeChannel);
    };

    tv();
  }, []);

  return (
    <main>
      <div className="tv-body">
        <div className="screen-container">
          <canvas id="static" width="380" height="280"></canvas>
          <img id="displayed" src="" alt="Nothing" width="380" height="280" />
          <div className="screen">
            <div className="screen-frame"></div>
            <div className="screen-inset"></div>
          </div>
        </div>

        <div className="logo-badge">
          <div className="logo-text">Bush</div>
        </div>

        <div className="controls">
          <div className="panel">
            <div className="dial">
              <button id="channel" className="dial-label pristine">
                THEME
              </button>
            </div>
          </div>

          <div className="vents">
            <div className="vent"></div>
            <div className="vent"></div>
            <div className="vent"></div>
            <div className="vent"></div>
            <div className="vent"></div>
            <div className="vent"></div>
          </div>
        </div>
      </div>

      <div className="legs">
        <div className="leg"></div>
        <div className="leg"></div>
      </div>
    </main>
  );
}
