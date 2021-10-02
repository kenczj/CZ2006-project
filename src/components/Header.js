import Button from '@mui/material/Button';
import Person from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'
import { Box } from '@mui/system';

const Header = () => {
  return (
    <Box style={{ display: "flex", justifyContent: 'flex-end', backgroundColor: 'white', paddingRight:15 }}>

      <Button variant="text"><Link style={{ textDecoration: 'none' }} to="/">Home</Link></Button>

      <Button variant="text"><Link style={{ textDecoration: 'none' }} to="/about">About</Link></Button>

      <Button variant="text"><Link style={{ textDecoration: 'none' }} to="/contactUs">Contact Us</Link></Button>

      <Button variant="text" startIcon={<Person />}>
      <Link style={{ textDecoration: 'none' }} to="/login">Login</Link>
      </Button>

    </Box>

  )
}

export default Header
