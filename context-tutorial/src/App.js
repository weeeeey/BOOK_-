import React from "react";
import { ColorProvider } from "./constexts/Color";
// default 가 아닌 컴포넌트는 import 할때 {} 로 감싸줘야 함
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";

const App = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default App;
