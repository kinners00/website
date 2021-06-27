function readingTime() {
    const text = container.shadowRoot.querySelector("markdown-body").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
  // document.write(text).innerText = time;
  }
  readingTime();