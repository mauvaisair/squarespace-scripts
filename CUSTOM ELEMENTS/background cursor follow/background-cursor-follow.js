document.addEventListener("DOMContentLoaded", function () {
  const sectionIDs = [
   		//HOME
  	"660c8711f1567c5aa5cbe502",
     	//FLASH
    "682eed443c1dc26fcf84f386",
    	//DONE
    "682ef5bef3349455b59228b5",
    "682ef5598c6a605a9a91f597",
        //DEALS
    "682b5d8d047f697dc049e100",
    "67dedfe666735b35481bb1e5",
		//INFO
    "682edc768de2d00a81a3eff2",
    	//BOOK
    "6830320d501f155b46d21ef6",
    	//FOOTER
    "65a9385c16fe993f7eb98aaa",
	"65a9385c16fe993f7eb98aaa"
  ];

  const sections = sectionIDs
    .map(id => document.querySelector(`section[data-section-id="${id}"]`))
    .filter(Boolean);

  // Include the footer
  const footer = document.querySelector("footer");
  if (footer) sections.push(footer);

  sections.forEach(section => {
    const background = section.querySelector(".section-background");
    if (!background) return;

    section.style.perspective = "1000px";
    background.style.transition = "transform 0.1s ease-out";
    background.style.transformOrigin = "center";

    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);

      const moveX = x * 10;
      const moveY = y * 10;

      background.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
});