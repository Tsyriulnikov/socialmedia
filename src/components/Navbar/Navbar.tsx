import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {AppBar, Badge, InputBase, styled, Toolbar} from "@mui/material";
import {Mail, Pets, Notifications} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutTC} from "../../store/app-reducer";
import {useAppDispatch} from "../../store/hooks";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

export default function Navbar() {
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>
                    Max Tsyriulnikov
                </Typography>
                <Pets sx={{display: {xs: "block", sm: "none"}}}/>
                <Search>
                    <InputBase placeholder="search..."/>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications/>
                    </Badge>
                    {/*<Avatar*/}
                    {/*    sx={{ width: 30, height: 30 }}*/}
                    {/*    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"*/}
                    {/*    onClick={(e) => setOpen(true)}*/}
                    {/*/>*/}
                </Icons>
                {/*<UserBox onClick={(e) => setOpen(true)}>*/}
                {/*  <Avatar*/}
                {/*      sx={{ width: 30, height: 30 }}*/}
                {/*      src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"*/}
                {/*  />*/}
                {/*  <Typography variant="caption">John</Typography>*/}
                {/*</UserBox>*/}


                <React.Fragment>
                    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                        <Typography sx={{minWidth: 100}}>Contact</Typography>
                        <Typography sx={{minWidth: 100}}>Profile</Typography>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ml: 2}}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{width: 32, height: 32}}>M</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >
                        <MenuItem>
                            <Avatar/> Profile
                        </MenuItem>
                        <MenuItem>
                            <Avatar/> My account
                        </MenuItem>
                        <Divider/>
                        <MenuItem>
                            <ListItemIcon>
                                <PersonAdd fontSize="small"/>
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Settings fontSize="small"/>
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={() => {
                            dispatch(logoutTC() as any)
                        }}>
                            <ListItemIcon>
                            <Logout fontSize="small"/>
                            </ListItemIcon>
                            Logout
                            </MenuItem>
                            </Menu>
                            </React.Fragment>
                            </StyledToolbar>
                            </AppBar>

                            );
                        }
