import { NavLink, Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;
const DashBoard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);



    // Sidebar Routes // 
    const adminRoutes = [
        {
            path: '/',
            routeName: 'Home',
        },
        {
            path: '/dashboard/users',
            routeName: 'All Users',
        },
    ]
    const sellerRoutes = [
        {
            path: '/',
            routeName: 'Home',
        },
        {
            path: '/dashboard/addproducts',
            routeName: 'Add Products',
        },
        {
            path: '/dashboard/myproducts',
            routeName: 'My Products',
        },
    ]
    const buyerRoutes = [
        {
            path: '/',
            routeName: 'Home',
        },
        {
            path: '/dashboard/wishlist',
            routeName: 'Wishlist',
        },
        {
            path: '/dashboard/cart',
            routeName: 'Cart',
        },
    ]
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };


    // Dashboard's Sidebar
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {adminRoutes.map((route) => (
                    <ListItem key={route.path} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {route.name % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <NavLink to={route.path}><ListItemText primary={route.routeName} /></NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {sellerRoutes.map((route) => (
                    <ListItem key={route.path} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {route.name % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <NavLink to={route.path}><ListItemText primary={route.routeName} /></NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {buyerRoutes.map((route) => (
                    <ListItem key={route.path} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {route.name % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <NavLink to={route.path}><ListItemText primary={route.routeName} /></NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography component='div' sx={{ marginBottom: 2 }}>
                        <Outlet />
                </Typography>
            </Box>
        </Box>
    )
}

DashBoard.propTypes = {
    window: PropTypes.func,
};

export default DashBoard