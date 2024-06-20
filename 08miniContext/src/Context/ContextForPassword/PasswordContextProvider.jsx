import React, { createContext, useState } from 'react';

// Create the password context
const PasswordContext = createContext();

export { PasswordContext };

// Create the password context provider component
const PasswordContextProvider = ({ children }) => {
    // State to store the password
    const [password, setPassword] = useState('');

    // Function to update the password
    const updatePassword = (newPassword) => {
        setPassword(newPassword);
    };

    // Value object to be provided by the context
    const contextValue = {
        password,
        updatePassword,
    };

    return (
        <PasswordContext.Provider value={contextValue}>
            {children}
        </PasswordContext.Provider>
    );
};

export default PasswordContextProvider;