<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Theory</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
      <script src="js/theory.js"></script>
   </head>
   <body>
      <div class="container">
         <br>
         <br>
         <form class="form">
           <div class="form-group row">
             <label class="col-4" for="inputTheory">Enter number of assigned theory Lectures  </label>
             <input type="number" class="form-control col-8" id="inputTheoryAssn" placeholder="">
          </div>
          <div class="form-group row">
             <label class="col-4" for="inputTheoryCond">Enter number of conducted theory Lectures  </label>
             <input type="number" class="form-control col-8" id="inputTheoryCond" placeholder="">
          </div>
           <div class="form-group mx-auto" style="width:200px">
             <input type ="button" id="submit" class="btn btn-primary btn-lg mx-auto" value="Submit" onclick="generate()">
           </div>
         </form>
         <div id="lec" class="container">

         </div>
      </div>


      <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
   </body>
</html>
