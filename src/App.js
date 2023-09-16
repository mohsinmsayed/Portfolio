import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing screens
import HomeScreen from "./Screens/HomeScreen";
import ErrorScreen from "./Screens/ErrorScreen";
import Navigator from "./Navigator";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navigator />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="*" element={<ErrorScreen />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
