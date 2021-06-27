function readingTime() {
    const text = document.getElementsByClassName("markdown-body"); document.getElementById("bolt-quickstart").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
  }
  readingTime();