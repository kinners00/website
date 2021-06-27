
      const wordsPerMinute = 200; // Average case.
      let result;
      result = document.getElementsByClassName("markdown-body")
      let textLength = ev.value.split(" ").length; // Split by words
      if(textLength > 0){
        let value = Math.ceil(textLength / wordsPerMinute);
        result = `~${value} min read`;
      }
      document.getElementById("readingTime").innerText = result;

