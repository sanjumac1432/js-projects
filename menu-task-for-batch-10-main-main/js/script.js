const menu=[{
    image:"image/Section3 (1).png",
    title: "Financial's need for strategic advisor",
    subHeading: "security, consulting"
},
{
    image:"image/Section3 (2).png",
    title: "24×7 system monitoring and alert response",
    subHeading: "software,support"
},
{
    image:"image/Section3 (3).png",
    title: "nonprofit organization utilized security",
    subHeading: "management, cloud"
},
{
    image:"image/Section3 (4).png",
    title: "powerful iT upgrade aligns with your objectives",
    subHeading: "digital, HR"
},
{
    image:"image/Section3 (5).png",
    title: "the best IT practices in cloud and security",
    subHeading: "cunsulting, management"
},
{
    image:"image/Section3 (6).png",
    title: "helping companies with healthcare industry",
    subHeading: "software, security"
},

]
let show= menu.map(function(value){
return `<div class="col-6 col-md-4 g-4">
<img class="w-100" src="${value.image}" alt="Success Story Image">
<div class="textpart1 p-3 p-lg-4">
<h2 class="fs-4 darkB fw-bold text-capitalize">${value.title}</h2>
<small><h2 class="fsP green text-capitalize mb-0">${value.subHeading}</h2></small>
</div>
</div>`

});

document.getElementById("success").innerHTML=show.join("");