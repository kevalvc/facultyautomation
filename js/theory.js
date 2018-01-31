function generate()
{
   var lec=document.getElementById("lec");
   var a = parseInt(document.getElementById("inputTheoryCond").value);
   var table=document.createElement('table');
   table.setAttribute('class','table');
   var thead=document.createElement('thead');
   thead.setAttribute('class','thead-inverse');
   var tr=document.createElement('tr');
   // var th1=document.createElement('th');
   // th1.innerHTML="<b>Subject Name</b>";
   // th1.setAttribute('value','Subject Name');
   // var th2=document.createElement('th');
   // th2.innerHTML="<b>Date</b>";
   // // th2.setAttribute('value','Date');
   var th3=document.createElement('th');
   th3.innerHTML="<b>Class</b>";
   // th3.setAttribute('value','Class');
   var th35=document.createElement('th');
   th35.innerHTML="<b>Section</b>";
   var th37=document.createElement('th');
   th37.innerHTML="<b>Subject Name</b>";
   var th4=document.createElement('th');
   th4.innerHTML="<b>Day</b>";
   // th4.setAttribute('value','Day');
   var th5=document.createElement('th');
   th5.innerHTML="<b>Attendance</b>";
   // th5.setAttribute('value','Attendance');
   var th6=document.createElement('th');
   th6.innerHTML="<b>Count</b>";
   // th6.setAttribute('value','Count');
   // tr.appendChild(th1);
   // tr.appendChild(th2);
   tr.appendChild(th3);
   tr.appendChild(th35);
   tr.appendChild(th37);
   tr.appendChild(th4);
   tr.appendChild(th5);
   tr.appendChild(th6);
   tr.appendChild(th6);
   thead.appendChild(tr);
   table.appendChild(thead);
   lec.appendChild(table);
   for(var i=1;i<=a;i++)
   {
      var tr=document.createElement('tr');
      // var td1=document.createElement('td');
      // var subname = document.createElement("INPUT");
      // subname.setAttribute("type", "text");
      // td1.appendChild(subname);
      // var td2=document.createElement('td');
      // var date = document.createElement("INPUT");
      // date.setAttribute("type", "date");
      // td2.appendChild(date);
      var td3=document.createElement('td');
      var year = document.createElement("SELECT");
      year.setAttribute('id','year');
      year.setAttribute('class',i-1);
      year.setAttribute('onchange',"setSubjects(this)");
      var option = document.createElement("option");
      option.text = "";
      option.value = "";
      year.add(option);
      var option = document.createElement("option");
      option.text = "FE";
      option.value = "FE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      option = document.createElement("option");
      option.text = "SE";
      option.value = "SE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      option = document.createElement("option");
      option.text = "TE";
      option.value = "TE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      option = document.createElement("option");
      option.text = "BE";
      option.value = "BE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      td3.appendChild(year);
      var td35=document.createElement('td');
      td35.setAttribute('class',300+i-1);
      var section = document.createElement("SELECT");
      section.setAttribute('class','section');
      var option = document.createElement("option");
      option.text = "A";
      option.value = "A";
      section.add(option);
      option = document.createElement("option");
      option.text = "B";
      option.value = "B";
      section.add(option);
      td35.appendChild(section);
      // var td37=document.createElement('td');
      // var subname = document.createElement("INPUT");
      // subname.setAttribute("type", "text");
      // td37.appendChild(subname);
      var td38=document.createElement('td');
      var subjects=document.createElement('SELECT');
      subjects.setAttribute('class','subjects');
      // var subject=document.createElement('option');
      td38.appendChild(subjects);
      var td4=document.createElement('td');
      var day = document.createElement("SELECT");
      var option = document.createElement("option");
      option.text = "Mon";
      day.add(option);
      option = document.createElement("option");
      option.text = "Tue";
      day.add(option);
      option = document.createElement("option");
      option.text = "Wed";
      day.add(option);
      option = document.createElement("option");
      option.text = "Thur";
      day.add(option);
      option = document.createElement("option");
      option.text = "Fri";
      day.add(option);
      option = document.createElement("option");
      option.text = "Sat";
      day.add(option);
      td4.appendChild(day);
      var td5=document.createElement('td');
      var attn=document.createElement('INPUT');
      attn.setAttribute("type", "number");
      attn.setAttribute('class',100+i-1);
      attn.setAttribute("onkeyup","getAttendance(this)");
      td5.appendChild(attn);
      var td6=document.createElement('td');
      var percentage=document.createElement('INPUT');
      percentage.setAttribute('type',"number");
      td6.setAttribute('id',200+i-1);
      td6.appendChild(percentage);
      td6.innerHTML="23.23";
      // td1.innerHTML='hello';
      // tr.appendChild(td1);
      // tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td35);
      // tr.appendChild(td37);
      tr.appendChild(td38);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tr.appendChild(td6);
      table.appendChild(tr);
   }
   document.getElementById("submit").disabled = true;

   var submit=document.createElement('INPUT');
   submit.setAttribute('type','submit');
   submit.setAttribute('id','subTheory');
   submit.setAttribute('onclick','submitTheory()');
   submit.setAttribute('class','btn btn-primary');
   lec.append(submit);
   // for (i = 1; i <= a; i++)
   // {
   //     var input1 = document.createElement("tr");
   //     var tr1=document.createElement("td");
   //     input1.appendChild(tr1);
   //     var input2 = document.createElement("tr");
   //     var tr2=document.createElement("td");
   //     input2.appendChild(tr2);
   //     table.appendChild(input1);
   //     table.appendChild(input2);
   //     lec.appendChild(table);
   // }
}

function submitTheory()
{
   window.location.href="pract.php";
}

function setSubjects(s)
{
   var year=s;
   var classname=year.classList[0];
   var select = document.getElementsByClassName("subjects");
   var subject=select[classname];
   subject.innerHTML="";
   // console.log(subject);
   if(year.value=='FE')
      var sublist=['AM-II','AP-II','AC-II','ED','SPA','CS'];
   else if(year.value=='SE')
      var sublist=['AM-IV','AOA','COA','DBMS','TCS','CG'];
   else if(year.value=='TE')
      var sublist=['SPCC','SE','DD','MCC'];
   else if(year.value=='BE')
      var sublist=['DWM','HMI','PDS','ELECT-III'];
   // console.log(year);
   // console.log(sublist);
   var subjects=document.getElementsByClassName("subjects");
   // console.log(subjects);
   for(var sub in sublist)
   {
      // console.log(sub);
      var subject=document.createElement('option');
      subject.value=sublist[sub];
      subject.text=sublist[sub];
      subjects[classname].add(subject);
   }

}
function getAttendance(attn)
{
   var attend=new Map();
   attend['FEA']=60;
   attend['FEB']=60;
   attend['SEA']=80;
   attend['SEB']=80;
   attend['TEA']=85;
   attend['TEB']=85;
   attend['BEA']=85;
   attend['BEB']=85;
   // console.log(attn.value);
   var curattn=Number(attn.value);
   // console.log(curattn);
   var classn=attn.classList[0];
   // console.log(classn);
   var classname=document.getElementsByClassName(classn-100)[0].value;
   var select = document.getElementsByClassName("section");
   // console.log(select);
   var section=select[classn-100];
   // console.log(section);
   var secval=section.value;
   // console.log(secval);
   var classname=document.getElementsByClassName(classn-100)[0].value+secval;
   // console.log(classname);
   // console.log(Number(classn)+100);
   var count=document.getElementById(Number(classn)+100);
   // console.log(count);
   // console.log(attn[classname]);
   count.innerHTML=curattn/attend[classname]*100;
}
