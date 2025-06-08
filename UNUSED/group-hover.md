


<!----------------------- BOOK NOW BUTTON GROUP SCALE HOVER -- disregard
<script>
document.addEventListener("DOMContentLoaded", function () {
  const triggerBlock = document.querySelector("#block-458ff246a36c3bbb4ae0");
  const targetBlocks = [
    document.querySelector("#block-2f36e7435d0a4fe88f8f"),
    document.querySelector("#block-458ff246a36c3bbb4ae0"),
    document.querySelector("#block-7a29a80c57bdf99726e9"),
    document.querySelector("#block-yui_3_17_2_1_1747696790322_6871")
  ];

  if (triggerBlock && targetBlocks.every(Boolean)) {
    targetBlocks.forEach(block => {
      block.style.transition = "transform 0.3s ease";
      block.style.display = "inline-block";
    });

    triggerBlock.addEventListener("mouseenter", () => {
      targetBlocks.forEach(block => block.style.transform = "scale(1.05)");
    });

    triggerBlock.addEventListener("mouseleave", () => {
      targetBlocks.forEach(block => block.style.transform = "scale(1)");
    });
  }
});
</script>
------------------------->