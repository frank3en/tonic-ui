(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2343],{37797:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}});var a=n(7896),o=n(59740),l=(n(2784),n(30876)),r=["components"],p={};function i(t){var e=t.components,n=(0,o.Z)(t,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Tooltip"),(0,l.kt)("p",null,"A tooltip is a brief, informative message that appears when a user interacts with an element. Tooltips are usually initiated in one of two ways: through a mouse-hover or keyboard-hover action."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Tooltip")," component follows the ",(0,l.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices/#tooltip"},"WAI-ARIA")," Tooltip pattern."),(0,l.kt)("h2",null,"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Tooltip } from '@tonic-ui/react';\n")),(0,l.kt)("h2",null,"Usage"),(0,l.kt)("h3",null,"Controlled and uncontrolled tooltips"),(0,l.kt)("p",null,"Pass ",(0,l.kt)("inlineCode",{parentName:"p"},"isOpen")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tooltip")," component to control the state of the tooltip."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip label="This is a controlled tooltip" isOpen>\n  <Text>Tooltip anchor</Text>\n</Tooltip>\n')),(0,l.kt)("p",null,"Set ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultIsOpen")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," to have the tooltip open by default."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip label="This is an uncontrolled tooltip" defaultIsOpen>\n  <Text>Tooltip anchor</Text>\n</Tooltip>\n')),(0,l.kt)("h3",null,"Tooltip with focusable content"),(0,l.kt)("p",null,"If the children of Tooltip are focusable elements, Tooltip will show when you focus or hover on the a children element and will hide when you blur or move cursor out of the element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip label="Search places">\n  <Button>Button</Button>\n</Tooltip>\n')),(0,l.kt)("h3",null,"Tooltip with non-focusable content"),(0,l.kt)("p",null,"If the tooltip anchor is not a focusable content, just like the text string, you can wrap it with a ",(0,l.kt)("inlineCode",{parentName:"p"},"Text")," component and set ",(0,l.kt)("inlineCode",{parentName:"p"},'tabIndex="0"')," to make it focusable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip label="Hey, I\'m here!">\n  <Text tabIndex="0">Hover me</Text>\n</Tooltip>\n')),(0,l.kt)("h3",null,"Icon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip label="Show calendar">\n  <Icon cursor="pointer" icon="calendar" />\n</Tooltip>\n')),(0,l.kt)("h3",null,"Hide the arrow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip hideArrow label="Search places">\n  <Icon cursor="pointer" icon="search-o" />\n</Tooltip>\n')),(0,l.kt)("h3",null,"Customization"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip\n  hideArrow\n  backgroundColor="gray:90"\n  color="white"\n  p="4x"\n  width="auto"\n  label={\n    <Stack direction="column">\n      <Text fontSize="lg" lineHeight="lg">Tooltip with HTML</Text>\n      <Box><em>{"And here\'s"}</em> <b>{\'some\'}</b> <u>{\'amazing content\'}</u>.{\' \'}</Box>\n      <Text>{"It\'s very engaging. Right?"}</Text>\n    </Stack>\n  }\n>\n  <Button variant="ghost">HTML</Button>\n</Tooltip>\n')),(0,l.kt)("h3",null,"Tooltip with ",(0,l.kt)("inlineCode",{parentName:"h3"},"Menu")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [colorMode] = useColorMode();\n  const inputRef = React.useRef();\n  const [menuItem, setMenuItem] = React.useState('hostname');\n  const handleMenuClick = (event) => {\n    // [optional] persist `Synthetic Event` for React v16 and earlier versions\n    event.persist();\n\n    const { value } = event.target.attributes.value;\n    setMenuItem(value);\n\n    setTimeout(() => {\n      if (inputRef.current) {\n        inputRef.current.focus();\n      }\n    }, 0);\n  };\n  const buttonText = {\n    'hostname': 'Search by: Endpoint name',\n    'filename': 'Search by: File name',\n  }[menuItem];\n\n  return (\n    <InputGroup>\n      <InputGroupPrepend>\n        <Menu>\n          <MenuButton mr=\"4x\">\n            <Text\n              color={colorMode === 'dark' ? 'white:secondary' : 'black:secondary'}\n            >\n              {buttonText}\n            </Text>\n          </MenuButton>\n          <MenuList\n            onClick={handleMenuClick}\n          >\n            <MenuItem value=\"hostname\">Endpoint name</MenuItem>\n            <MenuItem value=\"filename\">File name</MenuItem>\n          </MenuList>\n        </Menu>\n      </InputGroupPrepend>\n      <Tooltip\n        backgroundColor=\"gray:80\"\n        color=\"gray:20\"\n        px=\"2x\"\n        py=\"3x\"\n        label=\"Use commas to separate multiple keywords\"\n      >\n        <Input\n          ref={inputRef}\n          borderTopLeftRadius={0}\n          borderBottomLeftRadius={0}\n          placeholder={{\n            'hostname': 'John Doe, Jane',\n            'filename': 'README.md, *.cmd',\n          }[menuItem]}\n        />\n      </Tooltip>\n    </InputGroup>\n  );\n}\n")),(0,l.kt)("h2",null,"Placement"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"placement")," prop to control the placement of the tooltip."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},'<Tooltip label="Tooltip" placement="top">\n  Tooltip anchor\n</Tooltip>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Box display=\"inline-block\">\n  <Grid\n    templateColumns=\"repeat(3, minmax(80px,1fr))\"\n    templateRows=\"repeat(4, 80px)\"\n    gap=\"8x\"\n  >\n    {['top-start', 'top', 'top-end',\n      'right-start', 'right', 'right-end',\n      'bottom-start', 'bottom', 'bottom-end',\n      'left-start', 'left', 'left-end'\n    ].map(placement => (\n      <Tooltip\n        key={placement}\n        label=\"Tooltip\"\n        placement={placement}\n      >\n        <Button width=\"100%\">\n          {placement}\n        </Button>\n      </Tooltip>\n    ))}\n  </Grid>\n</Box>\n")),(0,l.kt)("h2",null,"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PopperComponent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ElementType"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Popper"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The component used for the popover.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PopperProps"),(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Props applied to the Popper component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PopperArrowComponent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ElementType"),(0,l.kt)("td",{parentName:"tr",align:"left"},"PopperArrow"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The component used for the popover arrow.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PopperArrowProps"),(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Props applied to the PopoverArrow component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TransitionComponent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ElementType"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Grow"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The component used for the transition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TransitionProps"),(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Props applied to the ",(0,l.kt)("a",{parentName:"td",href:"http://reactcommunity.org/react-transition-group/transition#Transition-props"},"Transition")," element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TransitionProps.appear"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arrowAt"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The position of the arrow. One of: 'left', 'right', 'top', 'bottom'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"children"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ReactNode ","|"," ({ getTooltipTriggerProps }) => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"closeOnClick"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", close the tooltip when clicking on the anchor.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"defaultIsOpen"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether the tooltip will be open by default.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enterDelay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"100"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The delay in milliseconds before the tooltip appears.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hideArrow"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", hide the arrow tip on the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isOpen"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", show the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string ","|"," ReactNode"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The tooltip label.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"leaveDelay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The delay in milliseconds before the tooltip disappears.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onClose"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Callback fired when the tooltip is closed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onOpen"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Callback fired when the tooltip is opened.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"placement"),(0,l.kt)("td",{parentName:"tr",align:"left"},"PopperJS.Placement"),(0,l.kt)("td",{parentName:"tr",align:"left"},"'bottom'"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position the tooltip relative to the trigger element as well as surrounding elements. One of: 'top', 'bottom', 'right', 'left', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'right-start', 'right-end', 'left-start', 'left-end'")))))}i.isMDXComponent=!0},49082:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tooltip",function(){return n(37797)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=49082,t(t.s=e);var e}));var e=t.O();_N_E=e}]);