import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Dashboard.css'
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import ReviewAdd from '../ReviewAdd/ReviewAdd';

const drawerWidth = 250;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // const { admin } = useAuth()
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/* pay Logout */}
            <Toolbar />
            <Divider />
            <Box sx={{ textAlign: 'left', pl: 2 }}>
                {/* admin feature */}

                <Link className="admin-link-style" to={`${url}/manageAllOrders`}><Button color="inherit"><span><i class="fas fa-list"></i></span> Manage Orders</Button></Link>
                <br />
                <Link className="admin-link-style" to={`${url}/addProduct`}><Button color="inherit"><span><i class="fas fa-file-medical"></i></span> Add Product</Button></Link>
                <br />
                <Link className="admin-link-style" to={`${url}/makeAdmin`}><Button color="inherit"><span><i class="fas fa-user-plus"></i></span> Make Admin</Button></Link>
                <br />
                <Link className="admin-link-style" to={`${url}/manageProducts`}><Button color="inherit"><span><i class="fas fa-cog"></i></span> Manage Products</Button></Link>



                {/* user feature */}
                <Link className="admin-link-style" to={`${url}/pay`}><Button color="inherit"><span><i class="fas fa-cog"></i></span> pay</Button></Link>
                <br />
                <Link className="admin-link-style" to={`${url}/myOrders`}><Button color="inherit"><span><i class="fas fa-cog"></i></span> My Orders</Button></Link>
                <br />
                <Link className="admin-link-style" to={`${url}/review`}><Button color="inherit"><span><i class="fas fa-cog"></i></span> Review</Button></Link>

            </Box>

        </div>
    );

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

                <Toolbar style={{ backgroundColor: 'rgba(5, 32, 70, 1)' }}>

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
                    onClose={handleDrawerToggle}
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

                <Switch>
                    {/* admin route */}
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders />
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </Route>

                    {/* user route */}
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/review`}>
                        <ReviewAdd />
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
