import{j as e}from"./iframe-DHdCyQc7.js";import{T as g,a as o}from"./Tooltip-CahbpEaW.js";import"./useTimeout-D0EDQB2X.js";import"./Grow-BdHuN-yp.js";import"./useSlot-DGgmD32f.js";import"./index-DuIt2Ws_.js";import"./useControlled-BCeA0D2g.js";import"./isFocusVisible-B8k4qzLc.js";const P={title:"base-component/Tooltip",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{arrow:{control:"boolean"},placement:{control:"select",options:g}},args:{title:"Tooltip"}},d=({text:t="Element",height:r="100px"})=>e.jsx("div",{style:{height:r,width:"100px",backgroundColor:"#97e6ff",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #000000",borderRadius:"4px"},children:t}),f=t=>e.jsx(o,{title:"Default Tooltip",...t,children:e.jsx(d,{text:t.title||"Default"})}),p=f.bind({}),i=t=>e.jsx(o,{...t,title:"Default Tooltip"}),l=t=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"3rem"},children:[e.jsx("div",{children:e.jsx(o,{...t,title:"With Arrow",children:e.jsx(d,{text:"With Arrow"})})}),e.jsx("div",{children:e.jsx(o,{...t,title:"Without Arrow",arrow:!1,children:e.jsx(d,{text:"Without Arrow"})})})]}),n=t=>{const r={top:["top-start","top","top-end"],right:["right-start","right","right-end"],bottom:["bottom-start","bottom","bottom-end"],left:["left-start","left","left-end"]},s=({placements:m,direction:c="row",align:u="center"})=>e.jsx("div",{style:{display:"flex",flexDirection:c,gap:"1rem",alignItems:u,justifyContent:c==="row"?"center":void 0},children:m.map(a=>e.jsx(o,{placement:a,title:a,arrow:!0,children:e.jsx("span",{style:{display:"inline-block"},children:e.jsx(d,{text:a,height:"50px"})})},a))});return e.jsxs("div",{style:{width:"600px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem",padding:"2rem"},children:[e.jsx("p",{style:{fontWeight:"bold",fontSize:"2rem"},children:"ALL PLACEMENTS"}),s({placements:r.top}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[s({placements:r.left,direction:"column",align:"flex-start"}),s({placements:r.right,direction:"column",align:"flex-end"})]}),s({placements:r.bottom})]})};i.__docgenInfo={description:"",methods:[],displayName:"WithoutChildren"};l.__docgenInfo={description:"",methods:[],displayName:"ArrowProp"};n.__docgenInfo={description:"",methods:[],displayName:"AllPlacements"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Tooltip title={'Default Tooltip'} {...args}>\r
        <DivElement text={args.title || 'Default'} />\r
    </Tooltip>`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <Tooltip {...args} title={'Default Tooltip'} />",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexDirection: 'row',
  gap: '3rem'
}}>\r
        <div>\r
            <Tooltip {...args} title={\`With Arrow\`}>\r
                <DivElement text={'With Arrow'} />\r
            </Tooltip>\r
        </div>\r
        <div>\r
            <Tooltip {...args} title={\`Without Arrow\`} arrow={false}>\r
                <DivElement text={'Without Arrow'} />\r
            </Tooltip>\r
        </div>\r
    </div>`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const groupedPlacements = {
    top: ['top-start', 'top', 'top-end'],
    right: ['right-start', 'right', 'right-end'],
    bottom: ['bottom-start', 'bottom', 'bottom-end'],
    left: ['left-start', 'left', 'left-end']
  };
  const renderPlacementGroup = ({
    placements,
    direction = 'row',
    align = 'center'
  }) => <div style={{
    display: 'flex',
    flexDirection: direction,
    gap: '1rem',
    alignItems: align,
    justifyContent: direction === 'row' ? 'center' : undefined
  }}>\r
            {placements.map(placement => <Tooltip key={placement} placement={placement} title={placement} arrow>\r
                    <span style={{
        display: 'inline-block'
      }}>\r
                        <DivElement text={placement} height="50px" />\r
                    </span>\r
                </Tooltip>)}\r
        </div>;
  return <div style={{
    width: '600px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem'
  }}>\r
            <p style={{
      fontWeight: 'bold',
      fontSize: '2rem'
    }}>\r
                ALL PLACEMENTS\r
            </p>\r
\r
            {/* Top */}\r
            {renderPlacementGroup({
      placements: groupedPlacements.top
    })}\r
\r
            {/* Middle: Left & Right */}\r
            <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }}>\r
                {renderPlacementGroup({
        placements: groupedPlacements.left,
        direction: 'column',
        align: 'flex-start'
      })}\r
                {renderPlacementGroup({
        placements: groupedPlacements.right,
        direction: 'column',
        align: 'flex-end'
      })}\r
            </div>\r
\r
            {/* Bottom */}\r
            {renderPlacementGroup({
      placements: groupedPlacements.bottom
    })}\r
        </div>;
}`,...n.parameters?.docs?.source}}};const A=["Default","WithoutChildren","ArrowProp","AllPlacements"];export{n as AllPlacements,l as ArrowProp,p as Default,i as WithoutChildren,A as __namedExportsOrder,P as default};
