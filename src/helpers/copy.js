export const copyTable = () => {
    // document
    //   ?.querySelectorAll("#text :not(span)")
    //   .map((e) => e.textContent)
    //   .join()
    //   .replace(/\s/g, "");
    // document.querySelector('.del > span').remove();
    const elTable = document.querySelector("tbody");
  
    let range, sel;
  
    // Ensure that range and selection are supported by the browsers
    if (document.createRange && window.getSelection) {
      for (var el of document.querySelectorAll('.del > span')) {
        el.remove();
      }
      range = document.createRange();
      sel = window.getSelection();
      // unselect any element in the page
      sel.removeAllRanges();
      console.log(sel);
      try {
        range.selectNodeContents(elTable);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(elTable);
        sel.addRange(range);
      }
  
      document.execCommand("copy");
    }
  
    sel.removeAllRanges();
  
    console.log("Element Copied! Paste it in a file");
  };