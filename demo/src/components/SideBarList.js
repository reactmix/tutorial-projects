import styled from 'styled-components'
import { useState } from 'react'
import SideBarIcon from './SideBarIcon'

const ItemBox = styled.li`
  list-style:none;
  padding:0px;
`

const Name = styled.span`
  cursor:pointer;
  background-color:${props => props.isCurr ? '#313341':'none'};
  padding-top:5px;
  padding-bottom:5px;
  padding-left:${props => indentItem(props.level)}px;
  font-size:14pt;
  display:block;
  &:hover {
    background-color:#313341;
  }
`

const FileName = styled(Name)`
  color:${props => props.isCurr ? 'white':'#ccc'};
`

const FolderName = styled(Name)`
  color:${props => props.lighter ? '#999' : '#ccc'};
`

const InsideBox = styled.div`
  position:relative;
`

export const List = styled.ul`
  margin:0;
  padding:0;
`

function indentItem(level){
  return level * 15 + 15 /* < root indent */ 
}

export default function SideBarList({ data, level, shouldShowFile, curr }) {  
  return (
    <List>
      {data.map(node => (
        <SideBarItem key={node.id} node={node} level={level} shouldShowFile={shouldShowFile} curr={curr} />
      ))}
    </List>
  )
}

function SideBarItem({ node, isRoot, level, shouldShowFile, curr }) {
  const [ toggle, setToggle ] = useState(true)

  function chooseFile(node){
    shouldShowFile(node)
  }

  function toggleFolder(node){
    setToggle(!toggle)
  }

  return (
    <ItemBox>
    { node.children === undefined &&
      <InsideBox>
        <SideBarIcon node={node} level={level} isCurr={ node === curr } />
        <FileName level={level} onClick={()=>chooseFile(node)} isCurr={ node === curr }>{ node.name }</FileName>    
      </InsideBox>
    }
    { node.children !== undefined &&
      <InsideBox>
        <SideBarIcon node={node} level={level} toggle={toggle} />
        <FolderName level={level} onClick={()=>toggleFolder(node)} isCurr={ node === curr } lighter={toggle===false}>{ node.name }</FolderName>
        {toggle &&
          <SideBarList data={node.children} level={level+1} shouldShowFile={shouldShowFile} curr={curr} />
        }
      </InsideBox>    
    }
    </ItemBox>
  );
}
