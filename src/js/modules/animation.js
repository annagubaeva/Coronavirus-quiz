const animation = (num) => {
  
  // Virus

  const viruses = [],
        container = document.querySelector(".container"),
        virusNum = 2;

  for (let i = 0; i < virusNum; i++) {
  let virus = document.createElement('img');
  virus.src = "/src/assets/img/virus.png";
  virus.classList.add('virus');
  virus.style.top = `${Math.floor(Math.random() * 90)}%`;
  virus.style.left = `${Math.floor(Math.random() * 90)}%`;
  viruses.push(virus);
  container.append(virus);
  }

  // Keyframes

  viruses.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -10 : 10),
      y: Math.random() * 12
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
    );
  });

  // Emoji

  const emojiState = (num = 0) => {
    const emoji = document.querySelector('.emoji');
    
    if (num < 6) {
      emoji.src = "/src/assets/img/wink_emoji.gif";
    } else if ( num >= 6 && num < 12) {
      emoji.src = "/src/assets/img/neutral-emoji.gif";
    } else if (num >= 12 && num < 20) {
      emoji.src = "/src/assets/img/sad-emoji.gif";
    } else {
      emoji.src = "/src/assets/img/dead.png";
    }

    emoji.classList.add('emoji');
    document.querySelector(".container").append(emoji);
    console.log(num);
  };
  emojiState(num);
};

export default animation;
// export {emojiState, virusNum};