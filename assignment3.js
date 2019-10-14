//Question1
// var cities = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
// document.write('<h1>Qualification</h1>');

// for(i=1;i<cities.length;i++){
// document.write("<p>"+i+")" +cities[i]+"</p>");

// }

//Question2
// var std_name =["Sameer","Asad","Mudassir"];
// var scores =[360,450,250];
// var max_score = 500;
// var result;

// for(i=0;i<std_name.length;i++){
// result = (scores[i] / max_score)* 100;
// document.write("<h3>The Score of "+std_name[i]+" is : "+scores[i]+" & percentage is : "+result+"</h3>");
// }


// //Question3
// var colors = ["Green","Red","Blue","Yellow"];
// document.write(colors+"<br>"); 

// //Question3a
// var colorToAddBegin = prompt("Enter The Color You Want To Add In The Beginning");
// colors.splice(0, 0, colorToAddBegin);
// //colors.unshift(colorToAddBegin);
// document.write(colors+"<br>");
 
// //Question3b
// var colorToAddEnd = prompt("Enter The Color You Want To Add In The End");
// colors.push(colorToAddEnd);
// document.write(colors+"<br>");


// //Question3c
// colors.unshift("Black","Green");
// document.write(colors+"<br>");


// //Question3d
// colors.splice(0,1);
// document.write(colors+"<br>");

// //Question3e
// colors.pop();
// document.write(colors+"<br>");


// //Question3f
// var indexToAdd = prompt("Enter The Index At Which You Want To Add");
// var colorToAdd = prompt("Enter The Color Name At Which You Want To Add");
// colors.splice(indexToAdd,0,colorToAdd);
// document.write(colors+"<br>");


// //Question3g
// var indexToDelete = prompt("Enter The Index At Which You Want To Delete");
// var colorToDelete = prompt("Enter The Color  You Want To Delete");
// colors.splice(indexToDelete,--colorToDelete);
// document.write(colors+"<br>");




//Question4
// var cities_name =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("<h3>Cities List</h3>");
// document.write("<p>"+cities_name+"</p>");

// document.write("<h3>Selected Cities List</h3>");
// var sCities = cities_name.slice(2,4);
// document.write("<p>"+sCities+"</p>");



//Question5
// var cities_name =["Karachi","Lahore","Karachi","Islamabad","Quetta","Karachi"];
//An array having duplicate values
// var unique_array = [];
//An array to store values that will be scanned
    // for(var i = 0;i < cities_name.length; i++){
    //     if(unique_array.indexOf(cities_name[i]) == -1){
    //         unique_array.push(cities_name[i])
    //         console.log(unique_array.indexOf(cities_name, "Karachi"));
    //     }
        
    // }

// alert(unique_array);
// console.log(unique_array)

// //Question6
// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];
// var j=1;
// for(i=0;i<3;i++){
// document.write(j + "" +o[j++]+ " choice is "+aCities[i]+"</br>");
// }


// //Question8
// document.write("Counting ");
// for(i=1; i < 16; i++){
// document.write(i+",");
// }


// document.write("<br> Reverse Counting ");
// for(i=10; i > 0; i--){
// document.write(i+",");
// }


// document.write("<br> Even ");
// for(i=0; i < 21; i+=2){
// document.write(i +",");
// }

// document.write("<br> Odd ");
// for(i=1; i < 21; i+=2){
// document.write(i +",");
// }


// document.write("<br> Series ");
// for(i=2; i < 21; i+=2){
// document.write(i +"k,");
// }


// //Question9

// var arr = [24, 53, 78, 91, 12];
// document.write("Array Items: "+arr);
// var largest= [];
// for (i = 0;i<=largest; i++){

// if(arr[i]>largest){
// largest=arr[i];
// }

// }
// document.write("<br>"+largest);


//Question10
// var arr = [20,53,78,4,91,12];
// var b=[];

//     for(let i = 0; i < arr.length; i++) {
//      for(let j = i; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     b.push(arr[i]);
//     }
// document.write(b);

