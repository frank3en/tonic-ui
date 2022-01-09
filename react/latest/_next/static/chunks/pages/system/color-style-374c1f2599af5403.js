(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{32726:function(e){var o=Object.prototype.hasOwnProperty;e.exports=function(e,t){return null!=e&&o.call(e,t)}},1369:function(e,o,t){var l=t(17297),r=t(79631),n=t(86152),a=t(39045),i=t(61158),d=t(33812);e.exports=function(e,o,t){for(var y=-1,c=(o=l(o,e)).length,p=!1;++y<c;){var m=d(o[y]);if(!(p=null!=e&&t(e,m)))break;e=e[m]}return p||++y!=c?p:!!(c=null==e?0:e.length)&&i(c)&&a(m,c)&&(n(e)||r(e))}},93352:function(e,o,t){var l=t(32726),r=t(1369);e.exports=function(e,o){return null!=e&&r(e,o,l)}},82767:function(e,o){"use strict";o.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},43844:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return b}});var l=t(7896),r=t(59740),n=t(2784),a=t(30876),i=t(81292),d=t(10765),y=t(12215),c=t(5081),p=t(72579),m=t.n(p),x=t(93352),s=t.n(x),k=t(28165),g=["colorLabel","colorType","colorKey","colorTokens","colorValues"],u=function(e){var o,t,a=e.colorLabel,d=e.colorType,c=(e.colorKey,e.colorTokens),p=e.colorValues,m=(0,r.Z)(e,g),x=(0,i.useColorMode)(),s=(0,y.Z)(x,1)[0],u=(0,i.useColorStyle)({colorMode:s}),T=(0,y.Z)(u,1)[0],h=null===T||void 0===T||null===(o=T.color)||void 0===o?void 0:o.primary,S=null===T||void 0===T||null===(t=T.color)||void 0===t?void 0:t.secondary,C=function(){var e={},o={dark:"gray:100",light:"white:emphasis"}[s],t={dark:"gray:70",light:"gray:20"}[s];if("gradient"===d){var l=(0,y.Z)(p,2),r=l[0],n=l[1];return e.background="linear-gradient(45deg, ".concat(r,", ").concat(n,")"),e}return"shadow"===d?(e.backgroundColor={dark:"gray:90",light:"white"}[s],e.boxShadow=p[0],e):(e.backgroundColor=p[0],o===c[0]&&(e.border=1,e.borderColor=t),e)}();return(0,k.tZ)(i.Box,m,(0,k.tZ)(i.Box,(0,l.Z)({maxWidth:120,height:120,px:"3x",mb:"4x"},C)),(0,k.tZ)(i.Box,{mb:"3x"},a&&(0,k.tZ)(i.Text,{color:h,fontSize:"md",lineHeight:"md",fontWeight:"semibold"},a)),c.length>0&&(0,k.tZ)(n.Fragment,null,(0,k.tZ)(i.Stack,{direction:"row",spacing:"2x"},c.map((function(e){return e?(0,k.tZ)(i.Tag,{key:e,variant:"solid",fontFamily:"mono",fontSize:"sm",lineHeight:"sm",mb:"1x"},e):null}))),(0,k.tZ)(i.Stack,{direction:"row",spacing:"2x",mb:"1x"},p.map((function(e){return(0,k.tZ)(i.Text,{key:e,color:S,fontFamily:"mono",fontSize:"sm",lineHeight:"sm"},e)})))))},T=["colorStyle","colorType"],h=function(e){var o,t=e.colorStyle,n=void 0===t?{}:t,a=e.colorType,d=(0,r.Z)(e,T),p=(0,i.useTheme)(),x=(0,i.useColorMode)(),g=(0,y.Z)(x,1)[0],h=(0,i.useColorStyle)({colorMode:g}),S=(0,y.Z)(h,1)[0],C=null!==(o=m()(n,a))&&void 0!==o?o:m()(S,a),v=Object.keys(C).map((function(e){var o,t,l=Array.isArray(C)?"":(t=e,(t=(0,c.Zs)(t)).charAt(0).toUpperCase()+t.slice(1)),r=null!==(o=m()(n,"".concat(a,".").concat(e)))&&void 0!==o?o:m()(S,"".concat(a,".").concat(e)),i=(0,c.rY)(r).map((function(e){return s()(p,["colors",e])?e:null})),d=(0,c.rY)(r).map((function(e){var o;return null!==(o=m()(p,["colors",e]))&&void 0!==o?o:e}));return Array.isArray(C)&&(e="#"+(Number(e)+1)),{colorLabel:l,colorType:a,colorKey:e,colorTokens:i,colorValues:d}}));return(0,k.tZ)(i.Grid,(0,l.Z)({rowGap:"8x",columnGap:"12x",templateColumns:"repeat(auto-fill, minmax(".concat(120,"px, 1fr))")},d),v.map((function(e){var o=e.colorLabel,t=e.colorType,l=e.colorKey,r=e.colorTokens,n=e.colorValues;return(0,k.tZ)(u,{key:l,colorLabel:o,colorType:t,colorKey:l,colorTokens:r,colorValues:n})})))},S=function(e){var o=(0,i.useColorMode)(),t={dark:{backgroundColor:"gray:100",border:1,borderColor:"gray:70"},light:{backgroundColor:"white:emphasis",border:1,borderColor:"gray:20"}}[(0,y.Z)(o,1)[0]];return(0,k.tZ)(i.Box,(0,l.Z)({px:"10x",py:"8x"},t,e))},C=function(e){var o,t=(0,i.useColorMode)(),r=(0,y.Z)(t,1)[0],n=(0,i.useColorStyle)({colorMode:r}),a=(0,y.Z)(n,1)[0],d=null===a||void 0===a||null===(o=a.color)||void 0===o?void 0:o.primary;return(0,k.tZ)(i.Box,(0,l.Z)({mb:"5x",color:d},e))},v=t(82767),f=["components"],w={};function b(e){var o=e.components,t=(0,r.Z)(e,f);return(0,a.kt)("wrapper",(0,l.Z)({},w,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Color Style"),(0,a.kt)("p",null,"Tonic UI comes with a color style system that defines functional color values (See ",(0,a.kt)("strong",{parentName:"p"},"Color Values")," section below for details). You can override the default value by creating a color style object in accordance to the color mode, and pass the object to ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorStyleProvider")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"import React from 'react';\nimport {\n  ThemeProvider,\n  ColorModeProvider,\n  ColorStyleProvider,\n  colorStyle,\n} from '@tonic-ui/react';\nimport App from './App';\n\nconst customColorStyle = {\n  ...colorStyle,\n   dark: {\n    ...colorStyle.dark,\n    color: {\n      emphasis: 'white:emphasis',\n      primary: 'white:primary',\n      secondary: 'white:secondary',\n      tertiary: 'white:tertiary',\n      disabled: 'white:disabled',\n      success: 'green:40',\n      info: 'blue:40',\n      warning: 'orange:50',\n      error: 'red:50',\n    },\n  },\n  light: {\n    ...colorStyle.light,\n    color: {\n      emphasis: 'black:emphasis',\n      primary: 'black:primary',\n      secondary: 'black:secondary',\n      tertiary: 'black:tertiary',\n      disabled: 'black:disabled',\n      success: 'green:50',\n      info: 'blue:60',\n      warning: 'orange:50',\n      error: 'red:60',\n    },\n  },\n};\n\nfunction Example({ children }) {\n  return (\n    <ThemeProvider>\n      <ColorModeProvider value=\"dark\">\n        <ColorStyleProvider value={customColorStyle}>\n          <App />\n        </ColorStyleProvider>\n      </ColorModeProvider>\n    </ThemeProvider>\n  );\n}\n")),(0,a.kt)("p",null,"Then you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useColorStyle")," Hook to get or set color style for a given color mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"const [colorMode] = useColorMode();\nconst [colorStyle, setColorStyle] = useColorStyle({ colorMode });\nconst { colors } = useTheme();\n\nconsole.log(colorMode);\n// => 'dark' / 'light'\nconsole.log(colorStyle.color.primary);\n// => 'white:primary' / 'black:primary'\nconsole.log(colorStyle.background.primary);\n// => 'gray:100' / 'white:emphasis'\nconsole.log(colors[colorStyle.color.primary]);\n// => 'rgba(255, 255, 255, .92)' / 'rgba(0, 0, 0, .92)'\nconsole.log(colors[colorStyle.background.primary]);\n// => '#151515' / 'rgba(255, 255, 255, 1.0)'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [colorMode] = useColorMode();\n  const [colorStyle, setColorStyle] = useColorStyle({ colorMode });\n  const [colorVariant, setColorVariant] = React.useState(\'primary\');\n  const backgroundColor = colorStyle.background[colorVariant];\n  const color = colorStyle.color[colorVariant];\n  const changeColorVariant = (colorVariant) => (event) => {\n    setColorVariant(colorVariant);\n  };\n\n  return (\n    <>\n      <Box mb="4x">\n        <Button onClick={changeColorVariant(\'primary\')}>\n          Use primary color\n        </Button>\n        <Space width="2x" />\n        <Button onClick={changeColorVariant(\'secondary\')}>\n          Use secondary color\n        </Button>\n        <Space width="2x" />\n        <Button onClick={changeColorVariant(\'tertiary\')}>\n          Use tertiary color\n        </Button>\n      </Box>\n      <Box backgroundColor={backgroundColor} p="4x">\n        <Text color={color} size="lg">\n          To change the color mode, click the <b>toggle color mode</b> button at the top right corner.\n        </Text>\n      </Box>\n    </>\n  );\n};\n')),(0,a.kt)("h2",null,"Color Values"),(0,a.kt)("h4",null,"Dark mode"),(0,a.kt)(i.Box,{mb:"6x",mdxType:"Box"},(0,a.kt)(d.Z,{mdxType:"CodeBlock"},(0,v.Z)(i.colorStyle.dark))),(0,a.kt)("h4",null,"Light mode"),(0,a.kt)(i.Box,{mb:"6x",mdxType:"Box"},(0,a.kt)(d.Z,{mdxType:"CodeBlock"},(0,v.Z)(i.colorStyle.light))),(0,a.kt)("h3",null,"Background"),(0,a.kt)(n.Fragment,null,(0,a.kt)(i.DarkMode,{mdxType:"DarkMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Dark Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"background",mdxType:"ColorStyleBody"}))),(0,a.kt)(i.LightMode,{mdxType:"LightMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Light Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"background",mdxType:"ColorStyleBody"})))),(0,a.kt)("h3",null,"Color"),(0,a.kt)(n.Fragment,null,(0,a.kt)(i.DarkMode,{mdxType:"DarkMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Dark Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"color",mdxType:"ColorStyleBody"}))),(0,a.kt)(i.LightMode,{mdxType:"LightMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Light Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"color",mdxType:"ColorStyleBody"})))),(0,a.kt)("h3",null,"Text"),(0,a.kt)(n.Fragment,null,(0,a.kt)(i.DarkMode,{mdxType:"DarkMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Dark Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"text",mdxType:"ColorStyleBody"}))),(0,a.kt)(i.LightMode,{mdxType:"LightMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Light Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"text",mdxType:"ColorStyleBody"})))),(0,a.kt)("h3",null,"Shadow"),(0,a.kt)(n.Fragment,null,(0,a.kt)(i.DarkMode,{mdxType:"DarkMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Dark Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"shadow",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))",mdxType:"ColorStyleBody"}))),(0,a.kt)(i.LightMode,{mdxType:"LightMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Light Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"shadow",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))",mdxType:"ColorStyleBody"})))),(0,a.kt)("h3",null,"Severity"),(0,a.kt)(n.Fragment,null,(0,a.kt)(i.DarkMode,{mdxType:"DarkMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Dark Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"severity",mdxType:"ColorStyleBody"}))),(0,a.kt)(i.LightMode,{mdxType:"LightMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Light Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"severity",mdxType:"ColorStyleBody"})))),(0,a.kt)("h3",null,"Chart"),(0,a.kt)(n.Fragment,null,(0,a.kt)(i.DarkMode,{mdxType:"DarkMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"moon",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Dark Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"chart.classic.colors",mdxType:"ColorStyleBody"}))),(0,a.kt)(i.LightMode,{mdxType:"LightMode"},(0,a.kt)(S,{mdxType:"ColorStyleContent"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Flex,{alignItems:"center",mdxType:"Flex"},(0,a.kt)(i.Icon,{icon:"sun",size:"6x",color:"yellow:50",mdxType:"Icon"}),(0,a.kt)(i.Space,{width:"2x",mdxType:"Space"}),(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Light Mode")),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorType:"chart.classic.colors",mdxType:"ColorStyleBody"})))),(0,a.kt)("h2",null,"Gradient Color Values"),(0,a.kt)("p",null,"Gradient color values are not defined in the color style system, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"gradient")," with below values when necessary."),(0,a.kt)(d.Z,{mdxType:"CodeBlock"},(0,v.Z)({gradient:{severity:{high:["purple:60","red:50"],medium:["red:50","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:40"]},others:{1:["purple:50","magenta:40"],2:["purple:60","blue:50"],3:["blue:50","teal:40"],4:["cyan:40","teal:30"],5:["blue:60","teal:40"],6:["green:40","cyan:30"],7:["magenta:60","red:40"],8:["magenta:50","blue:60"]}}})),(0,a.kt)(S,{display:"flex",flexDirection:"column",rowGap:"8x",mdxType:"ColorStyleContent"},(0,a.kt)(i.Box,{mdxType:"Box"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Gradient - Severity"),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorStyle:{gradient:{high:["purple:60","red:50"],medium:["red:50","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:40"]}},colorType:"gradient",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))",mdxType:"ColorStyleBody"})),(0,a.kt)(i.Box,{mdxType:"Box"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Gradient - Others"),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorStyle:{gradient:{1:["purple:50","magenta:40"],2:["purple:60","blue:50"],3:["blue:50","teal:40"],4:["cyan:40","teal:30"],5:["blue:60","teal:40"],6:["green:40","cyan:30"],7:["magenta:60","red:40"],8:["magenta:50","blue:60"]}},colorType:"gradient",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))",mdxType:"ColorStyleBody"}))),(0,a.kt)("h2",null,"Blindness Color Values"),(0,a.kt)("p",null,"Blindness color values are not defined in the color style system, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"blindness")," with below values when necessary."),(0,a.kt)(d.Z,{mdxType:"CodeBlock"},(0,v.Z)({blindness:{severity:{high:"magenta:60",medium:"orange:50",low:"yellow:50",safe:"green:30",info:"gray:50",unknown:"gray:50"},chart:{classic:{colors:["gray:50","blue:30","green:30","orange:50","cyan:30","magenta:60","purple:50","teal:40","purple:30","cyan:70","yellow:50"]}},gradient:{severity:{high:["purple:60","magenta:60"],medium:["magenta:60","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:30"]}}}})),(0,a.kt)(S,{display:"flex",flexDirection:"column",rowGap:"8x",mdxType:"ColorStyleContent"},(0,a.kt)(i.Box,{mdxType:"Box"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Blindness - Severity"),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorStyle:{severity:{high:"magenta:60",medium:"orange:50",low:"yellow:50",safe:"green:30",info:"gray:50",unknown:"gray:50"}},colorType:"severity",mdxType:"ColorStyleBody"})),(0,a.kt)(i.Box,{mdxType:"Box"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Blindness - Chart"),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorStyle:{chart:{classic:{colors:["gray:50","blue:30","green:30","orange:50","cyan:30","magenta:60","purple:50","teal:40","purple:30","cyan:70","yellow:50"]}}},colorType:"chart.classic.colors",mdxType:"ColorStyleBody"})),(0,a.kt)(i.Box,{mdxType:"Box"},(0,a.kt)(C,{mdxType:"ColorStyleHeader"},(0,a.kt)(i.Text,{fontSize:"lg",lineHeight:"lg",mdxType:"Text"},"Blindness - Gradient"),(0,a.kt)(i.Divider,{my:"2x",mdxType:"Divider"})),(0,a.kt)(h,{colorStyle:{gradient:{high:["purple:60","magenta:60"],medium:["magenta:60","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:30"]}},colorType:"gradient",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))",mdxType:"ColorStyleBody"}))))}b.isMDXComponent=!0},7983:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/system/color-style",function(){return t(43844)}])}},function(e){e.O(0,[9774,2888,179],(function(){return o=7983,e(e.s=o);var o}));var o=e.O();_N_E=o}]);