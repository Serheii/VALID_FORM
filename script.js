"use strict";

var formDef1=
[
  {label:'Разработчики:',kind:'longtext',name:'sitenamerazrab'},
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Дата запуска сайта:',kind:'date',name:'launchdate'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
  variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
  variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

function formСreation(formDef, formElem) {
  
  formDef.forEach( elemDef =>{
    
    if ( "label" in elemDef ) {
      let labelElem=document.createElement("label");
      labelElem.innerHTML=elemDef.label;
      formElem.appendChild(labelElem);
    };

    switch ( elemDef.kind ) {
      
      case "longtext": {
        let inputElem=document.createElement("input");
        inputElem.type="text";
        inputElem.name=elemDef.name;
        let n='valid'+elemDef.name+'(false)';
        formElem.appendChild(inputElem);
        inputElem.setAttribute('onblur',n);
        break;
      }
      case "date": {
        let inputElem=document.createElement("input");
        inputElem.type="date";
        inputElem.name=elemDef.name;
        formElem.appendChild(inputElem);
        inputElem.setAttribute('onblur','validDate(false)');
        break;        
      }
      case "number": {
        let inputElem=document.createElement("input");
        inputElem.type="number";
        inputElem.name=elemDef.name;
        formElem.appendChild(inputElem);
        inputElem.setAttribute('onblur','validNumber(false)');
        break;        
      }
      case "shorttext": {
        let inputElem=document.createElement("input");
        inputElem.type="text";
        inputElem.name=elemDef.name;
        formElem.appendChild(inputElem);
        inputElem.setAttribute('onblur','validEmail(false)');
        
        break;        
      }
      case "combo": {
        let selectElem=document.createElement("select");
        selectElem.name=elemDef.name;
        selectElem.setAttribute('onchange','validRubrik(false)');
        formElem.appendChild(selectElem);
        let v = elemDef.variants;
        let optionElem=document.createElement("option");
        optionElem.value='0';
        selectElem.appendChild(optionElem);
        v.forEach(a=>{
          let optionElem=document.createElement("option");
          optionElem.value=a.value;
          optionElem.innerHTML=a.text;
          selectElem.appendChild(optionElem);
        let t = document.createElement("text");
        optionElem.appendChild(t);
      })
      break;        
    }
    case "radio": {
      elemDef.variants.forEach(a=>{        
        let radioElem=document.createElement("input");
        radioElem.type="radio";
        radioElem.name=elemDef.name;
        radioElem.value=a.value;
        radioElem.setAttribute('onchange','validRadio(false)');
        formElem.appendChild(radioElem);
        let radioText = document.createTextNode(a.text);
        formElem.appendChild(radioText);
      });
      let s=document.createElement("span");
      s.classList.add("razrError");
      s.id='q';
      formElem.appendChild(s);
      break;        
    }
    case "check": {
      let inputElem=document.createElement("input");
      inputElem.type="checkbox";
      inputElem.setAttribute('onchange','validCheck(false)');
      inputElem.name=elemDef.name;
      formElem.appendChild(inputElem);
      break;        
    }
    case "memo": {        
      let br = document.createElement("br");
      formElem.appendChild(br);
      let inputElem=document.createElement("textarea");
      inputElem.setAttribute('onblur','validDescription(false)');
      inputElem.name=elemDef.name;
      formElem.appendChild(inputElem);
      break;        
    }
    case "submit": {
      let inputElem=document.createElement("input");
      inputElem.type="submit";
      inputElem.value=elemDef.caption;
      formElem.appendChild(inputElem);
      inputElem.setAttribute('onsubmit','submitForm');
      break;        
    }
  };
  
  let s=document.createElement("span");
  s.classList.add("razrError");
  formElem.appendChild(s);
  
  let br = document.createElement("br");
  formElem.appendChild(br);
});
};

formСreation( formDef1, document.forms.form1 );

const formElem=document.forms.form1;

formElem.onsubmit=submitForm;

function validsitenamerazrab(focusOnError) {
  let errCount=0;
  let razrElem=formElem.elements.sitenamerazrab;
  let razrValue=razrElem.value;
  let razrErrorElem=razrElem.nextSibling;
  if (razrValue=="") {
    razrErrorElem.innerHTML="Заполните поле";
    errCount++;

    if ( focusOnError ){
      razrElem.focus();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function validsitename(focusOnError) {  
  let errCount=0;
  let razrElem=formElem.elements.sitename;
  let razrValue=razrElem.value;
  let razrErrorElem=razrElem.nextSibling;
  if (razrValue=="") {
    razrErrorElem.innerHTML="Заполните поле";
    errCount++;

    if ( focusOnError ){
      razrElem.focus();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function validsiteurl(focusOnError) {  
  let errCount=0;
  let razrElem=formElem.elements.siteurl;
  let razrValue=razrElem.value;
  let razrErrorElem=razrElem.nextSibling;
  if (razrValue=="") {
    razrErrorElem.innerHTML="Заполните поле";
    errCount++;

    if ( focusOnError ){
      razrElem.focus();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function validDate(focusOnError) {
  let errCount=0;
  let razrElem=formElem.elements.launchdate;
  let razrValue=razrElem.value;
  let razrErrorElem=razrElem.nextSibling;
  if (razrValue=="") {
    razrErrorElem.innerHTML="Укажите дату";
    errCount++;
    if ( focusOnError ){
      razrElem.focus();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function validNumber(focusOnError) {  
  let errCount=0;
  let razrElem=formElem.elements.visitors;
  let razrValue=razrElem.value;
  let razrErrorElem=razrElem.nextSibling;
  if (razrValue=="") {
    razrErrorElem.innerHTML="Выберите количество посетителей";
    errCount++;
    if ( focusOnError ){
      razrElem.focus();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function validEmail(focusOnError) {  
  let errCount=0;
  let razrElem=formElem.elements.email;
  let razrValue=razrElem.value;
  let razrErrorElem=razrElem.nextSibling;
  if (razrValue=="") {
    razrErrorElem.innerHTML="Введите адрес электронной почты";
    errCount++;
    if ( focusOnError ){
      razrElem.focus();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function validRubrik(focusOnError) {  
  let errCount=0;
  let razrElem=formElem.elements.division;
  let razrValue=razrElem.value;
  let razrErrorElem=razrElem.nextSibling;
  if (razrValue==0) {
    razrErrorElem.innerHTML="Выберите один из вариантов";
    errCount++;
    if ( focusOnError ){
      razrElem.focus();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function validRadio(focusOnError) {
  let errCount=0;
  let razrElem=formElem.elements.payment;
  let razrValue=razrElem.value;
  // let razrErrorElem=razrElem.nextSibling;//вот не шмогла я этим способом добраться, какие только варианты не выбирал
  let razrErrorElem=document.getElementById('q');
  if (razrValue=='') {
    razrErrorElem.innerHTML="Выберите размещение";
    errCount++;
    if ( focusOnError ){
      razrElem.scrollIntoView();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function validCheck(focusOnError) {
  let errCount=0;
  let razrElem=formElem.elements.votes;
  let razrValue=razrElem.checked;
  let razrErrorElem=razrElem.nextSibling;
  if (!razrValue) {
    razrErrorElem.innerHTML="Отзывы нужно разрешить";
    errCount++;
    if ( focusOnError ){
      razrElem.focus();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function validDescription(focusOnError) {
  let errCount=0;
  let razrElem=formElem.elements.description;
  let razrValue=razrElem.value;
  let razrErrorElem=razrElem.nextSibling;
  if (razrValue=="") {
    razrErrorElem.innerHTML="Напишите пару слов";
    errCount++;
    if ( focusOnError ){
      razrElem.focus();
    }
  } else {
    razrErrorElem.innerHTML="";
  }
  return errCount;
};

function submitForm(eo) {
  eo=eo || window.event;
    let errCount=0;

  errCount+=validsitenamerazrab(!errCount);
  errCount+=validsitename(!errCount);
  errCount+=validsiteurl(!errCount);
  errCount+=validDate(!errCount);
  errCount+=validNumber(!errCount);
  errCount+=validEmail(!errCount);
  errCount+=validRubrik(!errCount);
  errCount+=validRadio(!errCount);
  errCount+=validCheck(!errCount);
  errCount+=validDescription(!errCount);

  if ( errCount )
  eo.preventDefault();
};