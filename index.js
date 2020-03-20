console.log("Testing");


$(".searchBtn").on("click", function(e) {
    e.preventDefault();

  //grab the container and empty it 
  //$("container")

    console.log("inside btn")
    var city = $("#citySearch").val();
    var api_key = "89e3e4876f4f6a9bcd6bf1636a8ebe93";
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    //https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(data) {
      //$(this).JSON.stringify(response)
      
      
      console.log(data);
       
      //make a variable for title

     // $("#cardTitle").text(JSON.stringify(data))
        //ADD inn data . name for response 
      
      //make a var for card 

      // make a var for temp

      // make a var for image 

      


      //add append to page 

      // append title

      //append card

        //append image
        //append temp

    });
});