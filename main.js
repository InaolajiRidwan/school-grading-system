
// function btn0() {


//     var overAll = document.getElementById('OverAll')
//     var mathssub = parseInt(document.getElementById('math').value);
//     var secondSub = parseInt(document.getElementById('eng').value);
//     var thirdsub = parseInt(document.getElementById('civic').value);
//     var foursub = parseInt(document.getElementById('bio').value);
//     var fivesub = parseInt(document.getElementById('chem').value);
//     var sixsub = parseInt(document.getElementById('phy').value);
//     var sevensub = parseInt(document.getElementById('eco').value);
//     var eightsub = parseInt(document.getElementById('yor').value);
//     var ninesub = parseInt( document.getElementById('anh').value);


//     var lastName = document.getElementById('last');
//     var firstName = document.getElementById('firstN');

//     var OverAllResults = mathssub + secondSub + thirdsub + foursub + fivesub + sixsub + sevensub + eightsub + ninesub;


//     // overAll.innerHTML = lastName.value + ' '+firstName.value + ' ' + ' your total score is ' + ' ' +  OverAllResults;

//     var greaterThan = mathssub>100 || secondSub>100 || thirdsub>100 || foursub>100 || fivesub>100 || sixsub>100 || sevensub>100 || eightsub>100 || ninesub>100;

//     if (greaterThan) {
//         alert('the score shouldnt be more than 100');
//     }
//     else if (!greaterThan && !lastName.value && !firstName.value){
//         alert('all box requires')
//     }
//     else if (!greaterThan && lastName.value && !firstName.value){
//         alert('firstname and form required')
//     }
//     else if (!greaterThan && !lastName.value && firstName.value){
//         alert('lastname and form required')
//     }


//     else {
        
//         overAll.innerHTML = lastName.value + ' '+firstName.value + ' ' + ' your total score is ' + ' ' +  OverAllResults;
//     }

// }

// function btn12() {

//     var Total = document.getElementById('total');
//     var overAll = document.getElementById('OverAll')
//     var mathssub = parseInt(document.getElementById('math').value);
//     var secondSub = parseInt(document.getElementById('eng').value);
//     var thirdsub = parseInt(document.getElementById('civic').value);
//     var foursub = parseInt(document.getElementById('bio').value);
//     var fivesub = parseInt(document.getElementById('chem').value);
//     var sixsub = parseInt(document.getElementById('phy').value);
//     var sevensub = parseInt(document.getElementById('eco').value);
//     var eightsub = parseInt(document.getElementById('yor').value);
//     var ninesub = parseInt( document.getElementById('anh').value);

//     var Real = Math.round((OverAllResults)/9);

//     var lastName = document.getElementById('last');
//     var firstName = document.getElementById('firstN');

//     var OverAllResults = mathssub + secondSub + thirdsub + foursub + fivesub + sixsub + sevensub + eightsub + ninesub;


//     // overAll.innerHTML = lastName.value + ' '+firstName.value + ' ' + ' your total score is ' + ' ' +  OverAllResults;

//     var greaterThan = mathssub>100 || secondSub>100 || thirdsub>100 || foursub>100 || fivesub>100 || sixsub>100 || sevensub>100 || eightsub>100 || ninesub>100;



//     if (greaterThan) {
//         alert('the score shouldnt be more than 100');
//     }
//     else if (!greaterThan && !lastName.value && !firstName.value){
//         alert('all box requires')
//     }
//     else if (!greaterThan && lastName.value && !firstName.value){
//         alert('firstname and form required')
//     }
//     else if (!greaterThan && !lastName.value && firstName.value){
//         alert('lastname and form required')
//     }

//     else {
//         Total.innerHTML = OverAllResults
//     }  
// }

