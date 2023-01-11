import PropTypes from 'prop-types';
import React from 'react';
import WindowSizeContext from "./WindowSize.Context";
import {useWindowsSize} from "../util/custom-hooks.util";

const WindowSizeProviderContext = ({children}) => {
    return (
        <WindowSizeContext.Provider value={useWindowsSize()}>
            {children}
        </WindowSizeContext.Provider>
    )
}

WindowSizeProviderContext.prototype = {
    children: PropTypes.element.isRequired,
}

export default WindowSizeProviderContext;