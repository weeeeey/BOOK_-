import { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";

const App = () => {
    return (
        <div>
            <NewsList></NewsList>
        </div>
    );
};
export default App;
