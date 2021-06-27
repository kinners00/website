function readingTime() {
    const text = shadowRoot.querySelector("markdown-body").innerText;
    document.getElementById("time").innerText = time;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);

  // document.write(text).innerText = time;
  }
  readingTime();