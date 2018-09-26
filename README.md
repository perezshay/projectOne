# projectOne
project 1 for web programming

@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i');

/* Body Style */
body {
	background-image:url(https://wallpaper-house.com/data/out/10/wallpaper2you_418299.jpg);
	background-size:auto;
	font-family: 'Ubuntu', sans-serif;
	font-color: #000;
    font-size:11px;
    line-height:1.2;
    font-weight:500;
    text-align:justify;
    margin:500;
}

/* Special Text decorations */
a {
    color:#432747
}

    a:hover {
        color:#522C4F
    }
    
        p a {
            border-bottom:1px solid {color:#522C4F};
        }

img {
    border:none;
    text-decoration:none;
    border-radius:3px;
}

b, strong {
    font-family: 'Playfair Display', serif;
    color:#432747;
}

i, em {
    font-family: 'Playfair Display', serif;
    color:#432747;
}

u {
    border-bottom:1px solid;
}

blockquote {
    padding:0px 5px 0px 20px;
    border-left:1px solid #432747;
    margin-left:5px;
    width:360px;
}

    blockquote img {
        max-width:360px;
    }

ul {
    padding-left:15px;
}

    ul li {
        list-style-type:none;
    }
    
        ul li:before {
          content: "— ";
          text-indent: -5px;
        }

/* After Submit */
#hide{
    visibility: hidden;
}

/* Main */
.main {
	background: #fff;
	padding: 30em;
	width: 975px;
	margin:auto;
    z-index:5;
    bottom:30px;
    right:0px;
    width:900px;
    height:550px;
    overflow:hidden;
    overflow-x:hidden;
    overflow-y:auto;
    background-color:transparent;
    box-sizing:border-box;
    padding:40px 40px 20px 40px;
}

/* Container */
.container {
    position:fixed;
    margin:50px auto;
    width:800px;
    height:450px;
    background-color: #fff;
    overflow:scroll;
    border-radius:5px;
}

/* Entries */
.entry {
    width:600px;
    height:450;
    padding:20px;
    overflow:auto;
    margin-bottom:100px;
    margin-bottom:100px;
    background-color:#fff;
}

    .entry img {
        max-width:100%;
    }

/* Header Style */
.header {
	padding: 10px;
	text-align: left;
    background-image:url('https://78.media.tumblr.com/ccab08055482b163a22b5a7bc5e77829/tumblr_pf47f4FuPh1xngxspo1_1280.png');
    background-repeat:no-repeat;
    background-size:cover;
    font-size: 20px;
}

h1 {
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    margin:0px;
    font-weight:bold;
    color:#432747;
}

h2 {
    font-family: 'Playfair Display', serif;
    font-weight:normal;
    font-size: 25px;
    color:#432747;
}

h3 {
    font-family: 'Playfair Display', serif;
    font-weight:normal;
    font-size: 20px;
    color:#432747;
}


    h2 b, b h2, h2 i, i h2 {
        color:#522C4F;
    }

.headertitle {
    margin-top:30px;
    margin-left:350px;
    width:250px;
    height:100px;
    text-align:center;
}
    
.headertitle h2 {
        font-family:calibri;
        color:#522C4F;
        letter-spacing:1px;
        text-transform:uppercase;
        font-size:30px;
        line-height:25px;
        font-weight:normal;
        text-shadow: -1px 1px 0px #000;
        color:#432747;
    }
    
.headertitle h3 {
        margin-bottom:1px;
        font-family: "vincentia";
        font-size:2px;
        line-height:10px;
        font-weight:normal;
    }
    
    // Quiz Greeting
var Greeting = "Hello! Welcome to my quiz!";
document.querySelector(".Greeting").innerHTML = Greeting;

// Function for scoring
function getScore() {
	// These variables search the HTML document by their id, name, and value
	var question0 = document.quiz.question0.value;
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var correctAnswer = 0;

// Concatenate Correct Answers. Use "==" because one "=" is used to define a variable. Each correct answer is labeled by A, B, or C responses
if (question0 == "A") {
	correctAnswer++;
}
if (question1 == "B") {
	correctAnswer++;
}

if (question2 == "A") {
	correctAnswer++;
}

if (question3 == "B") {
	correctAnswer++;
}

if (question4 == "B") {
	correctAnswer++;
}

if (question5 == "A") {
	correctAnswer++;
}

if (question6 == "B") {
	correctAnswer++;
}

if (question7 == "A") {
	correctAnswer++;
}

if (question8 == "B") {
	correctAnswer++;
}

if (question9 == "C") {
	correctAnswer++;
}

// Using getElementById to hide final results. Pushed to HTML by onclick (found in the HTML) 
document.getElementById("hide").style.visibility = "visible";

// Using getElementById here will show the person's score out of correct answers
document.getElementById("numCorrect").innerHTML = "Your score is" + " " + correctAnswer + " " + "out of 10 correct!";
}

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Project One</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
	<div class="main">
	<div class="container">
	<div class="header">
		<div class="headertitle">
			<h2>Fast Facts<br> Trivia Time!</h2>
			<h3>A Quiz Presented By: Shay Perez</h3>
		</div>
	</div>

	<div class="entry">
	<h2><b><span class="Greeting"></span></b></h2>
  <form id="quiz" name="quiz">
<ul>
  	<li>
    <h3>Which is the capital of Rhode Island?</h3>
    <input id="mc" type="radio" name="question0" value="A">Providence<br>
    <input id="mc" type="radio" name="question0" value="B">Boston<br>
    <input id="mc" type="radio" name="question0" value="C">Detroit<br>
  </li>
  <li>
    <h3>Who was the seventh US President?</h3>
    <input id="mc" type="radio" name="question1" value="A">John Adams<br>
    <input id="mc" type="radio" name="question1" value="B">Andrew Jackson<br>
    <input id="mc" type="radio" name="question1" value="C">Calvin Klein<br>
  </li>
  <li>
	<h3>Where is Spain located?</h3>	
    <input id="mc" type="radio" name="question2" value="A">Europe<br>
    <input id="mc" type="radio" name="question2" value="B">It is an Island<br>
    <input id="mc" type="radio" name="question2" value="C">South America<br>
  </li>
    <li>
    <h3>Which company produced the movie Toy Story?</h3>
    <input id="mc" type="radio" name="question3" value="A">Disney<br>
    <input id="mc" type="radio" name="question3" value="B">Disney's Pixar<br>
    <input id="mc" type="radio" name="question3" value="C">Universal Studios<br>
  </li>
  <li>
    <h3>What is the most recent published novel by Stephen King</h3>
    <input id="mc" type="radio" name="question4" value="A">Sleeping Beauties<br>
    <input id="mc" type="radio" name="question4" value="B">The Outsider<br>
    <input id="mc" type="radio" name="question4" value="C">Elevation<br>
  </li>
  <li>
	<h3>Which popular chef hosts MasterChef on FOX?</h3>	
    <input id="mc" type="radio" name="question5" value="A">Gordan Ramsay<br>
    <input id="mc" type="radio" name="question5" value="B">Emril Lagasse<br>
    <input id="mc" type="radio" name="question5" value="C">Bobby Flay<br>
  </li>
    <li>
    <h3>Which city is the most populated in the world?</h3>
    <input id="mc" type="radio" name="question6" value="A">Orlando<br>
    <input id="mc" type="radio" name="question6" value="B">Shanghai<br>
    <input id="mc" type="radio" name="question6" value="C">Mexico City<br>
  </li>
  <li>
    <h3>In which galaxy does Earth reside?</h3>
    <input id="mc" type="radio" name="question7" value="A">Milky Way<br>
    <input id="mc" type="radio" name="question7" value="B">Sombrero<br>
    <input id="mc" type="radio" name="question7" value="C">Sunflower<br>
  </li>
  <li>
	<h3>When was The Illiad written?</h3>	
    <input id="mc" type="radio" name="question8" value="A">18th Century<br>
    <input id="mc" type="radio" name="question8" value="B">8th Century<br>
    <input id="mc" type="radio" name="question8" value="C">We don't know<br>
  </li>
    <li>
	<h3>How many weeks are in one year?</h3>	
    <input id="mc" type="radio" name="question9" value="A">50<br>
    <input id="mc" type="radio" name="question9" value="B">365<br>
    <input id="mc" type="radio" name="question9" value="C">52<br>
  </li>
</ul>

<input id="button" type="button" value="What Did You Get?" onclick="getScore();">
</form>

<div id="hide">
<blockquote>
  <p id="numCorrect"></p>
</blockquote>
</div>

</div>
</div>
</div>
</div>
<script src="js/main.js"></script>
</body>
</html>
