import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({ background: 'white', color: 'black' }); // Chuyển thành đối tượng

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const UseConText5 = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    // Hàm chuyển đổi chủ đề
    const switchToDark = () => {
        setTheme({ background: 'black', color: 'white' });
    };

    const switchToLight = () => {
        setTheme({ background: 'white', color: 'black' });
    };

    return (
        <div>
            <h1
                style={{ backgroundColor: theme.background, color: theme.color }}
            >Theme: {theme.background === 'black' ? 'Dark' : 'Light'}</h1>
            <button onClick={switchToDark}>Switch to Dark</button>
            <button onClick={switchToLight}>Switch to Light</button>
        </div>
    );
};

export default UseConText5;