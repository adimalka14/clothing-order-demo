import PropTypes from 'prop-types';
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from '@mui/material';

export default function AppBar({
    title,
    titlePosition = 'left',
    titleGrow = true,
    position = 'fixed',
    leftContent,
    rightContent,
}) {
    return (
        <MuiAppBar position={position}>
            <Toolbar
                variant="dense"
                sx={
                    titleGrow
                        ? {}
                        : {
                              display: 'flex',
                              justifyContent: titlePosition,
                          }
                }
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {leftContent}
                </Box>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        textAlign: titlePosition,
                        flexGrow: titleGrow ? 1 : 0,
                        marginLeft: leftContent ? 1 : 0,
                    }}
                >
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {rightContent}
                </Box>
            </Toolbar>
        </MuiAppBar>
    );
}

AppBar.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    titlePosition: PropTypes.oneOf(['left', 'center', 'right']),
    titleGrow: PropTypes.bool,
    position: PropTypes.oneOf(['static', 'fixed', 'absolute']),
    leftContent: PropTypes.node,
    rightContent: PropTypes.node,
};
