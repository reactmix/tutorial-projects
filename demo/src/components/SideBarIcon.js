import { FiFile, FiSettings } from 'react-icons/fi';
import { HiCode } from 'react-icons/hi'
import { DiCss3 } from 'react-icons/di'
import { BiChevronDown } from 'react-icons/bi'
import styled from 'styled-components'

const FileIcon = styled(FiFile)`
  position:absolute;
  top:7px;
  left:${props => indentIcon(props.level)}px;
`

const Arrow = styled(BiChevronDown)`
  position:absolute;
  top:8px;
  left:${props => indentIcon(props.level)}px;
  transition: transform 0.25s;
  color:${props => props.open ? '#ccc' : '#999'};
  transform:${props => props.open ? 'rotate(0deg)' : 'rotate(-90deg)'};
`

const CssIcon = styled(DiCss3)`
  position:absolute;
  top:7px;
  left:${props => indentIcon(props.level) - 2}px;
`

const BracketIcon = styled(HiCode)`
  position:absolute;
  top:7px;
  left:${props => indentIcon(props.level)}px;
`

const SettingsIcon = styled(FiSettings)`
  position:absolute;
  top:9px;
  left:${props => indentIcon(props.level)}px;
`

function indentIcon(level){
  return level * 15 + 15 /* < root indent */ - 20 /* < icon backup */
}

export default function SideBarIcon({ node, level, toggle }){

  if(node.name === 'package.json') {
    return <SettingsIcon level={level} />
  }
  else if(node.children !== undefined) {
    return <Arrow size={18} level={level} open={toggle} />
  }
  else if(node.name.indexOf('.html')>0) {
    return <BracketIcon size={18} level={level} />
  }
  else if(node.name.indexOf('.css')>0) {
    return <CssIcon size={20} level={level} />
  }
  else {
    return <FileIcon level={level} />
  }
}