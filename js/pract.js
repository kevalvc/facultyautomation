function generate()
{
   var lec=document.getElementById("lec");
   var a = parseInt(document.getElementById("inputElectiveCond").value);
   var table=document.createElement('table');
   table.setAttribute('class','table');
   var thead=document.createElement('thead');
   thead.setAttribute('class','thead-inverse');
   var tr=document.createElement('tr');

   var th1=document.createElement('th');
   th1.innerHTML="<b>Subject</b>";
   var th2=document.createElement('th');
   th2.innerHTML="<b>Class</b>";
   // th3.setAttribute('value','Class');
   var th3=document.createElement('th');
   th3.innerHTML="<b>Day</b>";
   // th4.setAttribute('value','Day');
   var th4=document.createElement('th');
   th4.innerHTML="<b>Attendance</b>";
   // th5.setAttribute('value','Attendance');
   var th5=document.createElement('th');
   th5.innerHTML="<b>Attendance Percentage</b>";
   tr.appendChild(th1);
   tr.appendChild(th2);
   tr.appendChild(th3);
   tr.appendChild(th4);
   tr.appendChild(th5);
   thead.appendChild(tr);
   table.appendChild(thead);
   lec.appendChild(table);
   var electives=["OR","SPM","FR","ML","BDA","DF"];
   var classte=["TEA","TEB","TE(A+B)"];
   var classbe=["BEA","BEB","BE(A+B)"];
   var days=["Mon","Tue","Wed","Thur","Fri","Sat"];
   for(var i=1;i<=a;i++)
   {
      var tr=document.createElement('tr');
      var td1=document.createElement('td');
      var subjects = document.createElement("SELECT");
      subjects.setAttribute('id','subjects');
      subjects.setAttribute('class',i-1);
      subjects.setAttribute('onchange',"setClass(this)");
      var option = document.createElement("option");
      option.text = "";
      option.value = "";
      subjects.add(option);
      for(var j=0;j<electives.length;j++)
      {
         var option=document.createElement("option");
         option.text=electives[j];
         option.value=electives[j];
         subjects.add(option);
      }
      td1.appendChild(subjects);
      var td2=document.createElement('td');
      var classsection = document.createElement("SELECT");
      classsection.setAttribute('class','classsection');
      td2.appendChild(classsection);
      var td3=document.createElement('td');
      var day = document.createElement("SELECT");
      for(var j=0;j<days.length;j++)
      {
         var option = document.createElement("option");
         option.text = days[j];
         day.add(option);
      }
      td3.appendChild(day);

      var td4=document.createElement('td');
      var attn=document.createElement('INPUT');
      attn.setAttribute("type", "number");
      attn.setAttribute('class',100+i-1);
      attn.setAttribute("onkeyup","getAttendance(this)");
      td4.appendChild(attn);
      var td5=document.createElement('td');
      var percentage=document.createElement('INPUT');
      percentage.setAttribute('type',"number");
      td5.setAttribute('id',200+i-1);
      td5.appendChild(percentage);
      td5.innerHTML="0";
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      table.appendChild(tr);
   }

}

function getAttendanceElective(attn)
{
   var attend=new Map();
   attend['ortea']=10;
   attend['orteb']=8;
   attend['orteab']=18;
   attend['spmtea']=60;
   attend['spmteb']=56;
   attend['spmteab']=116;
   attend['frtea']=8;
   attend['frteb']=12;
   attend['frteab']=20;
   attend['mlbea']=40;
   attend['mlbeb']=30;
   attend['mlbeab']=70;
   attend['bdabea']=20;
   attend['bdabeb']=30;
   attend['bdabeab']=50;
   attend['spmbea']=20;
   attend['spmbeb']=25;
   attend['spmbeab']=45;
   // console.log(attn.value);
   var curattn=Number(attn.value);
   // console.log(curattn);
   var classn=attn.classList[0];
   // console.log(classn);
   var select = document.getElementsByClassName("classsection");
   // console.log(select);
   var classsection=select[classn-100];
   // console.log(section);
   var classsecval=classsection.value;
   // console.log(secval);
   // console.log(classname);
   // console.log(Number(classn)+100);
   var count=document.getElementById(Number(classn)+100);
   // console.log(count);
   // console.log(attn[classname]);
   count.innerHTML=curattn/attend[classsecval]*100;
}


function setClass(s)
{
   var subjects=s;
   var subjectname=subjects.classList[0];
   var select = document.getElementsByClassName("classsection");
   var subject=select[classname];
   subject.innerHTML="";
   // console.log(subject);
   if(subjects.value=='OR'||subjects.value=='FR'||subjects.value=='SPM')
      var classlist=['TEA','TEB','TE(A+B)'];
   else if(subjects.value=='ML'||subjects.value=='BDA'||subjects.value=='DF')
      var classlist=['BEA','BEB','BE(A+B)'];

   for(var cls in classlist)
   {
      var classname=document.createElement('option');
      classname.value=classlist[cls];
      classname.text=classlist[cls];
      select[subjectname].add(classname);
   }

}
