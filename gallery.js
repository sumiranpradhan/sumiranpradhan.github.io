var famp = document.getElementById("famp");
var mov = document.getElementById("mov");
famp.style.display = "none";
var movie_button = document.getElementById("movb11");
var fav_button = document.getElementById("fampb11");

movie_button.addEventListener("click",function(){
 	famp.style.display = "none";
	mov.style.display = "block";
});

fav_button.addEventListener("click",function(){
	famp.style.display = "block";
	mov.style.display = "none";
});

function signs() {
	var start = 1901, birthyear = document.zodiac.year.value, date=document.zodiac.date.value, month=document.zodiac.month.selectedIndex;

	with (document.zodiac.sign){
		if (month == 1 && date >=20 || month == 2 && date <=18) {value = "Aquarius";}
		if (month == 1 && date > 31) {value = "Huh?";}
		if (month == 2 && date >=19 || month == 3 && date <=20) {value = "Pisces";}
		if (month == 2 && date > 29) {value = "Say what?";}
		if (month == 3 && date >=21 || month == 4 && date <=19) {value = "Aries";}
		if (month == 3 && date > 31) {value = "OK.  Whatever.";}
		if (month == 4 && date >=20 || month == 5 && date <=20) {value = "Taurus";}
		if (month == 4 && date > 30) {value = "I'm soooo sorry!";}
		if (month == 5 && date >=21 || month == 6 && date <=21) {value = "Gemini";}
		if (month == 5 && date > 31) {value = "Umm ... no.";}
		if (month == 6 && date >=22 || month == 7 && date <=22) {value = "Cancer";}
		if (month == 6 && date > 30) {value = "Sorry.";}
		if (month == 7 && date >=23 || month == 8 && date <=22) {value = "Leo";}
		if (month == 7 && date > 31) {value = "Excuse me?";}
		if (month == 8 && date >=23 || month == 9 && date <=22) {value = "Virgo";}
		if (month == 8 && date > 31) {value = "Yeah. Right.";}
		if (month == 9 && date >=23 || month == 10 && date <=22) {value = "Libra";}
		if (month == 9 && date > 30) {value = "Try Again.";}
		if (month == 10 && date >=23 || month == 11 && date <=21) {value = "Scorpio";}
		if (month == 10 && date > 31) {value = "Forget it!";}
		if (month == 11 && date >=22 || month == 12 && date <=21) {value = "Sagittarius";}
		if (month == 11 && date > 30) {value = "Invalid Date";}
		if (month == 12 && date >=22 || month == 1 && date <=19) {value = "Capricorn";}
		if (month == 12 && date > 31) {value = "No way!";}
	}
	x = (start - birthyear) % 12
	with (document.zodiac.csign){
		if (x == 1 || x == -11) {value = "Rat";}
		if (x == 0) {value = "Ox";}
		if (x == 11 || x == -1) {value = "Tiger";}
		if (x == 10 || x == -2) {value = "Rabbit/Cat";}
		if (x == 9 || x == -3)  {value = "Dragon";}
		if (x == 8 || x == -4)  {value ="Snake";}
		if (x == 7 || x == -5)  {value = "Horse";}
		if (x == 6 || x == -6)  {value = "Sheep";}
		if (x == 5 || x == -7)  {value = "Monkey";}
		if (x == 4 || x == -8)  {value = "Cock/Phoenix";}
		if (x == 3 || x == -9)  {value = "Dog";}
		if (x == 2 || x == -10)  {value = "Boar";}

	}
}

var zodcal = document.getElementById("zodcal");
zodcal.style.display = "none";

var zodcal_button = document.getElementById("zodcal_button");

zodcal_button.addEventListener("click",function(){
	zodcal.style.display = "block";
});

var zodcal_hide = document.getElementById("zodcal_hide");
zodcal_hide.addEventListener("click",function(){
	zodcal.style.display = "none";
});

