import styled from 'styled-components'

const Bar = styled.ul`
  margin:0;
  font-size:12pt;
  background-color: #21222D;
  margin-left:234px;
  padding-left:0px;
`

const Tab = styled.li`
  font-size:14pt;
  list-style:none;
  padding:10px 15px;
  cursor:pointer;
  display: inline-block;
  border-right:1px solid black;
  min-width: 100px;
  color:${props => props.isCurr ? 'white':'#5F72A8'};
  background-color:${props => props.isCurr ? '#282A37':'none'};
  height:20px;
  &:hover {
    color:white;
  }
  &:last-child {
    border-right:none;
  }
`

function FileTabs({ opens, shouldShowFile, curr }) {

  function chooseFile(node){
    shouldShowFile(node)
  }

  return (
    <div>
      <Bar>
        {opens.map(node => (
          <Tab 
            key={node.id}
            onClick={()=>chooseFile(node)}
            isCurr={ node === curr }>
            { node.name }
          </Tab>
        ))}
      </Bar>  
    </div>
  );
}

export default FileTabs;
