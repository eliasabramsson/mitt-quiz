function check(){
	
var f1 =document.quiz.f1.value;
var f2 =document.quiz.f2.value;
var f3 =document.quiz.f3.value;
var f4 =document.quiz.f4.value;
var f5 =document.quiz.f5.value;
var f6 =document.quiz.f6.value;
var f7 =document.quiz.f7.value;
var f8 =document.quiz.f8.value;
var f9 =document.quiz.f9.value;
var f10 =document.quiz.f10.value;
var rätt= 0;


if (f1 == "Slovakien") {
	rätt++;
};

if (f2 == "Norge") {
	rätt++;
};

if (f3 == "Sarajevo") {
	rätt++;
};

if (f4 == "Ukraina") {
	rätt++;
};

if (f5 == "Schweiz") {
	rätt++;
};

if (f6 == "Belgien") {
	rätt++;
};

if (f7 == "2017") {
	rätt++;
};

if (f8 == "championsleague") {
	rätt++;
};

if (f9 == "740") {
	rätt++;
};

if (f10 == "Tyskland") {
	rätt++;
};


	document.getElementById("efterskickat").style.visibility="visible";
	document.getElementById("resultat").innerHTML = "Du fick " + rätt + " rätt!";
}