// function btn21() {
//     var Results = document.getElementById('Results');
//     var Total = document.getElementById('total');
//     var overAll = document.getElementById('OverAll')
//     var mathssub = parseInt(document.getElementById('math').value);
//     var secondSub = parseInt(document.getElementById('eng').value);
//     var thirdsub = parseInt(document.getElementById('civic').value);
//     var foursub = parseInt(document.getElementById('bio').value);
//     var fivesub = parseInt(document.getElementById('chem').value);
//     var sixsub = parseInt(document.getElementById('phy').value);
//     var sevensub = parseInt(document.getElementById('eco').value);
//     var eightsub = parseInt(document.getElementById('yor').value);
//     var ninesub = parseInt( document.getElementById('anh').value);

    


//     var lastName = document.getElementById('last');
//     var firstName = document.getElementById('firstN');

//     var OverAllResults = mathssub + secondSub + thirdsub + foursub + fivesub + sixsub + sevensub + eightsub + ninesub;


//     // overAll.innerHTML = lastName.value + ' '+firstName.value + ' ' + ' your total score is ' + ' ' +  OverAllResults;

//     var greaterThan = mathssub>100 || secondSub>100 || thirdsub>100 || foursub>100 || fivesub>100 || sixsub>100 || sevensub>100 || eightsub>100 || ninesub>100;



//     if (greaterThan) {
//         alert('the score shouldnt be more than 100');
//     }
//     else if (!greaterThan && !lastName.value && !firstName.value){
//         alert('all box requires')
//     }
//     else if (!greaterThan && lastName.value && !firstName.value){
//         alert('firstname and form required')
//     }
//     else if (!greaterThan && !lastName.value && firstName.value){
//         alert('lastname and form required')
//     }

//     else {
//         Results.innerHTML = Math.round((OverAllResults)/9) + ' ' + '%';
//     }  
// }


// function btn3() {

//     var Grade = document.getElementById('Grade');
//     var Total = document.getElementById('total');
//     var overAll = document.getElementById('OverAll')
//     var mathssub = parseInt(document.getElementById('math').value);
//     var secondSub = parseInt(document.getElementById('eng').value);
//     var thirdsub = parseInt(document.getElementById('civic').value);
//     var foursub = parseInt(document.getElementById('bio').value);
//     var fivesub = parseInt(document.getElementById('chem').value);
//     var sixsub = parseInt(document.getElementById('phy').value);
//     var sevensub = parseInt(document.getElementById('eco').value);
//     var eightsub = parseInt(document.getElementById('yor').value);
//     var ninesub = parseInt( document.getElementById('anh').value);


//     var lastName = document.getElementById('last');
//     var firstName = document.getElementById('firstN');

//     var OverAllResults = mathssub + secondSub + thirdsub + foursub + fivesub + sixsub + sevensub + eightsub + ninesub;

//     var real = Math.round((OverAllResults)/9);


//     // overAll.innerHTML = lastName.value + ' '+firstName.value + ' ' + ' your total score is ' + ' ' +  OverAllResults;

//     var greaterThan = mathssub>100 || secondSub>100 || thirdsub>100 || foursub>100 || fivesub>100 || sixsub>100 || sevensub>100 || eightsub>100 || ninesub>100;



//     if (greaterThan) {
//         alert('the score shouldnt be more than 100');
//     }
//     else if (!greaterThan && !lastName.value && !firstName.value){
//         alert('all box requires')
//     }
//     else if (!greaterThan && lastName.value && !firstName.value){
//         alert('firstname and form required')
//     }
//     else if (!greaterThan && !lastName.value && firstName.value){
//         alert('lastname and form required')
//     }
    
//     else if (real>80 && real <100){
//         Grade.innerHTML= 'Excellent' + ' ' +Math.round((OverAllResults)/9) + '%'
//     }

//     else if (real>=60 && real<=80 ){
//         Grade.innerHTML= ' VERY GOOD' + ' ' + Math.round((OverAllResults)/9)
//     }
//     else if (real>=50 && real<=60){
//         Grade.innerHTML= 'GOOD' + ' ' + Math.round((OverAllResults)/9) + '%'
//     }
    

