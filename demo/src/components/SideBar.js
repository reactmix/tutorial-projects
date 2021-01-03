import styled from 'styled-components'
import SideBarList from './SideBarList'

const Topmost = styled.div`
  position: fixed;
  top:38px;
  left:0px;
  font-size:12pt;
  width:234px;
  height:1000px;
  background-color: #21222D;
  box-sizing: border-box;
`

function SideBar({ proj, shouldShowFile, curr }) {
  return (
    <Topmost>
      <SideBarList data={proj} level={1} shouldShowFile={shouldShowFile} curr={curr} />
    </Topmost>
  );
}

export default SideBar;
