function readingTime() {
    const text = document.getElementsByClassName("markdown-body").innerText;
    const wpm = 225;
    const words = text.split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
  }
  readingTime();