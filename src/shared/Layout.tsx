import Header from "./Header";
import {ReactNode} from "react";
import styled from "styled-components";

const LayoutWrp = styled.div`
  display: flex;
  flex-direction: column;
`

const LayoutContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`
interface LayoutProps {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {

    return <LayoutWrp>
        <Header/>
        <LayoutContent>
            {props.children}
        </LayoutContent>
    </LayoutWrp>
}
export default Layout