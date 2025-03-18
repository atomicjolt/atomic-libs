import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ee}from"./index-DmM0KDA7.js";import{fn as p}from"./index-D1pa-M5k.js";import{g as le}from"./cssprops-BO85xpNm.js";import"./index-wv7jOzEt.js";import"./index-DLW06VQL.js";import"./index-BDzxygkP.js";import"./index-C0DXmw5d.js";import"./index-SU87TpAq.js";import{R as ne}from"./helpers-DATk1gtG.js";import{T as l}from"./Table.component-mYCahLeP.js";import{F as g}from"./Flex.component-LqFgqvCS.js";import{B as ae}from"./Button.component-DOZPb3RR.js";import{M as re}from"./MaterialIcon.component-CfSKJVUc.js";import{P as s}from"./Pagination.component-D2jdUAR4.js";const se={title:"Content/Table",component:l,parameters:{cssprops:le("Table")},argTypes:{...ne,isSticky:{description:"Whether the bottom content should be sticky",control:"boolean"},hasBottom:{description:"Whether the table has a bottom content",control:"boolean"},children:{control:!1},sortDescriptor:{description:"The current sort descriptor, if any"},onCellAction:{description:"Fires when the user interacts with a cell",table:{category:"Events"}},onRowAction:{description:"Fires when the user interacts with a row",table:{category:"Events"}},onSortChange:{description:"Fires when the user changes the sort descriptor",table:{category:"Events"}},onSearchChange:{description:"Fires when the user changes search descriptor",table:{category:"Events"}}}},n={args:{onCellAction:p(),onRowAction:p(),onSortChange:p(),onSearchChange:p(),children:[e.jsxs(l.Header,{children:[e.jsx(l.Column,{isRowHeader:!0,children:"Name"}),e.jsx(l.Column,{children:"Type"}),e.jsx(l.Column,{children:"Level"})]}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Charizard"}),e.jsx(l.Cell,{children:"Fire, Flying"}),e.jsx(l.Cell,{children:"67"})]},"1"),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Blastoise"}),e.jsx(l.Cell,{children:"Water"}),e.jsx(l.Cell,{children:"56"})]},"2"),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Venusaur"}),e.jsx(l.Cell,{children:"Grass, Poison"}),e.jsx(l.Cell,{children:"83"})]},"3"),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Pikachu"}),e.jsx(l.Cell,{children:"Electric"}),e.jsx(l.Cell,{children:"100"})]},"4")]})]}},i={args:{...n.args,selectionMode:"multiple"}},t={args:{...n.args,selectionMode:"single"}},c={args:{sortDescriptor:{column:"name",direction:"descending"},children:[e.jsxs(l.Header,{children:[e.jsx(l.Column,{id:"name",isRowHeader:!0,allowsSorting:!0,children:"Name"}),e.jsx(l.Column,{id:"type",allowsSorting:!0,children:"Type"}),e.jsx(l.Column,{id:"level",allowsSorting:!0,children:"Level"})]},"header"),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Charizard"}),e.jsx(l.Cell,{children:"Fire, Flying"}),e.jsx(l.Cell,{children:"67"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Blastoise"}),e.jsx(l.Cell,{children:"Water"}),e.jsx(l.Cell,{children:"56"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Venusaur"}),e.jsx(l.Cell,{children:"Grass, Poison"}),e.jsx(l.Cell,{children:"83"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Pikachu"}),e.jsx(l.Cell,{children:"Electric"}),e.jsx(l.Cell,{children:"100"})]})]},"body")]}},d={render:a=>{const[o,Y]=ee.useState({column:"name",search:"Chariz"}),Z=[{name:"Charizard",type:"Fire, Flying",level:"67"},{name:"Blastoise",type:"Water",level:"56"},{name:"Venusaur",type:"Grass, Poison",level:"83"},{name:"Pikachu",type:"Electric",level:"100"}].filter(r=>!o.search||!o.column?!0:r[o.column].toLowerCase().includes(o.search.toLowerCase()));return e.jsx("div",{style:{padding:"16px"},children:e.jsxs(l,{searchDescriptor:o,onSearchChange:Y,...a,children:[e.jsxs(l.Header,{children:[e.jsx(l.Column,{id:"name",allowsSearching:!0,isRowHeader:!0,children:"Name"}),e.jsx(l.Column,{id:"type",allowsSearching:!0,width:200,children:"Type"}),e.jsx(l.Column,{id:"level",width:100,children:"Level"})]}),e.jsx(l.Body,{items:Z,children:r=>e.jsxs(l.Row,{id:r.name,children:[e.jsx(l.Cell,{children:r.name}),e.jsx(l.Cell,{children:r.type}),e.jsx(l.Cell,{children:r.level})]})})]})})},args:{"aria-label":"Table with searching"}},C={args:{...n.args,children:[e.jsxs(l.Header,{children:[e.jsx(l.Column,{isRowHeader:!0,children:"Name"}),e.jsx(l.Column,{children:"Type"}),e.jsx(l.Column,{children:"Level"})]},"header"),e.jsx(l.Body,{isLoading:!0,loadingRows:8},"body")]}},b={render:a=>e.jsx(l.Skeleton,{...a}),args:{rows:10,columns:3}},h={...n,args:{children:[e.jsxs(l.Header,{children:[e.jsx(l.Column,{isRowHeader:!0,children:"Name"}),e.jsx(l.Column,{children:"Type"}),e.jsx(l.Column,{children:"Level"})]},"header"),e.jsx(l.Body,{renderEmpty:e.jsx(g,{$justify:"center",children:"There are no rows available!"})},"body")]}},T={...n,render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...a}),e.jsx(l.Bottom,{isSticky:a.isSticky,children:e.jsx(g,{$align:"center",$height:"100%",$pl:"var(--table-padding-horz)",children:e.jsxs(ae,{variant:"secondary",children:[e.jsx(re,{icon:"add"}),"Add Pokemon"]})})})]}),args:{...n.args,hasBottom:!0}},m={...n,render:a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...a}),e.jsx(l.Bottom,{isSticky:a.isSticky,children:e.jsx(g,{$align:"center",$justify:"end",$height:"100%",$pr:"var(--table-padding-horz)",children:e.jsx(s,{children:e.jsxs(g,{$align:"center",children:[e.jsx(s.FirstPage,{}),e.jsx(s.PrevPage,{}),e.jsx(s.CurrentPage,{}),e.jsx(s.NextPage,{}),e.jsx(s.LastPage,{})]})})})})]}),args:{...n.args,hasBottom:!0}},u={...n,decorators:[a=>e.jsx("div",{style:{width:"800px",overflow:"auto"},children:e.jsx(a,{})})],args:{...n.args,children:[e.jsxs(l.Header,{children:[e.jsx(l.Column,{isRowHeader:!0,showDivider:!0,width:100,children:"Name"}),e.jsx(l.Column,{children:"Type"}),e.jsx(l.Column,{children:"Level"}),e.jsx(l.Column,{children:"HP"}),e.jsx(l.Column,{children:"Attack"}),e.jsx(l.Column,{children:"Defense"})]}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Charizard"}),e.jsx(l.Cell,{children:"Fire, Flying"}),e.jsx(l.Cell,{children:"67"}),e.jsx(l.Cell,{children:"78"}),e.jsx(l.Cell,{children:"84"}),e.jsx(l.Cell,{children:"78"})]},"1"),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Blastoise"}),e.jsx(l.Cell,{children:"Water"}),e.jsx(l.Cell,{children:"56"}),e.jsx(l.Cell,{children:"79"}),e.jsx(l.Cell,{children:"83"}),e.jsx(l.Cell,{children:"100"})]},"2"),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Venusaur"}),e.jsx(l.Cell,{children:"Grass, Poison"}),e.jsx(l.Cell,{children:"83"}),e.jsx(l.Cell,{children:"80"}),e.jsx(l.Cell,{children:"82"}),e.jsx(l.Cell,{children:"83"})]},"3"),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Pikachu"}),e.jsx(l.Cell,{children:"Electric"}),e.jsx(l.Cell,{children:"100"}),e.jsx(l.Cell,{children:"35"}),e.jsx(l.Cell,{children:"55"}),e.jsx(l.Cell,{children:"40"})]},"4")]})],isSticky:!0,style:{width:"1000px"}}};var x,j,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    onCellAction: fn(),
    onRowAction: fn(),
    onSortChange: fn(),
    onSearchChange: fn(),
    children: [<Table.Header>
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>, <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>]
  }
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var w,S,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    selectionMode: "multiple"
  }
}`,...(R=(S=i.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var P,k,v;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    selectionMode: "single"
  }
}`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var B,f,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    sortDescriptor: {
      column: "name",
      direction: "descending"
    },
    children: [<Table.Header key="header">
        <Table.Column id="name" isRowHeader allowsSorting>
          Name
        </Table.Column>
        <Table.Column id="type" allowsSorting>
          Type
        </Table.Column>
        <Table.Column id="level" allowsSorting>
          Level
        </Table.Column>
      </Table.Header>, <Table.Body key="body">
        <Table.Row>
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>]
  }
}`,...(H=(f=c.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var F,L,D;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => {
    const [searchDescriptor, setSearchDescriptor] = useState<SearchDescriptor>({
      column: "name",
      search: "Chariz"
    });
    const pokemons: Record<string, string>[] = [{
      name: "Charizard",
      type: "Fire, Flying",
      level: "67"
    }, {
      name: "Blastoise",
      type: "Water",
      level: "56"
    }, {
      name: "Venusaur",
      type: "Grass, Poison",
      level: "83"
    }, {
      name: "Pikachu",
      type: "Electric",
      level: "100"
    }];
    const filteredPokemon = pokemons.filter(pokemon => {
      if (!searchDescriptor.search || !searchDescriptor.column) return true;
      return pokemon[searchDescriptor.column].toLowerCase().includes(searchDescriptor.search.toLowerCase());
    });
    return <div style={{
      padding: "16px"
    }}>
        <Table searchDescriptor={searchDescriptor} onSearchChange={setSearchDescriptor} {...props}>
          <Table.Header>
            <Table.Column id="name" allowsSearching isRowHeader>
              Name
            </Table.Column>
            <Table.Column id="type" allowsSearching width={200}>
              Type
            </Table.Column>
            <Table.Column id="level" width={100}>
              Level
            </Table.Column>
          </Table.Header>
          <Table.Body items={filteredPokemon}>
            {pokemon => <Table.Row id={pokemon.name}>
                <Table.Cell>{pokemon.name}</Table.Cell>
                <Table.Cell>{pokemon.type}</Table.Cell>
                <Table.Cell>{pokemon.level}</Table.Cell>
              </Table.Row>}
          </Table.Body>
        </Table>
      </div>;
  },
  args: {
    "aria-label": "Table with searching"
  }
}`,...(D=(L=d.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var E,$,z;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Table.Header key="header">
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>, <Table.Body key="body" isLoading loadingRows={8} />]
  }
}`,...(z=($=C.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var W,N,A;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Table.Skeleton {...args} />,
  args: {
    rows: 10,
    columns: 3
  }
}`,...(A=(N=b.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var M,G,V;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Primary,
  args: {
    children: [<Table.Header key="header">
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>, <Table.Body key="body" renderEmpty={<Flex $justify="center">There are no rows available!</Flex>} />]
  }
}`,...(V=(G=h.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var _,O,I;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Primary,
  render: args => <>
      <Table {...args} />
      <Table.Bottom isSticky={args.isSticky}>
        <Flex $align="center" $height="100%" $pl="var(--table-padding-horz)">
          <Button variant="secondary">
            <MaterialIcon icon="add" />
            Add Pokemon
          </Button>
        </Flex>
      </Table.Bottom>
    </>,
  args: {
    ...Primary.args,
    hasBottom: true
  }
}`,...(I=(O=T.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var q,J,K;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Primary,
  render: args => <>
      <Table {...args} />
      <Table.Bottom isSticky={args.isSticky}>
        <Flex $align="center" $justify="end" $height="100%" $pr="var(--table-padding-horz)">
          <Pagination>
            <Flex $align="center">
              <Pagination.FirstPage />
              <Pagination.PrevPage />
              <Pagination.CurrentPage />
              <Pagination.NextPage />
              <Pagination.LastPage />
            </Flex>
          </Pagination>
        </Flex>
      </Table.Bottom>
    </>,
  args: {
    ...Primary.args,
    hasBottom: true
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Primary,
  decorators: [Story => <div style={{
    width: "800px",
    overflow: "auto"
  }}>
        <Story />
      </div>],
  args: {
    ...Primary.args,
    children: [<Table.Header>
        <Table.Column isRowHeader showDivider width={100}>
          Name
        </Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
        <Table.Column>HP</Table.Column>
        <Table.Column>Attack</Table.Column>
        <Table.Column>Defense</Table.Column>
      </Table.Header>, <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
          <Table.Cell>78</Table.Cell>
          <Table.Cell>84</Table.Cell>
          <Table.Cell>78</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
          <Table.Cell>79</Table.Cell>
          <Table.Cell>83</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
          <Table.Cell>80</Table.Cell>
          <Table.Cell>82</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
          <Table.Cell>35</Table.Cell>
          <Table.Cell>55</Table.Cell>
          <Table.Cell>40</Table.Cell>
        </Table.Row>
      </Table.Body>],
    isSticky: true,
    style: {
      width: "1000px"
    }
  }
}`,...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const oe=["Primary","MultipleSelection","SingleSelection","SortableHeaders","SearchableColumns","LoadingState","TableSkeleton","RenderEmptyTable","WithTableBottom","WithPagination","StickyRowHeader"],Se=Object.freeze(Object.defineProperty({__proto__:null,LoadingState:C,MultipleSelection:i,Primary:n,RenderEmptyTable:h,SearchableColumns:d,SingleSelection:t,SortableHeaders:c,StickyRowHeader:u,TableSkeleton:b,WithPagination:m,WithTableBottom:T,__namedExportsOrder:oe,default:se},Symbol.toStringTag,{value:"Module"}));export{C as L,i as M,c as S,Se as T,T as W,d as a,t as b,b as c};
