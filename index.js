var selectedRow=null
         function onFormSubmit(){
            var formData=readFromData();
            console.log(formData)
            if(selectedRow==null){
                insertNewRecord(formData)

            }
            else{
                updateRecord(formData)

            }
            
            resetForm();
            
            
        }
        function readFromData(){
            var formData={}
            formData["name"]=document.getElementById("name").value
            formData["grade"]=document.getElementById("grade").value
            formData["math"]=document.getElementById("math").value
            formData["science"]=document.getElementById("science").value
            formData["english"]=document.getElementById("english").value
            formData["history"]=document.getElementById("history").value
            formData["geography"]=document.getElementById("geography").value
            return formData;
        }
        function insertNewRecord(data){
            var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
            var newRow=table.insertRow(table.length)
            var cell1=newRow.insertCell(0);
            cell1.innerHTML=data.name;
            var cell2=newRow.insertCell(1);
            cell2.innerHTML=data.grade;
            var cell3=newRow.insertCell(2);
            cell3.innerHTML=data.math;
            var cell4=newRow.insertCell(3);
            cell4.innerHTML=data.science;
            var cell5=newRow.insertCell(4);
            cell5.innerHTML=data.english;
            var cell6=newRow.insertCell(5);
            cell6.innerHTML=data.history;
            var cell7=newRow.insertCell(6);
            cell7.innerHTML=data.geography;
            var cell8=newRow.insertCell(7);
            cell8.innerHTML=`<button class="btn btn-success"  onClick="handleDelete(this)">Delete</button>`
            var cell9=newRow.insertCell(8);
            cell9.innerHTML=`<button class="btn btn-danger" onClick="handleEdit(this)">Edit</button>`
        }
        function resetForm(){
            document.getElementById("name").value="";
            document.getElementById("grade").value="";
            document.getElementById("math").value="";
            document.getElementById("science").value="";
            document.getElementById("english").value="";
            document.getElementById("history").value="";
            document.getElementById("geography").value="";
            selectedRow=null
        }
        function handleEdit(td){
             selectedRow=td.parentElement.parentElement
             document.getElementById("name").value=selectedRow.cells[0].innerHTML
             document.getElementById("grade").value=selectedRow.cells[1].innerHTML
             document.getElementById("math").value=selectedRow.cells[2].innerHTML
             document.getElementById("science").value=selectedRow.cells[3].innerHTML
             document.getElementById("english").value=selectedRow.cells[4].innerHTML
             document.getElementById("history").value=selectedRow.cells[5].innerHTML
             document.getElementById("geography").value=selectedRow.cells[6].innerHTML
        }
        function updateRecord(formData){
             selectedRow.cells[0].innerHTML=formData.name;
             selectedRow.cells[1].innerHTML=formData.grade;
             selectedRow.cells[2].innerHTML=formData.math;
             selectedRow.cells[3].innerHTML=formData.science;
             selectedRow.cells[4].innerHTML=formData.english;
             selectedRow.cells[5].innerHTML=formData.history;
             selectedRow.cells[6].innerHTML=formData.geography

        }
        function handleDelete(td){
            var row=td.parentElement.parentElement;
            document.getElementById("studentList").deleteRow(row.rowIndex)

        }