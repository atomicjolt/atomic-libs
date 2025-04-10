import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as r}from"./styled-components.browser.esm-Y4FpNNpy.js";import{S as e}from"./spacing-Bd-CIscW.js";import{S as n}from"./scale-CqCDTNu0.js";import{I as o}from"./Collection-DqSZYP0m.js";const i={isDisabled:{control:"boolean",table:{category:"Field State"}},isRequired:{control:"boolean",table:{category:"Field State"}},isInvalid:{control:"boolean",table:{category:"Field State"}},isReadOnly:{control:"boolean",table:{category:"Field State"}}},l={...i,label:{control:"text",table:{category:"Helper Text"}},error:{control:"text",table:{category:"Helper Text"}},message:{control:"text",table:{category:"Helper Text"}},placeholder:{control:"text",table:{category:"Common"}},name:{control:"text",table:{category:"Common"}}},C={variant:{control:"select",description:"Visual variant of the component. Defines what preset styles to use for the component.",table:{category:"Presentation"}}},S={...l,autoFocus:{control:"boolean",table:{category:"Common"}},defaultValue:{control:!1,description:"Set the initial value of an uncontrolled input",table:{category:"Common"}}},P={placement:{control:"select",options:["bottom","bottom start","bottom end","top","top start","top end","left","left start","left end","right","right start","right end"]}},T={selectionMode:{control:"select",options:["single","multiple","none"],description:"Controls how many items can be selected at once.",table:{category:"Selection"}},selectionBehavior:{control:"select",options:["replace","toggle"],description:"Controls how the selection changes in `selectionMode` is `multiple`. `replace` will replace the current selection with the new selection. `toggle` will add or remove the new selection from the current selection.",table:{category:"Selection"}},defaultSelectedKeys:{control:"multi-select",options:["news","travel","gaming","shopping"],description:"Array of the selected keys for an uncontrolled component.",table:{category:"Selection"}},selectedKeys:{control:"multi-select",options:["news","travel","gaming","shopping"],description:"Array of the selected keys for a controlled component.",table:{category:"Selection"}},disabledKeys:{control:"multi-select",options:["news","travel","gaming","shopping"],description:"Keys of the items that should be disabled",table:{category:"Selection"}},onSelectionChange:{event:"onSelectionChange",description:"Called when the selection changes",table:{category:"Selection"}}},A=[t.jsx(o,{id:"news",children:"News"},"1"),t.jsx(o,{id:"travel",children:"Travel"},"2"),t.jsx(o,{id:"gaming",children:"Gaming"},"3"),t.jsx(o,{id:"shopping",children:"Shopping"},"4")],M={onPress:{action:"onPress",description:"Callback when a press event is released over the element.",table:{category:"Events"}},onPressStart:{action:"onPressStart",description:"Callback when a press event starts.",table:{category:"Events"}},onPressEnd:{action:"onPressEnd",description:"Callback when a press event ends. Either by releasing the press or leaving the element.",table:{category:"Events"}},onPressChange:{action:"onPressChange",description:"Callback when the pressed state changes.",table:{category:"Events"}},onPressUp:{action:"onPressUp",description:"Callback when a press event is released over the element, regardless of where it started on that target or not.",table:{category:"Events"}}},F={onFocus:{action:"onFocus",description:"Callback for when the input is focused",table:{category:"Events"}},onBlur:{action:"onBlur",description:"Callback for when the input is blurred",table:{category:"Events"}},onFocusChange:{action:"onFocusChange",description:"Callback for when the input is focused",table:{category:"Events"}}},k={defaultOpen:{control:"boolean",description:"Whether the overlay should be open by default (uncontrolled)"},isOpen:{control:"boolean",description:"Whether the overlay should be open (controlled)"},onOpenChange:{action:"onOpenChange",description:"Callback when the overlay open state changes"}},R={"aria-label":{control:"text",defaultValue:"",description:"A label for the current element",table:{category:"Accessibility"}},"aria-labelledby":{control:"text",defaultValue:"",description:"The id of the element that serves as the label for the element",table:{category:"Accessibility"}},"aria-describedby":{control:"text",defaultValue:"",description:"The id of the element that serves as a description for the element",table:{category:"Accessibility"}},"aria-details":{control:"text",defaultValue:"",description:"The id of the element that serves as a details for the element",table:{category:"Accessibility"}}},s={className:{control:"text",description:"Class name to apply to the component",table:{category:"Render Props"}},style:{control:"object",description:"Style object to apply to the component",table:{category:"Render Props"}}},E={...s,children:{control:!1,description:"Children to render",table:{category:"Render Props"}}};r`
.aje-btn--purple {
  --btn-bg-clr: purple;
  --btn-text-clr: white;
  --btn-hover-bg-clr: rgb(179, 13, 179);
  --btn-hover-text-clr: white;
}
`;const a={$p:{control:"select",options:e,description:"Padding",table:{category:"Padding"}},$pt:{control:"select",options:e,description:"Padding Top",table:{category:"Padding"}},$pr:{control:"select",options:e,description:"Padding Right",table:{category:"Padding"}},$pb:{control:"select",options:e,description:"Padding Bottom",table:{category:"Padding"}},$pl:{control:"select",options:e,description:"Padding Left",table:{category:"Padding"}},$px:{control:"select",options:e,description:"Padding Horizontal",table:{category:"Padding"}},$py:{control:"select",options:e,description:"Padding Vertical",table:{category:"Padding"}}},c={$m:{control:"select",options:e,description:"Margin",table:{category:"Margin"}},$mt:{control:"select",options:e,description:"Margin Top",table:{category:"Margin"}},$mr:{control:"select",options:e,description:"Margin Right",table:{category:"Margin"}},$mb:{control:"select",options:e,description:"Margin Bottom",table:{category:"Margin"}},$ml:{control:"select",options:e,description:"Margin Left",table:{category:"Margin"}},$mx:{control:"select",options:e,description:"Margin Horizontal",table:{category:"Margin"}},$my:{control:"select",options:e,description:"Margin Vertical",table:{category:"Margin"}}},p={...a,...c},d={$width:{control:"text",description:"Width",table:{category:"Dimensions"}},$minWidth:{control:"text",description:"Minimum Width",table:{category:"Dimensions"}},$maxWidth:{control:"text",description:"Maximum Width",table:{category:"Dimensions"}}},g={$height:{control:"text",description:"Height",table:{category:"Dimensions"}},$minHeight:{control:"text",description:"Minimum Height",table:{category:"Dimensions"}},$maxHeight:{control:"text",description:"Maximum Height",table:{category:"Dimensions"}}},h={...d,...g},b={$position:{control:"select",options:["static","relative","absolute","fixed","sticky"],description:"Position",table:{category:"Position"}},$top:{control:"text",description:"Top",table:{category:"Position"}},$right:{control:"text",description:"Right",table:{category:"Position"}},$bottom:{control:"text",description:"Bottom",table:{category:"Position"}},$left:{control:"text",description:"Left",table:{category:"Position"}}},y={$overflow:{control:"select",options:["visible","hidden","scroll","auto"],description:"Overflow",table:{category:"Overflow"}},$overflowX:{control:"select",options:["visible","hidden","scroll","auto"],description:"Overflow X",table:{category:"Overflow"}},$overflowY:{control:"select",options:["visible","hidden","scroll","auto"],description:"Overflow Y",table:{category:"Overflow"}}},m={$flexGrow:{control:"text",description:"Flex Grow",table:{category:"Flex Item"}},$flexShrink:{control:"text",description:"Flex Shrink",table:{category:"Flex Item"}},$flexBasis:{control:"text",description:"Flex Basis",table:{category:"Flex Item"}},$flexAlgin:{control:"select",options:["auto","start","end","center","baseline","stretch"],description:"Align Self",table:{category:"Flex Item"}}},u={$gridRow:{control:"text",description:"Grid Row",table:{category:"Grid"}},$gridRowStart:{control:"text",description:"Grid Row Start",table:{category:"Grid"}},$gridRowEnd:{control:"text",description:"Grid Row End",table:{category:"Grid"}},$gridColumn:{control:"text",description:"Grid Column",table:{category:"Grid"}},$gridColumnStart:{control:"text",description:"Grid Column Start",table:{category:"Grid"}},$gridColumnEnd:{control:"text",description:"Grid Column End",table:{category:"Grid"}}},G={...p,...h,...b,...y,...m,...u},O={$size:{control:"select",options:n,description:"Controls the size of the text. Can either be a scale step or a valid CSS value."},$align:{control:"select",options:["left","center","right","justify"]},$letterSpacing:{control:"select",options:n,description:"Controls the space between characters. Can either be a scale step or a valid CSS value. When not set, the value is set by the $size prop."},$lineHeight:{control:"select",options:n,description:"Controls the space between lines. Can either be a scale step or a valid CSS value. When not set, the value is set by the $size prop."},$weight:{control:"select",options:["light","regular","medium","bold"],description:"Controls the weight of the text."},$truncate:{control:"boolean",description:"Truncates the text with an ellipsis when it overflows its container "},$wrap:{control:"select",options:["nowrap","pretty","balanced"],description:"Controls the wrapping of the text."},$decoration:{control:"select",options:["none","underline"],description:"Controls the text decoration."},$transform:{control:"select",options:["uppercase","lowercase","capitalize","none","full-width","full-size-kana","math-auto"],description:"Controls the text transformation."},$clamp:{control:"select",options:["1","2","3","4","5","6","7","8","9","10"],description:"Clamp the text content after this number of lines"}},I={$color:{control:"color",description:"Text Color. Can be either a color from the theme or a valid CSS color value."}},H={$display:{control:"select",options:["flex","inline-flex","none"]},$direction:{control:"select",options:["row","column","row-reverse","column-reverse"]},$wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"]},$justify:{control:"select",options:["start","end","center","space-between","space-around","space-evenly"]},$align:{control:"select",options:["stretch","start","end","center","baseline"]},$gap:{control:"select",options:e},$gapX:{control:"select",options:e},$gapY:{control:"select",options:e}},j={$bg:{control:"color",description:"Control the CSS background. Can be either a color from the theme or a valid CSS background value."}};export{R as A,j as B,I as C,h as D,i as F,l as I,G as L,T as M,k as O,M as P,E as R,p as S,S as T,C as V,s as a,A as b,F as c,H as d,y as e,b as f,P as g,O as h,c as i};
