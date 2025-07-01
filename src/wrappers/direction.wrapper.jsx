import React, { useEffect } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { StyledEngineProvider } from '@mui/material/styles';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
});

const cacheLtr = createCache({
    key: 'muiltr',
});

export const DirectionWrapper = ({ direction, children }) => {
    const dir = ['rtl', 'ltr'].includes(direction) ? direction : 'ltr';

    useEffect(() => {
        localStorage.setItem('dir', dir);
        document.body.dir = dir;
    }, [dir]);

    return (
        <StyledEngineProvider>
            <CacheProvider value={dir === 'rtl' ? cacheRtl : cacheLtr}>
                {children}
            </CacheProvider>
        </StyledEngineProvider>
    );
};
