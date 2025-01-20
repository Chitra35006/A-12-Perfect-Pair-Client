import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { FaHome, FaUsers, FaBookReader } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
const Demo = () => {
    return (
        <div>
            
        </div>
    //     <div className="flex">
    //     {/* Button to toggle the sidebar */}
    //     <IconButton color="primary" onClick={toggleDrawer} className="p-2">
    //       <MenuIcon />
    //     </IconButton>
  
    //     {/* Sidebar (Drawer) */}
    //     <Drawer
    //       anchor="left"
    //       open={open}
    //       onClose={toggleDrawer} // Close the sidebar when clicking outside
    //     >
    //       <div className="flex justify-between items-center p-2">
    //         {/* Close Button */}
    //         <IconButton onClick={toggleDrawer} color="primary">
    //           <CloseIcon />
    //         </IconButton>
    //       </div>
  
    //       {/* Navigation Links */}
    //       <List>
    //         <ListItem button component={NavLink} to="/" onClick={toggleDrawer}>
    //           <ListItemIcon>
    //             <FaHome />
    //           </ListItemIcon>
    //           <ListItemText primary="Home" />
    //         </ListItem>
    //         <ListItem button component={NavLink} to="/dashboard" onClick={toggleDrawer}>
    //           <ListItemIcon>
    //             <MdDashboard />
    //           </ListItemIcon>
    //           <ListItemText primary="Admin Dashboard" />
    //         </ListItem>
    //         <ListItem button component={NavLink} to="/dashboard/manageUsers" onClick={toggleDrawer}>
    //           <ListItemIcon>
    //             <FaUsers />
    //           </ListItemIcon>
    //           <ListItemText primary="Manage Users" />
    //         </ListItem>
    //         <ListItem button component={NavLink} to="/dashboard/viewBio" onClick={toggleDrawer}>
    //           <ListItemIcon>
    //             <FaBookReader />
    //           </ListItemIcon>
    //           <ListItemText primary="View Bio Data" />
    //         </ListItem>
    //       </List>
    //     </Drawer>
  
    //     {/* Content area */}
    //     <div className="flex-1 p-8">
    //       {/* Your page content here */}
    //     </div>
    //   </div>
    );
};

export default Demo;