//     else if (real>=40 && real<=50){
//         Grade.innerHTML= 'BELOW AVERAGE' + ' ' + + Math.round((OverAllResults)/9) + '%'
//     }

//     else if (real>=30 && real<=40){
//         Grade.innerHTML= 'POOR'  + ' ' + Math.round((OverAllResults)/9) + '%'
//     }
    
//     else if (real>=0 && real<=30){
//         Grade.innerHTML= 'FAIL' + ' ' + Math.round((OverAllResults)/9) + '%'
//     }

// }


function btnTestTotal () {

var mathtest = parseInt(document.getElementById('mathtest').value);
var secondtest = parseInt(document.getElementById('engtest').value);
var thirdtest = parseInt(document.getElementById('civictest').value);
var fourtest = parseInt(document.getElementById('biotest').value);
var fivetest = parseInt(document.getElementById('chemtest').value);
var sixtest = parseInt(document.getElementById('phytest').value);
var seventest = parseInt(document.getElementById('ecotest').value);
var eighttest = parseInt(document.getElementById('yortest').value);
var ninetest = parseInt( document.getElementById('anhtest').value);


var lastName = document.getElementById('last').value;
var firstName = document.getElementById('firstN').value;


var testTotal = mathtest + secondtest + thirdtest + fourtest + fivetest + sixtest + seventest + eighttest + ninetest ;

var testTotalGreaterThan = mathtest>30 || secondtest>30 || thirdtest>30 || fourtest>30 || fivetest>30 || sixtest>30 || seventest>30 || eighttest>30 || ninetest>30;


if (testTotalGreaterThan) {
    alert('Test score should not be greater than 30')
}

else if (lastName && !firstName && !testTotal) {
    alert("firstname and test box need to be fill")
}

else if (!lastName && firstName &&!testTotal) {
    alert('lastname and test box need to be fill')
}
else if (!lastName && !firstName && !testTotal) {
    alert('Usersdetails and test scores need to be fill');
}
else if (lastName && firstName && !testTotal) {
    alert(' test scores need to be fill');
}

else if (!lastName && !firstName && testTotal) {
    alert(' lastname and fristname need to be fill');
}

else {
    document.getElementById('Totaltest').innerHTML =  testTotal;
}

}

function btnTotalExam() {

var mathssub = parseInt(document.getElementById('math').value);
var secondSub = parseInt(document.getElementById('eng').value);
var thirdsub = parseInt(document.getElementById('civic').value);
var foursub = parseInt(document.getElementById('bio').value);
var fivesub = parseInt(document.getElementById('chem').value);
var sixsub = parseInt(document.getElementById('phy').value);
var sevensub = parseInt(document.getElementById('eco').value);
var eightsub = parseInt(document.getElementById('yor').value);
var ninesub = parseInt( document.getElementById('anh').value);

var totalExamScore = mathssub + secondSub + thirdsub + foursub + fivesub + sixsub + sevensub + eightsub + ninesub;

var totalExamScoreGreaterThan = mathssub>70 || secondSub>70 || thirdsub>70 || foursub>70 || fivesub>70 || sixsub>70 || sevensub>70 || eightsub>70 || ninesub>70;

var lastName = document.getElementById('last').value;
var firstName = document.getElementById('firstN').value;


if (totalExamScoreGreaterThan) {
    alert('exam score should not be more than 70 ')
}

else if (lastName && !firstName) {
    alert("firstname is required")
}

else if (!lastName && firstName) {
    alert('lastname is required')
}

else if (lastName && !firstName && !totalExamScore) {
    alert("firstname and exam box need to be fill")
}

else if (!lastName && firstName &&!totalExamScore) {
    alert('lastname and exam box need to be fill')
}

else if (!lastName && !firstName && !totalExamScore) {
     alert('Usersdetails and exam scores need to be fill');
}

else if (lastName && firstName && !totalExamScore) {
    alert('exam scores need to be fill');
}

else if (!lastName && !firstName && totalExamScore) {
    alert('last name and first name need to be fill');
}
else {
    document.getElementById('totalExam').innerHTML = totalExamScore ;
    
}
}

