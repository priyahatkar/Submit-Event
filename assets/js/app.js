console.log("hello world");

const cl = console.log;
let stdArray = [];

const stdContainer =document.getElementById("stdContainer");
const stdForm =document.getElementById("stdForm");
const fName =document.getElementById("fName");
const lName =document.getElementById("lName");
const contact =document.getElementById("contact");
const email =document.getElementById("email");
const Education = document.getElementById("Education");

cl(fName.name)
const onStdCreate = (eve) => {
    // cl("from submitted !!!");

    eve.preventDefault();
    let obj ={
        fName : fName.value,
        lName : lName.value,
        contact : contact.value,
        email : email.value,
        Education :Education.value
    }
    stdArray.push(obj);
    let result = "";
    stdArray.forEach((std,i)=>{
        result += `
        <tr>
            <td>${i+1}</td>
            <td>${std.fName}</td>
            <td>${std.lName}</td>
            <td>${std.contact}</td>
            <td>${std.email}</td>
            <td>${std.Education}</td>
        </tr>
        `
    })
    stdContainer.innerHTML = result;
    // cl(stdArray);
    eve.target.reset();
}


stdForm.addEventListener("submit", onStdCreate);


let infoArray = [];
const employInfo = document.getElementById("employInfo");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const contAct = document.getElementById("contAct");
const emAil = document.getElementById("emAil");
const education = document.getElementById("education");
const infoContainer = document.getElementById("infoContainer");
cl(fname.name);


const onEmpCreate = (eve) =>{
    eve.preventDefault();
    let obj ={
        fname : fname.value,
        lname : lname.value,
        contAct : contAct.value,
        emAil : emAil.value,
        education : education.value
    }
    infoArray.push(obj);
    let result1 = "";
    infoArray.forEach((info,i)=>{
        result1 +=`
            <tr>
                <td>${i+1}</td>
                <td>${info.fname}</td>
                <td>${info.lname}</td>
                <td>${info.contAct}</td>
                <td>${info.emAil}</td>
                <td>${info.education}</td>
            </tr>
                    `
    })
    infoContainer.innerHTML = result1;
    eve.target.reset();
}

employInfo.addEventListener("submit", onEmpCreate);
