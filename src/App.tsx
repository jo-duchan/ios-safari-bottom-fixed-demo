import React, { useEffect, useState } from "react";
import visualViewPortResize from "visualViewportResize";

function App() {
  const [isIOS, setIsIOS] = useState<boolean>(false);
  useEffect(() => {
    setIsIOS(/iPhone|iPad|iPod/i.test(navigator.userAgent));

    if (isIOS) {
      visualViewPortResize();
    }
  }, [isIOS]);

  if (!isIOS) {
    return <div>아이폰 아님</div>;
  }
  return <div className="App">아이폰</div>;
}

export default App;
