let phonebook=[];
let ind = -1;


function addData(){
    let phonedetails = {
        firstname : document.getElementById("firstname").value,
        lastname  : document.getElementById("lastname").value,
        number   : document.getElementById("number").value
    }

    if(ind<0){
        phonebook.push(phonedetails);
    }
    else{
         phonebook[ind]=phonedetails
    }
    ind = -1
   
    display()
}

function display (){
    let showitem= phonebook.map(function(value,index){
return `

<tr>
<td>${value.firstname}</td>
<td>${value.lastname}</td>
<td>${value.number}</td>
<td><button onclick="edit(${index})">edit</button></td>
<td><button onclick="deletelist(${index})">delete</button></td>

</tr> ` 
    });

    document.getElementById("table").innerHTML = showitem.join(' ');
}
display()


// delete phone book data in the list 

function deletelist(index){

    phonebook.splice(index,1)
    display()
};

// button for clear all details in phonebook


function clearAll(){
    phonebook.splice(0)
    display()
}


//edit button in details list

function edit(index){
document.getElementById("firstname").value = phonebook[index].firstname;
document.getElementById("lastname").value =phonebook[index].lastname ;

document.getElementById("number").value=phonebook[index].number;
    // phonedetails= phonebook[index]

    ind = index;


}
