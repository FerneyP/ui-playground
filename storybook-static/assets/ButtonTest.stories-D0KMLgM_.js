import{b as u,p as c,o as l}from"./vue.esm-bundler-BoTXc7jy.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";const r={name:"CustomButton"},p={class:"custom-button"};function d(o,_,f,b,B,C){return l(),u("button",p,[c(o.$slots,"default",{},void 0,!0)])}const a=m(r,[["render",d],["__scopeId","data-v-f12e5a1d"]]);r.__docgenInfo={displayName:"CustomButton",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/ferneypalacio/Developer/storybook-project/vue-button-storybook/src/components/ButtonTest.vue"]};const v={title:"Components/CustomButton",component:a,argTypes:{label:{control:"text"},onClick:{action:"clicked"}}},i=o=>({components:{CustomButton:a},setup(){return{args:o}},template:'<CustomButton v-bind="args">{{ args.label }}</CustomButton>'}),t=i.bind({});t.args={label:"Click Me"};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    CustomButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<CustomButton v-bind="args">{{ args.label }}</CustomButton>'
})`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,v as default};
