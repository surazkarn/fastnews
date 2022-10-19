
import { Box, styled, Typography } from '@mui/material'


const Container = styled(Box)(({ theme }) => ({
    background: '#f44336',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));



const Text = styled(Typography)`
        font-size: 14px;
        font-weight: 300;
        margin-left: 50px;
        font-family: 'Roboto',sans-serif;
    `;

const InfoHeader = () => {
   

    return (
        <Container>
            <Text>
                For the best experience use <b>FastNews</b> app on your smartphone
            </Text>
            <Box style={{ marginLeft: 'auto', display: 'flex' }}>
                
            </Box>
        </Container>
    )
}

export default InfoHeader;