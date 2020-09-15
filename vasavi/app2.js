const form = document.querySelector('#database2');
// var docRef = db.collection("question1").doc("q1");

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('vasavi').add({
        // comment: form.location.value,
        // uname: form.name.value,
        // date:form.date.value,
        // veh_no:form.Vechicalnumber.value,
       FullName:form.FullName.value,
        DOB:form.DOB.value,
        Fathername:form.Fathername.value,
        Mobilenumber:form.Mobilenumber.value,
        Mailid:form.Mailid.value,
        Adress:form.Adress.value,
        tenthcgpa:form.tenthcgpa.value,
       Intermediatepercentage:form.Intermediatepercentage.value,
        EamcetHallticketnumber:form.EamcetHallticketnumber.value,
        EamcetRank:form.EamcetRank.value,
        IncomeCertificatenumber:form.IncomeCertificatenumber.value,
        CasteCertificatenumber:form.CasteCertificatenumber.value,
        IntrestedBranch:form.IntrestedBranch.value
});

    console.log('123');
    form.FullName.value ='';
    form.DOB.value ='';
    form.Fathername.value='';
    form.Mobilenumber.value = '';
    form.Mailid.value='';
    form.Adress.value='';
    form.tenthcgpa.value='';
    form.Intermediatepercentage.value='';
    form.EamcetHallticketnumber.value='';
    form.EamcetRank.value='';
    form.IncomeCertificatenumber.value='';
    form.CasteCertificatenumber.value='';
    form.IntrestedBranch.value='';
})
//Full Name
//DOB
//Father name
//Mobile number
//Mail id
//Adress
//10th cgpa
//Intermediate percentage
//Eamcet Hall ticket number
//EamcetRank
//IncomeCertificateNumber
//CasteCertificatenumber
//Intrested Branch

