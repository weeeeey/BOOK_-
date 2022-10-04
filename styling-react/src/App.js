// Sass 사용하기 (Syntactically Awesome Style Sheets)
// CSS 전처러기로 복잡한 작업 쉽게 하기 ( 재활용 , 가독성 용이)
// Sass 두가지 확장자 .scss .sass가 있다 ( 문법이 꽤 다름)
// .scss가 우리가 아는 css와 문법이 비슷해서 이걸 사용할거

import { Component } from "react";
import SassComponent from "./SassComponent";

class App extends Component {
    render() {
        return (
            <div>
                <SassComponent />
            </div>
        );
    }
}

export default App;
