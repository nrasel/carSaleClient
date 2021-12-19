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
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Dashboard.css'
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import ReviewAdd from '../ReviewAdd/ReviewAdd';
import useAuth from '../../../Hooks/useAuth'
import AdminRoute from '../../AdminRoute/AdminRoute';
import Profile from '../Profile/Profile';
import '../../Header/Header.css'

const drawerWidth = 250;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = useAuth()
    const { logOut } = useAuth()
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const activeStyle = {
        color: 'rgba(32, 58, 95, .9)'
    }

    const drawer = (
        <div>
            {/* pay Logout */}
            <Toolbar />
            <Divider />
            <Box sx={{ textAlign: 'left', pl: 2 }}>
                {/* admin feature */}

                {admin ? <Box>
                    <NavLink activeStyle
                        ={activeStyle} className="admin-link-style" style={{ display: 'block', width: '100%', marginTop: '30px' }} to={`${url}/profile`}><Button color="inherit"><span><i class="fas fa-user-circle"></i></span> Profile</Button></NavLink>

                    <NavLink activeStyle
                        ={activeStyle} className="admin-link-style" style={{ display: 'block', width: '100%' }} to={`${url}/manageAllOrders`}><Button color="inherit"><span><i className="fas fa-list"></i></span> Manage Orders</Button></NavLink>

                    <NavLink activeStyle
                        ={activeStyle} className="admin-link-style" to={`${url}/addProduct`}><Button color="inherit"><span><i className="fas fa-file-medical"></i></span> Add Product</Button></NavLink>
                    <br />
                    <NavLink activeStyle
                        ={activeStyle} className="admin-link-style" to={`${url}/makeAdmin`}><Button color="inherit"><span><i className="fas fa-user-plus"></i></span> Make Admin</Button></NavLink>
                    <br />
                    <NavLink activeStyle
                        ={activeStyle} className="admin-link-style" to={`${url}/manageProducts`}><Button color="inherit"><span><i className="fas fa-cog"></i></span> Manage Products</Button></NavLink>

                    <br />
                    <br />
                    <button className="log-out" onClick={logOut} ><span> <i class="fas fa-sign-out-alt"></i></span>  Log Out</button>


                    <br />
                    <br />
                    <br />
                    <br />

                    <NavLink className="admin-link-style" to="/home"> <Button variant="contained"><span><i class="fas fa-hand-point-left"></i></span>
                        Back To Home</Button></NavLink>
                </Box>
                    :
                    <Box>
                        <NavLink activeStyle
                            ={activeStyle} className="admin-link-style" style={{ display: 'block', width: '100%', marginTop: '30px' }} to={`${url}/profile`}><Button color="inherit"><span><i class="fas fa-user-circle"></i></span> Profile</Button></NavLink>
                        <NavLink activeStyle
                            ={activeStyle} className="admin-link-style" to={`${url}/myOrders`}><Button color="inherit"><span><i className="fas fa-cog"></i></span> My Orders</Button></NavLink>
                        <br />
                        <NavLink activeStyle
                            ={activeStyle} className="admin-link-style" to={`${url}/review`}><Button color="inherit"><span> <i className="fas fa-star"></i></span> Add Review</Button></NavLink>

                        <NavLink activeStyle
                            ={activeStyle} className="admin-link-style" to={`${url}/pay`}><Button color="inherit"><span><i className="fab fa-cc-amazon-pay"></i></span>  Payment</Button></NavLink>
                        <br />
                        <br />
                        <button className="log-out" onClick={logOut}><span> <i class="fas fa-sign-out-alt"></i></span>  Log Out</button>
                        <br />
                        <br />
                        <br />
                        <br />
                        <NavLink className="admin-link-style" to="/home"> <Button variant="contained"><span><i class="fas fa-hand-point-left"></i></span>
                            Back To Home</Button></NavLink>
                    </Box>

                }


                {/* user feature */}



            </Box>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <h2>hello</h2>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >

                <Toolbar style={{ backgroundColor: 'white', boxShadow: '1px 1px 3px rgb(0 0 0 / 10%)' }}>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: 'rgba(32, 58, 95, .9)' }}
                    >

                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ color: 'rgba(32, 58, 95, 1)' }} noWrap component="div">
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
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </AdminRoute>

                    {/* user route */}
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/profile`}>
                        <Profile />
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
