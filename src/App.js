import React, { useRef, useEffect } from "react";
import People from "./img/mpumelelo-macu-l_YNobbDYJk-unsplash.jpg";

import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

import "./App.scss";

function App() {
  let container = useRef(null);
  let image = useRef(null);

  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible " } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });

  return (
    <section className='main'>
      <div className='container' ref={el => (container = el)}>
        <>
          <div className='img-container'>
            <img src={People} alt='gallery' ref={el => (image = el)} />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
