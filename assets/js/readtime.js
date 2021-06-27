function readingTime() {
    setTimeout(function(){ alert("After 5 seconds!"); }, 5000);
    const text = document.getElementsByClassName("markdown-body").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
  // document.write(text).innerText = time;
  }
  readingTime();