function btnOverAllScore() {

var mathssub = parseInt(document.getElementById('math').value);
var secondSub = parseInt(document.getElementById('eng').value);
var thirdsub = parseInt(document.getElementById('civic').value);
var foursub = parseInt(document.getElementById('bio').value);
var fivesub = parseInt(document.getElementById('chem').value);
var sixsub = parseInt(document.getElementById('phy').value);
var sevensub = parseInt(document.getElementById('eco').value);
var eightsub = parseInt(document.getElementById('yor').value);
var ninesub = parseInt( document.getElementById('anh').value);

var totalExamScore = mathssub + secondSub + thirdsub + foursub + fivesub + sixsub + sevensub + eightsub + ninesub;

var mathtest = parseInt(document.getElementById('mathtest').value);
var secondtest = parseInt(document.getElementById('engtest').value);
var thirdtest = parseInt(document.getElementById('civictest').value);
var fourtest = parseInt(document.getElementById('biotest').value);
var fivetest = parseInt(document.getElementById('chemtest').value);
var sixtest = parseInt(document.getElementById('phytest').value);
var seventest = parseInt(document.getElementById('ecotest').value);
var eighttest = parseInt(document.getElementById('yortest').value);
var ninetest = parseInt( document.getElementById('anhtest').value);

var testTotal = mathtest + secondtest + thirdtest + fourtest + fivetest + sixtest + seventest + eighttest + ninetest ;

var totalExamScoreGreaterThan = mathssub>70 || secondSub>70 || thirdsub>70 || foursub>70 || fivesub>70 || sixsub>70 || sevensub>70 || eightsub>70 || ninesub>70;

var testTotalGreaterThan = mathtest>30 || secondtest>30 || thirdtest>30 || fourtest>30 || fivetest>30 || sixtest>30 || seventest>30 || eighttest>30 || ninetest>30;




    if (!totalExamScore&& !totalExamScoreGreaterThan) {
        alert('Exam scores and Test SCores need to be calculated')
    }
    else {
       document.getElementById('total').innerHTML =  totalExamScore + testTotal + '%'; 
    }
    
    


}

function btnAverageScore() {


    var mathssub = parseInt(document.getElementById('math').value);
    var secondSub = parseInt(document.getElementById('eng').value);
    var thirdsub = parseInt(document.getElementById('civic').value);
    var foursub = parseInt(document.getElementById('bio').value);
    var fivesub = parseInt(document.getElementById('chem').value);
    var sixsub = parseInt(document.getElementById('phy').value);
    var sevensub = parseInt(document.getElementById('eco').value);
    var eightsub = parseInt(document.getElementById('yor').value);
    var ninesub = parseInt( document.getElementById('anh').value);

    var totalExamScore = mathssub + secondSub + thirdsub + foursub + fivesub + sixsub + sevensub + eightsub + ninesub;

    var mathtest = parseInt(document.getElementById('mathtest').value);
    var secondtest = parseInt(document.getElementById('engtest').value);
    var thirdtest = parseInt(document.getElementById('civictest').value);
    var fourtest = parseInt(document.getElementById('biotest').value);
    var fivetest = parseInt(document.getElementById('chemtest').value);
    var sixtest = parseInt(document.getElementById('phytest').value);
    var seventest = parseInt(document.getElementById('ecotest').value);
    var eighttest = parseInt(document.getElementById('yortest').value);
    var ninetest = parseInt( document.getElementById('anhtest').value);

    var testTotal = mathtest + secondtest + thirdtest + fourtest + fivetest + sixtest + seventest + eighttest + ninetest ;
    var averageScore = Math.round((totalExamScore + testTotal)/9);

    if (!testTotal && !totalExamScore && !averageScore) {
        alert('all scores need to be calculated')
    }
    else{
        document.getElementById('Results').innerHTML = Math.round((totalExamScore + testTotal)/9) + '%';
    }

    
}

