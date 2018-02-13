var ptr = 0;
function generate()
{
   var lec=document.getElementById("lec");
   var a = parseInt(document.getElementById("inputTheoryCond").value);
   if(a>0)
   {
      var name=document.createElement('p');
      name.innerHTML="<h2><b>Theory Subjects</b></h2>";
      lec.appendChild(name);

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
      th6.innerHTML="<b>Attendance Percentage</b>";
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
         //td35.setAttribute('class',300+i-1);
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
         attn.setAttribute('id',"inputTheory");
         attn.setAttribute("onkeyup","getAttendance(this)");
         td5.appendChild(attn);
         var td6=document.createElement('td');
         var percentage=document.createElement('INPUT');
         percentage.setAttribute('type',"number");
         td6.setAttribute('id',200+i-1);
         td6.appendChild(percentage);
         td6.innerHTML="0";
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
   }
   ////
   var a = parseInt(document.getElementById("inputElectiveCond").value);
   if(a>0)
   {
      var name=document.createElement('p');
      name.innerHTML="<h2><b>Elective Subjects</b></h2>";
      lec.appendChild(name);
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
         subjects.setAttribute('class',1000+i-1);
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
         attn.setAttribute('class',1100+i-1);
         attn.setAttribute("onkeyup","getAttendanceElective(this)");
         td4.appendChild(attn);
         var td5=document.createElement('td');
         var percentage=document.createElement('INPUT');
         percentage.setAttribute('type',"number");
         td5.setAttribute('id',1200+i-1);
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

  document.getElementById("submit").disabled = true;


// button for generating table
   // var lec=document.getElementById("lec");
   // var submit=document.createElement('INPUT');
   // submit.setAttribute('type','submit');
   // submit.setAttribute('value','Generate Table');
   // submit.setAttribute('id','generateTable');
   // submit.setAttribute('onclick','generateTable()');
   // submit.setAttribute('class','btn btn-primary');
   // lec.append(submit);


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

function setClass(s)
{
   var subjects=s;
   var subjectname=subjects.classList[0];
   // console.log(subjectname);
   var select = document.getElementsByClassName("classsection");
   var subject=select[subjectname-1000];
   subject.innerHTML="";
   // console.log(subject);
   if(subjects.value=='OR'||subjects.value=='FR'||subjects.value=='SPM')
      var classlist=['tea|TEA','teb|TEB','teab|TE(A+B)'];
   else if(subjects.value=='ML'||subjects.value=='BDA'||subjects.value=='DF')
      var classlist=['bea|BEA','beb|BEB','beab|BE(A+B)'];

   for(var cls in classlist)
   {
      var classname=document.createElement('option');
      s=classlist[cls];
      s=s.split('|');
      classname.value=s[0];
      classname.text=s[1];
      select[subjectname-1000].add(classname);
   }

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
   // console.log(typeof(classn));
   var sub=document.getElementsByClassName(classn-100)[0].value;
   // console.log(sub);
   // console.log(typeof(sub));
   sub=sub.toLowerCase();
   var select = document.getElementsByClassName("classsection");
   // console.log(select);
   var classsection=select[classn-1100];
   // console.log(section);
   var classsecval=classsection.value;
   // console.log(attend[sub+classsecval]);
   // console.log(secval);
   // console.log(classname);
   // console.log(Number(classn)+100);
   var count=document.getElementById(Number(classn)+100);
   // console.log(count);
   // console.log(attn[classname]);
   // console.log(sub+classsecval);
   count.innerHTML=curattn/attend[sub+classsecval]*100;
}

/*===================================================
         FUNCTION TO GENERATE TABLES
===================================================*/

// function generateTable()
// {
//    var lec=document.getElementById("lec");
//    var a = parseInt(document.getElementById("inputTheoryCond").value);
//    var subjects=document.getElementsByClassName('subjects');
//    var name=document.createElement('p');
//    name.innerHTML="<h2><b>Faculty Table</b></h2>";
//    name.setAttribute('class','text-center');
//    lec.appendChild(name);
//
//    var table=document.createElement('table');
//    table.setAttribute('class','table table-bordered table-inverse');
//    var tr=document.createElement('tr');
//    var td1=document.createElement('td');
//    td1.innerHTML="<b>Day</b>";
//    td1.setAttribute('rowspan','2');
//    var td2=document.createElement('td');
//    td2.innerHTML="<b>Date</b>";
//    td2.setAttribute('rowspan','2');
//    var td3=document.createElement('td');
//    td3.innerHTML="<b>Theory (X)</b>";
//    td3.setAttribute('colspan','3');
//    td2.setAttribute('class','text-center');
//    var td4=document.createElement('td');
//    td4.innerHTML="<b>Practical/Tutorial (Y)</b>"
//    td4.setAttribute('colspan','3');;
//    td4.setAttribute('class','text-center');
//    var td5=document.createElement('td');
//    td5.innerHTML="<b>Project (Z)</b>";
//    td5.setAttribute('colspan','3');
//    td5.setAttribute('class','text-center');
//    var td6=document.createElement('td');
//    td6.innerHTML="<b>Remark</b>";
//    td6.setAttribute('rowspan','2');
//    tr.appendChild(td1);
//    tr.appendChild(td2);
//    tr.appendChild(td3);
//    tr.appendChild(td4);
//    tr.appendChild(td5);
//    tr.appendChild(td6);
//    table.appendChild(tr);
//    lec.appendChild(table);
//
//    var tr=document.createElement('tr');
//    tr.setAttribute('class','bg-primary');
//
//    for(var i=0;i<a;i++)
//    {
//       var subjectname=subjects[i];
//       var td=document.createElement('td');
//       td.innerHTML=subjectname.value;
//       tr.appendChild(td);
//    }
//    // var td=document.createElement('td');
//    // td.innerHTML="sub1";
//    // tr.appendChild(td);
//    // var td=document.createElement('td');
//    // td.innerHTML="sub2";
//    // tr.appendChild(td);
//    // var td=document.createElement('td');
//    // td.innerHTML="sub3";
//    // tr.appendChild(td);
//    var td=document.createElement('td');
//    td.innerHTML="pract1";
//    tr.appendChild(td);
//    var td=document.createElement('td');
//    td.innerHTML="pract2";
//    tr.appendChild(td);
//    var td=document.createElement('td');
//    td.innerHTML="pract3";
//    tr.appendChild(td);
//    var td=document.createElement('td');
//    td.innerHTML="mini";
//    tr.appendChild(td);
//    var td=document.createElement('td');
//    td.innerHTML="minor";
//    tr.appendChild(td);
//    var td=document.createElement('td');
//    td.innerHTML="major";
//    tr.appendChild(td);
//    table.appendChild(tr);
//
//    var background=['bg-success','bg-danger','bg-warning','bg-info','bg-primary','bg-success']
//    var days=['mon','tue','wed','thur','fri','sat'];
//    for(var i=0;i<6;i++)
//    {
//       var tr=document.createElement('tr');
//       tr.setAttribute('class',background[i]);
//
//       var td=document.createElement('td');
//       td.innerHTML=days[i];
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="8 jan";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="cn";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="spcc";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="mcc";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="npl";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="wtl";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="iot";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="small";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="medium";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="large";
//       tr.appendChild(td);
//       var td=document.createElement('td');
//       td.innerHTML="remark";
//       tr.appendChild(td);
//       table.appendChild(tr);
//    }
// }

function generatePracs() {
  var prac=document.getElementById("prac");
  var a = parseInt(document.getElementById("inputPracsCond").value);
  var table=document.createElement('table');
  table.setAttribute('class','table');
  var thead=document.createElement('thead');
  thead.setAttribute('class','thead-inverse');
  var tr=document.createElement('tr');
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
  prac.appendChild(table);
  for(var i=1;i<=a;i++)
  {
     var tr=document.createElement('tr');
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
     option.text = "A1/A2";
     option.value = "A1/A2";
     section.add(option);
     option = document.createElement("option");
     option.text = "A3/A4";
     option.value = "A3/A4";
     section.add(option);
     option = document.createElement("option");
     option.text = "B1/B2";
     option.value = "B1/B2";
     section.add(option);
     option = document.createElement("option");
     option.text = "B3/B3";
     option.value = "B4/B4";
     section.add(option);
     td35.appendChild(section);
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
     attn.setAttribute("id", "inputPractical");
     td5.appendChild(attn);
     var td6=document.createElement('td');
     var percentage=document.createElement('INPUT');
     percentage.setAttribute('type',"number");
     td6.setAttribute('id',200+i-1);
     td6.appendChild(percentage);
     td6.innerHTML="23.23";
     tr.appendChild(td3);
     tr.appendChild(td35);
     tr.appendChild(td38);
     tr.appendChild(td4);
     tr.appendChild(td5);
     tr.appendChild(td6);
     tr.appendChild(td6);
     table.appendChild(tr);
  }
  document.getElementById("submit-2").disabled = true;

  var submit=document.createElement('INPUT');
  submit.setAttribute('type','submit');
  submit.setAttribute('id','subPracs');
  submit.addEventListener('click', function(){
      // attendanceTotal(prac, "practical");
      submitPracs();
  });
  submit.setAttribute('class','btn btn-primary');
  prac.append(submit);
}

function generateProject() {
  var proj=document.getElementById("proj");
  var miniinput = parseInt(document.getElementById("mini-input").value);
  var minorinput = parseInt(document.getElementById("minor-input").value);
  var table=document.createElement('table');
  table.setAttribute('class','table');
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  if (ptr == 0) {
    var enternumberofgroups = document.createElement("label");
    enternumberofgroups.innerHTML = "Enter number of groups in each project:";
    enternumberofgroups.setAttribute("class", "numberofgroups");
    proj.append(enternumberofgroups);
    proj.append(table);
    table.append(tbody);
    tbody.append(tr);
    var br = document.createElement("br");
    tr.append(br);
    var trmini = document.createElement("tr");
    tbody.append(trmini);
    var trminor = document.createElement("tr");
    tbody.append(trminor);
    var trmajor = document.createElement("tr");
    tbody.append(trmajor);
    var numbermini = document.createElement("td");
    numbermini.setAttribute("class", "text-center");
    numbermini.innerHTML = "<input class='form-control' type='number' placeholder='Mini project' id='numberofmini' onchange='minigroups()'>";
    // numbermini.setAttribute('placeholder', 'Number of groups in mini project');

    var numberminor = document.createElement("td");
    numberminor.setAttribute("class", "text-center");
    numberminor.innerHTML = "<input class='form-control' type='number' placeholder='Minor project' id='numberofminor' onchange='minorgroups()'>";
    // numberminor.setAttribute('placeholder', 'Number of groups in minor project');

    var numbermajor = document.createElement("td");
    numbermajor.setAttribute("class", "text-center");
    numbermajor.innerHTML = "<input class='form-control' type='number' placeholder='Major project' id='numberofmajor' onchange='majorgroups()'>";
    // numbermajor.setAttribute('placeholder', 'Number of groups in major project');

    trmini.append(numbermini);
    trminor.append(numberminor);
    trmajor.append(numbermajor);
    ptr = 1;
  }
}


//Enter number of groups = label
function minigroups() {

  if ($("#tablemini").length>0) {
    $("#tablemini").remove();
    $("#tableminilabel").remove();
  }

  var proj=document.getElementById("proj");
  var enternumberofgroups = document.createElement("label");
  enternumberofgroups.innerHTML = "Enter number of members in each mini project:";
  enternumberofgroups.setAttribute("class", "numberofgroups1");
  enternumberofgroups.setAttribute("id", "tableminilabel");
  proj.append(enternumberofgroups);

  var input = parseInt(document.getElementById("numberofmini").value);
  var table=document.createElement('table');
  table.setAttribute('class','table');
  table.setAttribute('id','tablemini');
  var tbody = document.createElement("tbody");
  proj.append(table);
  table.append(tbody);
  for (var i = 0; i < input; i++) {
    console.log("ith value in mini groups is "+i);
    // inputmini.setAttribute("class", "text-center");
    var tr = document.createElement("tr");
    tr.setAttribute("id", "tr"+i);
    tbody.append(tr);
    var br = document.createElement("br");
    tr.append(br);
    var inputminigroup = document.createElement("td");
    inputminigroup.setAttribute("id", "labelmini"+i);
    inputminigroup.innerHTML = "<input class='form-control' type='number' id='inputminigroup"+i+"'>";
    inputminigroup.setAttribute("onchange", "minimembers(labelmini"+i+", "+i+")");
    //inputmini sets an onchange minimembers passing values of the number of minimembers and the entire table data
    tr.append(inputminigroup);
  }
}
// incomplete
function minorgroups() {

  if ($("#tableminor").length>0) {
    $("#tableminor").remove();
    $("#tableminorlabel").remove();
  }

  var proj=document.getElementById("proj2");
  var enternumberofgroups = document.createElement("label");
  enternumberofgroups.innerHTML = "Enter number of members in each minor project:";
  enternumberofgroups.setAttribute("class", "numberofgroups2");
  enternumberofgroups.setAttribute("id", "tableminorlabel");
  proj.append(enternumberofgroups);

  var input = parseInt(document.getElementById("numberofminor").value);
  var table=document.createElement('table');
  table.setAttribute('class','table');
  table.setAttribute('id','tableminor');
  var tbody = document.createElement("tbody");
  proj.append(table);
  table.append(tbody);
  for (var i = 0; i < input; i++) {
    // inputmini.setAttribute("class", "text-center");
    var tr2 = document.createElement("tr");
    tr2.setAttribute("id", "tr2"+i);
    tbody.append(tr2);
    var br = document.createElement("br");
    tr2.append(br);
    var inputminorgroup = document.createElement("td");
    inputminorgroup.setAttribute("id", "labelminor"+i);
    inputminorgroup.innerHTML = "<input class='form-control' type='number' id='inputminorgroup"+i+"'>";
    inputminorgroup.setAttribute("onchange", "minormembers(labelminor"+i+", "+i+")");
    //inputminor sets an onchange minormembers passing values of the number of minormembers and the entire table data
    tr2.append(inputminorgroup);
  }
}

function majorgroups() {

  if ($("#tablemajor").length>0) {
    $("#tablemajor").remove();
    $("#tablemajorlabel").remove();
  }

  var proj=document.getElementById("proj3");
  var enternumberofgroups = document.createElement("label");
  enternumberofgroups.innerHTML = "Enter number of members in each major project:";
  enternumberofgroups.setAttribute("class", "numberofgroups3");
  enternumberofgroups.setAttribute("id", "tablemajorlabel");
  proj.append(enternumberofgroups);

  var input = parseInt(document.getElementById("numberofmajor").value);
  var table=document.createElement('table');
  table.setAttribute('class','table');
  table.setAttribute('id','tablemajor');
  var tbody = document.createElement("tbody");
  proj.append(table);
  table.append(tbody);
  for (var i = 0; i < input; i++) {
    // inputmini.setAttribute("class", "text-center");
    var tr3 = document.createElement("tr");
    tr3.setAttribute("id", "tr3"+i);
    tbody.append(tr3);
    var br = document.createElement("br");
    tr3.append(br);
    var inputmajorgroup = document.createElement("td");
    inputmajorgroup.setAttribute("id", "labelmajor"+i);
    inputmajorgroup.innerHTML = "<input class='form-control' type='number' id='inputmajorgroup"+i+"'>";
    inputmajorgroup.setAttribute("onchange", "majormembers(labelmajor"+i+", "+i+")");
    //inputmajor sets an onchange majormembers passing values of the number of minimembers and the entire table data
    tr3.append(inputmajorgroup);
  }
}

function minimembers(trpass, i) {
// trpass is used so that a new minimembers can be appended below the input.
    var proj=document.getElementById("proj");

    if ($("#minidata"+i).length > 0) {
      document.getElementById("minidata"+i).remove();
      $(".numberofgroups1"+i).remove();
      $("#minitable"+i).remove();
      $("#break1"+i).remove();
    }

    var brent = document.createElement("br");
    brent.setAttribute("id", "break1"+i);
    trpass.append(brent);

    var enternumberofgroups = document.createElement("label");
    enternumberofgroups.innerHTML = "Enter attendance of each members:";
    enternumberofgroups.setAttribute("class", "numberofgroups1"+i);
    trpass.append(enternumberofgroups);

    // var input = groupno;
    var table=document.createElement('table');
    table.setAttribute('class','table');
    table.setAttribute('id','minitable'+i);
    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");
    tr.setAttribute("id", "minidata"+i);
    trpass.append(table);
    table.append(tbody);
    tbody.append(tr);
    var br = document.createElement("br");
    tr.append(br);

    var inputmini0 = document.createElement("td");
    var day = document.createElement("SELECT");
    day.setAttribute('id','projday'+i);
    day.setAttribute('class','form-control');
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
    inputmini0.append(day);
    tr.append(inputmini0);
    // var tr2 = document.createElement("tr");
    // tbody.append(tr);
    for (var i = 1; i < 3; i++) {
      // inputmini.setAttribute("class", "text-center");
      var inputmini = document.createElement("td");
//This is the data id for removal of the selected stuff;
      inputmini.innerHTML = "<input class='form-control' type='number' id='inputmini"+i+"' onchange='minimembers()'>";
      tr.append(inputmini);
    }
}

function minormembers(trpass, i) {
// trpass is used so that a new minimembers can be appended below the input.
    var proj=document.getElementById("proj");

    if ($("#minordata"+i).length > 0) {
      document.getElementById("minordata"+i).remove();
      $(".numberofgroups2"+i).remove();
      $("#minortable"+i).remove();
      $("#break2"+i).remove();
    }

  var brent = document.createElement("br");
  brent.setAttribute("id", "break2"+i);
  trpass.append(brent);

  var enternumberofgroups = document.createElement("label");
  enternumberofgroups.innerHTML = "Enter attendance of each members:";
  enternumberofgroups.setAttribute("class", "numberofgroups2"+i);
  trpass.append(enternumberofgroups);

  // var input = groupno;
  var table=document.createElement('table');
  table.setAttribute('class','table');
  table.setAttribute('id','minortable'+i);
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  tr.setAttribute("id", "minordata"+i);
  trpass.append(table);
  table.append(tbody);
  tbody.append(tr);

  var br = document.createElement("br");
  tr.append(br);

  var inputminor0 = document.createElement("td");
  var day = document.createElement("SELECT");
  day.setAttribute('class','form-control');
  day.setAttribute('id','projday2'+i);
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
  inputminor0.append(day);
  tr.append(inputminor0);
  // var tr2 = document.createElement("tr");
  // tbody.append(tr);
  for (var i = 1; i < 3; i++) {
    // inputmini.setAttribute("class", "text-center");
    var inputminor = document.createElement("td");
    inputminor.innerHTML = "<input class='form-control' type='number' id='inputminor"+i+"' onchange='minormembers()'>";
    tr.append(inputminor);
  }
}

function majormembers(trpass, i) {
// trpass is used so that a new minimembers can be appended below the input.
    var proj=document.getElementById("proj");

    if ($("#majordata"+i).length > 0) {
      document.getElementById("majordata"+i).remove();
      $(".numberofgroups3"+i).remove();
      $("#majortable"+i).remove();
      $("#break3"+i).remove();
    }

  var brent = document.createElement("br");
  brent.setAttribute("id", "break3"+i);
  trpass.append(brent);

  var enternumberofgroups = document.createElement("label");
  enternumberofgroups.innerHTML = "Enter attendance of each members:";
  enternumberofgroups.setAttribute("class", "numberofgroups3"+i);
  trpass.append(enternumberofgroups);

  // var input = groupno;
  var table=document.createElement('table');
  table.setAttribute('class','table');
  table.setAttribute('id','majortable'+i);
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  tr.setAttribute("id", "majordata"+i);
  trpass.append(table);
  table.append(tbody);
  tbody.append(tr);
  var br = document.createElement("br");
  tr.append(br);

  var inputmajor0 = document.createElement("td");
  var day = document.createElement("SELECT");
  day.setAttribute('id','projday3'+i);
  day.setAttribute('class','form-control');
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
  inputmajor0.append(day);
  tr.append(inputmajor0);
  // var tr2 = document.createElement("tr");
  // tbody.append(tr);
  for (var i = 1; i < 3; i++) {
    // inputmini.setAttribute("class", "text-center");
    var inputmajor = document.createElement("td");
    inputmajor.setAttribute("id", "majordata"+i);
    inputmajor.innerHTML = "<input class='form-control' type='number' id='inputmajor"+i+"' onchange='majormembers()'>";
    tr.append(inputmajor);
  }
}

function submitTheory()
{
   // window.location.href="pract.php";
   //   $("").onclick();
}

function submitPracs()
{
  myProjDisplay();
   // window.location.href="pract.php";
   //   $("").onclick();
}

function attendanceTotal(fries, prorth) {
  var attnto = 0;
  var a;
  var attnli;
  console.log(fries);
  if (prorth == "theory") {
    a = parseInt(document.getElementById("inputTheoryCond").value);
    attnli = document.querySelectorAll('#inputTheory');
  } else if (prorth == "practical") {
    a = parseInt(document.getElementById("inputPracsCond").value);
    attnli = document.querySelectorAll('#inputPractical');
  }
  for (var i = 0; i < a; i++) {
    attnto = attnto + parseInt(attnli[i].value);
  }
  console.log(attnto);
  var newElem = document.createElement('div');
  newElem.innerHTML = "<br>";
  var newrow=document.createElement('div');
  newrow.setAttribute("class", "row");
  fries.appendChild(newElem);
  fries.appendChild(newrow);
  var totatval=document.createElement('input');
  totatval.setAttribute('type', 'text');
  totatval.setAttribute('class', 'btn btn-primary');
  totatval.setAttribute('value', attnto);
  totatval.readOnly = true;
  // totatval.innerHTML="<h1>"+attnto+"</h1>"
  fries.appendChild(totatval);
}

function myProjDisplay() {
  if($('#myProjectDisplay').css('display') == 'none') {
    $('#myProjectDisplay').css('display', 'block');
  }
}
