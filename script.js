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
    switch ( elemDef.kind ) {

      case "longtext": {
        let labelElem=document.createElement("label");
        labelElem.innerHTML=elemDef.label;
        let inputElem=document.createElement("input");
        inputElem.type="text";
        inputElem.name=elemDef.name;
        break;
      }

      case "longtext": {
        let labelElem=document.createElement("label");
        labelElem.innerHTML=elemDef.label;
        let inputElem=document.createElement("input");
        inputElem.type="number";
        inputElem.name=elemDef.name;
        break;
      }
    }
  });
};

formСreation(formDef1,document.forms.form1);
formСreation(formDef2,document.forms.form2);