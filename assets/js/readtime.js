
      const wordsPerMinute = 200; // Average case.
      let result;
      raw = document.getElementsByClassName("markdown-body")
      let textLength = raw.value.split(" ").length; // Split by words
      if(textLength > 0){
        let value = Math.ceil(textLength / wordsPerMinute);
        result = `~${value} min read`;
      }
      document.getElementById("readingTime").innerText = result;