function ClearForm(form){

    form.weight.value = "";
    form.height.value = "";
    form.bmi.value = "";
    form.my_comment.value = "";

}

function bmi(weight, height) {

          bmindx=weight/eval(height*height);
          return bmindx;
}

function checkform(form) {

       if (form.weight.value==null||form.weight.value.length==0 || form.height.value==null||form.height.value.length==0){
            alert("\nPlease complete the form first");
            return false;
       }

       else if (parseFloat(form.height.value) <= 0||
                parseFloat(form.height.value) >=500||
                parseFloat(form.weight.value) <= 0||
                parseFloat(form.weight.value) >=500){
                alert("\nReally know what you're doing? \nPlease enter values again. \nWeight in kilos and \nheight in cm");
                ClearForm(form);
                return false;
       }
       return true;

}

function computeform(form) {

       if (checkform(form)) {

       yourbmi=Math.round(bmi(form.weight.value, form.height.value/100));
       form.bmi.value=yourbmi;

       if (yourbmi >40) {
          form.my_comment.value="You are grossly obese, consult your physician!";
       }

       else if (yourbmi >30 && yourbmi <=40) {
          form.my_comment.value="Umm... You are obese, want some liposuction?";
       }

       else if (yourbmi >27 && yourbmi <=30) {
          form.my_comment.value="You are very fat, do something before it's too late";
       }

       else if (yourbmi >22 && yourbmi <=27) {
          form.my_comment.value="You are fat, need dieting and exercise";
       }

       else if (yourbmi >=21 && yourbmi <=22) {
          form.my_comment.value="I envy you. Keep it up!!";
       }

       else if (yourbmi >=18 && yourbmi <21) {
          form.my_comment.value="You are thin, eat more.";
       }

       else if (yourbmi >=16 && yourbmi <18) {
          form.my_comment.value="You are starving. Go Find some food!";
       }

       else if (yourbmi <16) {
          form.my_comment.value="You're grossly undernourished, need hospitalization ";
       }

       }
       return;
}


var calbmi = document.getElementById("calbmi");
calbmi.style.display = "none";

var calbmi_button = document.getElementById("calbmi_button");

calbmi_button.addEventListener("click",function(){
	calbmi.style.display = "block";
});

var calbmi_hide = document.getElementById("calbmi_hide");
calbmi_hide.addEventListener("click",function(){
	calbmi.style.display = "none";
});

var rand_button = document.getElementById("ranb11");

rand_button.addEventListener("click",function(){
	for(var i = 0;i<5;i++)
	{
		var a = 'd' + Math.floor(Math.random()*9 + 1);
		var b = 'd' + Math.floor(Math.random()*9 + 1);
		var a1 = document.getElementById(a);
		var b1 = document.getElementById(b);
		var x1 = a1.innerHTML;
		var y1 = b1.innerHTML;
		a1.innerHTML = y1;
		b1.innerHTML = x1;
		var c = 'd' + Math.floor(Math.random()*15 + 10);
		var d = 'd' + Math.floor(Math.random()*15 + 10);
		var c1 = document.getElementById(c);
		var d1 = document.getElementById(d);
		var x2 = c1.innerHTML;
		var y2 = d1.innerHTML;
		c1.innerHTML = y2;
		d1.innerHTML = x2;
	}
});



function zodiac(){
  var birthmonth = document.getElementById("month").value;
   var birthday = document.getElementById("day").value;
 var result = " Unknown because you didn't put a valid date.";


if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
    ){
        result = ("Aquarius");

    }

    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
       result = ("Pisces");

    }
   if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
       result = ("Aries");
   }

    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        result = ("Taurus");

    }

    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
     ){
        result = ("Gemini");

    }

    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        result = ("Cancer");

    }
    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        result = ("Leo");

    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        result = ("Virgo");
    }
    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Libra");
    }
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
       result = ("Scorpio");
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        result = ("Sagittarius");
    }

  if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){

        result = ("Capricorn");
    }else if (birthmonth>12||birthday>31){
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= result;
}
