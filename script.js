"use strict";

var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
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

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
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
        formElem.appendChild(inputElem);
        break;
      }
    case "number": {
        let inputElem=document.createElement("input");
        inputElem.type="number";
        inputElem.name=elemDef.name;
        formElem.appendChild(inputElem);
        break;        
      }
    case "shorttext": {
        let inputElem=document.createElement("input");
        inputElem.type="text";
        inputElem.name=elemDef.name;
        formElem.appendChild(inputElem);
        break;        
      }
    case "combo": {
        let selectElem=document.createElement("select");
        formElem.appendChild(selectElem);
        let v = elemDef.variants;
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
        formElem.appendChild(radioElem);
        let radioText = document.createTextNode(a.text);
        console.log(a.text);
        formElem.appendChild(radioText);
        })
        break;        
      }
      case "check": {
        let inputElem=document.createElement("input");
        inputElem.type="checkbox";
        inputElem.name=elemDef.name;
        formElem.appendChild(inputElem);
        break;        
      }
      case "memo": {        
        let br = document.createElement("br");
        formElem.appendChild(br);
        let inputElem=document.createElement("textarea");
        inputElem.name=elemDef.name;
        formElem.appendChild(inputElem);
        break;        
      }
      case "submit": {
        let inputElem=document.createElement("input");
        inputElem.type="submit";
        inputElem.value=elemDef.caption;
        formElem.appendChild(inputElem);
        break;        
      }
    }
    let br = document.createElement("br");
    formElem.appendChild(br);
  });
};

formСreation( formDef1, document.forms.form1 );
formСreation( formDef2, document.forms.form2 );
