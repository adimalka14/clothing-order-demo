import PropTypes from 'prop-types';
import {
    Card as MuiCard,
    CardHeader,
    CardContent,
    CardActions,
} from '@mui/material';

export default function Card({
    title,
    subheader,
    content,
    actions,
    elevation = 1,
    variant = 'outlined',
    width,
    height,
    sx,
    ...rest
}) {
    return (
        <MuiCard
            elevation={elevation}
            variant={variant}
            sx={{
                width,
                height,
                ...sx,
            }}
            {...rest}
        >
            {(title || subheader) && (
                <CardHeader title={title} subheader={subheader} />
            )}
            {content && <CardContent>{content}</CardContent>}
            {actions && <CardActions>{actions}</CardActions>}
        </MuiCard>
    );
}

Card.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    content: PropTypes.node,
    actions: PropTypes.node,
    elevation: PropTypes.number,
    variant: PropTypes.oneOf(['elevation', 'outlined']),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sx: PropTypes.object,
};
