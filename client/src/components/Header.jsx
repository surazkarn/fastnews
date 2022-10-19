
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

const StyledHeader = styled(AppBar)`
   background: #fff;
   height:70px;
`;

const MenuIcon = styled(Menu)`
   color: #00008B;
`
 //we cannot use styled (material ui component) directly with html tag 
 //img was treated as variable
 //i have craeted object then it was working fine

const Image= styled('img')({
   height :55,
   margin:'auto',
   paddingRight:70

})

const Header = () => {

   const url = '/logo192.png'

    return (
       <StyledHeader position="static">
         <Toolbar>
         <MenuIcon />
         
         <Typography variant="h5" color="#00008B" component="div" margin="auto">
         <b>FastNews</b>
    </Typography>
          <Image src={url} alt="logo" />
         </Toolbar>
       </StyledHeader>
    )
}
export default Header;
