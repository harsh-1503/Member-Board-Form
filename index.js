
function submitForm(){
    const contactNo = document.getElementById("contactNo").value
    const whatsappNo = document.getElementById("WhatsappNo").value

    if(contactNo.toString().length!=10 || whatsappNo.toString().length!=10){
        alert("Enter valid number!!");
        return;
    }
}



