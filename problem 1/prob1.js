contactsTableArray= [];
const createContact =  () => {
    let newContactName = document.getElementById("userText").value;
    let newContactNo = document.getElementById("userPhone").value;
    let newContactEmail = document.getElementById("userEmail").value;
    let newContact = {Name: newContactName, No: newContactNo, Email: newContactEmail};
    contactsTableArray.push(newContact)
    let html = "<tr style=background-Color:#A9A9A9><th>Name</th><th>Contact No</th><th>Email</th></tr>";
    for (var i = 0; i < contactsTableArray.length; i++) {
        if(i % 2 != 0) html+="<tr style=background-Color:#f2f2f2>"
            else html+="<tr>";
        html+="<td>"+contactsTableArray[i].Name+"</td>";
        html+="<td>"+contactsTableArray[i].No+"</td>";
        html+="<td>"+contactsTableArray[i].Email+"</td>";
        html+="</tr>";
    }
    document.getElementById("contactTable").innerHTML = html;    
    document.getElementById('userText').value = '';
	document.getElementById('userPhone').value = '';
	document.getElementById('userEmail').value = '';
    console.log(contactsTableArray)
}

// const searchfunction = () =>{
//     let filter = document.getElementById('myInput').value;
//     let contactTable = document.getElementById('contactTable');
//     let tr = contactTable.getElementsByTagName('tr');
//     for (var i = 0; i < tr.length; i++){
//         let td = tr[i].getElementsByTagName('td')[0];
//         if (td){let textvalue = td.textContent }
//     }
// }
// const searchContact =  () => {
//         document.addEventListener(onkeyup,() => {
//             document.querySelectorAll(".search-input"). foreach(inputField => {
//                 const tableRows = inputField.closest("table").querySelectorAll("tbody tr");
//             })
//         })
// }