import{r as d,j as t}from"./iframe-DHdCyQc7.js";import{T as n}from"./ToggleButtonGroup-qGR8c422.js";import{B as p}from"./Box-BcJzKzeK.js";import"./useTimeout-D0EDQB2X.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CK_ezoe2.js";import"./isFocusVisible-B8k4qzLc.js";const V={title:"base-component/ToggleButtonGroup",component:n},o=r=>{const[u,i]=d.useState(r.value||""),c=(g,s)=>{s!==null&&i(s)};return t.jsx(p,{width:"300px",children:t.jsx(n,{...r,value:u,onChange:c})})},e=o.bind({});e.args={value:"left",options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],exclusive:!0,size:"medium",color:"primary",fullWidth:!0};const a=o.bind({});a.args={value:"bold",options:[{value:"bold",label:"Bold",icon:t.jsx("strong",{children:"B"})},{value:"italic",label:"Italic",icon:t.jsx("em",{children:"I"})},{value:"underlined",label:"Underline",icon:t.jsx("u",{children:"U"})}],exclusive:!0,size:"large",color:"secondary",fullWidth:!0};const l=o.bind({});l.args={value:"a",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B",disabled:!0},{value:"c",label:"Option C"}],exclusive:!0,size:"small",color:"success",fullWidth:!1};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };
  return <Box width="300px">\r
            <ToggleButtonGroup {...args} value={value} onChange={handleChange} />\r
        </Box>;
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };
  return <Box width="300px">\r
            <ToggleButtonGroup {...args} value={value} onChange={handleChange} />\r
        </Box>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };
  return <Box width="300px">\r
            <ToggleButtonGroup {...args} value={value} onChange={handleChange} />\r
        </Box>;
}`,...l.parameters?.docs?.source}}};const C=["Default","WithIcons","DisabledOption"];export{e as Default,l as DisabledOption,a as WithIcons,C as __namedExportsOrder,V as default};
