$.get("test.md", function(response) {
  var test = response;

  const wordsPerMinute = 200; // Average case.
  let result;

  let textLength = test.value.split(" ").length; // Split by words
  if(textLength > 0){
    let value = Math.ceil(textLength / wordsPerMinute);
    result = `~${value} min read`;
  }
  document.getElementById("readingTime").innerText = result;
});


