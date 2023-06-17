import React, { useEffect } from 'react';
const HoverEffect = () => {

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const handleMouseOver = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const element = document.querySelector("h1");
    element.addEventListener("mouseover", handleMouseOver);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, []);

  return (
   <h1 data-value="Ayaan Sharif">Ayaan Sharif</h1>

  );
};
export default HoverEffect;
