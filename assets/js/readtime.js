let test = jQuery.get('https://raw.githubusercontent.com/kinners00/website/development/test.md', function(data) {
});

      const wordsPerMinute = 200; // Average case.
      let result;
  
      let textLength = test.value.split(" ").length; // Split by words
      if(textLength > 0){
        let value = Math.ceil(textLength / wordsPerMinute);
        result = `~${value} min read`;
      }
      document.getElementById("readingTime").innerText = result;

