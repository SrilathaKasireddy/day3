//resume created using JSON array of objects
let resume =[
  {"name":"srilatha kasireddy"},
  {"email":"kasireddysrilatha17@gmail.com"},
   {"contactno":"9121028620"},
   {"address":"hyderabad"},
   {"qualifications" : "bcom"},
   { "cgpa":"9.5"},
    {"institutename":"st.josephs degree & pg college"},
    {"courseyear":"2017-2020"},
    {"experience" : "10 months"},
   {"company" :"ags health"},
   {"jobtitle":"process associate"},
   {"certifications" : "javascript,html ,css,reactjs,mongodb"},
  {"hobbies":"watchingmovies,cooking & listening to music"}
];
console.log(resume[0].name);
//for loop:
for(let i =0;i<resume.length;i++){
  console.log(resume[i]);
}
//forin loop:
for(hobbies in resume){ 
}
console.log(resume[12].hobbies);
//for of loop:
for(let elements of resume){
  console.log(elements);

}
//for Each loop:
resume.forEach(element => {console.log(element)
  
});

/* window, screen & document in javascript:

*window is the execution context and global object for that context's JavaScript.The window object represents an open window in a browser.

*document contains the DOM, initialized by parsing HTML.

*screen describes the physical display of a  full screen*/


