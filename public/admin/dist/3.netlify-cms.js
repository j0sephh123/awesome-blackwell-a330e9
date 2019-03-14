(window.webpackJsonpnetlify_cms=window.webpackJsonpnetlify_cms||[]).push([[3],{1376:function(e,t,r){"use strict";r.r(t);var a=r(1),i=r.n(a),n=r(0),o=r.n(n),l=r(7),s=r.n(l),d=r(96),c=r(3),u=r(19),p=r(82),h=r(56),g=r(18),b=r(26),f=r(201),m=r(28),y=r(20),v=r(41),w=r(4),E=r(1389),C=r(1386),R=r(1424),q=r.n(R),O=r(29),j=r.n(O),S=r(54),x=r(84),P=r(83),D=r(11),k=r(2),A=r(203);function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const T=()=>({error:!1}),M=e=>null===e||void 0===e||e.hasOwnProperty("length")&&0===e.length||e.constructor===Object&&0===Object.keys(e).length||k.List.isList(e)&&0===e.size;class N extends n.Component{constructor(...e){super(...e),F(this,"processInnerControlRef",e=>{if(!e)return;this.innerWrappedControl=e.getWrappedInstance?e.getWrappedInstance():e,this.wrappedControlValid=this.innerWrappedControl.isValid||T;const t=this.innerWrappedControl.shouldComponentUpdate;this.wrappedControlShouldComponentUpdate=t&&t.bind(this.innerWrappedControl)}),F(this,"validate",(e=!1)=>{const t=this.props,r=t.field,a=t.value,i=[];if([this.validatePresence,this.validatePattern].forEach(e=>{const t=e(r,a);t.error&&i.push(t.error)}),e)e.error&&i.push(e.error);else{const e=this.validateWrappedControl(r);e.error&&i.push(e.error)}this.props.onValidate(i)}),F(this,"validatePresence",(e,t)=>{const r=this.props.t;if(e.get("required",!0)&&M(t)){return{error:{type:A.a.PRESENCE,message:r("editor.editorControlPane.widget.required",{fieldLabel:e.get("label",e.get("name"))})}}}return{error:!1}}),F(this,"validatePattern",(e,t)=>{const r=this.props.t,a=e.get("pattern",!1);if(M(t))return{error:!1};if(a&&!RegExp(a.first()).test(t)){return{error:{type:A.a.PATTERN,message:r("editor.editorControlPane.widget.regexPattern",{fieldLabel:e.get("label",e.get("name")),pattern:a.last()})}}}return{error:!1}}),F(this,"validateWrappedControl",e=>{const t=this.props.t,r=this.wrappedControlValid();if("boolean"==typeof r){return{error:!r}}if(r.hasOwnProperty("error"))return r;if(r instanceof Promise){return r.then(()=>{this.validate({error:!1})},t=>{const r={type:A.a.CUSTOM,message:`${e.get("label",e.get("name"))} - ${t}.`};this.validate({error:r})}),{error:{type:A.a.CUSTOM,message:t("editor.editorControlPane.widget.processing",{fieldLabel:e.get("label",e.get("name"))})}}}return{error:!1}}),F(this,"getObjectValue",()=>this.props.value||Object(k.Map)()),F(this,"onChangeObject",(e,t,r)=>{const a=this.getObjectValue().set(e,t);return this.props.onChange(a,r)})}shouldComponentUpdate(e){return this.wrappedControlShouldComponentUpdate?this.wrappedControlShouldComponentUpdate(e):this.props.value!==e.value||this.props.classNameWrapper!==e.classNameWrapper||this.props.hasActiveStyle!==e.hasActiveStyle||this.props.queryHits!==e.queryHits}render(){const e=this.props,t=e.controlComponent,r=e.field,a=e.value,i=e.mediaPaths,n=e.metadata,l=e.onChange,s=e.onValidateObject,d=e.onOpenMediaLibrary,c=e.onRemoveMediaControl,u=e.onClearMediaControl,p=e.onAddAsset,h=e.onRemoveInsertedMedia,g=e.getAsset,b=e.classNameWrapper,f=e.classNameWidget,m=e.classNameWidgetActive,y=e.classNameLabel,v=e.classNameLabelActive,w=e.setActiveStyle,E=e.setInactiveStyle,C=e.hasActiveStyle,R=e.editorControl,q=e.uniqueFieldId,O=e.resolveWidget,j=e.getEditorComponents,S=e.query,x=e.queryHits,P=e.clearSearch,D=e.clearFieldErrors,k=e.isFetching,A=e.loadEntry,F=e.fieldsErrors,T=e.controlRef,M=e.t;return o.a.createElement(t,{field:r,value:a,mediaPaths:i,metadata:n,onChange:l,onChangeObject:this.onChangeObject,onValidateObject:s,onOpenMediaLibrary:d,onClearMediaControl:u,onRemoveMediaControl:c,onAddAsset:p,onRemoveInsertedMedia:h,getAsset:g,forID:q,ref:this.processInnerControlRef,classNameWrapper:b,classNameWidget:f,classNameWidgetActive:m,classNameLabel:y,classNameLabelActive:v,setActiveStyle:w,setInactiveStyle:E,hasActiveStyle:C,editorControl:R,resolveWidget:O,getEditorComponents:j,query:S,queryHits:x,clearSearch:P,clearFieldErrors:D,isFetching:k,loadEntry:A,fieldsErrors:F,controlRef:T,t:M})}}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}F(N,"propTypes",{controlComponent:i.a.func.isRequired,field:s.a.map.isRequired,hasActiveStyle:i.a.bool,setActiveStyle:i.a.func.isRequired,setInactiveStyle:i.a.func.isRequired,classNameWrapper:i.a.string.isRequired,classNameWidget:i.a.string.isRequired,classNameWidgetActive:i.a.string.isRequired,classNameLabel:i.a.string.isRequired,classNameLabelActive:i.a.string.isRequired,value:i.a.oneOfType([i.a.node,i.a.object,i.a.string,i.a.bool]),mediaPaths:s.a.map.isRequired,metadata:s.a.map,fieldsErrors:s.a.map,onChange:i.a.func.isRequired,onValidate:i.a.func,onOpenMediaLibrary:i.a.func.isRequired,onClearMediaControl:i.a.func.isRequired,onRemoveMediaControl:i.a.func.isRequired,onAddAsset:i.a.func.isRequired,onRemoveInsertedMedia:i.a.func.isRequired,getAsset:i.a.func.isRequired,resolveWidget:i.a.func.isRequired,getEditorComponents:i.a.func.isRequired,isFetching:i.a.bool,controlRef:i.a.func,query:i.a.func.isRequired,clearSearch:i.a.func.isRequired,clearFieldErrors:i.a.func.isRequired,queryHits:i.a.oneOfType([i.a.array,i.a.object]),editorControl:i.a.func.isRequired,uniqueFieldId:i.a.string.isRequired,loadEntry:i.a.func.isRequired,t:i.a.func.isRequired});const W={label:Object(w.css)("color:",c.colors.controlLabel,";background-color:",c.colors.textFieldBorder,";display:inline-block;font-size:12px;text-transform:uppercase;font-weight:600;border:0;border-radius:3px 3px 0 0;padding:3px 6px 2px;margin:0;transition:all ",c.transitions.main,";position:relative;&:before,&:after{content:'';display:block;position:absolute;top:0;right:-4px;height:100%;width:4px;background-color:inherit;}&:after{border-bottom-left-radius:3px;background-color:#fff;}label:label;"),labelActive:Object(w.css)("background-color:",c.colors.active,";color:",c.colors.textLight,";label:labelActive;"),labelError:Object(w.css)("background-color:",c.colors.errorText,";color:",c.colorsRaw.white,";label:labelError;"),widget:Object(w.css)("display:block;width:100%;padding:",c.lengths.inputPadding,";margin:0;border:",c.borders.textField,";border-radius:",c.lengths.borderRadius,";border-top-left-radius:0;outline:0;box-shadow:none;background-color:",c.colors.inputBackground,";color:#444a57;transition:border-color ",c.transitions.main,";position:relative;font-size:15px;line-height:1.5;select&{text-indent:14px;height:58px;}label:widget;"),widgetActive:Object(w.css)("border-color:",c.colors.active,";label:widgetActive;"),widgetError:Object(w.css)("border-color:",c.colors.errorText,";label:widgetError;")},L=Object(w.default)("div",{label:"ControlContainer",target:"e19arf8y0"})("margin-top:16px;&:first-child{margin-top:36px;}"),I=Object(w.default)("ul",{label:"ControlErrorsList",target:"e19arf8y1"})("list-style-type:none;font-size:12px;color:",c.colors.errorText,";margin-bottom:5px;text-align:right;text-transform:uppercase;position:relative;font-weight:600;top:20px;"),B=Object(w.default)("p",{label:"ControlHint",target:"e19arf8y2"})("margin-bottom:0;padding:3px 0;font-size:12px;color:",({active:e,error:t})=>t?c.colors.errorText:e?c.colors.active:c.colors.controlLabel,";transition:color ",c.transitions.main,";");class V extends o.a.Component{constructor(...e){super(...e),U(this,"state",{activeLabel:!1}),U(this,"uniqueFieldId",q()(`${this.props.field.get("name")}-field-`))}render(){const e=this.props,t=e.value,r=e.field,a=e.fieldsMetaData,i=e.fieldsErrors,n=e.mediaPaths,l=e.boundGetAsset,s=e.onChange,d=e.openMediaLibrary,c=e.clearMediaControl,u=e.removeMediaControl,p=e.addAsset,h=e.removeInsertedMedia,g=e.onValidate,b=e.processControlRef,f=e.controlRef,m=e.query,y=e.queryHits,v=e.isFetching,E=e.clearSearch,C=e.clearFieldErrors,R=e.loadEntry,q=e.t,O=r.get("widget"),x=Object(S.i)(O),P=r.get("name"),D=r.get("hint"),k=!1===r.get("required"),A=g,F=a&&a.get(P),T=i&&i.get(this.uniqueFieldId);return o.a.createElement(L,null,o.a.createElement(I,null,T&&T.map(e=>e.message&&"string"==typeof e.message&&o.a.createElement("li",{key:e.message.trim().replace(/[^a-z0-9]+/gi,"-")},e.message))),o.a.createElement("label",{className:Object(w.cx)(W.label,{[W.labelActive]:this.state.styleActive},{[W.labelError]:!!T}),htmlFor:this.uniqueFieldId},`${r.get("label",r.get("name"))}${k?" (optional)":""}`),o.a.createElement(N,{classNameWrapper:Object(w.cx)(W.widget,{[W.widgetActive]:this.state.styleActive},{[W.widgetError]:!!T}),classNameWidget:W.widget,classNameWidgetActive:W.widgetActive,classNameLabel:W.label,classNameLabelActive:W.labelActive,controlComponent:x.control,field:r,uniqueFieldId:this.uniqueFieldId,value:t,mediaPaths:n,metadata:F,onChange:(e,t)=>s(P,e,t),onValidate:g&&j()(g,this.uniqueFieldId),onOpenMediaLibrary:d,onClearMediaControl:c,onRemoveMediaControl:u,onRemoveInsertedMedia:h,onAddAsset:p,getAsset:l,hasActiveStyle:this.state.styleActive,setActiveStyle:()=>this.setState({styleActive:!0}),setInactiveStyle:()=>this.setState({styleActive:!1}),resolveWidget:S.i,getEditorComponents:S.c,ref:b&&j()(b,r),controlRef:f,editorControl:H,query:m,loadEntry:R,queryHits:y,clearSearch:E,clearFieldErrors:C,isFetching:v,fieldsErrors:i,onValidateObject:A,t:q}),D&&o.a.createElement(B,{active:this.state.styleActive,error:!!T},D))}}U(V,"propTypes",{value:i.a.oneOfType([i.a.node,i.a.object,i.a.string,i.a.bool]),field:s.a.map.isRequired,fieldsMetaData:s.a.map,fieldsErrors:s.a.map,mediaPaths:s.a.map.isRequired,boundGetAsset:i.a.func.isRequired,onChange:i.a.func.isRequired,openMediaLibrary:i.a.func.isRequired,addAsset:i.a.func.isRequired,removeInsertedMedia:i.a.func.isRequired,onValidate:i.a.func,processControlRef:i.a.func,controlRef:i.a.func,query:i.a.func.isRequired,queryHits:i.a.oneOfType([i.a.array,i.a.object]),isFetching:i.a.bool,clearSearch:i.a.func.isRequired,clearFieldErrors:i.a.func.isRequired,loadEntry:i.a.func.isRequired,t:i.a.func.isRequired});const z={openMediaLibrary:D.y,clearMediaControl:D.r,removeMediaControl:D.B,removeInsertedMedia:D.A,addAsset:x.c,query:P.g,loadEntry:(e,t)=>(r,a)=>{const i=a().collections.get(e);return Object(g.y)(i,t)(r,a)},clearSearch:P.f,clearFieldErrors:g.s},H=Object(d.b)(e=>({mediaPaths:e.mediaLibrary.get("controlMedia"),boundGetAsset:m.b.bind(null,e),isFetching:e.search.get("isFetching"),queryHits:e.search.get("queryHits")}),z,null,{withRef:!0})(Object(u.translate)()(V));var $=H;function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const _=Object(w.default)("div",{label:"ControlPaneContainer",target:"e1wrh48s0"})("max-width:800px;margin:0 auto;padding-bottom:16px;p:not(",B,"){font-size:16px;}");class J extends o.a.Component{constructor(...e){super(...e),G(this,"componentValidate",{}),G(this,"validate",()=>{this.props.fields.forEach(e=>{"hidden"!==e.get("widget")&&this.componentValidate[e.get("name")]()})})}controlRef(e,t){if(!t)return;const r=e.get("name"),a=e.get("widget");this.componentValidate[r]="list"===a||"object"===a?t.innerWrappedControl.validate:t.validate}render(){const e=this.props,t=e.collection,r=e.fields,a=e.entry,i=e.fieldsMetaData,n=e.fieldsErrors,l=e.onChange,s=e.onValidate;return t&&r?0===a.size||!0===a.get("partial")?null:o.a.createElement(_,null,r.map((e,t)=>"hidden"===e.get("widget")?null:o.a.createElement($,{key:t,field:e,value:a.getIn(["data",e.get("name")]),fieldsMetaData:i,fieldsErrors:n,onChange:l,onValidate:s,processControlRef:this.controlRef.bind(this),controlRef:this.controlRef}))):null}}J.propTypes={collection:s.a.map.isRequired,entry:s.a.map.isRequired,fields:s.a.list.isRequired,fieldsMetaData:s.a.map.isRequired,fieldsErrors:s.a.map.isRequired,onChange:i.a.func.isRequired,onValidate:i.a.func.isRequired};var Y=r(1387),K=r.n(Y),Q=r(72),X=r(205),Z=r(1427);class ee extends o.a.Component{render(){const e=this.props,t=e.previewComponent,r=e.previewProps;return o.a.createElement(Y.FrameContextConsumer,null,e=>o.a.createElement(C.ScrollSyncPane,{attachTo:e.document.scrollingElement},Object(Z.isElement)(t)?o.a.cloneElement(t,r):o.a.createElement(t,r)))}}ee.propTypes={previewComponent:i.a.func.isRequired,previewProps:i.a.object};var te=ee;function re(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}class ae extends o.a.Component{shouldComponentUpdate(e){return["object","list"].includes(e.field.get("widget"))||this.props.value!==e.value}render(){const e=this.props,t=e.previewComponent,r=re(e,["previewComponent"]);return o.a.createElement(t,r)}}ae.propTypes={previewComponent:i.a.func.isRequired,field:s.a.map.isRequired,value:i.a.oneOfType([i.a.node,i.a.object,i.a.string,i.a.bool])};var ie=ae;function ne(e){return"hidden"!==e.get("widget")}const oe=Object(w.default)("div",{label:"PreviewContainer",target:"ekg8tag0"})("font-family:Roboto,'Helvetica Neue',HelveticaNeue,Helvetica,Arial,sans-serif;");class le extends o.a.Component{render(){const e=this.props,t=e.collection,r=e.fields,a=e.widgetFor;return t&&r?o.a.createElement(oe,null,r.filter(ne).map(e=>o.a.createElement("div",{key:e.get("name")},a(e.get("name"))))):null}}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}le.propTypes={collection:s.a.map.isRequired,entry:s.a.map.isRequired,fields:s.a.list.isRequired,getAsset:i.a.func.isRequired,widgetFor:i.a.func.isRequired};const de=Object(w.default)(K.a,{label:"PreviewPaneFrame",target:"eblcu2e0"})("width:100%;height:100%;border:none;background:#fff;border-radius:",c.lengths.borderRadius,";");class ce extends o.a.Component{constructor(...e){super(...e),se(this,"getWidget",(e,t,r,a=null)=>{const i=r.fieldsMetaData,n=r.getAsset,l=r.entry,s=Object(S.i)(e.get("widget")),d=a?e.get("name")+"_"+a:e.get("name");return s.preview?o.a.createElement(ie,{previewComponent:s.preview,key:d,field:e,getAsset:n,value:t&&k.Map.isMap(t)?t.get(e.get("name")):t,metadata:i&&i.get(e.get("name")),entry:l,fieldsMetaData:i}):null}),se(this,"inferedFields",{}),se(this,"widgetFor",(e,t=this.props.fields,r=this.props.entry.get("data"))=>{let a=t&&t.find(t=>t.get("name")===e),i=r&&r.get(a.get("name")),n=a.get("fields"),l=a.get("field");n&&(a=a.set("fields",this.getNestedWidgets(n,i))),l&&(a=a.set("field",this.getSingleNested(l,i)));return-1!==Object.keys(this.inferedFields).indexOf(e)?i=this.inferedFields[e].defaultPreview(i):i&&-1!==["string","text","number"].indexOf(a.get("widget"))&&i.toString().length<50&&(i=o.a.createElement("div",null,o.a.createElement("strong",null,a.get("label",a.get("name")),":")," ",i)),i?this.getWidget(a,i,this.props):null}),se(this,"getNestedWidgets",(e,t)=>k.List.isList(t)?t.map(t=>this.widgetsForNestedFields(e,t)):this.widgetsForNestedFields(e,t)),se(this,"getSingleNested",(e,t)=>k.List.isList(t)?t.map((t,r)=>this.getWidget(e,t,this.props,r)):this.getWidget(e,t,this.props)),se(this,"widgetsForNestedFields",(e,t)=>e.map(r=>this.widgetFor(r.get("name"),e,t))),se(this,"widgetsFor",e=>{const t=this.props,r=t.fields,a=t.entry,i=r.find(t=>t.get("name")===e),n=i&&i.get("fields"),l=a.getIn(["data",i.get("name")]);return k.List.isList(l)?l.map(e=>{const t=n&&Object(k.Map)(n.map((t,r)=>[t.get("name"),o.a.createElement("div",{key:r},this.getWidget(t,e,this.props))]));return Object(k.Map)({data:e,widgets:t})}):Object(k.Map)({data:l,widgets:n&&Object(k.Map)(n.map(e=>[e.get("name"),this.getWidget(e,l,this.props)]))})})}inferFields(){const e=Object(y.i)(this.props.collection,"title"),t=Object(y.i)(this.props.collection,"shortTitle"),r=Object(y.i)(this.props.collection,"author");this.inferedFields={},e&&(this.inferedFields[e]=X.b.title),t&&(this.inferedFields[t]=X.b.shortTitle),r&&(this.inferedFields[r]=X.b.author)}render(){const e=this.props,t=e.entry,r=e.collection;if(!t||!t.get("data"))return null;const a=Object(S.f)(Object(y.k)(r,t.get("slug")))||le;this.inferFields();const i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){se(e,t,r[t])})}return e}({},this.props,{widgetFor:this.widgetFor,widgetsFor:this.widgetsFor}),n=Object(S.e)().map((e,t)=>e.raw?o.a.createElement("style",{key:t},e.value):o.a.createElement("link",{key:t,href:e.value,type:"text/css",rel:"stylesheet"}));r||o.a.createElement(de,{head:n});return o.a.createElement(Q.c,null,o.a.createElement(de,{head:n,initialContent:'\n<!DOCTYPE html>\n<html>\n  <head><base target="_blank"/></head>\n  <body><div></div></body>\n</html>\n'},o.a.createElement(te,{previewComponent:a,previewProps:i})))}}ce.propTypes={collection:s.a.map.isRequired,fields:s.a.list.isRequired,entry:s.a.map.isRequired,fieldsMetaData:s.a.map.isRequired,getAsset:i.a.func.isRequired};var ue=r(990),pe=r(428);function he(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const ge={buttonMargin:Object(w.css)("margin:0 10px;label:buttonMargin;"),toolbarSection:Object(w.css)("height:100%;display:flex;align-items:center;border:0 solid ",c.colors.textFieldBorder,";label:toolbarSection;")},be=Object(w.default)("div",{label:"ToolbarContainer",target:"epjlddv0"})("box-shadow:0 2px 6px 0 rgba(68,74,87,0.05),0 1px 3px 0 rgba(68,74,87,0.1),0 2px 54px rgba(0,0,0,0.1);position:fixed;top:0;left:0;width:100%;min-width:800px;z-index:300;background-color:#fff;height:66px;display:flex;justify-content:space-between;"),fe=Object(w.default)("div",{label:"ToolbarSectionMain",target:"epjlddv1"})(ge.toolbarSection,";flex:10;display:flex;justify-content:space-between;padding:0 10px;"),me=Object(w.default)("div",{label:"ToolbarSubSectionFirst",target:"epjlddv2"})("display:flex;"),ye=Object(w.default)(me,{label:"ToolbarSubSectionLast",target:"epjlddv3"})("justify-content:flex-end;"),ve=Object(w.default)(ue.a,{label:"ToolbarSectionBackLink",target:"epjlddv4"})(ge.toolbarSection,";border-right-width:1px;font-weight:normal;padding:0 20px;&:hover,&:focus{background-color:#f1f2f4;}"),we=Object(w.default)("div",{label:"ToolbarSectionMeta",target:"epjlddv5"})(ge.toolbarSection,";border-left-width:1px;padding:0 7px;"),Ee=Object(w.default)(c.Dropdown,{label:"ToolbarDropdown",target:"epjlddv6"})(ge.buttonMargin,";",c.Icon,"{color:",c.colorsRaw.teal,";}"),Ce=Object(w.default)("div",{label:"BackArrow",target:"epjlddv7"})("color:",c.colors.textLead,";font-size:21px;font-weight:600;margin-right:16px;"),Re=Object(w.default)("div",{label:"BackCollection",target:"epjlddv8"})("color:",c.colors.textLead,";font-size:14px;"),qe=Object(w.default)("div",{label:"BackStatus",target:"epjlddv9"})("margin-top:6px;"),Oe=Object(w.default)(qe,{label:"BackStatusUnchanged",target:"epjlddv10"})(c.components.textBadgeSuccess,";&::after{height:12px;width:15.5px;color:",c.colors.successText,";margin-left:5px;position:relative;top:1px;content:url(\"data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='15' height='11'><path fill='#005614' fill-rule='nonzero' d='M4.016 11l-.648-.946a6.202 6.202 0 0 0-.157-.22 9.526 9.526 0 0 1-.096-.133l-.511-.7a7.413 7.413 0 0 0-.162-.214l-.102-.134-.265-.346a26.903 26.903 0 0 0-.543-.687l-.11-.136c-.143-.179-.291-.363-.442-.54l-.278-.332a8.854 8.854 0 0 0-.192-.225L.417 6.28l-.283-.324L0 5.805l1.376-1.602c.04.027.186.132.186.132l.377.272.129.095c.08.058.16.115.237.175l.37.28c.192.142.382.292.565.436l.162.126c.27.21.503.398.714.574l.477.393c.078.064.156.127.23.194l.433.375.171-.205A50.865 50.865 0 0 1 8.18 4.023a35.163 35.163 0 0 1 2.382-2.213c.207-.174.42-.349.635-.518l.328-.255.333-.245c.072-.055.146-.107.221-.159l.117-.083c.11-.077.225-.155.341-.23.163-.11.334-.217.503-.32l1.158 1.74a11.908 11.908 0 0 0-.64.55l-.065.06c-.07.062-.139.125-.207.192l-.258.249-.26.265c-.173.176-.345.357-.512.539a32.626 32.626 0 0 0-1.915 2.313 52.115 52.115 0 0 0-2.572 3.746l-.392.642-.19.322-.233.382H4.016z'/></svg>\");}"),je=Object(w.default)(qe,{label:"BackStatusChanged",target:"epjlddv11"})(c.components.textBadgeDanger,";"),Se=Object(w.default)("button",{label:"ToolbarButton",target:"epjlddv12"})(c.buttons.button,";",c.buttons.default,";",ge.buttonMargin,";display:block;"),xe=Object(w.default)(Se,{label:"DeleteButton",target:"epjlddv13"})(c.buttons.lightRed,";"),Pe=Object(w.default)(Se,{label:"SaveButton",target:"epjlddv14"})(c.buttons.lightBlue,";"),De=Object(w.default)("div",{label:"StatusPublished",target:"epjlddv15"})(ge.buttonMargin,";border:1px solid ",c.colors.textFieldBorder,";border-radius:",c.lengths.borderRadius,";background-color:",c.colorsRaw.white,";color:",c.colorsRaw.teal,";padding:0 24px;line-height:36px;cursor:default;font-size:14px;font-weight:500;"),ke=Object(w.default)(c.StyledDropdownButton,{label:"PublishButton",target:"epjlddv16"})("background-color:",c.colorsRaw.teal,";"),Ae=Object(w.default)(c.StyledDropdownButton,{label:"StatusButton",target:"epjlddv17"})("background-color:",c.colorsRaw.tealLight,";color:",c.colorsRaw.teal,";"),Fe=Object(w.default)(c.DropdownItem,{label:"StatusDropdownItem",target:"epjlddv18"})(c.Icon,"{color:",c.colors.infoText,";}");class Te extends o.a.Component{constructor(...e){super(...e),he(this,"renderSimpleSaveControls",()=>{const e=this.props,t=e.showDelete,r=e.onDelete,a=e.t;return o.a.createElement("div",null,t?o.a.createElement(xe,{onClick:r},a("editor.editorToolbar.deleteEntry")):null)}),he(this,"renderSimplePublishControls",()=>{const e=this.props,t=e.collection,r=e.onPersist,a=e.onPersistAndNew,i=e.isPersisting,n=e.hasChanged,l=e.isNewEntry,s=e.t;return l||n?o.a.createElement("div",null,o.a.createElement(Ee,{dropdownTopOverlap:"40px",dropdownWidth:"150px",renderButton:()=>o.a.createElement(ke,null,s(i?"editor.editorToolbar.publishing":"editor.editorToolbar.publish"))},o.a.createElement(c.DropdownItem,{label:"Publish now",icon:"arrow",iconDirection:"right",onClick:r}),t.get("create")?o.a.createElement(c.DropdownItem,{label:s("editor.editorToolbar.publishAndCreateNew"),icon:"add",onClick:a}):null)):o.a.createElement(De,null,s("editor.editorToolbar.published"))}),he(this,"renderWorkflowSaveControls",()=>{const e=this.props,t=e.onPersist,r=e.onDelete,a=e.onDeleteUnpublishedChanges,i=e.showDelete,n=e.hasChanged,l=e.hasUnpublishedChanges,s=e.isPersisting,d=e.isDeleting,c=e.isNewEntry,u=e.isModification,p=e.t,h=l&&u&&p("editor.editorToolbar.deleteUnpublishedChanges")||l&&(c||!u)&&p("editor.editorToolbar.deleteUnpublishedEntry")||!l&&!u&&p("editor.editorToolbar.deletePublishedEntry");return[o.a.createElement(Pe,{key:"save-button",onClick:()=>n&&t()},p(s?"editor.editorToolbar.saving":"editor.editorToolbar.save")),i||l||u?o.a.createElement(xe,{key:"delete-button",onClick:l?a:r},d?p("editor.editorToolbar.deleting"):h):null]}),he(this,"renderWorkflowPublishControls",()=>{const e=this.props,t=e.collection,r=e.isUpdatingStatus,a=e.isPublishing,i=e.onChangeStatus,n=e.onPublish,l=e.onPublishAndNew,s=e.currentStatus,d=e.isNewEntry,u=e.t;return s?o.a.createElement(o.a.Fragment,null,o.a.createElement(Ee,{dropdownTopOverlap:"40px",dropdownWidth:"120px",renderButton:()=>o.a.createElement(Ae,null,u(r?"editor.editorToolbar.updating":"editor.editorToolbar.setStatus"))},o.a.createElement(Fe,{label:u("editor.editorToolbar.draft"),onClick:()=>i("DRAFT"),icon:s===v.c.get("DRAFT")&&"check"}),o.a.createElement(Fe,{label:u("editor.editorToolbar.inReview"),onClick:()=>i("PENDING_REVIEW"),icon:s===v.c.get("PENDING_REVIEW")&&"check"}),o.a.createElement(Fe,{label:u("editor.editorToolbar.ready"),onClick:()=>i("PENDING_PUBLISH"),icon:s===v.c.get("PENDING_PUBLISH")&&"check"})),o.a.createElement(Ee,{dropdownTopOverlap:"40px",dropdownWidth:"150px",renderButton:()=>o.a.createElement(ke,null,u(a?"editor.editorToolbar.publishing":"editor.editorToolbar.publish"))},o.a.createElement(c.DropdownItem,{label:u("editor.editorToolbar.publishNow"),icon:"arrow",iconDirection:"right",onClick:n}),t.get("create")?o.a.createElement(c.DropdownItem,{label:u("editor.editorToolbar.publishAndCreateNew"),icon:"add",onClick:l}):null)):d?void 0:o.a.createElement(De,null,u("editor.editorToolbar.published"))})}render(){const e=this.props,t=e.user,r=e.hasChanged,a=e.displayUrl,i=e.collection,n=e.hasWorkflow,l=e.onLogoutClick,s=e.t;return o.a.createElement(be,null,o.a.createElement(ve,{to:`/collections/${i.get("name")}`},o.a.createElement(Ce,null,"←"),o.a.createElement("div",null,o.a.createElement(Re,null,s("editor.editorToolbar.backCollection",{collectionLabel:i.get("label")})),r?o.a.createElement(je,null,s("editor.editorToolbar.unsavedChanges")):o.a.createElement(Oe,null,s("editor.editorToolbar.changesSaved")))),o.a.createElement(fe,null,o.a.createElement(me,null,n?this.renderWorkflowSaveControls():this.renderSimpleSaveControls()),o.a.createElement(ye,null,n?this.renderWorkflowPublishControls():this.renderSimplePublishControls())),o.a.createElement(we,null,o.a.createElement(pe.a,{displayUrl:a,imageUrl:t.get("avatar_url"),onLogoutClick:l})))}}he(Te,"propTypes",{isPersisting:i.a.bool,isPublishing:i.a.bool,isUpdatingStatus:i.a.bool,isDeleting:i.a.bool,onPersist:i.a.func.isRequired,onPersistAndNew:i.a.func.isRequired,showDelete:i.a.bool.isRequired,onDelete:i.a.func.isRequired,onDeleteUnpublishedChanges:i.a.func.isRequired,onChangeStatus:i.a.func.isRequired,onPublish:i.a.func.isRequired,onPublishAndNew:i.a.func.isRequired,user:s.a.map.isRequired,hasChanged:i.a.bool,displayUrl:i.a.string,collection:s.a.map.isRequired,hasWorkflow:i.a.bool,hasUnpublishedChanges:i.a.bool,isNewEntry:i.a.bool,isModification:i.a.bool,currentStatus:i.a.string,onLogoutClick:i.a.func.isRequired,t:i.a.func.isRequired});var Me=Object(u.translate)()(Te);const Ne=Object(w.default)("button",{label:"EditorToggleButton",target:"e1wt48rs0"})(c.buttons.button,";",c.shadows.dropMiddle,";background-color:",c.colorsRaw.white,";color:",e=>c.colors[e.isActive?"active":"inactive"],";border-radius:32px;display:flex;justify-content:center;align-items:center;width:40px;height:40px;padding:0;margin-bottom:12px;"),Ue=({enabled:e,active:t,onClick:r,icon:a})=>e?o.a.createElement(Ne,{onClick:r,isActive:t},o.a.createElement(c.Icon,{type:a,size:"large"})):null;Ue.propTypes={enabled:i.a.bool,active:i.a.bool,onClick:i.a.func.isRequired,icon:i.a.string.isRequired};var We=Ue;function Le(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Ie="cms.preview-visible",Be="cms.scroll-sync-enabled",Ve={splitPane:Object(w.css)(c.components.card,";border-radius:0;height:100%;label:splitPane;"),pane:Object(w.css)("height:100%;overflow-y:auto;label:pane;")};Object(w.injectGlobal)(".Resizer.vertical{width:21px;cursor:col-resize;position:relative;transition:background-color ",c.transitions.main,";&:before{content:'';width:1px;height:100%;position:relative;left:10px;background-color:",c.colors.textFieldBorder,";display:block;}&:hover,&:active{background-color:",c.colorsRaw.GrayLight,";}}");const ze=Object(w.default)(E.a,{label:"StyledSplitPane",target:"e1iq5e7z0"})(Ve.splitPane,";.Pane{height:100%;}"),He=Object(w.default)("div",{label:"NoPreviewContainer",target:"e1iq5e7z1"})(Ve.splitPane,";"),$e=Object(w.default)("div",{label:"EditorContainer",target:"e1iq5e7z2"})("width:100%;min-width:800px;height:100%;position:absolute;top:0;left:0;overflow:hidden;padding-top:66px;background-color:",c.colors.background,";"),Ge=Object(w.default)("div",{label:"Editor",target:"e1iq5e7z3"})("max-width:1600px;height:100%;margin:0 auto;position:relative;"),_e=Object(w.default)("div",{label:"PreviewPaneContainer",target:"e1iq5e7z4"})("height:100%;overflow-y:auto;pointer-events:",e=>e.blockEntry?"none":"auto",";"),Je=Object(w.default)(_e,{label:"ControlPaneContainer",target:"e1iq5e7z5"})("padding:0 16px;position:relative;overflow-x:hidden;"),Ye=Object(w.default)("div",{label:"ViewControls",target:"e1iq5e7z6"})("position:absolute;top:10px;right:10px;z-index:299;");class Ke extends n.Component{constructor(...e){super(...e),Le(this,"state",{showEventBlocker:!1,previewVisible:"false"!==localStorage.getItem(Ie),scrollSyncEnabled:"false"!==localStorage.getItem(Be)}),Le(this,"handleSplitPaneDragStart",()=>{this.setState({showEventBlocker:!0})}),Le(this,"handleSplitPaneDragFinished",()=>{this.setState({showEventBlocker:!1})}),Le(this,"handleOnPersist",(e={})=>{const t=e.createNew,r=void 0!==t&&t;this.controlPaneRef.validate(),this.props.onPersist({createNew:r})}),Le(this,"handleOnPublish",(e={})=>{const t=e.createNew,r=void 0!==t&&t;this.controlPaneRef.validate(),this.props.onPublish({createNew:r})}),Le(this,"handleTogglePreview",()=>{const e=!this.state.previewVisible;this.setState({previewVisible:e}),localStorage.setItem(Ie,e)}),Le(this,"handleToggleScrollSync",()=>{const e=!this.state.scrollSyncEnabled;this.setState({scrollSyncEnabled:e}),localStorage.setItem(Be,e)})}render(){const e=this.props,t=e.collection,r=e.entry,a=e.fields,i=e.fieldsMetaData,n=e.fieldsErrors,l=e.getAsset,s=e.onChange,d=e.showDelete,c=e.onDelete,u=e.onDeleteUnpublishedChanges,p=e.onChangeStatus,h=e.onPublish,g=e.onValidate,b=e.user,f=e.hasChanged,m=e.displayUrl,y=e.hasWorkflow,v=e.hasUnpublishedChanges,w=e.isNewEntry,E=e.isModification,R=e.currentStatus,q=e.onLogoutClick,O=this.state,j=O.previewVisible,S=O.scrollSyncEnabled,x=O.showEventBlocker,P=t.getIn(["editor","preview"],!0),D=o.a.createElement(Je,{blockEntry:x},o.a.createElement(J,{collection:t,entry:r,fields:a,fieldsMetaData:i,fieldsErrors:n,onChange:s,onValidate:g,ref:e=>this.controlPaneRef=e})),k=o.a.createElement(C.ScrollSync,{enabled:this.state.scrollSyncEnabled},o.a.createElement("div",null,o.a.createElement(ze,{maxSize:-100,defaultSize:"50%",onDragStarted:this.handleSplitPaneDragStart,onDragFinished:this.handleSplitPaneDragFinished},o.a.createElement(C.ScrollSyncPane,null,D),o.a.createElement(_e,{blockEntry:x},o.a.createElement(ce,{collection:t,entry:r,fields:a,fieldsMetaData:i,getAsset:l})))));return o.a.createElement($e,null,o.a.createElement(Me,{isPersisting:r.get("isPersisting"),isPublishing:r.get("isPublishing"),isUpdatingStatus:r.get("isUpdatingStatus"),isDeleting:r.get("isDeleting"),onPersist:this.handleOnPersist,onPersistAndNew:()=>this.handleOnPersist({createNew:!0}),onDelete:c,onDeleteUnpublishedChanges:u,onChangeStatus:p,showDelete:d,onPublish:h,onPublishAndNew:()=>this.handleOnPublish({createNew:!0}),user:b,hasChanged:f,displayUrl:m,collection:t,hasWorkflow:y,hasUnpublishedChanges:v,isNewEntry:w,isModification:E,currentStatus:R,onLogoutClick:q}),o.a.createElement(Ge,null,o.a.createElement(Ye,null,o.a.createElement(We,{enabled:P,active:j,onClick:this.handleTogglePreview,icon:"eye"}),o.a.createElement(We,{enabled:P&&j,active:S,onClick:this.handleToggleScrollSync,icon:"scroll"})),P&&this.state.previewVisible?k:o.a.createElement(He,null,D)))}}Ke.propTypes={collection:s.a.map.isRequired,entry:s.a.map.isRequired,fields:s.a.list.isRequired,fieldsMetaData:s.a.map.isRequired,fieldsErrors:s.a.map.isRequired,getAsset:i.a.func.isRequired,onChange:i.a.func.isRequired,onValidate:i.a.func.isRequired,onPersist:i.a.func.isRequired,showDelete:i.a.bool.isRequired,onDelete:i.a.func.isRequired,onDeleteUnpublishedChanges:i.a.func.isRequired,onPublish:i.a.func.isRequired,onChangeStatus:i.a.func.isRequired,user:s.a.map.isRequired,hasChanged:i.a.bool,displayUrl:i.a.string,hasWorkflow:i.a.bool,hasUnpublishedChanges:i.a.bool,isNewEntry:i.a.bool,isModification:i.a.bool,currentStatus:i.a.string,onLogoutClick:i.a.func.isRequired};var Qe=Ke;function Xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ze(e,t){const r=e.collections,a=e.config.get("publish_mode")===v.a,i=r.get(t.match.params.name),n={isEditorialWorkflow:a,showDelete:!t.newEntry&&Object(y.b)(i)};if(a){const r=t.match.params.slug,a=Object(m.h)(e,i.get("name"),r);a&&(n.unpublishedEntry=!0,n.entry=a)}return n}function et(e,t,r){const a=e.isEditorialWorkflow,i=e.unpublishedEntry,n=t.dispatch,o={};return a&&(o.loadEntry=((e,t)=>n(Object(b.r)(e,t))),o.persistEntry=(e=>n(Object(b.s)(e,i)))),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){Xe(e,t,r[t])})}return e}({},r,e,o)}function tt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const rt=e=>p.a.push(`/collections/${e}`),at=e=>rt(e),it=e=>rt(`${e}/new`),nt=(e,t)=>rt(`${e}/entries/${t}`);class ot extends o.a.Component{constructor(...e){super(...e),tt(this,"createDraft",(e,t)=>{e&&this.props.createDraftFromEntry(e,t)}),tt(this,"handleChangeStatus",e=>{const t=this.props,r=t.entryDraft,a=t.updateUnpublishedEntryStatus,i=t.collection,n=t.slug,o=t.currentStatus,l=t.t;if(r.get("hasChanged"))return void window.alert(l("editor.editor.onUpdatingWithUnsavedChanges"));const s=v.c.get(e);a(i.get("name"),n,o,s)}),tt(this,"handlePersistEntry",async(e={})=>{const t=e.createNew,r=void 0!==t&&t,a=this.props,i=a.persistEntry,n=a.collection,o=a.currentStatus,l=a.hasWorkflow,s=a.loadEntry,d=a.slug,c=a.createEmptyDraft;await i(n),r?(it(n.get("name")),c(n)):d&&l&&!o&&s(n,d)}),tt(this,"handlePublishEntry",async(e={})=>{const t=e.createNew,r=void 0!==t&&t,a=this.props,i=a.publishUnpublishedEntry,n=a.entryDraft,o=a.collection,l=a.slug,s=a.currentStatus,d=a.t;s===v.c.last()?n.get("hasChanged")?window.alert(d("editor.editor.onPublishingWithUnsavedChanges")):window.confirm(d("editor.editor.onPublishing"))&&(await i(o.get("name"),l),r&&it(o.get("name"))):window.alert(d("editor.editor.onPublishingNotReady"))}),tt(this,"handleDeleteEntry",()=>{const e=this.props,t=e.entryDraft,r=e.newEntry,a=e.collection,i=e.deleteEntry,n=e.slug,o=e.t;if(t.get("hasChanged")){if(!window.confirm(o("editor.editor.onDeleteWithUnsavedChanges")))return}else if(!window.confirm(o("editor.editor.onDeletePublishedEntry")))return;if(r)return at(a.get("name"));setTimeout(async()=>(await i(a,n),at(a.get("name"))),0)}),tt(this,"handleDeleteUnpublishedChanges",async()=>{const e=this.props,t=e.entryDraft,r=e.collection,a=e.slug,i=e.deleteUnpublishedEntry,n=e.loadEntry,o=e.isModification,l=e.t;t.get("hasChanged")&&!window.confirm(l("editor.editor.onDeleteUnpublishedChangesWithUnsavedChanges"))||window.confirm(l("editor.editor.onDeleteUnpublishedChanges"))&&(await i(r.get("name"),a),o?n(r,a):at(r.get("name")))})}componentDidMount(){const e=this.props,t=e.newEntry,r=e.collection,a=e.slug,i=e.loadEntry,n=e.createEmptyDraft,o=e.loadEntries,l=e.collectionEntriesLoaded,s=e.t;t?n(r):i(r,a);const d=s("editor.editor.onLeavePage");this.exitBlocker=(e=>{if(this.props.entryDraft.get("hasChanged"))return e.returnValue=d,d}),window.addEventListener("beforeunload",this.exitBlocker);const c=p.a.block((e,t)=>{const a=this.props.entryDraft.getIn(["entry","isPersisting"]),i=this.props.entryDraft.getIn(["entry","newRecord"]),n=`/collections/${r.get("name")}/new`;if(!a||!i||this.props.location.pathname!==n||"PUSH"!==t)return this.props.hasChanged?d:void 0});this.unlisten=p.a.listen((e,t)=>{const a=`/collections/${r.get("name")}/new`,i=`/collections/${r.get("name")}/entries/`,n=e.pathname;n.startsWith(a)||n.startsWith(i)&&"PUSH"===t||(c(),this.unlisten())}),l||o(r)}componentDidUpdate(e){const t=this.props.entryDraft&&this.props.entryDraft.getIn(["entry","slug"]);if(!e.slug&&t&&this.props.newEntry&&(nt(e.collection.get("name"),t),this.props.loadEntry(this.props.collection,t)),e.entry===this.props.entry)return;const r=this.props,a=r.entry,i=r.newEntry,n=r.fields,o=r.collection;if(!a||a.get("isFetching")||a.get("error"))i&&e.createEmptyDraft(o);else{const e=Object(f.a)(a.get("data"),n),t=a.set("data",e),r=this.props.entryDraft&&this.props.entryDraft.get("fieldsMetaData");this.createDraft(t,r)}}componentWillUnmount(){this.props.discardDraft(),window.removeEventListener("beforeunload",this.exitBlocker)}render(){const e=this.props,t=e.entry,r=e.entryDraft,a=e.fields,i=e.boundGetAsset,n=e.collection,l=e.changeDraftField,s=e.changeDraftFieldValidation,d=e.user,u=e.hasChanged,p=e.displayUrl,h=e.hasWorkflow,g=e.unpublishedEntry,b=e.newEntry,f=e.isModification,m=e.currentStatus,y=e.logoutUser,v=e.t;return t&&t.get("error")?o.a.createElement("div",null,o.a.createElement("h3",null,t.get("error"))):null==r||void 0===r.get("entry")||t&&t.get("isFetching")?o.a.createElement(c.Loader,{active:!0},v("editor.editor.loadingEntry")):o.a.createElement(Qe,{entry:r.get("entry"),getAsset:i,collection:n,fields:a,fieldsMetaData:r.get("fieldsMetaData"),fieldsErrors:r.get("fieldsErrors"),onChange:l,onValidate:s,onPersist:this.handlePersistEntry,onDelete:this.handleDeleteEntry,onDeleteUnpublishedChanges:this.handleDeleteUnpublishedChanges,onChangeStatus:this.handleChangeStatus,onPublish:this.handlePublishEntry,showDelete:this.props.showDelete,user:d,hasChanged:u,displayUrl:p,hasWorkflow:h,hasUnpublishedChanges:g,isNewEntry:b,isModification:f,currentStatus:m,onLogoutClick:y})}}tt(ot,"propTypes",{boundGetAsset:i.a.func.isRequired,changeDraftField:i.a.func.isRequired,changeDraftFieldValidation:i.a.func.isRequired,collection:s.a.map.isRequired,createDraftFromEntry:i.a.func.isRequired,createEmptyDraft:i.a.func.isRequired,discardDraft:i.a.func.isRequired,entry:s.a.map,entryDraft:s.a.map.isRequired,loadEntry:i.a.func.isRequired,persistEntry:i.a.func.isRequired,deleteEntry:i.a.func.isRequired,showDelete:i.a.bool.isRequired,fields:s.a.list.isRequired,slug:i.a.string,newEntry:i.a.bool.isRequired,displayUrl:i.a.string,hasWorkflow:i.a.bool,unpublishedEntry:i.a.bool,isModification:i.a.bool,collectionEntriesLoaded:i.a.bool,updateUnpublishedEntryStatus:i.a.func.isRequired,publishUnpublishedEntry:i.a.func.isRequired,deleteUnpublishedEntry:i.a.func.isRequired,logoutUser:i.a.func.isRequired,loadEntries:i.a.func.isRequired,currentStatus:i.a.string,user:s.a.map.isRequired,location:i.a.shape({pathname:i.a.string}),hasChanged:i.a.bool,t:i.a.func.isRequired});t.default=Object(d.b)(function(e,t){const r=e.collections,a=e.entryDraft,i=e.auth,n=e.config,o=e.entries,l=t.match.params.slug,s=r.get(t.match.params.name),d=s.get("name"),c=!0===t.newRecord,u=Object(y.f)(s,l),p=c?null:Object(m.d)(e,d,l),h=m.b.bind(null,e),g=i&&i.get("user"),b=a.get("hasChanged"),f=n.get("display_url"),w=n.get("publish_mode")===v.a,E=a.getIn(["entry","isModification"]),C=!!o.getIn(["pages",d]),R=Object(m.h)(e,d,l);return{collection:s,collections:r,newEntry:c,entryDraft:a,boundGetAsset:h,fields:u,slug:l,entry:p,user:g,hasChanged:b,displayUrl:f,hasWorkflow:w,isModification:E,collectionEntriesLoaded:C,currentStatus:R&&R.getIn(["metaData","status"])}},{changeDraftField:g.q,changeDraftFieldValidation:g.r,loadEntry:g.y,loadEntries:g.x,createDraftFromEntry:g.t,createEmptyDraft:g.u,discardDraft:g.w,persistEntry:g.z,deleteEntry:g.v,updateUnpublishedEntryStatus:b.u,publishUnpublishedEntry:b.t,deleteUnpublishedEntry:b.p,logoutUser:h.h})(function(e){return Object(d.b)(Ze,null,et)(class extends o.a.Component{render(){return o.a.createElement(e,this.props)}})}(Object(u.translate)()(ot)))}}]);
//# sourceMappingURL=3.netlify-cms.js.map