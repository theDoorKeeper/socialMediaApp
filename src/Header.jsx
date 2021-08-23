import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    display : flex ;
    justify-content : space-between;
    position:sticky; 
    top:0;
    z-index : 1;
    background :${props => props.theme.colors.backgroundGray} ;
    height : 10vh;
    max-width : 100%;
    align-items : center ;
`

const Navbar = styled.ul`
    margin-top : 0;
    margin-bottom : 0; 
    width : 40%;
    display : flex;
    list-style : none ;
    justify-content : space-between ;
    align-items : center ;

`

const NavButton = styled.li`
    color : ${props => props.theme.colors.lightGrey};
    font-size : ${props => props.theme.fontSizes.medium};
    cursor : pointer ;
    &:hover{
        color : ${props => props.theme.colors.primaryGreen}
    }
`

function Header() {
    return (
        <Wrapper>
            <h1>logo</h1>
        <Navbar>
         <NavButton>
          login
        </NavButton>   

         <NavButton>
          sign up  
        </NavButton> 

        <NavButton>
          games 
        </NavButton>   

        <NavButton>
          people
        </NavButton>   

        <NavButton>
         search
        </NavButton>   
        </Navbar>
        </Wrapper>
    )
}

export default Header