function btnGrade() {
    var mathssub = parseInt(document.getElementById('math').value);
    var secondSub = parseInt(document.getElementById('eng').value);
    var thirdsub = parseInt(document.getElementById('civic').value);
    var foursub = parseInt(document.getElementById('bio').value);
    var fivesub = parseInt(document.getElementById('chem').value);
    var sixsub = parseInt(document.getElementById('phy').value);
    var sevensub = parseInt(document.getElementById('eco').value);
    var eightsub = parseInt(document.getElementById('yor').value);
    var ninesub = parseInt( document.getElementById('anh').value);

    var totalExamScore = mathssub + secondSub + thirdsub + foursub + fivesub + sixsub + sevensub + eightsub + ninesub;

    var mathtest = parseInt(document.getElementById('mathtest').value);
    var secondtest = parseInt(document.getElementById('engtest').value);
    var thirdtest = parseInt(document.getElementById('civictest').value);
    var fourtest = parseInt(document.getElementById('biotest').value);
    var fivetest = parseInt(document.getElementById('chemtest').value);
    var sixtest = parseInt(document.getElementById('phytest').value);
    var seventest = parseInt(document.getElementById('ecotest').value);
    var eighttest = parseInt(document.getElementById('yortest').value);
    var ninetest = parseInt( document.getElementById('anhtest').value);


    var lastName = document.getElementById('last').value;
    var firstName = document.getElementById('firstN').value;


    var testTotal = mathtest + secondtest + thirdtest + fourtest + fivetest + sixtest + seventest + eighttest + ninetest ;

    var grading = Math.round((totalExamScore + testTotal))/9 

    if (grading>80 && grading<100) {
        document.getElementById('Grade').innerHTML = 'A-Excellent'
    }

    else if (grading>60 && grading<80) {
        document.getElementById('Grade').innerHTML = 'B-VERY GOOD'
    }
    else if (grading>50 && grading<60) {
        document.getElementById('Grade').innerHTML = 'BC-GOOD'
    }
    else if (grading>40 && grading<50) {
        document.getElementById('Grade').innerHTML = 'C-BELOW AVERAGE'
    }

    else if (grading>30 && grading<40) {
        document.getElementById('Grade').innerHTML = 'P-POOR'
    }
    else if (grading>1 && grading<30) {
        document.getElementById('Grade').innerHTML =  'F-VERY POOR'
    }
}


function reset() {

    
    document.getElementById('last').value  = "";
    document.getElementById('firstN').value = "";

    document.getElementById('math').value = "";
    document.getElementById('eng').value = "";
    document.getElementById('civic').value = "";
    document.getElementById('bio').value = "";
    document.getElementById('chem').value = "";
    document.getElementById('phy').value = "";
    document.getElementById('eco').value = "";
    document.getElementById('yor').value = ""
    document.getElementById('anh').value = "";



    document.getElementById('mathtest').value = "";
    document.getElementById('engtest').value = "";
    document.getElementById('civictest').value = "";
    document.getElementById('biotest').value = "";
    document.getElementById('chemtest').value = "";
    document.getElementById('phytest').value = "";
    document.getElementById('ecotest').value = '';
    document.getElementById('yortest').value = "";
    document.getElementById('anhtest').value = "";



    document.getElementById('Totaltest').innerText = "";
    document.getElementById('totalExam').innerText = "";
    document.getElementById('total').innerText = "";
    document.getElementById('Results').innerText = "";
    document.getElementById('Grade').innerText = "";



    document.getElementById('Grade').innerText = "";
};



