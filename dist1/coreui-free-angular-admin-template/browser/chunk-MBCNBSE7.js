import{a as O}from"./chunk-WUEBFPOC.js";import{a as R,c as B,d as Oe}from"./chunk-MLLFSJOY.js";import{d as Be}from"./chunk-NYKC2XDX.js";import{a as Se,b as w,c as k,e as I,f as C,i as Q,m as _,o as be,p as N,q as ge,r as T,t as j,u as $,v as z,w as Ee,x as ve,y as Ce}from"./chunk-ELH4JLGB.js";import{$c as ye,Aa as S,Ad as K,Ba as ce,Bb as M,Bd as Y,Ca as s,Cb as P,Cd as Ge,Db as fe,Dd as ie,Ed as xe,Gd as L,Hb as he,Hd as G,Id as Re,Jd as Ue,M as g,Ma as i,Mc as Fe,N as me,Na as t,Oa as l,P as f,Pd as Me,Q as h,Qd as Pe,Rc as Z,Rd as ze,Sa as b,Tc as ue,Ua as u,V as de,Va as p,a as y,ad as we,cd as D,dd as A,fb as e,ga as F,gb as E,gd as V,hd as ke,ia as c,ja as v,kd as Ie,md as Ne,nd as Te,ob as se,od as De,pd as Ae,qd as Ve,sc as _e,td as J,uc as pe,ud as Le,vd as X,wd as H,xd as W,yd as ee,zd as te}from"./chunk-7ZEEEYEF.js";var nt=()=>({"height.px":100}),rt=()=>({g:2}),qe=(()=>{let d=class d{constructor(){}};d.\u0275fac=function(r){return new(r||d)},d.\u0275cmp=g({type:d,selectors:[["app-floating-labels"]],decls:277,vars:5,consts:[["xs","12"],["href","forms/floating-labels","name","Floating Label directive"],[1,"mb-4"],[1,"text-medium-emphasis","small"],["href","forms/floating-labels"],[1,"mb-3",3,"cFormFloating"],["cFormControl","","id","floatingInput","placeholder","name@example.com","type","email"],["cLabel","","for","floatingInput"],["cFormFloating",""],["cFormControl","","id","floatingPassword","placeholder","Password","type","password"],["cLabel","","for","floatingPassword"],["cForm","","cFormFloating",""],["cFormControl","","id","floatingInputValue","placeholder","name@example.com","type","email","value","test@example.com"],["cLabel","","for","floatingInputValue"],["href","forms/floating-labels#textareas"],["cFormControl","","id","floatingTextarea","placeholder","Leave a comment here","type","text"],["cLabel","","for","floatingTextarea"],["cFormControl","","id","floatingTextarea2","placeholder","Leave a comment here",3,"ngStyle"],["cLabel","","for","floatingTextarea2"],["href","forms/floating-labels#selects"],["aria-label","Floating label select example","cSelect","","id","floatingSelect"],["value","1"],["value","2"],["value","3"],["cLabel","","for","floatingSelect"],["href","forms/floating-labels#layout"],[3,"gutter"],["md",""],["cFormControl","","id","floatingInputGrid","placeholder","name@example.com","type","email","value","email@example.com"],["cLabel","","for","floatingInputGrid"],["aria-label","Floating label select example","cSelect","","id","floatingSelectGrid"],["cLabel","","for","floatingSelectGrid"]],template:function(r,o){r&1&&(i(0,"c-row"),e(1,`
  `),i(2,"c-col",0),e(3,`
    `),l(4,"app-docs-callout",1),e(5,`
  `),t(),e(6,`
  `),i(7,"c-col",0),e(8,`
    `),i(9,"c-card",2),e(10,`
      `),i(11,"c-card-header"),e(12,`
        `),i(13,"strong"),e(14,"Angular Floating labels"),t(),e(15,`
      `),t(),e(16,`
      `),i(17,"c-card-body"),e(18,`
        `),i(19,"p",3),e(20,`
          Wrap a pair of `),i(21,"code"),e(22,"<cFormControl>"),t(),e(23," and "),i(24,"code"),e(25,"<label>"),t(),e(26,`
          elements in `),i(27,"code"),e(28,"cFormControl"),t(),e(29,` to enable floating labels with textual form
          fields. A `),i(30,"code"),e(31,"placeholder"),t(),e(32," is required on each "),i(33,"code"),e(34,"<input>"),t(),e(35,`
          as our method of CSS-only floating labels uses the `),i(36,"code"),e(37,":placeholder-shown"),t(),e(38,`
          pseudo-element. Also note that the `),i(39,"code"),e(40,"<cFormControl>"),t(),e(41,` must come first so
          we can utilize a sibling selector (e.g., `),i(42,"code"),e(43,"~"),t(),e(44,`).
        `),t(),e(45,`
        `),i(46,"app-docs-example",4),e(47,`
          `),i(48,"div",5),e(49,`
            `),l(50,"input",6),e(51,`
            `),i(52,"label",7),e(53,"Email address"),t(),e(54,`
          `),t(),e(55,`
          `),i(56,"div",8),e(57,`
            `),l(58,"input",9),e(59,`
            `),i(60,"label",10),e(61,"Password"),t(),e(62,`
          `),t(),e(63,`
        `),t(),e(64,`
        `),i(65,"p",3),e(66,`
          When there's a `),i(67,"code"),e(68,"value"),t(),e(69," already defined, "),i(70,"code"),e(71,"<label>"),t(),e(72,`
          s will automatically adjust to their floated position.
        `),t(),e(73,`
        `),i(74,"app-docs-example",4),e(75,`
          `),i(76,"form",11),e(77,`
            `),l(78,"input",12),e(79,`
            `),i(80,"label",13),e(81,"Input with value"),t(),e(82,`
          `),t(),e(83,`
        `),t(),e(84,`
      `),t(),e(85,`
    `),t(),e(86,`
  `),t(),e(87,`
  `),i(88,"c-col",0),e(89,`
    `),i(90,"c-card",2),e(91,`
      `),i(92,"c-card-header"),e(93,`
        `),i(94,"strong"),e(95,"Angular Floating labels"),t(),e(96," "),i(97,"small"),e(98,"Textareas"),t(),e(99,`
      `),t(),e(100,`
      `),i(101,"c-card-body"),e(102,`
        `),i(103,"p",3),e(104,`
          By default, `),i(105,"code"),e(106,"<CFormTextarea>"),t(),e(107,`s will be the same height as
          `),i(108,"code"),e(109,"<input>"),t(),e(110,`s.
        `),t(),e(111,`
        `),i(112,"app-docs-example",14),e(113,`
          `),i(114,"div",8),e(115,`
            `),l(116,"input",15),e(117,`
            `),i(118,"label",16),e(119,"Comments"),t(),e(120,`
          `),t(),e(121,`
        `),t(),e(122,`
        `),i(123,"p",3),e(124,`
          To set a custom height on your `),i(125,"code"),e(126,"<CFormTextarea;>"),t(),e(127,`, do not use the
          `),i(128,"code"),e(129,"rows"),t(),e(130," attribute. Instead, set an explicit "),i(131,"code"),e(132,"height"),t(),e(133,` (either
          inline or via custom CSS).
        `),t(),e(134,`
        `),i(135,"app-docs-example",14),e(136,`
          `),i(137,"div",8),e(138,`
            `),l(139,"textarea",17),e(140,`
            `),i(141,"label",18),e(142,"Comments"),t(),e(143,`
          `),t(),e(144,`
        `),t(),e(145,`
      `),t(),e(146,`
    `),t(),e(147,`
  `),t(),e(148,`
  `),i(149,"c-col",0),e(150,`
    `),i(151,"c-card",2),e(152,`
      `),i(153,"c-card-header"),e(154,`
        `),i(155,"strong"),e(156,"Angular Floating labels"),t(),e(157," "),i(158,"small"),e(159,"Selects"),t(),e(160,`
      `),t(),e(161,`
      `),i(162,"c-card-body"),e(163,`
        `),i(164,"p",3),e(165,`
          Other than `),i(166,"code"),e(167,"<input>"),t(),e(168,`, floating labels are only available on
          `),i(169,"code"),e(170,"<cSelect>"),t(),e(171,`s. They work in the same way, but unlike
          `),i(172,"code"),e(173,"<input>"),t(),e(174,`s, they'll always show the
          `),i(175,"code"),e(176,"<label>"),t(),e(177,` in its floated state.
          `),i(178,"strong"),e(179,`
            Selects with `),i(180,"code"),e(181,"size"),t(),e(182," and "),i(183,"code"),e(184,"multiple"),t(),e(185,` are not supported.
          `),t(),e(186,`
        `),t(),e(187,`
        `),i(188,"app-docs-example",19),e(189,`
          `),i(190,"div",8),e(191,`
            `),i(192,"select",20),e(193,`
              `),i(194,"option"),e(195,"Open this select menu"),t(),e(196,`
              `),i(197,"option",21),e(198,"One"),t(),e(199,`
              `),i(200,"option",22),e(201,"Two"),t(),e(202,`
              `),i(203,"option",23),e(204,"Three"),t(),e(205,`
            `),t(),e(206,`
            `),i(207,"label",24),e(208,"Works with selects"),t(),e(209,`
          `),t(),e(210,`
        `),t(),e(211,`
      `),t(),e(212,`
    `),t(),e(213,`
  `),t(),e(214,`
  `),i(215,"c-col",0),e(216,`
    `),i(217,"c-card",2),e(218,`
      `),i(219,"c-card-header"),e(220,`
        `),i(221,"strong"),e(222,"Angular Floating labels"),t(),e(223," "),i(224,"small"),e(225,"Layout"),t(),e(226,`
      `),t(),e(227,`
      `),i(228,"c-card-body"),e(229,`
        `),i(230,"p",3),e(231,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),t(),e(232,`
        `),i(233,"app-docs-example",25),e(234,`
          `),i(235,"c-row",26),e(236,`
            `),i(237,"c-col",27),e(238,`
              `),i(239,"div",8),e(240,`
                `),l(241,"input",28),e(242,`
                `),i(243,"label",29),e(244,"Email address"),t(),e(245,`
              `),t(),e(246,`
            `),t(),e(247,`
            `),i(248,"c-col",27),e(249,`
              `),i(250,"div",8),e(251,`
                `),i(252,"select",30),e(253,`
                  `),i(254,"option"),e(255,"Open this select menu"),t(),e(256,`
                  `),i(257,"option",21),e(258,"One"),t(),e(259,`
                  `),i(260,"option",22),e(261,"Two"),t(),e(262,`
                  `),i(263,"option",23),e(264,"Three"),t(),e(265,`
                `),t(),e(266,`
                `),i(267,"label",31),e(268,"Works with selects"),t(),e(269,`
              `),t(),e(270,`
            `),t(),e(271,`
          `),t(),e(272,`
        `),t(),e(273,`
      `),t(),e(274,`
    `),t(),e(275,`
  `),t(),e(276,`
`),t()),r&2&&(c(48),s("cFormFloating",!0),c(91),s("ngStyle",se(3,nt)),c(96),s("gutter",se(4,rt)))},dependencies:[fe,R,B,D,A,V,J,Y,Ge,W,H,L,Re,G,_,j,$,C,Q]});let m=d;return m})();function lt(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Add Carrosal Image"),t(),i(8,"form",8),u("ngSubmit",function(){f(a);let r=p();return h(r.addCarrosalItem())}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),t(),i(13,"div",9)(14,"label",12),e(15,"Image:"),t(),i(16,"input",13),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t()(),i(17,"button",14),e(18,"Submit"),t()()()()()()()()}if(m&2){let a=p();c(8),s("formGroup",a.NewsForm)}}function ot(m,d){if(m&1){let a=b();i(0,"tr")(1,"td"),l(2,"img",23),t(),i(3,"td",21),e(4),t(),i(5,"td",21)(6,"button",24),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.toggleEditForm(o))}),e(7,"Edit"),t(),e(8,"\xA0 "),i(9,"button",25),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.deleteCarrosalItem(o._id))}),e(10,"Delete"),t()()()}if(m&2){let a=d.$implicit;c(2),s("src",a.imageUrl,F),c(2),E(a.name)}}function at(m,d){if(m&1){let a=b();i(0,"div",15)(1,"div",16)(2,"div",17)(3,"div",18)(4,"button",19),u("click",function(){f(a);let r=p();return h(r.toggleAddForm())}),e(5,"Add New Item"),t()()()(),l(6,"hr"),i(7,"table",20)(8,"thead")(9,"tr")(10,"th"),e(11,"Image"),t(),i(12,"th",21),e(13,"Image Name"),t(),i(14,"th",21),e(15,"Action"),t()()(),i(16,"tbody"),S(17,ot,11,2,"tr",22),t()()()}if(m&2){let a=p();c(17),s("ngForOf",a.NewsData)}}function mt(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Edit Carrosal Image"),t(),i(8,"form",8),u("ngSubmit",function(){f(a);let r=p();return h(r.updateCarrosalItem(r.selectedItem._id))}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),t(),i(13,"div",9)(14,"label",12),e(15,"Image:"),t(),i(16,"input",13),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t()(),i(17,"button",14),e(18,"Update"),t()()()()()()()()}if(m&2){let a=p();c(8),s("formGroup",a.NewsForm)}}var je=(()=>{let d=class d{constructor(n,r){this.service=n,this.fb=r,this.selectedItem={_id:"",name:"",imageUrl:""},this.showAddForm=!1,this.showEditForm=!1}ngOnInit(){this.initializeForm(),this.fetchCarrosalData()}initializeForm(){this.NewsForm=this.fb.group({name:["",k.required],image:[null]})}fetchCarrosalData(){this.service.getCarrosalData().subscribe(n=>{console.log(n),this.NewsData=n})}onFileChange(n){let r=n.target?.files?.[0];this.NewsForm.patchValue({image:r})}toggleAddForm(){this.showAddForm=!0,this.showEditForm=!1,this.resetForm()}toggleEditForm(n){this.selectedItem=y({},n),this.showEditForm=!0,this.showAddForm=!1}resetForm(){this.NewsForm.reset(),this.NewsForm.markAsUntouched(),this.NewsForm.markAsPristine()}addCarrosalItem(){let n=new FormData;n.append("name",this.NewsForm.value.name),n.append("image",this.NewsForm.value.image),this.service.addCarrosalItem(n).subscribe(r=>{console.log(r),this.fetchCarrosalData(),this.showAddForm=!1,location.reload()},r=>{console.error(r)})}updateCarrosalItem(n){let r=new FormData;r.append("name",this.NewsForm.value.name),r.append("image",this.NewsForm.value.image),this.service.updateCarrosalItem(n,r).subscribe(o=>{console.log(o),this.fetchCarrosalData(),this.showEditForm=!1,location.reload()},o=>{console.error(o)})}deleteCarrosalItem(n){this.service.deleteCarrosalItem(n).subscribe(r=>{console.log(r),this.fetchCarrosalData(),location.reload()},r=>{console.error(r)})}};d.\u0275fac=function(r){return new(r||d)(v(O),v(z))},d.\u0275cmp=g({type:d,selectors:[["app-form-controls"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","text-center",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","carrosalName",1,"form-label"],["type","text","id","carrosalName","formControlName","name",1,"form-control"],["for","carrosalImage",1,"form-label"],["type","file","id","carrosalImage",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary","mt-3"],[1,"text-center"],[1,"container"],[1,"row","justify-content-end"],[1,"col-auto"],[1,"btn","btn-success",3,"click"],[1,"table","table-bordered","table-striped"],[1,"text-right"],[4,"ngFor","ngForOf"],["alt","image",2,"height","150px","width","200px","float","left","margin-right","10px",3,"src"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(r,o){r&1&&S(0,lt,19,1,"div",0)(1,at,18,1,"div",1)(2,mt,19,1,"div",0),r&2&&(s("ngIf",o.showAddForm),c(),s("ngIf",!o.showAddForm&&!o.showEditForm),c(),s("ngIf",o.showEditForm))},dependencies:[M,P,_,w,I,C,N,T],styles:["[_nghost-%COMP%]   #exampleColorInput[_ngcontent-%COMP%]{min-width:2.5rem}[_nghost-%COMP%]   .color-box[_ngcontent-%COMP%]{min-width:2rem;min-height:2rem}"]});let m=d;return m})();var $e=(()=>{let d=class d{constructor(){}};d.\u0275fac=function(r){return new(r||d)},d.\u0275cmp=g({type:d,selectors:[["app-input-groups"]],decls:494,vars:4,consts:[["xs","12"],["href","forms/input-group","name","Input Group"],[1,"mb-4"],[1,"text-medium-emphasis","small"],["href","forms/input-group"],[1,"mb-3"],["cInputGroupText","","id","basic-addon1"],["aria-describedby","basic-addon1","aria-label","Username","cFormControl","","placeholder","Username"],["aria-describedby","basic-addon2","aria-label","Recipient's username","cFormControl","","placeholder","Recipient's username"],["cInputGroupText","","id","basic-addon2"],["cLabel","","for","basic-url"],["cInputGroupText","","id","basic-addon3"],["aria-describedby","basic-addon3","cFormControl","","id","basic-url"],["cInputGroupText",""],["aria-label","Amount (to the nearest dollar)","cFormControl",""],["aria-label","Username","cFormControl","","placeholder","Username"],["aria-label","Server","cFormControl","","placeholder","Server"],["aria-label","With textarea","cFormControl",""],["href","forms/input-group#wrapping"],[1,"flex-nowrap"],["cInputGroupText","","id","addon-wrapping"],["aria-describedby","addon-wrapping","aria-label","Username","cFormControl","","placeholder","Username"],["href","forms/input-group#sizing"],["sizing","sm",1,"mb-3"],["cInputGroupText","","id","inputGroup-sizing-sm"],["aria-describedby","inputGroup-sizing-sm","aria-label","Sizing example input","cFormControl",""],["cInputGroupText","","id","inputGroup-sizing-default"],["aria-describedby","inputGroup-sizing-default","aria-label","Sizing example input","cFormControl",""],["sizing","lg"],["cInputGroupText","","id","inputGroup-sizing-lg"],["aria-describedby","inputGroup-sizing-lg","aria-label","Sizing example input","cFormControl",""],["href","forms/input-group#checkboxes-and-radios"],["cFormCheckInput","","id","checkOne","type","checkbox"],["aria-label","Text input with checkbox","cFormControl",""],["cFormCheckInput","","id","radioOne","type","radio"],["aria-label","Text input with radio button","cFormControl",""],["href","forms/input-group#multiple-inputs"],["aria-label","First name","cFormControl",""],["aria-label","Last name","cFormControl",""],["href","forms/input-group#multiple-addons"],["aria-label","Dollar amount (with dot and two decimal places)","cFormControl",""],["href","forms/input-group#button-addons"],["cButton","","color","secondary","id","button-addon1","type","button","variant","outline"],["aria-describedby","button-addon1","aria-label","Example text with button addon","cFormControl","","placeholder",""],["aria-describedby","button-addon2","aria-label","Recipient's username","cFormControl","","placeholder","Recipient's username"],["cButton","","color","secondary","id","button-addon2","type","button","variant","outline"],["cButton","","color","secondary","type","button","variant","outline"],["aria-label","Example text with two button addons","cFormControl","","placeholder",""],["aria-label","Recipient's username with two button addons","cFormControl","","placeholder","Recipient's username"],["href","forms/input-group#buttons-with-dropdowns"],["cButton","","cDropdownToggle","","color","secondary","variant","outline"],["cDropdownMenu",""],["routerLink","./","cDropdownItem",""],["cDropdownDivider",""],["aria-label","Text input with dropdown button","cFormControl",""],["alignment","end"],["aria-label","Text input with 2 dropdown buttons","cFormControl",""],["href","forms/input-group#segmented-buttons"],["cButton","","cDropdownToggle","","color","secondary","variant","outline",3,"split"],[1,"visually-hidden"],["aria-label","Text input with segmented dropdown button","cFormControl",""],["cButton","","color","secondary","variant","outline"],["href","forms/input-group#custom-select"],["cInputGroupText","","for","inputGroupSelect01"],["cSelect","","id","inputGroupSelect01"],["value","1"],["value","2"],["value","3"],["cSelect","","id","inputGroupSelect02"],["cInputGroupText","","for","inputGroupSelect02"],["aria-label","Example select with button addon","cSelect","","id","inputGroupSelect03"],["aria-label","Example select with button addon","cSelect","","id","inputGroupSelect04"],["href","forms/input-group#custom-file-input"],["cInputGroupText","","for","inputGroupFile01"],["cFormControl","","id","inputGroupFile01","type","file"],["cFormControl","","id","inputGroupFile02","type","file"],["cInputGroupText","","for","inputGroupFile02"],["cButton","","color","secondary","id","inputGroupFileAddon03","type","button","variant","outline"],["aria-describedby","inputGroupFileAddon03","aria-label","Upload","cFormControl","","id","inputGroupFile03","type","file"],["aria-describedby","inputGroupFileAddon04","aria-label","Upload","cFormControl","","id","inputGroupFile04","type","file"],["cButton","","color","secondary","id","inputGroupFileAddon04","type","button","variant","outline"]],template:function(r,o){r&1&&(i(0,"c-row")(1,"c-col",0),l(2,"app-docs-callout",1),t(),i(3,"c-col",0)(4,"c-card",2)(5,"c-card-header"),e(6,`
        `),i(7,"strong"),e(8,"Angular Input group"),t(),e(9," "),i(10,"small"),e(11,"Basic example"),t(),e(12,`
      `),t(),i(13,"c-card-body")(14,"p",3),e(15," Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place "),i(16,"code"),e(17,"<label>"),t(),e(18,"s outside the input group. "),t(),i(19,"app-docs-example",4)(20,"c-input-group",5)(21,"span",6),e(22,"@"),t(),l(23,"input",7),t(),i(24,"c-input-group",5),l(25,"input",8),i(26,"span",9),e(27,"@example.com"),t()(),i(28,"label",10),e(29,"Your vanity URL"),t(),i(30,"c-input-group",5)(31,"span",11),e(32,"https://example.com/users/"),t(),l(33,"input",12),t(),i(34,"c-input-group",5)(35,"span",13),e(36,"$"),t(),l(37,"input",14),i(38,"span",13),e(39,".00"),t()(),i(40,"c-input-group",5),l(41,"input",15),i(42,"span",13),e(43,"@"),t(),l(44,"input",16),t(),i(45,"c-input-group")(46,"span",13),e(47,"With textarea"),t(),l(48,"textarea",17),t()()()()(),i(49,"c-col",0)(50,"c-card",2)(51,"c-card-header"),e(52,`
        `),i(53,"strong"),e(54,"Angular Input group"),t(),e(55," "),i(56,"small"),e(57,"Wrapping"),t(),e(58,`
      `),t(),i(59,"c-card-body")(60,"p",3),e(61," Input groups wrap by default via "),i(62,"code"),e(63,"flex-wrap: wrap"),t(),e(64," in order to accommodate custom form field validation within an input group. You may disable this with "),i(65,"code"),e(66,".flex-nowrap"),t(),e(67,". "),t(),i(68,"app-docs-example",18)(69,"c-input-group",19)(70,"span",20),e(71,"@"),t(),l(72,"input",21),t()()()()(),i(73,"c-col",0)(74,"c-card",2)(75,"c-card-header"),e(76,`
        `),i(77,"strong"),e(78,"Angular Input group"),t(),e(79," "),i(80,"small"),e(81,"Sizing"),t(),e(82,`
      `),t(),i(83,"c-card-body")(84,"p",3),e(85," Add the relative form sizing classes to the "),i(86,"code"),e(87,"<c-input-group>"),t(),e(88," itself and contents within will automatically resize\u2014no need for repeating the form control size classes on each element. "),t(),i(89,"p",3)(90,"strong"),e(91,"Sizing on the individual input group elements isn't supported."),t()(),i(92,"app-docs-example",22)(93,"c-input-group",23)(94,"span",24),e(95,"Small"),t(),l(96,"input",25),t(),i(97,"c-input-group",5)(98,"span",26),e(99,"Default"),t(),l(100,"input",27),t(),i(101,"c-input-group",28)(102,"span",29),e(103,"Large"),t(),l(104,"input",30),t()()()()(),i(105,"c-col",0)(106,"c-card",2)(107,"c-card-header"),e(108,`
        `),i(109,"strong"),e(110,"Angular Input group"),t(),e(111," "),i(112,"small"),e(113,"Checkboxes and radios"),t(),e(114,`
      `),t(),i(115,"c-card-body")(116,"p",3),e(117," Place any checkbox or radio option within an input group's addon instead of text. "),t(),i(118,"app-docs-example",31)(119,"c-input-group",5)(120,"span",13)(121,"div"),l(122,"input",32),t()(),l(123,"input",33),t(),i(124,"c-input-group")(125,"span",13)(126,"div"),l(127,"input",34),t()(),l(128,"input",35),t()()()()(),i(129,"c-col",0)(130,"c-card",2)(131,"c-card-header"),e(132,`
        `),i(133,"strong"),e(134,"Angular Input group"),t(),e(135," "),i(136,"small"),e(137,"Multiple inputs"),t(),e(138,`
      `),t(),i(139,"c-card-body")(140,"p",3),e(141," While multiple "),i(142,"code"),e(143,"<CFormInput>"),t(),e(144,"s are supported visually, validation styles are only available for input groups with a single "),i(145,"code"),e(146,"cFormControl"),t(),e(147,". "),t(),i(148,"app-docs-example",36)(149,"c-input-group")(150,"span",13),e(151,"First and last name"),t(),l(152,"input",37)(153,"input",38),t()()()()(),i(154,"c-col",0)(155,"c-card",2)(156,"c-card-header"),e(157,`
        `),i(158,"strong"),e(159,"Angular Input group"),t(),e(160," "),i(161,"small"),e(162,"Multiple addons"),t(),e(163,`
      `),t(),i(164,"c-card-body")(165,"p",3),e(166," Multiple add-ons are supported and can be mixed with checkbox and radio input versions.. "),t(),i(167,"app-docs-example",39)(168,"c-input-group",5)(169,"span",13),e(170,"$"),t(),i(171,"span",13),e(172,"0.00"),t(),l(173,"input",40),t(),i(174,"c-input-group"),l(175,"input",40),i(176,"span",13),e(177,"$"),t(),i(178,"span",13),e(179,"0.00"),t()()()()()(),i(180,"c-col",0)(181,"c-card",2)(182,"c-card-header"),e(183,`
        `),i(184,"strong"),e(185,"Angular Input group"),t(),e(186," "),i(187,"small"),e(188,"Button addons"),t(),e(189,`
      `),t(),i(190,"c-card-body")(191,"p",3),e(192," Button add-ons are supported. "),t(),i(193,"app-docs-example",41)(194,"c-input-group",5)(195,"button",42),e(196," Button "),t(),l(197,"input",43),t(),i(198,"c-input-group",5),l(199,"input",44),i(200,"button",45),e(201," Button "),t()(),i(202,"c-input-group",5)(203,"button",46),e(204," Button "),t(),i(205,"button",46),e(206," Button "),t(),l(207,"input",47),t(),i(208,"c-input-group"),l(209,"input",48),i(210,"button",46),e(211," Button "),t(),i(212,"button",46),e(213," Button "),t()()()()()(),i(214,"c-col",0)(215,"c-card",2)(216,"c-card-header"),e(217,`
        `),i(218,"strong"),e(219,"Angular Input group"),t(),e(220," "),i(221,"small"),e(222,"Buttons with dropdowns"),t(),e(223,`
      `),t(),i(224,"c-card-body")(225,"app-docs-example",49)(226,"c-input-group",5)(227,"c-dropdown")(228,"button",50),e(229," Dropdown "),t(),i(230,"ul",51)(231,"li")(232,"a",52),e(233,"Action"),t()(),i(234,"li")(235,"a",52),e(236,"Another action"),t()(),i(237,"li")(238,"a",52),e(239,"Something else here"),t()(),i(240,"li"),l(241,"hr",53),t(),i(242,"li")(243,"a",52),e(244,"Separated link"),t()()()(),l(245,"input",54),t(),i(246,"c-input-group",5),l(247,"input",54),i(248,"c-dropdown",55)(249,"button",50),e(250," Dropdown "),t(),i(251,"ul",51)(252,"li")(253,"a",52),e(254,"Action"),t()(),i(255,"li")(256,"a",52),e(257,"Another action"),t()(),i(258,"li")(259,"a",52),e(260,"Something else here"),t()(),i(261,"li"),l(262,"hr",53),t(),i(263,"li")(264,"a",52),e(265,"Separated link"),t()()()()(),i(266,"c-input-group")(267,"c-dropdown")(268,"button",50),e(269," Dropdown "),t(),i(270,"ul",51)(271,"li")(272,"a",52),e(273,"Action"),t()(),i(274,"li")(275,"a",52),e(276,"Another action"),t()(),i(277,"li")(278,"a",52),e(279,"Something else here"),t()(),i(280,"li"),l(281,"hr",53),t(),i(282,"li")(283,"a",52),e(284,"Separated link"),t()()()(),l(285,"input",56),i(286,"c-dropdown",55)(287,"button",50),e(288," Dropdown "),t(),i(289,"ul",51)(290,"li")(291,"a",52),e(292,"Other Action"),t()(),i(293,"li")(294,"a",52),e(295,"Another action"),t()(),i(296,"li")(297,"a",52),e(298,"Something else here"),t()(),i(299,"li"),l(300,"hr",53),t(),i(301,"li")(302,"a",52),e(303,"Separated link"),t()()()()()()()()(),i(304,"c-col",0)(305,"c-card",2)(306,"c-card-header"),e(307,`
        `),i(308,"strong"),e(309,"Angular Input group"),t(),e(310," "),i(311,"small"),e(312,"Segmented buttons"),t(),e(313,`
      `),t(),i(314,"c-card-body")(315,"app-docs-example",57)(316,"c-input-group",5)(317,"c-dropdown")(318,"button",46),e(319," Action "),t(),i(320,"button",58)(321,"span",59),e(322,"Toggle Dropdown"),t()(),i(323,"ul",51)(324,"li")(325,"a",52),e(326,"Action"),t()(),i(327,"li")(328,"a",52),e(329,"Another action"),t()(),i(330,"li")(331,"a",52),e(332,"Something else here"),t()(),i(333,"li"),l(334,"hr",53),t(),i(335,"li")(336,"a",52),e(337,"Separated link"),t()()()(),l(338,"input",60),t(),i(339,"c-input-group",5),l(340,"input",60),i(341,"c-dropdown",55)(342,"button",61),e(343," Action "),t(),i(344,"button",58)(345,"span",59),e(346,"Toggle Dropdown"),t()(),i(347,"ul",51)(348,"li")(349,"a",52),e(350,"Action"),t()(),i(351,"li")(352,"a",52),e(353,"Another action"),t()(),i(354,"li")(355,"a",52),e(356,"Something else here"),t()(),i(357,"li"),l(358,"hr",53),t(),i(359,"li")(360,"a",52),e(361,"Separated link"),t()()()()(),i(362,"c-input-group")(363,"c-dropdown")(364,"button",46),e(365," Action "),t(),i(366,"button",58)(367,"span",59),e(368,"Toggle Dropdown"),t()(),i(369,"ul",51)(370,"li")(371,"a",52),e(372,"Action"),t()(),i(373,"li")(374,"a",52),e(375,"Another action"),t()(),i(376,"li")(377,"a",52),e(378,"Something else here"),t()(),i(379,"li"),l(380,"hr",53),t(),i(381,"li")(382,"a",52),e(383,"Separated link"),t()()()(),l(384,"input",60),i(385,"c-dropdown",55)(386,"button",61),e(387," Action "),t(),i(388,"button",58)(389,"span",59),e(390,"Toggle Dropdown"),t()(),i(391,"ul",51)(392,"li")(393,"a",52),e(394,"Action"),t()(),i(395,"li")(396,"a",52),e(397,"Another action"),t()(),i(398,"li")(399,"a",52),e(400,"Something else here"),t()(),i(401,"li"),l(402,"hr",53),t(),i(403,"li")(404,"a",52),e(405,"Separated link"),t()()()()()()()()(),i(406,"c-col",0)(407,"c-card",2)(408,"c-card-header"),e(409,`
        `),i(410,"strong"),e(411,"Angular Input group"),t(),e(412," "),i(413,"small"),e(414,"Custom select"),t(),e(415,`
      `),t(),i(416,"c-card-body")(417,"app-docs-example",62)(418,"c-input-group",5)(419,"label",63),e(420," Options "),t(),i(421,"select",64)(422,"option"),e(423,"Choose..."),t(),i(424,"option",65),e(425,"One"),t(),i(426,"option",66),e(427,"Two"),t(),i(428,"option",67),e(429,"Three"),t()()(),i(430,"c-input-group",5)(431,"select",68)(432,"option"),e(433,"Choose..."),t(),i(434,"option",65),e(435,"One"),t(),i(436,"option",66),e(437,"Two"),t(),i(438,"option",67),e(439,"Three"),t()(),i(440,"label",69),e(441," Options "),t()(),i(442,"c-input-group",5)(443,"button",46),e(444," Button "),t(),i(445,"select",70)(446,"option"),e(447,"Choose..."),t(),i(448,"option",65),e(449,"One"),t(),i(450,"option",66),e(451,"Two"),t(),i(452,"option",67),e(453,"Three"),t()()(),i(454,"c-input-group")(455,"select",71)(456,"option"),e(457,"Choose..."),t(),i(458,"option",65),e(459,"One"),t(),i(460,"option",66),e(461,"Two"),t(),i(462,"option",67),e(463,"Three"),t()(),i(464,"button",46),e(465," Button "),t()()()()()(),i(466,"c-col",0)(467,"c-card",2)(468,"c-card-header"),e(469,`
        `),i(470,"strong"),e(471,"Angular Input group"),t(),e(472," "),i(473,"small"),e(474,"Custom file input"),t(),e(475,`
      `),t(),i(476,"c-card-body")(477,"app-docs-example",72)(478,"c-input-group",5)(479,"label",73),e(480," Upload "),t(),l(481,"input",74),t(),i(482,"c-input-group",5),l(483,"input",75),i(484,"label",76),e(485," Upload "),t()(),i(486,"c-input-group",5)(487,"button",77),e(488," Button "),t(),l(489,"input",78),t(),i(490,"c-input-group"),l(491,"input",79),i(492,"button",80),e(493," Button "),t()()()()()()()),r&2&&(c(320),s("split",!0),c(24),s("split",!0),c(22),s("split",!0),c(22),s("split",!0))},dependencies:[_e,R,B,D,A,V,K,Y,W,H,X,ie,L,G,Z,j,$,De,Ie,Ae,Ne,Te]});let m=d;return m})();var He=(()=>{let d=class d{constructor(){}};d.\u0275fac=function(r){return new(r||d)},d.\u0275cmp=g({type:d,selectors:[["app-ranges"]],decls:149,vars:0,consts:[["xs","12"],["href","forms/range","name","Range"],[1,"mb-4"],[1,"text-medium-emphasis","small"],["href","forms/range"],["cLabel","","for","customRange1"],["cFormControl","","id","customRange1","type","range"],["href","forms/range#disabled"],["cLabel","","for","disabledRange"],["cFormControl","","disabled","","id","disabledRange","type","range"],["href","forms/range#min-and-max"],["cLabel","","for","customRange2"],["cFormControl","","id","customRange2","max","5","min","0","type","range","value","3"],["href","forms/range#steps"],["cLabel","","for","customRange3"],["cFormControl","","id","customRange3","max","5","min","0","step","0.5","type","range","value","3"]],template:function(r,o){r&1&&(i(0,"c-row"),e(1,`
  `),i(2,"c-col",0),e(3,`
    `),l(4,"app-docs-callout",1),e(5,`
  `),t(),e(6,`
  `),i(7,"c-col",0),e(8,`
    `),i(9,"c-card",2),e(10,`
      `),i(11,"c-card-header"),e(12,`
        `),i(13,"strong"),e(14,"Angular Range"),t(),e(15," "),l(16,"small"),e(17,`
      `),t(),e(18,`
      `),i(19,"c-card-body"),e(20,`
        `),i(21,"p",3),e(22,`
          Create custom `),i(23,"code"),e(24,'<input type="range">'),t(),e(25,` controls
          with `),i(26,"code"),e(27,'<input cFormControl type="range">'),t(),e(28,`.
        `),t(),e(29,`
        `),i(30,"app-docs-example",4),e(31,`
          `),i(32,"label",5),e(33,"Example range"),t(),e(34,`
          `),l(35,"input",6),e(36,`
        `),t(),e(37,`
      `),t(),e(38,`
    `),t(),e(39,`
  `),t(),e(40,`
  `),i(41,"c-col",0),e(42,`
    `),i(43,"c-card",2),e(44,`
      `),i(45,"c-card-header"),e(46,`
        `),i(47,"strong"),e(48,"Angular Range"),t(),e(49," "),i(50,"small"),e(51,"Disabled"),t(),e(52,`
      `),t(),e(53,`
      `),i(54,"c-card-body"),e(55,`
        `),i(56,"p",3),e(57,`
          Add the `),i(58,"code"),e(59,"disabled"),t(),e(60,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),t(),e(61,`
        `),i(62,"app-docs-example",7),e(63,`
          `),i(64,"label",8),e(65,"Disabled range"),t(),e(66,`
          `),l(67,"input",9),e(68,`
        `),t(),e(69,`
      `),t(),e(70,`
    `),t(),e(71,`
  `),t(),e(72,`
  `),i(73,"c-col",0),e(74,`
    `),i(75,"c-card",2),e(76,`
      `),i(77,"c-card-header"),e(78,`
        `),i(79,"strong"),e(80,"Angular Range"),t(),e(81," "),i(82,"small"),e(83,"Min and max"),t(),e(84,`
      `),t(),e(85,`
      `),i(86,"c-card-body"),e(87,`
        `),i(88,"p",3),e(89,`
          Range inputs have implicit values for `),i(90,"code"),e(91,"min-0"),t(),e(92,` and
          `),i(93,"code"),e(94,"max-100"),t(),e(95,`, respectively.
          You may specify new values for those using the `),i(96,"code"),e(97,"min"),t(),e(98,` and
          `),i(99,"code"),e(100,"max"),t(),e(101,` attributes.
        `),t(),e(102,`
        `),i(103,"app-docs-example",10),e(104,`
          `),i(105,"label",11),e(106,"Example range"),t(),e(107,`
          `),l(108,"input",12),e(109,`
        `),t(),e(110,`
      `),t(),e(111,`
    `),t(),e(112,`
  `),t(),e(113,`
  `),i(114,"c-col",0),e(115,`
    `),i(116,"c-card",2),e(117,`
      `),i(118,"c-card-header"),e(119,`
        `),i(120,"strong"),e(121,"Angular Range"),t(),e(122," "),i(123,"small"),e(124,"Steps"),t(),e(125,`
      `),t(),e(126,`
      `),i(127,"c-card-body"),e(128,`
        `),i(129,"p",3),e(130,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),i(131,"code"),e(132,"step"),t(),e(133,` value. In the example below,
          we double the number of steps by using
          `),i(134,"code"),e(135,'step="0.5"'),t(),e(136,`.
        `),t(),e(137,`
        `),i(138,"app-docs-example",13),e(139,`
          `),i(140,"label",14),e(141,"Example range"),t(),e(142,`
          `),l(143,"input",15),e(144,`
        `),t(),e(145,`
      `),t(),e(146,`
    `),t(),e(147,`
  `),t(),e(148,`
`),t())},dependencies:[R,B,D,A,V,Y,W,L,G]});let m=d;return m})();var We=(()=>{let d=class d{constructor(){}};d.\u0275fac=function(r){return new(r||d)},d.\u0275cmp=g({type:d,selectors:[["app-select"]],decls:190,vars:0,consts:[["xs","12"],["href","forms/select","name","Form Select"],[1,"mb-4"],["href","forms/select"],["aria-label","Default select example","cSelect",""],["value","1"],["value","2"],["value","3"],[1,"text-medium-emphasis","small"],["href","forms/select#sizing"],["aria-label","Large select example","cSelect","","sizing","lg",1,"mb-3"],["aria-label","Small select example","cSelect","","sizing","sm",1,"mb-3"],["aria-label","Multiple select example","cSelect","","multiple","","sizing","lg"],["aria-label","Multiple select example","cSelect","","multiple","","size","3","sizing","lg"],["value","4"],["href","forms/select#disabled"],["aria-label","Disabled select example","cSelect","","disabled",""],["selected","","value","2"]],template:function(r,o){r&1&&(i(0,"c-row"),e(1,`
  `),i(2,"c-col",0),e(3,`
    `),l(4,"app-docs-callout",1),e(5,`
  `),t(),e(6,`
  `),i(7,"c-col",0),e(8,`
    `),i(9,"c-card",2),e(10,`
      `),i(11,"c-card-header"),e(12,`
        `),i(13,"strong"),e(14,"Angular Select"),t(),e(15," "),i(16,"small"),e(17,"Default"),t(),e(18,`
      `),t(),e(19,`
      `),i(20,"c-card-body"),e(21,`
        `),i(22,"app-docs-example",3),e(23,`
          `),i(24,"select",4),e(25,`
            `),i(26,"option"),e(27,"Open this select menu"),t(),e(28,`
            `),i(29,"option",5),e(30,"One"),t(),e(31,`
            `),i(32,"option",6),e(33,"Two"),t(),e(34,`
            `),i(35,"option",7),e(36,"Three"),t(),e(37,`
          `),t(),e(38,`
        `),t(),e(39,`
      `),t(),e(40,`
    `),t(),e(41,`
  `),t(),e(42,`
  `),i(43,"c-col",0),e(44,`
    `),i(45,"c-card",2),e(46,`
      `),i(47,"c-card-header"),e(48,`
        `),i(49,"strong"),e(50,"Angular Select"),t(),e(51," "),i(52,"small"),e(53,"Sizing"),t(),e(54,`
      `),t(),e(55,`
      `),i(56,"c-card-body"),e(57,`
        `),i(58,"p",8),e(59,`
          You may also choose from small and large custom selects to match our similarly sized
          text inputs.
        `),t(),e(60,`
        `),i(61,"app-docs-example",9),e(62,`
          `),i(63,"select",10),e(64,`
            `),i(65,"option"),e(66,"Open this select menu"),t(),e(67,`
            `),i(68,"option",5),e(69,"One"),t(),e(70,`
            `),i(71,"option",6),e(72,"Two"),t(),e(73,`
            `),i(74,"option",7),e(75,"Three"),t(),e(76,`
          `),t(),e(77,`
          `),i(78,"select",11),e(79,`
            `),i(80,"option"),e(81,"Open this select menu"),t(),e(82,`
            `),i(83,"option",5),e(84,"One"),t(),e(85,`
            `),i(86,"option",6),e(87,"Two"),t(),e(88,`
            `),i(89,"option",7),e(90,"Three"),t(),e(91,`
          `),t(),e(92,`
        `),t(),e(93,`
        `),i(94,"p",8),e(95,`
          The `),i(96,"code"),e(97,"multiple"),t(),e(98,` attribute is also supported:
        `),t(),e(99,`
        `),i(100,"app-docs-example",9),e(101,`
          `),i(102,"select",12),e(103,`
            `),i(104,"option"),e(105,"Open this select menu"),t(),e(106,`
            `),i(107,"option",5),e(108,"One"),t(),e(109,`
            `),i(110,"option",6),e(111,"Two"),t(),e(112,`
            `),i(113,"option",7),e(114,"Three"),t(),e(115,`
          `),t(),e(116,`
        `),t(),e(117,`
        `),i(118,"p",8),e(119,`
          As is the `),i(120,"code"),e(121,"html size"),t(),e(122,` property:
        `),t(),e(123,`
        `),i(124,"app-docs-example",9),e(125,`
          `),i(126,"select",13),e(127,`
            `),i(128,"option"),e(129,"Open this select menu"),t(),e(130,`
            `),i(131,"option",5),e(132,"One"),t(),e(133,`
            `),i(134,"option",6),e(135,"Two"),t(),e(136,`
            `),i(137,"option",7),e(138,"Three"),t(),e(139,`
            `),i(140,"option",14),e(141,"Four"),t(),e(142,`
          `),t(),e(143,`
        `),t(),e(144,`
      `),t(),e(145,`
    `),t(),e(146,`
  `),t(),e(147,`
  `),i(148,"c-col",0),e(149,`
    `),i(150,"c-card",2),e(151,`
      `),i(152,"c-card-header"),e(153,`
        `),i(154,"strong"),e(155,"Angular Select"),t(),e(156," "),i(157,"small"),e(158,"Disabled"),t(),e(159,`
      `),t(),e(160,`
      `),i(161,"c-card-body"),e(162,`
        `),i(163,"p",8),e(164,`
          Add the `),i(165,"code"),e(166,"disabled"),t(),e(167,` boolean attribute on a select to give it a grayed out
          appearance and remove pointer events.
        `),t(),e(168,`
        `),i(169,"app-docs-example",15),e(170,`
          `),i(171,"select",16),e(172,`
            `),i(173,"option"),e(174,"Open this select menu"),t(),e(175,`
            `),i(176,"option",5),e(177,"One"),t(),e(178,`
            `),i(179,"option",17),e(180,"Selected: Two"),t(),e(181,`
            `),i(182,"option",7),e(183,"Three"),t(),e(184,`
          `),t(),e(185,`
        `),t(),e(186,`
      `),t(),e(187,`
    `),t(),e(188,`
  `),t(),e(189,`
`),t())},dependencies:[R,B,D,A,V,H,L,G,j,$]});let m=d;return m})();var Ye=(()=>{let d=class d{constructor(n){this.formBuilder=n,this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control("two")}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:"two",disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:"Radio2"})})})}setCheckBoxValue(n){let r=this.formGroup.controls.btnCheckGroup,o=r.get(n)?.value,x=y({},r.value);x[n]=!o,r.patchValue(x)}setRadioValue(n){this.formGroup.controls.btnRadioGroup.setValue({radio1:n})}};d.\u0275fac=function(r){return new(r||d)(v(Ee))},d.\u0275cmp=g({type:d,selectors:[["app-checks-radios"]],decls:597,vars:10,consts:[["xs","12"],["href","forms/checks-radios","name","Checks and Radios"],["cForm","",3,"formGroup"],[1,"mb-4"],["href","forms/checks-radios"],["formGroupName","flexCheckGroup"],["cFormCheckInput","","formControlName","checkOne","id","checkOne","type","checkbox"],["cFormCheckLabel","","for","checkOne"],["cFormCheckInput","","formControlName","checkTwo","id","checkTwo","type","checkbox",3,"checked"],["cFormCheckLabel","","for","checkTwo"],[1,"text-medium-emphasis","small"],["href","forms/checks-radios#disabled"],["formGroupName","flexCheckGroupDisabled"],["cFormCheckInput","","formControlName","checkThree","id","checkThree","type","checkbox"],["cFormCheckLabel","","for","checkThree"],["cFormCheckInput","","formControlName","checkFour","id","checkFour","type","checkbox"],["cFormCheckLabel","","for","checkFour"],["href","forms/checks-radios#radios"],["formGroupName","flexRadioGroup"],["cFormCheckInput","","formControlName","flexRadioDefault","type","radio","value","one"],["cFormCheckLabel",""],["cFormCheckInput","","formControlName","flexRadioDefault","type","radio","value","two"],["href","forms/checks-radios#disabled-1"],["formGroupName","flexRadioGroupDisabled"],["href","forms/checks-radios#switches"],[3,"switch"],["cFormCheckInput","","type","checkbox"],["cFormCheckInput","","checked","","type","checkbox"],["cFormCheckInput","","disabled","","type","checkbox"],["cFormCheckInput","","checked","","disabled","","type","checkbox"],["href","forms/checks-radios#sizes"],["sizing","lg","switch",""],["sizing","xl","switch",""],["href","forms/checks-radios#default-stacked"],["cFormCheckInput","","id","stackOne","type","checkbox"],["cFormCheckLabel","","for","stackOne"],["cFormCheckInput","","disabled","","id","stackTwo","type","checkbox"],["cFormCheckLabel","","for","stackTwo"],["cFormCheckInput","","checked","","id","radioStack1","name","radioStack","type","radio"],["cFormCheckLabel","","for","radioStack1"],["cFormCheckInput","","id","radioStack2","name","radioStack","type","radio"],["cFormCheckLabel","","for","radioStack2"],["cFormCheckInput","","disabled","","id","radioStack3","name","radioStack","type","radio"],["cFormCheckLabel","","for","radioStack3"],["href","forms/checks-radios#inline"],[3,"inline"],["cFormCheckInput","","id","inline1","type","checkbox"],["cFormCheckLabel","","for","inline1"],["inline",""],["cFormCheckInput","","id","inline2","type","checkbox"],["cFormCheckLabel","","for","inline2"],["cFormCheckInput","","disabled","","id","inline3","type","checkbox"],["cFormCheckLabel","","for","inline3"],["cFormCheckInput","","checked","","id","radioinline1","name","radioinline","type","radio"],["cFormCheckLabel","","for","radioinline1"],["cFormCheckInput","","id","radioinline2","name","radioinline","type","radio"],["cFormCheckLabel","","for","radioinline2"],["cFormCheckInput","","disabled","","id","radioinline3","name","radioinline","type","radio"],["cFormCheckLabel","","for","radioinline3"],["href","forms/checks-radios#without-labels"],["cFormCheckInput","","id","nolabelCheck","name","nolabelCheck","type","checkbox"],["cFormCheckInput","","id","nolabelRadio","name","nolabelRadio","type","radio"],["href","forms/checks-radios#toggle-buttons"],["formGroupName","btnCheckGroup"],["aria-label","Basic checkbox toggle button group","role","group"],["formControlName","checkbox1","type","checkbox",1,"btn-check"],["cButton","","cFormCheckLabel","",3,"click"],["formControlName","checkbox2","type","checkbox",1,"btn-check"],["formControlName","checkbox3","type","checkbox",1,"btn-check"],["formGroupName","btnRadioGroup"],["aria-label","Basic radio toggle button group","role","group"],["formControlName","radio1","id","radio1","type","radio","value","Radio1",1,"btn-check"],["cButton","","cFormCheckLabel","","for","radio1","variant","ghost",3,"click"],["formControlName","radio1","id","radio2","type","radio","value","Radio2",1,"btn-check"],["cButton","","cFormCheckLabel","","for","radio2","variant","ghost",3,"click"],["formControlName","radio1","id","radio3","type","radio","value","Radio3",1,"btn-check"],["cButton","","cFormCheckLabel","","for","radio3","variant","ghost",3,"click"],["cButton","","cFormCheckLabel","","variant","outline",3,"click"],["formControlName","radio1","id","radio1o","type","radio","value","Radio1",1,"btn-check"],["cButton","","cFormCheckLabel","","color","danger","for","radio1o","variant","outline",3,"click"],["formControlName","radio1","id","radio2o","type","radio","value","Radio2",1,"btn-check"],["cButton","","cFormCheckLabel","","color","success","for","radio2o","variant","outline",3,"click"],["formControlName","radio1","id","radio3o","type","radio","value","Radio3",1,"btn-check"],["cButton","","color","secondary","for","radio3o","variant","outline",3,"click"]],template:function(r,o){r&1&&(i(0,"c-row"),e(1,`
  `),i(2,"c-col",0),e(3,`
    `),l(4,"app-docs-callout",1),e(5,`
  `),t(),e(6,`
  `),i(7,"form",2),e(8,`
    `),i(9,"c-col",0),e(10,`
      `),i(11,"c-card",3),e(12,`
        `),i(13,"c-card-header"),e(14,`
          `),i(15,"strong"),e(16,"Angular Checkbox"),t(),e(17,`
        `),t(),e(18,`
        `),i(19,"c-card-body"),e(20,`
          `),i(21,"app-docs-example",4),e(22,`
            `),i(23,"div",5),e(24,`
              `),i(25,"c-form-check"),e(26,`
                `),l(27,"input",6),e(28,`
                `),i(29,"label",7),e(30,"Default checkbox"),t(),e(31,`
              `),t(),e(32,`
              `),i(33,"c-form-check"),e(34,`
                `),l(35,"input",8),e(36,`
                `),i(37,"label",9),e(38,"Checked checkbox"),t(),e(39,`
              `),t(),e(40,`
            `),t(),e(41,`
          `),t(),e(42,`
        `),t(),e(43,`
      `),t(),e(44,`
    `),t(),e(45,`
    `),i(46,"c-col",0),e(47,`
      `),i(48,"c-card",3),e(49,`
        `),i(50,"c-card-header"),e(51,`
          `),i(52,"strong"),e(53,"Angular Checkbox"),t(),e(54," "),i(55,"small"),e(56,"Disabled"),t(),e(57,`
        `),t(),e(58,`
        `),i(59,"c-card-body"),e(60,`
          `),i(61,"p",10),e(62,`
            Add the `),i(63,"code"),e(64,"disabled"),t(),e(65," attribute and the associated "),i(66,"code"),e(67,"<label>"),t(),e(68,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),t(),e(69,`
          `),i(70,"app-docs-example",11),e(71,`
            `),i(72,"div",12),e(73,`
              `),i(74,"c-form-check"),e(75,`
                `),l(76,"input",13),e(77,`
                `),i(78,"label",14),e(79,"Disabled checkbox"),t(),e(80,`
              `),t(),e(81,`
              `),i(82,"c-form-check"),e(83,`
                `),l(84,"input",15),e(85,`
                `),i(86,"label",16),e(87,"Disabled checked checkbox"),t(),e(88,`
              `),t(),e(89,`
            `),t(),e(90,`
          `),t(),e(91,`
        `),t(),e(92,`
      `),t(),e(93,`
    `),t(),e(94,`
    `),i(95,"c-col",0),e(96,`
      `),i(97,"c-card",3),e(98,`
        `),i(99,"c-card-header"),e(100,`
          `),i(101,"strong"),e(102,"Angular Radio"),t(),e(103,`
        `),t(),e(104,`
        `),i(105,"c-card-body"),e(106,`
          `),i(107,"app-docs-example",17),e(108,`
            `),i(109,"div",18),e(110,`
              `),i(111,"c-form-check"),e(112,`
                `),l(113,"input",19),e(114,`
                `),i(115,"label",20),e(116,"Default radio"),t(),e(117,`
              `),t(),e(118,`
              `),i(119,"c-form-check"),e(120,`
                `),l(121,"input",21),e(122,`
                `),i(123,"label",20),e(124,"Checked radio"),t(),e(125,`
              `),t(),e(126,`
            `),t(),e(127,`
          `),t(),e(128,`
        `),t(),e(129,`
      `),t(),e(130,`
    `),t(),e(131,`
    `),i(132,"c-col",0),e(133,`
      `),i(134,"c-card",3),e(135,`
        `),i(136,"c-card-header"),e(137,`
          `),i(138,"strong"),e(139,"Angular Radio"),t(),e(140," "),i(141,"small"),e(142,"Disabled"),t(),e(143,`
        `),t(),e(144,`
        `),i(145,"c-card-body"),e(146,`
          `),i(147,"p",10),e(148,`
            Add the `),i(149,"code"),e(150,"disabled"),t(),e(151," attribute and the associated "),i(152,"code"),e(153,"<label>"),t(),e(154,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),t(),e(155,`
          `),i(156,"app-docs-example",22),e(157,`
            `),i(158,"div",23),e(159,`
              `),i(160,"c-form-check"),e(161,`
                `),l(162,"input",19),e(163,`
                `),i(164,"label",20),e(165,"Default radio"),t(),e(166,`
              `),t(),e(167,`
              `),i(168,"c-form-check"),e(169,`
                `),l(170,"input",21),e(171,`
                `),i(172,"label",20),e(173,"Checked radio"),t(),e(174,`
              `),t(),e(175,`
            `),t(),e(176,`
          `),t(),e(177,`
        `),t(),e(178,`
      `),t(),e(179,`
    `),t(),e(180,`
    `),i(181,"c-col",0),e(182,`
      `),i(183,"c-card",3),e(184,`
        `),i(185,"c-card-header"),e(186,`
          `),i(187,"strong"),e(188,"Angular Switches"),t(),e(189,`
        `),t(),e(190,`
        `),i(191,"c-card-body"),e(192,`
          `),i(193,"p",10),e(194,`
            A switch has the markup of a custom checkbox but uses the `),i(195,"code"),e(196,"switch"),t(),e(197,` boolean
            properly to render a toggle switch. Switches also support the `),i(198,"code"),e(199,"disabled"),t(),e(200,`
            attribute.
          `),t(),e(201,`
          `),i(202,"app-docs-example",24),e(203,`
            `),i(204,"c-form-check",25),e(205,`
              `),l(206,"input",26),e(207,`
              `),i(208,"label",20),e(209,"Default switch checkbox input"),t(),e(210,`
            `),t(),e(211,`
            `),i(212,"c-form-check",25),e(213,`
              `),l(214,"input",27),e(215,`
              `),i(216,"label",20),e(217,"Checked switch checkbox input"),t(),e(218,`
            `),t(),e(219,`
            `),i(220,"c-form-check",25),e(221,`
              `),l(222,"input",28),e(223,`
              `),i(224,"label",20),e(225,"Default switch checkbox input"),t(),e(226,`
            `),t(),e(227,`
            `),i(228,"c-form-check",25),e(229,`
              `),l(230,"input",29),e(231,`
              `),i(232,"label",20),e(233,"Checked switch checkbox input"),t(),e(234,`
            `),t(),e(235,`
          `),t(),e(236,`
        `),t(),e(237,`
      `),t(),e(238,`
    `),t(),e(239,`
    `),i(240,"c-col",0),e(241,`
      `),i(242,"c-card",3),e(243,`
        `),i(244,"c-card-header"),e(245,`
          `),i(246,"strong"),e(247,"Angular Switches"),t(),e(248," "),i(249,"small"),e(250,"Sizes"),t(),e(251,`
        `),t(),e(252,`
        `),i(253,"c-card-body"),e(254,`
          `),i(255,"app-docs-example",30),e(256,`
            `),i(257,"c-form-check",25),e(258,`
              `),l(259,"input",26),e(260,`
              `),i(261,"label",20),e(262,"Default switch checkbox input"),t(),e(263,`
            `),t(),e(264,`
            `),i(265,"c-form-check",31),e(266,`
              `),l(267,"input",26),e(268,`
              `),i(269,"label",20),e(270,"Large switch checkbox input"),t(),e(271,`
            `),t(),e(272,`
            `),i(273,"c-form-check",32),e(274,`
              `),l(275,"input",27),e(276,`
              `),i(277,"label",20),e(278,"Extra large switch checkbox input"),t(),e(279,`
            `),t(),e(280,`
          `),t(),e(281,`
        `),t(),e(282,`
      `),t(),e(283,`
    `),t(),e(284,`
    `),i(285,"c-col",0),e(286,`
      `),i(287,"c-card",3),e(288,`
        `),i(289,"c-card-header"),e(290,`
          `),i(291,"strong"),e(292,"Angular Checks and Radios"),t(),e(293," "),i(294,"small"),e(295,"Default layout (stacked)"),t(),e(296,`
        `),t(),e(297,`
        `),i(298,"c-card-body"),e(299,`
          `),i(300,"p",10),e(301,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),t(),e(302,`
          `),i(303,"app-docs-example",33),e(304,`
            `),i(305,"c-form-check"),e(306,`
              `),l(307,"input",34),e(308,`
              `),i(309,"label",35),e(310,"Default checkbox"),t(),e(311,`
            `),t(),e(312,`
            `),i(313,"c-form-check"),e(314,`
              `),l(315,"input",36),e(316,`
              `),i(317,"label",37),e(318,"Disabled checkbox"),t(),e(319,`
            `),t(),e(320,`
          `),t(),e(321,`
          `),i(322,"app-docs-example",33),e(323,`
            `),i(324,"c-form-check"),e(325,`
              `),l(326,"input",38),e(327,`
              `),i(328,"label",39),e(329,"Default radio"),t(),e(330,`
            `),t(),e(331,`
            `),i(332,"c-form-check"),e(333,`
              `),l(334,"input",40),e(335,`
              `),i(336,"label",41),e(337,"Second radio"),t(),e(338,`
            `),t(),e(339,`
            `),i(340,"c-form-check"),e(341,`
              `),l(342,"input",42),e(343,`
              `),i(344,"label",43),e(345,"Disabled radio"),t(),e(346,`
            `),t(),e(347,`
          `),t(),e(348,`
        `),t(),e(349,`
      `),t(),e(350,`
    `),t(),e(351,`
    `),i(352,"c-col",0),e(353,`
      `),i(354,"c-card",3),e(355,`
        `),i(356,"c-card-header"),e(357,`
          `),i(358,"strong"),e(359,"Angular Checks and Radios"),t(),e(360," "),i(361,"small"),e(362,"Inline"),t(),e(363,`
        `),t(),e(364,`
        `),i(365,"c-card-body"),e(366,`
          `),i(367,"p",10),e(368,`
            Group checkboxes or radios on the same horizontal row by adding `),i(369,"code"),e(370,"inline"),t(),e(371,`
            boolean property to any `),i(372,"code"),e(373,"<c-form-check>"),t(),e(374,`.
          `),t(),e(375,`
          `),i(376,"app-docs-example",44),e(377,`
            `),i(378,"c-form-check",45),e(379,`
              `),l(380,"input",46),e(381,`
              `),i(382,"label",47),e(383,"1"),t(),e(384,`
            `),t(),e(385,`
            `),i(386,"c-form-check",48),e(387,`
              `),l(388,"input",49),e(389,`
              `),i(390,"label",50),e(391,"2"),t(),e(392,`
            `),t(),e(393,`
            `),i(394,"c-form-check",48),e(395,`
              `),l(396,"input",51),e(397,`
              `),i(398,"label",52),e(399,"3 (disabled)"),t(),e(400,`
            `),t(),e(401,`

          `),t(),e(402,`
          `),i(403,"app-docs-example",44),e(404,`
            `),i(405,"c-form-check",48),e(406,`
              `),l(407,"input",53),e(408,`
              `),i(409,"label",54),e(410,"1"),t(),e(411,`
            `),t(),e(412,`
            `),i(413,"c-form-check",48),e(414,`
              `),l(415,"input",55),e(416,`
              `),i(417,"label",56),e(418,"2"),t(),e(419,`
            `),t(),e(420,`
            `),i(421,"c-form-check",48),e(422,`
              `),l(423,"input",57),e(424,`
              `),i(425,"label",58),e(426,"3 (disabled)"),t(),e(427,`
            `),t(),e(428,`
          `),t(),e(429,`
        `),t(),e(430,`
      `),t(),e(431,`
    `),t(),e(432,`
    `),i(433,"c-col",0),e(434,`
      `),i(435,"c-card",3),e(436,`
        `),i(437,"c-card-header"),e(438,`
          `),i(439,"strong"),e(440,"Angular Checks and Radios"),t(),e(441," "),i(442,"small"),e(443,"Without labels"),t(),e(444,`
        `),t(),e(445,`
        `),i(446,"c-card-body"),e(447,`
          `),i(448,"p",10),e(449,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),i(450,"code"),e(451,"aria-label"),t(),e(452,`).
          `),t(),e(453,`
          `),i(454,"app-docs-example",59),e(455,`
            `),i(456,"div"),e(457,`
              `),l(458,"input",60),e(459,`
            `),t(),e(460,`
            `),i(461,"div"),e(462,`
              `),l(463,"input",61),e(464,`
            `),t(),e(465,`
          `),t(),e(466,`
        `),t(),e(467,`
      `),t(),e(468,`
    `),t(),e(469,`
    `),i(470,"c-col",0),e(471,`
      `),i(472,"c-card",3),e(473,`
        `),i(474,"c-card-header"),e(475,`
          `),i(476,"strong"),e(477,"Toggle buttons"),t(),e(478,`
        `),t(),e(479,`
        `),i(480,"c-card-body"),e(481,`
          `),i(482,"p",10),e(483,`
            Create button-like checkboxes and radio buttons by using `),i(484,"code"),e(485,"button"),t(),e(486,` boolean
            property on the `),i(487,"code"),e(488,"<CFormCheck>"),t(),e(489,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),t(),e(490,`
          `),i(491,"app-docs-example",62),e(492,`
            `),i(493,"div",63),e(494,`
              `),i(495,"c-button-group",64),e(496,`
                `),l(497,"input",65),e(498,`
                `),i(499,"label",66),u("click",function(){return o.setCheckBoxValue("checkbox1")}),e(500,"Checkbox 1"),t(),e(501,`

                `),l(502,"input",67),e(503,`
                `),i(504,"label",66),u("click",function(){return o.setCheckBoxValue("checkbox2")}),e(505,"Checkbox 2"),t(),e(506,`

                `),l(507,"input",68),e(508,`
                `),i(509,"label",66),u("click",function(){return o.setCheckBoxValue("checkbox3")}),e(510,"Disabled 3"),t(),e(511,`
              `),t(),e(512,`
            `),t(),e(513,`
          `),t(),e(514,`
          `),i(515,"app-docs-example"),e(516,`
            `),i(517,"div",69),e(518,`
              `),i(519,"c-button-group",70),e(520,`
                `),l(521,"input",71),e(522,`
                `),i(523,"label",72),u("click",function(){return o.setRadioValue("Radio1")}),e(524,"Radio 1"),t(),e(525,`

                `),l(526,"input",73),e(527,`
                `),i(528,"label",74),u("click",function(){return o.setRadioValue("Radio2")}),e(529,"Radio 2"),t(),e(530,`
                `),l(531,"input",75),e(532,`
                `),i(533,"label",76),u("click",function(){return o.setRadioValue("Radio3")}),e(534,"Radio3"),t(),e(535,`
              `),t(),e(536,`
            `),t(),e(537,`
          `),t(),e(538,`
          `),i(539,"h5"),e(540,"Outlined styles"),t(),e(541,`
          `),i(542,"p",10),e(543,`
            Different variants of button, such at the various outlined styles, are supported.
          `),t(),e(544,`
          `),i(545,"app-docs-example",62),e(546,`
            `),i(547,"div",63),e(548,`
              `),i(549,"c-button-group",64),e(550,`
                `),l(551,"input",65),e(552,`
                `),i(553,"label",77),u("click",function(){return o.setCheckBoxValue("checkbox1")}),e(554,"Checkbox 1"),t(),e(555,`

                `),l(556,"input",67),e(557,`
                `),i(558,"label",77),u("click",function(){return o.setCheckBoxValue("checkbox2")}),e(559,"Checkbox 2"),t(),e(560,`

                `),l(561,"input",68),e(562,`
                `),i(563,"label",77),u("click",function(){return o.setCheckBoxValue("checkbox3")}),e(564,`Disabled
                  3`),t(),e(565,`
              `),t(),e(566,`
            `),t(),e(567,`
          `),t(),e(568,`
          `),i(569,"app-docs-example"),e(570,`
            `),i(571,"div",69),e(572,`
              `),i(573,"c-button-group",70),e(574,`
                `),l(575,"input",78),e(576,`
                `),i(577,"label",79),u("click",function(){return o.setRadioValue("Radio1")}),e(578,"Radio 1"),t(),e(579,`

                `),l(580,"input",80),e(581,`
                `),i(582,"label",81),u("click",function(){return o.setRadioValue("Radio2")}),e(583,"Radio 2"),t(),e(584,`

                `),l(585,"input",82),e(586,`
                `),i(587,"label",83),u("click",function(){return o.setRadioValue("Radio3")}),e(588,"Radio3"),t(),e(589,`
              `),t(),e(590,`
            `),t(),e(591,`
          `),t(),e(592,`
        `),t(),e(593,`
      `),t(),e(594,`
    `),t(),e(595,`
  `),t(),e(596,`
`),t()),r&2&&(c(7),s("formGroup",o.formGroup),c(28),s("checked",!0),c(169),s("switch",!0),c(8),s("switch",!0),c(8),s("switch",!0),c(8),s("switch",!0),c(29),s("switch",!0),c(121),s("inline",!0),c(153),ce("disabled",!0),c(54),ce("disabled",!0))},dependencies:[R,B,D,A,V,J,te,ee,K,L,G,Z,_,w,Se,be,I,C,N,T,ge,ye]});let m=d;return m})();var Ze=(()=>{let d=class d{constructor(){}};d.\u0275fac=function(r){return new(r||d)},d.\u0275cmp=g({type:d,selectors:[["app-layout"]],decls:373,vars:0,consts:[["xs","12"],[1,"mb-4"],[1,"text-medium-emphasis","small"],["href","forms/layout#form-grid"],["xs",""],["aria-label","First name","cFormControl","","placeholder","First name"],["aria-label","Last name","cFormControl","","placeholder","Last name"],["href","https://coreui.io/docs/layout/gutters/"],["href","forms/layout#gutters"],[1,"g-3"],["cForm","",1,"row","g-3"],["md","6"],["cLabel","","for","inputEmail4"],["cFormControl","","id","inputEmail4","type","email"],["cLabel","","for","inputPassword4"],["cFormControl","","id","inputPassword4","type","password"],["cLabel","","for","inputAddress"],["cFormControl","","id","inputAddress","placeholder","1234 Main St"],["cLabel","","for","inputAddress2"],["cFormControl","","id","inputAddress2","placeholder","Apartment, studio, or floor"],["cLabel","","for","inputCity"],["cFormControl","","id","inputCity"],["md","4"],["cLabel","","for","inputState"],["cSelect","","id","inputState"],["md","2"],["cLabel","","for","inputZip"],["cFormControl","","id","inputZip"],["cFormCheckInput","","id","gridCheck","name","gridCheck","type","checkbox"],["cFormCheckLabel","","for","gridCheck"],["cButton","","type","submit"],["href","forms/layout#horizontal-form"],[1,"mb-3"],["cLabel","","for","inputEmail3",1,"col-sm-2","col-form-label"],["sm","10"],["cFormControl","","id","inputEmail3","type","email"],["cLabel","","for","inputPassword3",1,"col-sm-2","col-form-label"],["cFormControl","","id","inputPassword3","type","password"],[1,"row","mb-3"],[1,"col-form-label","col-sm-2","pt-0"],["cFormCheckInput","","checked","","id","gridRadios1","name","gridRadios","type","radio","value","option1"],["cFormCheckLabel","","for","gridRadios1"],["cFormCheckInput","","id","gridRadios2","name","gridRadios","type","radio","value","option2"],["cFormCheckLabel","","for","gridRadios2"],["cFormCheckInput","","id","gridRadios3","name","gridRadios","type","radio","value","option3"],["cFormCheckLabel","","for","gridRadios3"],["sm","10",1,"offset-sm-2"],["cFormCheckInput","","id","gridCheck1","name","gridCheck1","type","checkbox"],["cFormCheckLabel","","for","gridCheck1"],["href","forms/layout#horizontal-form-label-sizing"],["cLabel","","for","colFormLabelSm",1,"col-sm-2","col-form-label","col-form-label-sm"],["cFormControl","","id","colFormLabelSm","placeholder","col-form-label-sm","type","email",1,"form-control","form-control-sm"],["cLabel","","for","colFormLabel",1,"col-sm-2","col-form-label"],["cFormControl","","id","colFormLabel","placeholder","col-form-label","type","email"],["cLabel","","for","colFormLabelLg",1,"col-sm-2","col-form-label","col-form-label-lg"],["cFormControl","","id","colFormLabelLg","placeholder","col-form-label-lg","type","email",1,"form-control","form-control-lg"],["href","forms/layout#column-sizing"],["sm","7"],["aria-label","City","cFormControl","","placeholder","City"],["sm",""],["aria-label","State","cFormControl","","placeholder","State"],["aria-label","Zip","cFormControl","","placeholder","Zip"],["href","forms/layout#auto-sizing"],["cForm","",1,"row","gy-2","gx-3","align-items-center"],["xs","auto"],["cLabel","","for","autoSizingInput",1,"visually-hidden"],["cFormControl","","id","autoSizingInput","placeholder","Jane Doe"],["cLabel","","for","autoSizingInputGroup",1,"visually-hidden"],["cInputGroupText",""],["cFormControl","","id","autoSizingInputGroup","placeholder","Username"],["cLabel","","for","autoSizingSelect",1,"visually-hidden"],["cSelect","","id","autoSizingSelect"],["value","1"],["value","2"],["value","3"],["cFormCheckInput","","id","autoSizingCheck","name","autoSizingCheck","type","checkbox"],["cFormCheckLabel","","for","autoSizingCheck"],["cForm","",1,"row","gx-3","gy-2","align-items-center"],["sm","3"],["cLabel","","for","specificSizeInputName",1,"visually-hidden"],["cFormControl","","id","specificSizeInputName","placeholder","Jane Doe"],["cLabel","","for","specificSizeInputGroupUsername",1,"visually-hidden"],["cFormControl","","id","specificSizeInputGroupUsername","placeholder","Username"],["cLabel","","for","specificSizeSelect",1,"visually-hidden"],["cSelect","","id","specificSizeSelect"],["cFormCheckInput","","id","autoSizingCheck2","name","autoSizingCheck2","type","checkbox"],["cFormCheckLabel","","for","autoSizingCheck2"],["href","forms/layout#inline-forms"],["cForm","",1,"row","row-cols-lg-auto","g-3","align-items-center"],["cLabel","","for","inlineFormInputGroupUsername",1,"visually-hidden"],["cFormControl","","id","inlineFormInputGroupUsername","placeholder","Username"],["cLabel","","for","inlineFormSelectPref",1,"visually-hidden"],["cSelect","","id","inlineFormSelectPref"],["inline",""],["cFormCheckInput","","id","inlineFormCheck","name","inlineFormCheck","type","checkbox"],["cFormCheckLabel","","for","inlineFormCheck"]],template:function(r,o){r&1&&(i(0,"c-row")(1,"c-col",0)(2,"c-card",1)(3,"c-card-header"),e(4,`
        `),i(5,"strong"),e(6,"Layout"),t(),e(7," "),i(8,"small"),e(9,"Form grid"),t(),e(10,`
      `),t(),i(11,"c-card-body")(12,"p",2),e(13," More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. "),t(),i(14,"app-docs-example",3)(15,"c-row")(16,"c-col",4),l(17,"input",5),t(),i(18,"c-col",4),l(19,"input",6),t()()()()()(),i(20,"c-col",0)(21,"c-card",1)(22,"c-card-header"),e(23,`
        `),i(24,"strong"),e(25,"Layout"),t(),e(26," "),i(27,"small"),e(28,"Gutters"),t(),e(29,`
      `),t(),i(30,"c-card-body")(31,"p",2),e(32," By adding "),i(33,"a",7),e(34,"gutter modifier classes"),t(),e(35," , you can have control over the gutter width in as well the inline as block direction. "),t(),i(36,"app-docs-example",8)(37,"c-row",9)(38,"c-col",4),l(39,"input",5),t(),i(40,"c-col",4),l(41,"input",6),t()()(),i(42,"p",2),e(43," More complex layouts can also be created with the grid system. "),t(),i(44,"app-docs-example",8)(45,"form",10)(46,"c-col",11)(47,"label",12),e(48,"Email"),t(),l(49,"input",13),t(),i(50,"c-col",11)(51,"label",14),e(52,"Password"),t(),l(53,"input",15),t(),i(54,"c-col",0)(55,"label",16),e(56,"Address"),t(),l(57,"input",17),t(),i(58,"c-col",0)(59,"label",18),e(60,"Address 2"),t(),l(61,"input",19),t(),i(62,"c-col",11)(63,"label",20),e(64,"City"),t(),l(65,"input",21),t(),i(66,"c-col",22)(67,"label",23),e(68,"State"),t(),i(69,"select",24)(70,"option"),e(71,"Choose..."),t(),i(72,"option"),e(73,"..."),t()()(),i(74,"c-col",25)(75,"label",26),e(76,"Zip"),t(),l(77,"input",27),t(),i(78,"c-col",0)(79,"c-form-check"),l(80,"input",28),i(81,"label",29),e(82,"Check me out"),t()()(),i(83,"c-col",0)(84,"button",30),e(85,"Sign in"),t()()()()()()(),i(86,"c-col",0)(87,"c-card",1)(88,"c-card-header"),e(89,`
        `),i(90,"strong"),e(91,"Layout"),t(),e(92," "),i(93,"small"),e(94,"Horizontal form"),t(),e(95,`
      `),t(),i(96,"c-card-body")(97,"p",2),e(98," Create horizontal forms with the grid by adding the "),i(99,"code"),e(100,".row"),t(),e(101," class to form groups and using the "),i(102,"code"),e(103,".col-*-*"),t(),e(104," classes to specify the width of your labels and controls. Be sure to add "),i(105,"code"),e(106,".col-form-label"),t(),e(107," to your "),i(108,"code"),e(109,"<label>"),t(),e(110,"s as well so they're vertically centered with their associated form controls. "),t(),i(111,"p",2),e(112," At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the "),i(113,"code"),e(114,"padding-top"),t(),e(115," on our stacked radio inputs label to better align the text baseline. "),t(),i(116,"app-docs-example",31)(117,"form")(118,"c-row",32)(119,"label",33),e(120," Email "),t(),i(121,"c-col",34),l(122,"input",35),t()(),i(123,"c-row",32)(124,"label",36),e(125," Password "),t(),i(126,"c-col",34),l(127,"input",37),t()(),i(128,"fieldset",38)(129,"legend",39),e(130,"Radios"),t(),i(131,"c-col",34)(132,"c-form-check"),l(133,"input",40),i(134,"label",41),e(135,"First radio"),t()(),i(136,"c-form-check"),l(137,"input",42),i(138,"label",43),e(139,"Second radio"),t()(),i(140,"c-form-check"),l(141,"input",44),i(142,"label",45),e(143,"Third disabled radio"),t()()()(),i(144,"c-row",32)(145,"c-col",46)(146,"c-form-check"),l(147,"input",47),i(148,"label",48),e(149,"Example checkbox"),t()()()(),i(150,"button",30),e(151,"Sign in"),t()()()()()(),i(152,"c-col",0)(153,"c-card",1)(154,"c-card-header"),e(155,`
        `),i(156,"strong"),e(157,"Layout"),t(),e(158," "),i(159,"small"),e(160,"Horizontal form label sizing"),t(),e(161,`
      `),t(),i(162,"c-card-body")(163,"p",2),e(164," Be sure to use "),i(165,"code"),e(166,".col-form-label-sm"),t(),e(167," or "),i(168,"code"),e(169,".col-form-label-lg"),t(),e(170," to your "),i(171,"code"),e(172,"<label>"),t(),e(173,"s or "),i(174,"code"),e(175,"<legend>"),t(),e(176,"s to correctly follow the size of "),i(177,"code"),e(178,".form-control-lg"),t(),e(179," and "),i(180,"code"),e(181,".form-control-sm"),t(),e(182,". "),t(),i(183,"app-docs-example",49)(184,"c-row",32)(185,"label",50),e(186," Email "),t(),i(187,"c-col",34),l(188,"input",51),t()(),i(189,"c-row",32)(190,"label",52),e(191," Email "),t(),i(192,"c-col",34),l(193,"input",53),t()(),i(194,"c-row")(195,"label",54),e(196," Email "),t(),i(197,"c-col",34),l(198,"input",55),t()()()()()(),i(199,"c-col",0)(200,"c-card",1)(201,"c-card-header"),e(202,`
        `),i(203,"strong"),e(204,"Layout"),t(),e(205," "),i(206,"small"),e(207,"Column sizing"),t(),e(208,`
      `),t(),i(209,"c-card-body")(210,"p",2),e(211," As shown in the previous examples, our grid system allows you to place any number of "),i(212,"code"),e(213,"<c-col>"),t(),e(214,"s within a "),i(215,"code"),e(216,"<c-row>"),t(),e(217,". They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining "),i(218,"code"),e(219,"<c-col>"),t(),e(220,"s equally split the rest, with specific column classes like "),i(221,"code"),e(222,'<c-col sm="7">'),t(),e(223,". "),t(),i(224,"app-docs-example",56)(225,"c-row",9)(226,"c-col",57),l(227,"input",58),t(),i(228,"c-col",59),l(229,"input",60),t(),i(230,"c-col",59),l(231,"input",61),t()()()()()(),i(232,"c-col",0)(233,"c-card",1)(234,"c-card-header"),e(235,`
        `),i(236,"strong"),e(237,"Layout"),t(),e(238," "),i(239,"small"),e(240,"Auto-sizing"),t(),e(241,`
      `),t(),i(242,"c-card-body")(243,"p",2),e(244," The example below uses a flexbox utility to vertically center the contents and changes "),i(245,"code"),e(246,"<c-col>"),t(),e(247," to "),i(248,"code"),e(249,'<c-col xs="auto">'),t(),e(250," so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents. "),t(),i(251,"app-docs-example",62)(252,"form",63)(253,"c-col",64)(254,"label",65),e(255," Name "),t(),l(256,"input",66),t(),i(257,"c-col",64)(258,"label",67),e(259," Username "),t(),i(260,"c-input-group")(261,"span",68),e(262,"@"),t(),l(263,"input",69),t()(),i(264,"c-col",64)(265,"label",70),e(266," Preference "),t(),i(267,"select",71)(268,"option"),e(269,"Choose..."),t(),i(270,"option",72),e(271,"One"),t(),i(272,"option",73),e(273,"Two"),t(),i(274,"option",74),e(275,"Three"),t()()(),i(276,"c-col",64)(277,"c-form-check"),l(278,"input",75),i(279,"label",76),e(280,"Remember me"),t()()(),i(281,"c-col",64)(282,"button",30),e(283,"Submit"),t()()()(),i(284,"p",2),e(285," You can then remix that once again with size-specific column classes. "),t(),i(286,"app-docs-example",62)(287,"form",77)(288,"c-col",78)(289,"label",79),e(290," Name "),t(),l(291,"input",80),t(),i(292,"c-col",78)(293,"label",81),e(294," Username "),t(),i(295,"c-input-group")(296,"span",68),e(297,"@"),t(),l(298,"input",82),t()(),i(299,"c-col",78)(300,"label",83),e(301," Preference "),t(),i(302,"select",84)(303,"option"),e(304,"Choose..."),t(),i(305,"option",72),e(306,"One"),t(),i(307,"option",73),e(308,"Two"),t(),i(309,"option",74),e(310,"Three"),t()()(),i(311,"c-col",64)(312,"c-form-check"),l(313,"input",85),i(314,"label",86),e(315,"Remember me"),t()()(),i(316,"c-col",64)(317,"button",30),e(318,"Submit"),t()()()()()()(),i(319,"c-col",0)(320,"c-card",1)(321,"c-card-header"),e(322,`
        `),i(323,"strong"),e(324,"Layout"),t(),e(325," "),i(326,"small"),e(327,"Inline forms"),t(),e(328,`
      `),t(),i(329,"c-card-body")(330,"p",2),e(331," Use the "),i(332,"code"),e(333,'<c-col xs="auto">'),t(),e(334," class to create horizontal layouts. By adding "),i(335,"a",7),e(336,"gutter modifier classes"),t(),e(337,", we will have gutters in horizontal and vertical directions. The "),i(338,"code"),e(339,".align-items-center"),t(),e(340," aligns the form elements to the middle, making the "),i(341,"code"),e(342,"<CFormCheck>"),t(),e(343," align properly. "),t(),i(344,"app-docs-example",87)(345,"form",88)(346,"c-col",0)(347,"label",89),e(348," Username "),t(),i(349,"c-input-group")(350,"span",68),e(351,"@"),t(),l(352,"input",90),t()(),i(353,"c-col",0)(354,"label",91),e(355," Preference "),t(),i(356,"select",92)(357,"option"),e(358,"Choose..."),t(),i(359,"option",72),e(360,"One"),t(),i(361,"option",73),e(362,"Two"),t(),i(363,"option",74),e(364,"Three"),t()()(),i(365,"c-col",0)(366,"c-form-check",93),l(367,"input",94),i(368,"label",95),e(369,"Remember me"),t()()(),i(370,"c-col",0)(371,"button",30),e(372,"Submit"),t()()()()()()()())},dependencies:[R,D,A,V,J,te,ee,K,Y,W,H,X,ie,L,G,Z,_,j,$,C,Q]});let m=d;return m})();var Je=(()=>{let d=class d{constructor(){this.customStylesValidated=!1,this.browserDefaultsValidated=!1,this.tooltipValidated=!1}ngOnInit(){}onSubmit1(){this.customStylesValidated=!0,console.log("Submit... 1")}onReset1(){this.customStylesValidated=!1,console.log("Reset... 1")}onSubmit2(){this.browserDefaultsValidated=!0,console.log("Submit... 2")}onReset2(){this.browserDefaultsValidated=!1,console.log("Reset... 3")}onSubmit3(){this.tooltipValidated=!0,console.log("Submit... 3")}onReset3(){this.tooltipValidated=!1,console.log("Reset... 3")}};d.\u0275fac=function(r){return new(r||d)},d.\u0275cmp=g({type:d,selectors:[["app-validation"]],decls:383,vars:46,consts:[["xs","12"],["href","forms/validation","name","Validation"],[1,"mb-4"],[1,"text-medium-emphasis","small"],["href","forms/validation"],["cForm","",1,"row","g-3","needs-validation",3,"validated","ngSubmit"],["customStylesForm","ngForm"],["md","4"],["cLabel","","for","validationCustom01"],["cFormControl","","id","validationCustom01","required","","type","text","value","Mark"],[3,"valid"],["cLabel","","for","validationCustom02"],["cFormControl","","id","validationCustom02","required","","type","text","value","Otto"],["cLabel","","for","validationCustomUsername"],[1,"has-validation"],["cInputGroupText","","id","inputGroupPrepend"],["aria-describedby","inputGroupPrepend","cFormControl","","id","validationCustomUsername","required","","type","text"],["md","6"],["cLabel","","for","validationCustom03"],["cFormControl","","id","validationCustom03","required","","type","text"],["md","3"],["cLabel","","for","validationCustom04"],["cSelect","","id","validationCustom04","required",""],["value",""],["cLabel","","for","validationCustom05"],["cFormControl","","id","validationCustom05","required","","type","text"],["cFormCheckInput","","id","invalidCheck","name","invalidCheck","required","","type","checkbox"],["cFormCheckLabel","","for","invalidCheck"],["cButton","","color","primary","type","submit",1,"me-1"],["cButton","","color","secondary","type","reset",3,"click"],["href","forms/validation#browser-defaults"],["cForm","","ngNativeValidate","",1,"row","g-3",3,"validated","ngSubmit"],["browserDefaultsForm","ngForm"],["cLabel","","for","validationDefault01"],["cFormControl","","id","validationDefault01","required","","type","text","value","Mark"],["cLabel","","for","validationDefault02"],["cFormControl","","id","validationDefault02","required","","type","text","value","Otto"],["cLabel","","for","validationDefaultUsername"],["cInputGroupText","","id","inputGroupPrepend1"],["aria-describedby","inputGroupPrepend1","cFormControl","","id","validationDefaultUsername","required","","type","text"],["cLabel","","for","validationDefault03"],["cFormControl","","id","validationDefault03","required","","type","text"],["cLabel","","for","validationDefault04"],["cSelect","","id","validationDefault04","required",""],["cLabel","","for","validationDefault05"],["cFormControl","","id","validationDefault05","required","","type","text"],["cFormCheckInput","","id","invalidCheck1","name","invalidCheck","required","","type","checkbox"],["cFormCheckLabel","","for","invalidCheck1"],["href","forms/validation#server-side"],["cForm","","ngNativeValidate","",1,"row","g-3","needs-validation"],["cLabel","","for","validationServer01"],["cFormControl","","id","validationServer01","required","","type","text","value","Mark",3,"valid"],["cLabel","","for","validationServer02"],["cFormControl","","id","validationServer02","required","","type","text","value","Otto",3,"valid"],["cLabel","","for","validationServerUsername"],["cInputGroupText","","id","inputGroupPrepend03"],["aria-describedby","inputGroupPrepend03","cFormControl","","id","validationServerUsername","required","","type","text",3,"valid"],["cLabel","","for","validationServer03"],["cFormControl","","id","validationServer03","required","","type","text",3,"valid"],["cLabel","","for","validationServer04"],["cSelect","","id","validationServer04",3,"valid"],["disabled",""],["cLabel","","for","validationServer05"],["cFormControl","","id","validationServer05","required","","type","text",3,"valid"],[1,"mb-3"],["cFormCheckInput","","id","invalidCheckServer","required","","type","checkbox",3,"valid"],["cFormCheckLabel","","for","invalidCheckServer"],["cButton","","color","primary","type","submit"],["cListGroup","",1,"mb-3",3,"flush"],["cListGroupItem",""],["href","forms/validation#supported-elements"],["cForm","",3,"validated"],["cLabel","","for","validationTextarea",1,"form-label"],["cFormControl","","id","validationTextarea","placeholder","Required example textarea","required","",3,"valid"],["cFormCheckInput","","id","validationFormCheck1","name","validationFormCheck1","required","","type","checkbox"],["cFormCheckLabel","","for","validationFormCheck1"],["cFormCheckInput","","id","validationFormCheck2","name","radio-stacked","required","","type","radio"],["cFormCheckLabel","","for","validationFormCheck2"],["cFormCheckInput","","id","validationFormCheck3","name","radio-stacked","required","","type","radio"],["cFormCheckLabel","","for","validationFormCheck3"],["aria-label","select example","cSelect","","required",""],["value","1"],["value","2"],["value","3"],["aria-label","file example","cFormControl","","id","validationText1","required","","type","file"],["cButton","","color","primary","disabled","","type","submit"],["href","forms/validation#tooltips"],["tooltipForm","ngForm"],["md","4",1,"position-relative"],["cLabel","","for","validationTooltip01"],["cFormControl","","id","validationTooltip01","required","","type","text","value","Mark"],["tooltip","",3,"valid"],["cLabel","","for","validationTooltip02"],["cFormControl","","id","validationTooltip02","required","","type","text","value","Otto"],["cLabel","","for","validationTooltipUsername"],["cInputGroupText","","id","inputGroupPrependTooltip"],["aria-describedby","inputGroupPrependTooltip","cFormControl","","id","validationTooltipUsername","required","","type","text"],["md","6",1,"position-relative"],["cLabel","","for","validationTooltip03"],["cFormControl","","id","validationTooltip03","required","","type","text"],["md","3",1,"position-relative"],["cLabel","","for","validationTooltip04"],["cSelect","","id","validationTooltip04","required",""],["cLabel","","for","validationTooltip05"],["cFormControl","","id","validationTooltip05","required","","type","text"],["xs","12",1,"position-relative"],["cFormCheckInput","","id","invalidCheckTooltip","name","invalidCheckTooltip","required","","type","checkbox"],["cFormCheckLabel","","for","invalidCheckTooltip"]],template:function(r,o){r&1&&(i(0,"c-row")(1,"c-col",0),l(2,"app-docs-callout",1),t(),i(3,"c-col",0)(4,"c-card",2)(5,"c-card-header"),e(6,`
        `),i(7,"strong"),e(8,"Validation"),t(),e(9," "),i(10,"small"),e(11,"Custom styles"),t(),e(12,`
      `),t(),i(13,"c-card-body")(14,"p",3),e(15," For custom CoreUI form validation messages, you'll need to add the "),i(16,"code"),e(17,"noValidate"),t(),e(18," boolean property to your "),i(19,"code"),e(20,"<CForm>"),t(),e(21,". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the "),i(22,"code"),e(23,":invalid"),t(),e(24," and "),i(25,"code"),e(26,":valid"),t(),e(27," styles applied to your form controls. "),t(),i(28,"p",3),e(29," Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. "),t(),i(30,"app-docs-example",4)(31,"form",5,6),u("ngSubmit",function(){return o.onSubmit1()}),i(33,"c-col",7)(34,"label",8),e(35,"First name"),t(),l(36,"input",9),i(37,"c-form-feedback",10),e(38,"Looks good!"),t()(),i(39,"c-col",7)(40,"label",11),e(41,"Last name"),t(),l(42,"input",12),i(43,"c-form-feedback",10),e(44,"Looks good!"),t()(),i(45,"c-col",7)(46,"label",13),e(47,"Username"),t(),i(48,"c-input-group",14)(49,"span",15),e(50,"@"),t(),l(51,"input",16),i(52,"c-form-feedback",10),e(53,"Please choose a username."),t()()(),i(54,"c-col",17)(55,"label",18),e(56,"City"),t(),l(57,"input",19),i(58,"c-form-feedback",10),e(59,"Please provide a valid city."),t()(),i(60,"c-col",20)(61,"label",21),e(62,"State"),t(),i(63,"select",22)(64,"option",23),e(65,"Choose..."),t(),i(66,"option"),e(67,"..."),t()(),i(68,"c-form-feedback",10),e(69,"Please provide a valid State."),t()(),i(70,"c-col",20)(71,"label",24),e(72,"Zip code"),t(),l(73,"input",25),i(74,"c-form-feedback",10),e(75,"Please provide a valid zip."),t()(),i(76,"c-col",0)(77,"c-form-check"),l(78,"input",26),i(79,"label",27),e(80,"Agree to terms and conditions"),t()(),i(81,"c-form-feedback",10),e(82,"You must agree before submitting."),t()(),i(83,"c-col",0)(84,"button",28),e(85," Submit form "),t(),i(86,"button",29),u("click",function(){return o.onReset1()}),e(87," Reset "),t()()()()()()(),i(88,"c-col",0)(89,"c-card",2)(90,"c-card-header"),e(91,`
        `),i(92,"strong"),e(93,"Validation"),t(),e(94," "),i(95,"small"),e(96,"Browser defaults"),t(),e(97,`
      `),t(),i(98,"c-card-body")(99,"p",3),e(100," Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback. "),t(),i(101,"p",3),e(102," While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript. "),t(),i(103,"app-docs-example",30)(104,"form",31,32),u("ngSubmit",function(){return o.onSubmit2()}),i(106,"c-col",7)(107,"label",33),e(108,"Email"),t(),l(109,"input",34),i(110,"c-form-feedback",10),e(111,"Looks good!"),t()(),i(112,"c-col",7)(113,"label",35),e(114,"Email"),t(),l(115,"input",36),i(116,"c-form-feedback",10),e(117,"Looks good!"),t()(),i(118,"c-col",7)(119,"label",37),e(120,"Username"),t(),i(121,"c-input-group",14)(122,"span",38),e(123,"@"),t(),l(124,"input",39),i(125,"c-form-feedback",10),e(126,"Please choose a username."),t()()(),i(127,"c-col",17)(128,"label",40),e(129,"City"),t(),l(130,"input",41),i(131,"c-form-feedback",10),e(132,"Please provide a valid city."),t()(),i(133,"c-col",20)(134,"label",42),e(135,"State"),t(),i(136,"select",43)(137,"option",23),e(138,"Choose..."),t(),i(139,"option"),e(140,"..."),t()(),i(141,"c-form-feedback",10),e(142,"Please provide a valid State."),t()(),i(143,"c-col",20)(144,"label",44),e(145,"Zip code"),t(),l(146,"input",45),i(147,"c-form-feedback",10),e(148,"Please provide a valid zip."),t()(),i(149,"c-col",0)(150,"c-form-check"),l(151,"input",46),i(152,"label",47),e(153,"Agree to terms and conditions"),t()(),i(154,"c-form-feedback",10),e(155,"You must agree before submitting."),t()(),i(156,"c-col",0)(157,"button",28),e(158," Submit form "),t(),i(159,"button",29),u("click",function(){return o.onReset2()}),e(160," Reset "),t()()()()()()(),i(161,"c-col",0)(162,"c-card",2)(163,"c-card-header"),e(164,`
        `),i(165,"strong"),e(166,"Validation"),t(),e(167," "),i(168,"small"),e(169,"Server side"),t(),e(170,`
      `),t(),i(171,"c-card-body")(172,"p",3),e(173," We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with "),i(174,"code"),e(175,"invalid"),t(),e(176," and "),i(177,"code"),e(178,"valid"),t(),e(179," boolean properties. "),t(),i(180,"p",3),e(181," For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using "),i(182,"code"),e(183,"aria-describedby"),t(),e(184," (noting that this attribute allows more than one "),i(185,"code"),e(186,"id"),t(),e(187," to be referenced, in case the field already points to additional form text). "),t(),i(188,"app-docs-example",48)(189,"form",49)(190,"c-col",7)(191,"label",50),e(192,"First name"),t(),l(193,"input",51),i(194,"c-form-feedback",10),e(195,"Looks good!"),t()(),i(196,"c-col",7)(197,"label",52),e(198,"Last name"),t(),l(199,"input",53),i(200,"c-form-feedback",10),e(201,"Looks good!"),t()(),i(202,"c-col",7)(203,"label",54),e(204,"Username"),t(),i(205,"c-input-group",14)(206,"span",55),e(207,"@"),t(),l(208,"input",56),i(209,"c-form-feedback",10),e(210,"Please choose a username."),t()()(),i(211,"c-col",17)(212,"label",57),e(213,"City"),t(),l(214,"input",58),i(215,"c-form-feedback",10),e(216,"Please provide a valid city."),t()(),i(217,"c-col",20)(218,"label",59),e(219,"State"),t(),i(220,"select",60)(221,"option",61),e(222,"Choose..."),t(),i(223,"option"),e(224,"..."),t()(),i(225,"c-form-feedback",10),e(226,"Please provide a valid state."),t()(),i(227,"c-col",20)(228,"label",62),e(229,"Zip code"),t(),l(230,"input",63),i(231,"c-form-feedback",10),e(232,"Please provide a valid zip."),t()(),i(233,"c-col",0)(234,"c-form-check",64),l(235,"input",65),i(236,"label",66),e(237,"Agree to terms and conditions"),t()(),i(238,"c-form-feedback",10),e(239,"You must agree before submitting."),t()(),i(240,"c-col",0)(241,"button",67),e(242," Submit form "),t()()()()()()(),i(243,"c-col",0)(244,"c-card",2)(245,"c-card-header"),e(246,`
        `),i(247,"strong"),e(248,"Validation"),t(),e(249," "),i(250,"small"),e(251,"Supported elements"),t(),e(252,`
      `),t(),i(253,"c-card-body")(254,"p",3),e(255," Validation styles are available for the following form controls and components: "),t(),i(256,"ul",68)(257,"li",69)(258,"code"),e(259,"<input cFormControl>"),t()(),i(260,"li",69)(261,"code"),e(262,"<select cSelect>"),t()(),i(263,"li",69)(264,"code"),e(265,"<c-form-check>"),t()()(),i(266,"app-docs-example",70)(267,"form",71)(268,"div",64)(269,"label",72),e(270," Textarea "),t(),l(271,"textarea",73),i(272,"c-form-feedback",10),e(273,"Please enter a message in the textarea."),t()(),i(274,"c-form-check",64),l(275,"input",74),i(276,"label",75),e(277,"Check this checkbox"),t()(),i(278,"c-form-feedback",10),e(279,"Example invalid feedback text"),t(),i(280,"c-form-check"),l(281,"input",76),i(282,"label",77),e(283,"Check this radio"),t()(),i(284,"c-form-check",64),l(285,"input",78),i(286,"label",79),e(287,"Check this radio"),t()(),i(288,"c-form-feedback",10),e(289,"More example invalid feedback text"),t(),i(290,"div",64)(291,"select",80)(292,"option",23),e(293,"Open this select menu"),t(),i(294,"option",81),e(295,"One"),t(),i(296,"option",82),e(297,"Two"),t(),i(298,"option",83),e(299,"Three"),t()(),i(300,"c-form-feedback",10),e(301,"Example invalid select feedback"),t()(),i(302,"div",64),l(303,"input",84),i(304,"c-form-feedback",10),e(305,"Example invalid form file feedback"),t()(),i(306,"div",64)(307,"button",85),e(308," Submit form "),t()()()()()()(),i(309,"c-col",0)(310,"c-card",2)(311,"c-card-header"),e(312,`
        `),i(313,"strong"),e(314,"Validation"),t(),e(315," "),i(316,"small"),e(317,"Tooltips"),t(),e(318,`
      `),t(),i(319,"c-card-body")(320,"p",3),e(321," If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with "),i(322,"code"),e(323,"position: relative"),t(),e(324," on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup. "),t(),i(325,"app-docs-example",86)(326,"form",5,87),u("ngSubmit",function(){return o.onSubmit3()}),i(328,"c-col",88)(329,"label",89),e(330,"First name"),t(),l(331,"input",90),i(332,"c-form-feedback",91),e(333,"Looks good!"),t()(),i(334,"c-col",88)(335,"label",92),e(336,"Last name"),t(),l(337,"input",93),i(338,"c-form-feedback",91),e(339,"Looks good!"),t()(),i(340,"c-col",88)(341,"label",94),e(342,"Username"),t(),i(343,"c-input-group",14)(344,"span",95),e(345,"@"),t(),l(346,"input",96),i(347,"c-form-feedback",91),e(348,"Please choose a username."),t()()(),i(349,"c-col",97)(350,"label",98),e(351,"City"),t(),l(352,"input",99),i(353,"c-form-feedback",91),e(354,"Please provide a valid city."),t()(),i(355,"c-col",100)(356,"label",101),e(357,"State"),t(),i(358,"select",102)(359,"option",23),e(360,"Choose..."),t(),i(361,"option",81),e(362,"..."),t()(),i(363,"c-form-feedback",91),e(364,"Please provide a valid State."),t()(),i(365,"c-col",100)(366,"label",103),e(367,"Zip code"),t(),l(368,"input",104),i(369,"c-form-feedback",91),e(370,"Please provide a valid zip."),t()(),i(371,"c-col",105)(372,"c-form-check"),l(373,"input",106),i(374,"label",107),e(375,"Agree to terms and conditions"),t()(),i(376,"c-form-feedback",91),e(377,"You must agree before submitting."),t()(),i(378,"c-col",0)(379,"button",28),e(380," Submit form "),t(),i(381,"button",29),u("click",function(){return o.onReset3()}),e(382," Reset "),t()()()()()()()()),r&2&&(c(31),s("validated",o.customStylesValidated),c(6),s("valid",!0),c(6),s("valid",!0),c(9),s("valid",!1),c(6),s("valid",!1),c(10),s("valid",!1),c(6),s("valid",!1),c(7),s("valid",!1),c(23),s("validated",o.browserDefaultsValidated),c(6),s("valid",!0),c(6),s("valid",!0),c(9),s("valid",!1),c(6),s("valid",!1),c(10),s("valid",!1),c(6),s("valid",!1),c(7),s("valid",!1),c(39),s("valid",!0),c(),s("valid",!0),c(5),s("valid",!0),c(),s("valid",!0),c(8),s("valid",!1),c(),s("valid",!1),c(5),s("valid",!1),c(),s("valid",!1),c(5),s("valid",!1),c(5),s("valid",!1),c(5),s("valid",!1),c(),s("valid",!1),c(4),s("valid",!1),c(3),s("valid",!1),c(18),s("flush",!0),c(11),s("validated",!0),c(4),s("valid",!1),c(),s("valid",!1),c(6),s("valid",!1),c(10),s("valid",!1),c(12),s("valid",!1),c(4),s("valid",!1),c(22),s("validated",o.tooltipValidated),c(6),s("valid",!0),c(6),s("valid",!0),c(9),s("valid",!1),c(6),s("valid",!1),c(10),s("valid",!1),c(6),s("valid",!1),c(7),s("valid",!1))},dependencies:[R,B,D,A,V,J,te,ee,K,Y,Le,W,H,X,ie,L,G,Z,_,j,$,C,Q,Me,Pe]});let m=d;return m})();function dt(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function ct(m,d){m&1&&(i(0,"div",16),e(1," Image is required. "),t())}function st(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Add News Image"),t(),i(8,"form",8),u("ngSubmit",function(){f(a);let r=p();return h(r.addNewsItem())}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,dt,2,0,"div",12),t(),i(14,"div",9)(15,"label",13),e(16,"Image:"),t(),i(17,"input",14),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t(),S(18,ct,2,0,"div",12),t(),i(19,"button",15),e(20,"Submit"),t()()()()()()()()}if(m&2){let a=p(),n,r;c(8),s("formGroup",a.newsForm),c(5),s("ngIf",((n=a.newsForm.get("name"))==null?null:n.touched)&&((n=a.newsForm.get("name"))==null?null:n.invalid)),c(5),s("ngIf",((r=a.newsForm.get("name"))==null?null:r.touched)&&((r=a.newsForm.get("name"))==null?null:r.invalid))}}function pt(m,d){if(m&1){let a=b();i(0,"tr")(1,"td"),e(2),t(),i(3,"td",23),e(4),t(),i(5,"td"),l(6,"img",25),t(),i(7,"td",23)(8,"button",26),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.toggleEditForm(o))}),e(9,"Edit"),t(),e(10,"\xA0 "),i(11,"button",27),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.deletenewsItem(o.id))}),e(12,"Delete"),t()()()}if(m&2){let a=d.$implicit,n=d.index;c(2),E(n+1),c(2),E(a.name),c(2),s("src",a.imageUrl,F)}}function ut(m,d){if(m&1){let a=b();i(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"button",21),u("click",function(){f(a);let r=p();return h(r.toggleAddForm())}),e(5,"Add New Item"),t()()()(),l(6,"hr"),i(7,"table",22)(8,"thead")(9,"tr")(10,"th"),e(11,"Sr. No"),t(),i(12,"th",23),e(13,"Image Name"),t(),i(14,"th"),e(15,"Image"),t(),i(16,"th",23),e(17,"Action"),t()()(),i(18,"tbody"),S(19,pt,13,3,"tr",24),t()()()}if(m&2){let a=p();c(19),s("ngForOf",a.newsData)}}function xt(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function ft(m,d){if(m&1&&(i(0,"div",16),e(1),t()),m&2){let a=p(2);c(),E(a.fileError)}}function ht(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Edit Carrosal Image"),t(),i(8,"form",8),u("ngSubmit",function(r){f(a);let o=p();return h(o.updateNewsItem(o.selectedItem.id,r))}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,xt,2,0,"div",12),t(),i(14,"div",9)(15,"label",28),e(16,"Current Image:"),t(),l(17,"br")(18,"img",29)(19,"br"),i(20,"small"),e(21),t(),l(22,"br")(23,"br"),t(),i(24,"div",9)(25,"label",13),e(26,"Image:"),t(),i(27,"input",14),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t(),S(28,ft,2,1,"div",12),t(),i(29,"button",15),e(30,"Update"),t()()()()()()()()}if(m&2){let a=p(),n;c(8),s("formGroup",a.newsForm),c(5),s("ngIf",((n=a.newsForm.get("name"))==null?null:n.touched)&&((n=a.newsForm.get("name"))==null?null:n.invalid)),c(5),s("src",a.selectedItem.imageUrl,F),c(3),E(a.getFileName(a.selectedItem.imageUrl)),c(7),s("ngIf",a.fileError)}}var Ke=(()=>{let d=class d{constructor(n,r){this.service=n,this.fb=r,this.selectedItem={_id:"",name:"",imageUrl:""},this.showAddForm=!1,this.showEditForm=!1,this.fileError=""}ngOnInit(){this.initializeForm(),this.fetchNewsData()}initializeForm(){this.newsForm=this.fb.group({name:["",k.required],imageUrl:[null]})}fetchNewsData(){this.service.getHome_Media().subscribe(n=>{console.log(n),this.newsData=n,this.newsData.sort((r,o)=>o.id-r.id)},n=>{console.error(n)})}onFileChange(n){let r=n.target?.files?.[0];this.newsForm.patchValue({imageUrl:r})}toggleAddForm(){this.showAddForm=!0,this.showEditForm=!1,this.resetForm()}toggleEditForm(n){this.selectedItem=y({},n),this.showEditForm=!0,this.showAddForm=!1,this.newsForm.patchValue({name:n.name,imageUrl:null})}resetForm(){this.newsForm.reset(),this.newsForm.markAsUntouched(),this.newsForm.markAsPristine()}addNewsItem(){if(this.newsForm.invalid){this.newsForm.markAllAsTouched();return}let n=new FormData;n.append("name",this.newsForm.value.name),n.append("imageUrl",this.newsForm.value.imageUrl),this.service.postHome_Media(n).subscribe(r=>{console.log(r),this.fetchNewsData(),alert("recRecord Added successfully!"),this.showAddForm=!1},r=>{console.error(r)})}updateNewsItem(n,r){if(r.preventDefault(),this.newsForm.invalid){this.newsForm.markAllAsTouched();return}let o=new FormData;o.append("name",this.newsForm.value.name),this.newsForm.value.imageUrl instanceof File&&o.append("imageUrl",this.newsForm.value.imageUrl),this.service.updateHome_Media(n,o).subscribe(x=>{console.log(x),this.fetchNewsData(),alert("recRecord Updated successfully!"),this.showEditForm=!1},x=>{console.error(x)})}deletenewsItem(n){confirm("Are you sure you want to delete this News-Articles?")&&this.service.deleteHome_Media(n).subscribe(o=>{console.log(o),this.fetchNewsData(),alert("News-Articles deleted successfully!")},o=>{console.error(o)})}getFileName(n){return n.split("/").pop()||""}};d.\u0275fac=function(r){return new(r||d)(v(O),v(z))},d.\u0275cmp=g({type:d,selectors:[["app-news-articles"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","text-center",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","newsName",1,"form-label"],["type","text","id","newsName","formControlName","name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","newsImage",1,"form-label"],["type","file","id","newsImage",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary","mt-3"],[1,"text-danger"],[1,"text-center"],[1,"container"],[1,"row","justify-content-end"],[1,"col-auto"],[1,"btn","btn-success",3,"click"],[1,"table","table-bordered","table-striped"],[1,"text-right"],[4,"ngFor","ngForOf"],["alt","image",2,"height","150px","width","200px","float","left","margin-right","10px",3,"src"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"],["for","currentImage",1,"form-label"],["alt","current image",1,"img-fluid","mb-2",2,"max-height","150px","max-width","200px",3,"src"]],template:function(r,o){r&1&&S(0,st,21,3,"div",0)(1,ut,20,1,"div",1)(2,ht,31,5,"div",0),r&2&&(s("ngIf",o.showAddForm),c(),s("ngIf",!o.showAddForm&&!o.showEditForm),c(),s("ngIf",o.showEditForm))},dependencies:[M,P,_,w,I,C,N,T]});let m=d;return m})();function St(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function bt(m,d){m&1&&(i(0,"div",16),e(1," Image is required. "),t())}function gt(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Add Mentor Image"),t(),i(8,"form",8),u("ngSubmit",function(){f(a);let r=p();return h(r.addMentorItem())}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,St,2,0,"div",12),t(),i(14,"div",9)(15,"label",13),e(16,"Image:"),t(),i(17,"input",14),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t(),S(18,bt,2,0,"div",12),t(),i(19,"button",15),e(20,"Submit"),t()()()()()()()()}if(m&2){let a=p(),n,r;c(8),s("formGroup",a.mentorForm),c(5),s("ngIf",((n=a.mentorForm.get("name"))==null?null:n.touched)&&((n=a.mentorForm.get("name"))==null?null:n.invalid)),c(5),s("ngIf",((r=a.mentorForm.get("imageUrl"))==null?null:r.touched)&&((r=a.mentorForm.get("imageUrl"))==null?null:r.invalid))}}function Et(m,d){if(m&1){let a=b();i(0,"tr")(1,"td"),e(2),t(),i(3,"td",23),e(4),t(),i(5,"td"),l(6,"img",25),t(),i(7,"td",23)(8,"button",26),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.toggleEditForm(o))}),e(9,"Edit"),t(),e(10,"\xA0 "),i(11,"button",27),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.deleteMentorsItem(o.id))}),e(12,"Delete"),t()()()}if(m&2){let a=d.$implicit,n=d.index;c(2),E(n+1),c(2),E(a.name),c(2),s("src",a.imageUrl,F)}}function vt(m,d){if(m&1){let a=b();i(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"button",21),u("click",function(){f(a);let r=p();return h(r.toggleAddForm())}),e(5,"Add New Item"),t()()()(),l(6,"hr"),i(7,"table",22)(8,"thead")(9,"tr")(10,"th"),e(11,"Sr. No"),t(),i(12,"th",23),e(13,"Image Name"),t(),i(14,"th"),e(15,"Image"),t(),i(16,"th",23),e(17,"Action"),t()()(),i(18,"tbody"),S(19,Et,13,3,"tr",24),t()()()}if(m&2){let a=p();c(19),s("ngForOf",a.mentorData)}}function Ct(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function _t(m,d){if(m&1&&(i(0,"div",16),e(1),t()),m&2){let a=p(2);c(),E(a.fileError)}}function Ft(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Edit Mentor Image"),t(),i(8,"form",8),u("ngSubmit",function(r){f(a);let o=p();return h(o.updateMentorItem(o.selectedItem.id,r))}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,Ct,2,0,"div",12),t(),i(14,"div",9)(15,"label",28),e(16,"Current Image:"),t(),l(17,"br")(18,"img",29)(19,"br"),i(20,"small"),e(21),t(),l(22,"br")(23,"br"),t(),i(24,"div",9)(25,"label",13),e(26,"New Image (optional):"),t(),i(27,"input",14),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t(),S(28,_t,2,1,"div",12),t(),i(29,"button",15),e(30,"Update"),t()()()()()()()()}if(m&2){let a=p(),n;c(8),s("formGroup",a.mentorForm),c(5),s("ngIf",((n=a.mentorForm.get("name"))==null?null:n.touched)&&((n=a.mentorForm.get("name"))==null?null:n.invalid)),c(5),s("src",a.selectedItem.imageUrl,F),c(3),E(a.getFileName(a.selectedItem.imageUrl)),c(7),s("ngIf",a.fileError)}}var Qe=(()=>{let d=class d{constructor(n,r){this.service=n,this.fb=r,this.selectedItem={_id:"",name:"",imageUrl:""},this.showAddForm=!1,this.showEditForm=!1,this.fileError=""}ngOnInit(){this.initializeForm(),this.fetchMentorData()}initializeForm(){this.mentorForm=this.fb.group({name:["",k.required],imageUrl:[null]})}fetchMentorData(){this.service.getMentors().subscribe(n=>{console.log(n),this.mentorData=n,this.mentorData.sort((r,o)=>o.id-r.id)})}onFileChange(n){let r=n.target.files[0];r?(this.mentorForm.patchValue({imageUrl:r}),this.fileError=""):this.fileError="Image file is required."}toggleAddForm(){this.showAddForm=!0,this.showEditForm=!1,this.resetForm()}toggleEditForm(n){this.selectedItem=y({},n),this.showEditForm=!0,this.showAddForm=!1,this.mentorForm.patchValue({name:n.name,imageUrl:null})}resetForm(){this.mentorForm.reset(),this.mentorForm.markAsUntouched(),this.mentorForm.markAsPristine()}addMentorItem(){if(this.mentorForm.invalid){this.mentorForm.markAllAsTouched();return}let n=new FormData;n.append("name",this.mentorForm.value.name);let r=this.mentorForm.value.imageUrl;if(!r){this.fileError="Image file is required.";return}n.append("imageUrl",r),this.service.addMentors(n).subscribe(o=>{console.log(o),this.fetchMentorData(),alert("Record added successfully!"),this.showAddForm=!1},o=>{console.error(o)})}updateMentorItem(n,r){if(r.preventDefault(),this.mentorForm.invalid){this.mentorForm.markAllAsTouched();return}let o=new FormData;o.append("name",this.mentorForm.value.name),this.mentorForm.value.imageUrl instanceof File&&o.append("imageUrl",this.mentorForm.value.imageUrl),this.service.updateMentors(n,o).subscribe(x=>{console.log("Update response:",x),this.fetchMentorData(),alert("Record updated successfully!"),this.showEditForm=!1,this.resetForm()},x=>{console.error("Update error:",x)})}deleteMentorsItem(n){confirm("Are you sure you want to delete this mentor?")&&this.service.deleteMentors(n).subscribe(o=>{console.log(o),this.fetchMentorData(),alert("Mentor deleted successfully!")},o=>{console.error("Error deleting mentor:",o)})}getFileName(n){return n.split("/").pop()||""}};d.\u0275fac=function(r){return new(r||d)(v(O),v(z))},d.\u0275cmp=g({type:d,selectors:[["app-mentors"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","text-center",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","mentorName",1,"form-label"],["type","text","id","mentorName","formControlName","name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","mentorImage",1,"form-label"],["type","file","id","mentorImage",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary","mt-3"],[1,"text-danger"],[1,"text-center"],[1,"container"],[1,"row","justify-content-end"],[1,"col-auto"],[1,"btn","btn-success",3,"click"],[1,"table","table-bordered","table-striped"],[1,"text-right"],[4,"ngFor","ngForOf"],["alt","image",2,"height","150px","width","200px","float","left","margin-right","10px",3,"src"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"],["for","currentImage",1,"form-label"],["alt","current image",1,"img-fluid","mb-2",2,"max-height","150px","max-width","200px",3,"src"]],template:function(r,o){r&1&&S(0,gt,21,3,"div",0)(1,vt,20,1,"div",1)(2,Ft,31,5,"div",0),r&2&&(s("ngIf",o.showAddForm),c(),s("ngIf",!o.showAddForm&&!o.showEditForm),c(),s("ngIf",o.showEditForm))},dependencies:[M,P,_,w,I,C,N,T]});let m=d;return m})();function yt(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function wt(m,d){m&1&&(i(0,"div",16),e(1," Image is required. "),t())}function kt(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Add Founder Image"),t(),i(8,"form",8),u("ngSubmit",function(){f(a);let r=p();return h(r.addFounderItem())}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,yt,2,0,"div",12),t(),i(14,"div",9)(15,"label",13),e(16,"Image:"),t(),i(17,"input",14),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t(),S(18,wt,2,0,"div",12),t(),i(19,"button",15),e(20,"Submit"),t()()()()()()()()}if(m&2){let a=p(),n,r;c(8),s("formGroup",a.FounderForm),c(5),s("ngIf",((n=a.FounderForm.get("name"))==null?null:n.touched)&&((n=a.FounderForm.get("name"))==null?null:n.invalid)),c(5),s("ngIf",((r=a.FounderForm.get("name"))==null?null:r.touched)&&((r=a.FounderForm.get("name"))==null?null:r.invalid))}}function It(m,d){if(m&1){let a=b();i(0,"tr")(1,"td"),e(2),t(),i(3,"td",23),e(4),t(),i(5,"td"),l(6,"img",25),t(),i(7,"td",23)(8,"button",26),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.toggleEditForm(o))}),e(9,"Edit"),t(),e(10,"\xA0 "),i(11,"button",27),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.deleteFounderItem(o.id))}),e(12,"Delete"),t()()()}if(m&2){let a=d.$implicit,n=d.index;c(2),E(n+1),c(2),E(a.name),c(2),s("src",a.imageUrl,F)}}function Nt(m,d){if(m&1){let a=b();i(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"button",21),u("click",function(){f(a);let r=p();return h(r.toggleAddForm())}),e(5,"Add New Item"),t()()()(),l(6,"hr"),i(7,"table",22)(8,"thead")(9,"tr")(10,"th"),e(11,"Sr. No"),t(),i(12,"th",23),e(13,"Image Name"),t(),i(14,"th"),e(15,"Image"),t(),i(16,"th",23),e(17,"Action"),t()()(),i(18,"tbody"),S(19,It,13,3,"tr",24),t()()()}if(m&2){let a=p();c(19),s("ngForOf",a.FounderData)}}function Tt(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function Dt(m,d){if(m&1&&(i(0,"div",16),e(1),t()),m&2){let a=p(2);c(),E(a.fileError)}}function At(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Edit Founder Image"),t(),i(8,"form",8),u("ngSubmit",function(r){f(a);let o=p();return h(o.updateFounderItem(o.selectedItem.id,r))}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,Tt,2,0,"div",12),t(),i(14,"div",9)(15,"label",28),e(16,"Current Image:"),t(),l(17,"br")(18,"img",29)(19,"br"),i(20,"small"),e(21),t(),l(22,"br")(23,"br"),t(),i(24,"div",9)(25,"label",13),e(26,"Image:"),t(),i(27,"input",14),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t(),S(28,Dt,2,1,"div",12),t(),i(29,"button",15),e(30,"Update"),t()()()()()()()()}if(m&2){let a=p(),n;c(8),s("formGroup",a.FounderForm),c(5),s("ngIf",((n=a.FounderForm.get("name"))==null?null:n.touched)&&((n=a.FounderForm.get("name"))==null?null:n.invalid)),c(5),s("src",a.selectedItem.imageUrl,F),c(3),E(a.getFileName(a.selectedItem.imageUrl)),c(7),s("ngIf",a.fileError)}}var Xe=(()=>{let d=class d{constructor(n,r){this.service=n,this.fb=r,this.selectedItem={_id:"",name:"",imageUrl:""},this.showAddForm=!1,this.showEditForm=!1,this.fileError=""}ngOnInit(){this.initializeForm(),this.fetchFounderData()}initializeForm(){this.FounderForm=this.fb.group({name:["",k.required],imageUrl:[null,k.required]})}fetchFounderData(){this.service.getFounderParticipants().subscribe(n=>{console.log(n),this.FounderData=n,this.FounderData.sort((r,o)=>o.id-r.id)})}onFileChange(n){let r=n.target?.files?.[0];this.FounderForm.patchValue({imageUrl:r})}toggleAddForm(){this.showAddForm=!0,this.showEditForm=!1,this.resetForm()}toggleEditForm(n){this.selectedItem=y({},n),this.showEditForm=!0,this.showAddForm=!1,this.FounderForm.patchValue({name:n.name,imageurl:n.imageUrl})}resetForm(){this.FounderForm.reset(),this.FounderForm.markAsUntouched(),this.FounderForm.markAsPristine()}addFounderItem(){let n=new FormData;n.append("name",this.FounderForm.value.name),n.append("imageUrl",this.FounderForm.value.imageUrl),this.service.addFounderParticipant(n).subscribe(r=>{console.log(r),this.fetchFounderData(),alert("recRecord Added successfully!"),this.showAddForm=!1},r=>{console.error(r)})}updateFounderItem(n,r){if(r.preventDefault(),this.FounderForm.invalid){this.FounderForm.markAllAsTouched();return}let o=new FormData;o.append("name",this.FounderForm.value.name),this.FounderForm.value.imageUrl instanceof File&&o.append("imageUrl",this.FounderForm.value.imageUrl),this.service.updateFounderParticipant(n,o).subscribe(x=>{console.log(x),this.fetchFounderData(),alert("recRecord Updated successfully!"),this.showEditForm=!1},x=>{console.error(x)})}deleteFounderItem(n){confirm("Are you sure you want to delete this Founder?")&&this.service.deleteFounderParticipant(n).subscribe(o=>{console.log(o),this.fetchFounderData(),alert("Fonder deleted successfully!")},o=>{console.error(o)})}getFileName(n){return n.split("/").pop()||""}};d.\u0275fac=function(r){return new(r||d)(v(O),v(z))},d.\u0275cmp=g({type:d,selectors:[["app-founder-team"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","text-center",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","founderName",1,"form-label"],["type","text","id","founderName","formControlName","name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","founderImage",1,"form-label"],["type","file","id","founderImage",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary","mt-3"],[1,"text-danger"],[1,"text-center"],[1,"container"],[1,"row","justify-content-end"],[1,"col-auto"],[1,"btn","btn-success",3,"click"],[1,"table","table-bordered","table-striped"],[1,"text-right"],[4,"ngFor","ngForOf"],["alt","image",2,"height","150px","width","200px","float","left","margin-right","10px",3,"src"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"],["for","currentImage",1,"form-label"],["alt","current image",1,"img-fluid","mb-2",2,"max-height","150px","max-width","200px",3,"src"]],template:function(r,o){r&1&&S(0,kt,21,3,"div",0)(1,Nt,20,1,"div",1)(2,At,31,5,"div",0),r&2&&(s("ngIf",o.showAddForm),c(),s("ngIf",!o.showAddForm&&!o.showEditForm),c(),s("ngIf",o.showEditForm))},dependencies:[M,P,_,w,I,C,N,T]});let m=d;return m})();function Vt(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function Lt(m,d){m&1&&(i(0,"div",16),e(1," Image is required. "),t())}function Gt(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Add NriParticipants Image"),t(),i(8,"form",8),u("ngSubmit",function(){f(a);let r=p();return h(r.addNriTeamItem())}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,Vt,2,0,"div",12),t(),i(14,"div",9)(15,"label",13),e(16,"Image:"),t(),i(17,"input",14),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t(),S(18,Lt,2,0,"div",12),t(),i(19,"button",15),e(20,"Submit"),t()()()()()()()()}if(m&2){let a=p(),n,r;c(8),s("formGroup",a.NriForm),c(5),s("ngIf",((n=a.NriForm.get("name"))==null?null:n.touched)&&((n=a.NriForm.get("name"))==null?null:n.invalid)),c(5),s("ngIf",((r=a.NriForm.get("name"))==null?null:r.touched)&&((r=a.NriForm.get("name"))==null?null:r.invalid))}}function Rt(m,d){if(m&1){let a=b();i(0,"tr")(1,"td"),e(2),t(),i(3,"td",23),e(4),t(),i(5,"td"),l(6,"img",25),t(),i(7,"td",23)(8,"button",26),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.toggleEditForm(o))}),e(9,"Edit"),t(),e(10,"\xA0 "),i(11,"button",27),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.deleteNriItem(o.id))}),e(12,"Delete"),t()()()}if(m&2){let a=d.$implicit,n=d.index;c(2),E(n+1),c(2),E(a.name),c(2),s("src",a.imageUrl,F)}}function Ut(m,d){if(m&1){let a=b();i(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"button",21),u("click",function(){f(a);let r=p();return h(r.toggleAddForm())}),e(5,"Add New Item"),t()()()(),l(6,"hr"),i(7,"table",22)(8,"thead")(9,"tr")(10,"th"),e(11,"Sr. No"),t(),i(12,"th",23),e(13,"Image Name"),t(),i(14,"th"),e(15,"Image"),t(),i(16,"th",23),e(17,"Action"),t()()(),i(18,"tbody"),S(19,Rt,13,3,"tr",24),t()()()}if(m&2){let a=p();c(19),s("ngForOf",a.NriData)}}function Mt(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function Pt(m,d){if(m&1&&(i(0,"div",16),e(1),t()),m&2){let a=p(2);c(),E(a.fileError)}}function zt(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Edit NriParticipants Image"),t(),i(8,"form",8),u("ngSubmit",function(r){f(a);let o=p();return h(o.updateNriItem(o.selectedItem.id,r))}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,Mt,2,0,"div",12),i(14,"div",9)(15,"label",28),e(16,"Current Image:"),t(),l(17,"br")(18,"img",29)(19,"br"),i(20,"small"),e(21),t(),l(22,"br")(23,"br"),t()(),i(24,"div",9)(25,"label",13),e(26,"Image:"),t(),i(27,"input",30),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t(),S(28,Pt,2,1,"div",12),t(),i(29,"button",15),e(30,"Update"),t()()()()()()()()}if(m&2){let a=p(),n;c(8),s("formGroup",a.NriForm),c(5),s("ngIf",((n=a.NriForm.get("name"))==null?null:n.touched)&&((n=a.NriForm.get("name"))==null?null:n.invalid)),c(5),s("src",a.selectedItem.imageUrl,F),c(3),E(a.getFileName(a.selectedItem.imageUrl)),c(7),s("ngIf",a.fileError)}}var et=(()=>{let d=class d{constructor(n,r){this.service=n,this.fb=r,this.selectedItem={_id:"",name:"",imageUrl:""},this.showAddForm=!1,this.showEditForm=!1,this.fileError=""}ngOnInit(){this.initializeForm(),this.fetchNriData()}initializeForm(){this.NriForm=this.fb.group({name:["",k.required],imageUrl:[null,k.required]})}fetchNriData(){this.service.getNRI_Participants().subscribe(n=>{console.log(n),this.NriData=n,this.NriData.sort((r,o)=>o.id-r.id)})}onFileChange(n){let r=n.target?.files?.[0];this.NriForm.patchValue({imageUrl:r})}toggleAddForm(){this.showAddForm=!0,this.showEditForm=!1,this.resetForm()}toggleEditForm(n){this.selectedItem=y({},n),this.showEditForm=!0,this.showAddForm=!1,this.NriForm.patchValue({name:n.name,imageurl:n.imageUrl})}resetForm(){this.NriForm.reset(),this.NriForm.markAsUntouched(),this.NriForm.markAsPristine()}addNriTeamItem(){let n=new FormData;n.append("name",this.NriForm.value.name),n.append("imageUrl",this.NriForm.value.imageUrl),this.service.addNRI_Participants(n).subscribe(r=>{console.log(r),this.fetchNriData(),alert("recRecord Added successfully!"),this.showAddForm=!1},r=>{console.error(r)})}updateNriItem(n,r){if(r.preventDefault(),this.NriForm.invalid){this.NriForm.markAllAsTouched();return}let o=new FormData;o.append("name",this.NriForm.value.name),this.NriForm.value.imageUrl instanceof File&&o.append("imageUrl",this.NriForm.value.imageUrl),this.service.updateNRI_Participants(n,o).subscribe(x=>{console.log(x),this.fetchNriData(),alert("recRecord Updated successfully!"),this.showEditForm=!1},x=>{console.error(x)})}deleteNriItem(n){confirm("Are you sure you want to delete this NRI?")&&this.service.deleteNRI_Participants(n).subscribe(o=>{console.log(o),this.fetchNriData(),alert("NRI-participants deleted successfully!")},o=>{console.error(o)})}getFileName(n){return n.split("/").pop()||""}};d.\u0275fac=function(r){return new(r||d)(v(O),v(z))},d.\u0275cmp=g({type:d,selectors:[["app-nri-participants"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","text-center",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","nriName",1,"form-label"],["type","text","id","nriName","formControlName","name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","nriImage",1,"form-label"],["type","file","id","founderImage",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary","mt-3"],[1,"text-danger"],[1,"text-center"],[1,"container"],[1,"row","justify-content-end"],[1,"col-auto"],[1,"btn","btn-success",3,"click"],[1,"table","table-bordered","table-striped"],[1,"text-right"],[4,"ngFor","ngForOf"],["alt","image",2,"height","150px","width","200px","float","left","margin-right","10px",3,"src"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"],["for","currentImage",1,"form-label"],["alt","current image",1,"img-fluid","mb-2",2,"max-height","150px","max-width","200px",3,"src"],["type","file","id","nriImage",1,"form-control",3,"change"]],template:function(r,o){r&1&&S(0,Gt,21,3,"div",0)(1,Ut,20,1,"div",1)(2,zt,31,5,"div",0),r&2&&(s("ngIf",o.showAddForm),c(),s("ngIf",!o.showAddForm&&!o.showEditForm),c(),s("ngIf",o.showEditForm))},dependencies:[M,P,_,w,I,C,N,T]});let m=d;return m})();function Bt(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function Ot(m,d){m&1&&(i(0,"div",16),e(1," Image is required. "),t())}function qt(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Add State Participants Image"),t(),i(8,"form",8),u("ngSubmit",function(){f(a);let r=p();return h(r.addStateTeamItem())}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,Bt,2,0,"div",12),t(),i(14,"div",9)(15,"label",13),e(16,"Image:"),t(),i(17,"input",14),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t(),S(18,Ot,2,0,"div",12),t(),i(19,"button",15),e(20,"Submit"),t()()()()()()()()}if(m&2){let a=p(),n,r;c(8),s("formGroup",a.StateForm),c(5),s("ngIf",((n=a.StateForm.get("name"))==null?null:n.touched)&&((n=a.StateForm.get("name"))==null?null:n.invalid)),c(5),s("ngIf",((r=a.StateForm.get("imageUrl"))==null?null:r.touched)&&((r=a.StateForm.get("imageUrl"))==null?null:r.invalid))}}function jt(m,d){m&1&&(i(0,"div",16),e(1," Name is required. "),t())}function $t(m,d){if(m&1){let a=b();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2",7),e(7,"Edit State Participants Image"),t(),i(8,"form",8),u("ngSubmit",function(r){f(a);let o=p();return h(o.updateStateItem(o.selectedItem.id,r))}),i(9,"div",9)(10,"label",10),e(11,"Name:"),t(),l(12,"input",11),S(13,jt,2,0,"div",12),t(),i(14,"div",9)(15,"label",17),e(16,"Current Image:"),t(),l(17,"br")(18,"img",18)(19,"br"),i(20,"small"),e(21),t(),l(22,"br")(23,"br"),t(),i(24,"div",9)(25,"label",19),e(26,"Image:"),t(),i(27,"input",20),u("change",function(r){f(a);let o=p();return h(o.onFileChange(r))}),t()(),i(28,"button",15),e(29,"Update"),t()()()()()()()()}if(m&2){let a=p(),n;c(8),s("formGroup",a.StateForm),c(5),s("ngIf",((n=a.StateForm.get("name"))==null?null:n.touched)&&((n=a.StateForm.get("name"))==null?null:n.invalid)),c(5),s("src",a.selectedItem.imageUrl,F),c(3),E(a.getFileName(a.selectedItem.imageUrl))}}function Ht(m,d){if(m&1){let a=b();i(0,"tr")(1,"td"),e(2),t(),i(3,"td",27),e(4),t(),i(5,"td"),l(6,"img",29),t(),i(7,"td",27)(8,"button",30),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.toggleEditForm(o))}),e(9,"Edit"),t(),e(10,"\xA0 "),i(11,"button",31),u("click",function(){let o=f(a).$implicit,x=p(2);return h(x.deleteStateItem(o.id))}),e(12,"Delete"),t()()()}if(m&2){let a=d.$implicit,n=d.index;c(2),E(n+1),c(2),E(a.name),c(2),s("src",a.imageUrl,F)}}function Wt(m,d){if(m&1){let a=b();i(0,"div",21)(1,"div",22)(2,"div",23)(3,"div",24)(4,"button",25),u("click",function(){f(a);let r=p();return h(r.toggleAddForm())}),e(5,"Add New Item"),t()()()(),l(6,"hr"),i(7,"table",26)(8,"thead")(9,"tr")(10,"th"),e(11,"Sr. No"),t(),i(12,"th"),e(13,"Name"),t(),i(14,"th"),e(15,"Image"),t(),i(16,"th",27),e(17,"Action"),t()()(),i(18,"tbody"),S(19,Ht,13,3,"tr",28),t()()()}if(m&2){let a=p();c(19),s("ngForOf",a.StateData)}}var tt=(()=>{let d=class d{constructor(n,r){this.service=n,this.fb=r,this.selectedItem={_id:0,name:"",imageUrl:""},this.showAddForm=!1,this.showEditForm=!1}ngOnInit(){this.initializeForm(),this.fetchStateData()}initializeForm(){this.StateForm=this.fb.group({name:["",k.required],imageUrl:[null]})}fetchStateData(){this.service.getState_Participants().subscribe(n=>{console.log(n),this.StateData=n,this.StateData.sort((r,o)=>o.id-r.id)},n=>{console.error(n)})}onFileChange(n){let r=n.target?.files?.[0];this.StateForm.patchValue({imageUrl:r})}toggleAddForm(){this.showAddForm=!0,this.showEditForm=!1,this.resetForm()}toggleEditForm(n){this.selectedItem=y({},n),this.showEditForm=!0,this.showAddForm=!1,this.StateForm.patchValue({name:n.name,imageUrl:null})}resetForm(){this.StateForm.reset(),this.StateForm.markAsUntouched(),this.StateForm.markAsPristine()}addStateTeamItem(){if(this.StateForm.invalid){this.StateForm.markAllAsTouched();return}let n=new FormData;if(n.append("name",this.StateForm.value.name),this.StateForm.value.imageUrl)n.append("imageUrl",this.StateForm.value.imageUrl);else{this.StateForm.controls.imageUrl.setErrors({required:!0});return}this.service.addState_Participants(n).subscribe(r=>{console.log(r),this.fetchStateData(),alert("recRecord Added successfully!"),this.showAddForm=!1},r=>{console.error(r)})}updateStateItem(n,r){if(this.StateForm.invalid){this.StateForm.markAllAsTouched();return}debugger;let o=new FormData;o.append("name",this.StateForm.value.name),this.StateForm.value.imageUrl&&o.append("imageUrl",this.StateForm.value.imageUrl),this.service.updateState_Participants(n,o).subscribe(x=>{console.log(x),this.fetchStateData(),alert("recRecord Updated successfully!"),this.showEditForm=!1},x=>{console.error(x)})}deleteStateItem(n){confirm("Are you sure you want to delete this state-participants?")&&this.service.deleteState_Participants(n).subscribe(o=>{console.log(o),alert("state-participants deleted successfully!"),this.fetchStateData()},o=>{console.error(o)})}getFileName(n){return n.split("/").pop()||""}};d.\u0275fac=function(r){return new(r||d)(v(O),v(z))},d.\u0275cmp=g({type:d,selectors:[["app-state-participants"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","text-center",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","stateName",1,"form-label"],["type","text","id","stateName","formControlName","name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","StateImage",1,"form-label"],["type","file","id","StateImage",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary","mt-3"],[1,"text-danger"],["for","currentImage",1,"form-label"],["alt","current image",1,"img-fluid","mb-2",2,"max-height","150px","max-width","200px",3,"src"],["for","stateImage",1,"form-label"],["type","file","id","stateImage",1,"form-control",3,"change"],[1,"text-center"],[1,"container"],[1,"row","justify-content-end"],[1,"col-auto"],[1,"btn","btn-success",3,"click"],[1,"table","table-bordered","table-striped"],[1,"text-right"],[4,"ngFor","ngForOf"],["alt","image",2,"height","150px","width","200px","float","left","margin-right","10px",3,"src"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(r,o){r&1&&S(0,qt,21,3,"div",0)(1,$t,30,4,"div",0)(2,Wt,20,1,"div",1),r&2&&(s("ngIf",o.showAddForm),c(),s("ngIf",o.showEditForm),c(),s("ngIf",!o.showAddForm&&!o.showEditForm))},dependencies:[M,P,_,w,I,C,N,T]});let m=d;return m})();var Yt=[{path:"",component:Be,children:[{path:"",pathMatch:"full",redirectTo:"form-control"},{path:"form-control",component:je,data:{title:"Form Control"}},{path:"select",component:We,data:{title:"Select"}},{path:"checks-radios",component:Ye,data:{title:"Checks & Radios"}},{path:"range",component:He,data:{title:"Range"}},{path:"input-group",component:$e,data:{title:"Input Group"}},{path:"floating-labels",component:qe,data:{title:"Floating Labels"}},{path:"layout",component:Ze,data:{title:"Layout"}},{path:"validation",component:Je,data:{title:"Validation"}},{path:"news-articles",component:Ke,data:{Title:"news-articles"}},{path:"mentors",component:Qe,data:{title:"mentors"}},{path:"founder-team",component:Xe,data:{title:"founder-team"}},{path:"nri-participants",component:et,data:{title:"nri-participants"}},{path:"state",component:tt,data:{title:"state"}}]}],it=(()=>{let d=class d{};d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=me({type:d}),d.\u0275inj=de({imports:[pe.forChild(Yt),pe]});let m=d;return m})();var hn=(()=>{let d=class d{};d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=me({type:d}),d.\u0275inj=de({imports:[he,it,Oe,ke,xe,Ue,ue,ve,Ce,xe,ue,we,Ve,Fe,ze]});let m=d;return m})();export{hn as CoreUIFormsModule};
