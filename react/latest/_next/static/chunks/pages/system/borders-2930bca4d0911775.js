(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6715],{58980:function(e,r,o){"use strict";var n=o(12215),t=o(81292),l=(o(2784),o(10765)),d=o(82767),i=o(28165);r.Z=function(e){var r,o=e.theme,a=(0,t.useTheme)(),s=(0,t.useColorMode)(),b=(0,n.Z)(s,1)[0],u=(0,t.useColorStyle)({colorMode:b}),c=null!==(r=(0,n.Z)(u,1)[0][o])&&void 0!==r?r:a[o];if(!c)return"Theme field not found";"space"!==o&&"sizes"!==o||(c=Object.keys(c).filter((function(e){return!e.toString().match(/[qh]$/)})).reduce((function(e,r){return e[r]=c[r],e}),{}));return(0,i.tZ)(t.Box,{mb:"6x"},(0,i.tZ)(l.Z,null,"const ".concat(o," = ").concat((0,d.Z)(c,!1))))}},82767:function(e,r){"use strict";r.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},31126:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return s}});var n=o(7896),t=o(59740),l=(o(2784),o(30876)),d=(o(81292),o(58980)),i=["components"],a={};function s(e){var r=e.components,o=(0,t.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},a,o,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Borders"),(0,l.kt)("h2",null,"Design Tokens"),(0,l.kt)(d.Z,{theme:"borders",mdxType:"ThemeParser"}),(0,l.kt)("h2",null,"Examples"),(0,l.kt)("p",null,"The border shorthand property sets all the border properties in one declaration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'/* style */\nborder="solid"\n\n/* width | style */\nborder="2px dotted"\n\n/* style | color */\nborder="outset #f33"\n\n/* width | style | color */\nborder="medium dashed green"\n\n/* Global values */\nborder="inherit"\nborder="initial"\nborder="unset"\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"border")," property may be specified using one, two, or three of the values listed below. The order of the value does not matter. See ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/border"},"border")," in MDN for more details."),(0,l.kt)("p",null,"Note: The border will be invisible if its style is not defined. This is because the style defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,l.kt)("h3",null,"Values"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<border-color>"),"\nSets the color of the border. Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"currentcolor")," if absent."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<border-style>"),"\nSets the style of the border. Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," if absent."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<border-width>"),"\nSets the thickness of the border. Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"medium")," if absent."),(0,l.kt)("h3",null,"Nonnegative length"),(0,l.kt)("p",null,"If the border is a numeric value defined in the theme, the ",(0,l.kt)("inlineCode",{parentName:"p"},"solid")," border style will be applied as a shorthand for the ",(0,l.kt)("inlineCode",{parentName:"p"},"borderWidth")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"borderStyle")," properties."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const Block = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Flex\n      px="4x"\n      py="3x"\n      alignItems="flex-start"\n      justifyContent="center"\n      flexDirection="column"\n      backgroundColor={colorStyle.background.secondary}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const borderColor = {\n    dark: \'gray:60\',\n    light: \'gray:30\',\n  }[colorMode];\n  const borderWidths = [1, 2, 3, 4, 5];\n  const [borderWidth, setBorderWidth] = React.useState(borderWidths[0]);\n  const borderValue = theme.borders[borderWidth] || borderWidth;\n  const borderColorValue = theme.colors[borderColor] || borderColor;\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>border =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {borderWidths.map((width) => (\n            <Button\n              key={width}\n              onClick={() => setBorderWidth(width)}\n              variant={width === borderWidth ? \'primary\' : \'secondary\'}\n            >\n              <Text fontFamily="mono">{width}</Text>\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Grid\n        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"\n        columnGap="6x"\n        rowGap="6x"\n      >\n        <Block\n          border={borderWidth}\n          borderColor={borderColor}\n        >\n          <Text>border="{borderValue}"</Text>\n          <Text>borderColor="{borderColorValue}"</Text>\n        </Block>\n        <Block\n          borderTop={borderWidth}\n          borderTopColor={borderColor}\n        >\n          <Text>borderTop="{borderValue}"</Text>\n          <Text>borderTopColor="{borderColorValue}"</Text>\n        </Block>\n        <Block\n          borderRight={borderWidth}\n          borderRightColor={borderColor}\n        >\n          <Text>borderRight="{borderValue}"</Text>\n          <Text>borderRightColor="{borderColorValue}"</Text>\n        </Block>\n        <Block\n          borderBottom={borderWidth}\n          borderBottomColor={borderColor}\n        >\n          <Text>borderBottom="{borderValue}"</Text>\n          <Text>borderBottomColor="{borderColorValue}"</Text>\n        </Block>\n        <Block\n          borderLeft={borderWidth}\n          borderLeftColor={borderColor}\n        >\n          <Text>borderLeft="{borderValue}"</Text>\n          <Text>borderLeftColor="{borderColorValue}"</Text>\n        </Block>\n      </Grid>\n    </>\n  );\n}\n\nrender(<Example />);\n')),(0,l.kt)("h3",null,"Keyword"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"thin"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"medium"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"thick")," are keywords that indicate the border width. You can use them in the ",(0,l.kt)("inlineCode",{parentName:"p"},"border")," property, but you have to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"borderStyle")," property to ",(0,l.kt)("inlineCode",{parentName:"p"},"solid")," as well."),(0,l.kt)("p",null,"Note: Because the specification doesn't define the exact thickness denoted by each keyword, the precise result when using one of them is implementation-specific. Nevertheless, they always follow the pattern ",(0,l.kt)("inlineCode",{parentName:"p"},"thin \u2264 medium \u2264 thick"),", and the values are constant within a single document."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const Block = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Flex\n      px="4x"\n      py="3x"\n      alignItems="flex-start"\n      justifyContent="center"\n      flexDirection="column"\n      backgroundColor={colorStyle.background.secondary}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const borderColor = {\n    dark: \'gray:60\',\n    light: \'gray:30\',\n  }[colorMode];\n  const borderStyle = \'solid\';\n  const borderWidths = [\'thin\', \'medium\', \'thick\'];\n  const [borderWidth, setBorderWidth] = React.useState(borderWidths[0]);\n  const borderValue = theme.borders[borderWidth] || borderWidth;\n  const borderColorValue = theme.colors[borderColor] || borderColor;\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>border =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {borderWidths.map((width) => (\n            <Button\n              key={width}\n              onClick={() => setBorderWidth(width)}\n              variant={width === borderWidth ? \'primary\' : \'secondary\'}\n            >\n              <Text fontFamily="mono">{width}</Text>\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Grid\n        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"\n        columnGap="6x"\n        rowGap="6x"\n      >\n        <Block\n          border={borderWidth}\n          borderColor={borderColor}\n          borderStyle={borderStyle}\n        >\n          <Text>border="{borderValue}"</Text>\n          <Text>borderColor="{borderColorValue}"</Text>\n          <Text>borderStyle="{borderStyle}"</Text>\n        </Block>\n        <Block\n          borderTop={borderWidth}\n          borderTopColor={borderColor}\n          borderTopStyle={borderStyle}\n        >\n          <Text>borderTop="{borderValue}"</Text>\n          <Text>borderTopColor="{borderColorValue}"</Text>\n          <Text>borderTopStyle="{borderStyle}"</Text>\n        </Block>\n        <Block\n          borderRight={borderWidth}\n          borderRightColor={borderColor}\n          borderRightStyle={borderStyle}\n        >\n          <Text>borderRight="{borderValue}"</Text>\n          <Text>borderRightColor="{borderColorValue}"</Text>\n          <Text>borderRightStyle="{borderStyle}"</Text>\n        </Block>\n        <Block\n          borderBottom={borderWidth}\n          borderBottomColor={borderColor}\n          borderBottomStyle={borderStyle}\n        >\n          <Text>borderBottom="{borderValue}"</Text>\n          <Text>borderBottomColor="{borderColorValue}"</Text>\n          <Text>borderBottomStyle="{borderStyle}"</Text>\n        </Block>\n        <Block\n          borderLeft={borderWidth}\n          borderLeftColor={borderColor}\n          borderLeftStyle={borderStyle}\n        >\n          <Text>borderLeft="{borderValue}"</Text>\n          <Text>borderLeftColor="{borderColorValue}"</Text>\n          <Text>borderLeftStyle="{borderStyle}"</Text>\n        </Block>\n      </Grid>\n    </>\n  );\n}\n\nrender(<Example />);\n')),(0,l.kt)("h2",null,"Borders vs. Outlines"),(0,l.kt)("p",null,"Borders and ",(0,l.kt)("a",{parentName:"p",href:"./outlines"},"outlines")," are very similar. However, outlines differ from borders in the following ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Outlines never take up space, as they are drawn outside of an element's content."),(0,l.kt)("li",{parentName:"ul"},"According to the spec, outlines don't have to be rectangular, although they usually are.")))}s.isMDXComponent=!0},35680:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/system/borders",function(){return o(31126)}])}},function(e){e.O(0,[9774,2888,179],(function(){return r=35680,e(e.s=r);var r}));var r=e.O();_N_E=r}]);