import{b as V,p as h,n as N,o as P,f as E,t as I}from"./vue.esm-bundler-BoTXc7jy.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C={name:"Button",props:{label:{type:String,default:"Button"},variant:{type:String,default:"primary",validator:e=>["primary","secondary","danger","success"].includes(e)},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)},disabled:{type:Boolean,default:!1}},methods:{onClick(e){this.disabled||this.$emit("click",e)}}},F=["disabled"];function O(e,i,a,U,q,d){return P(),V("button",{class:N(["custom-button",`size-${a.size}`,a.variant,{disabled:a.disabled}]),disabled:a.disabled,onClick:i[0]||(i[0]=(...T)=>d.onClick&&d.onClick(...T))},[h(e.$slots,"default",{},()=>[E(I(a.label),1)],!0)],10,F)}const x=j(C,[["render",O],["__scopeId","data-v-3493a29b"]]);C.__docgenInfo={displayName:"Button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","danger","success"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"},values:["small","medium","large"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/Users/ferneypalacio/Developer/storybook-project/vue-button-storybook/src/components/ButtonTest.vue"]};const G={title:"Components/Button",component:x,argTypes:{label:{control:"text"},variant:{control:"select",options:["primary","secondary","danger","success"]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},onClick:{action:"clicked"}}},l=e=>({components:{Button:x},setup(){return{args:e}},template:'<Button v-bind="args" />'}),n=l.bind({});n.args={label:"Primary Button",variant:"primary",size:"medium",disabled:!1};const t=l.bind({});t.args={label:"Secondary Button",variant:"secondary",size:"medium",disabled:!1};const s=l.bind({});s.args={label:"Danger Button",variant:"danger",size:"medium",disabled:!1};const r=l.bind({});r.args={label:"Success Button",variant:"success",size:"medium",disabled:!1};const o=l.bind({});o.args={label:"Disabled Button",variant:"primary",size:"medium",disabled:!0};var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,b,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,y,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var B,S,_;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(_=(S=r.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var k,z,D;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const H=["Primary","Secondary","Danger","Success","Disabled"];export{s as Danger,o as Disabled,n as Primary,t as Secondary,r as Success,H as __namedExportsOrder,G as default};
