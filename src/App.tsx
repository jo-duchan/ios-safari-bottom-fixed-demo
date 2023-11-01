import React, { useEffect, useState } from "react";
import ItemList from "components/ItemList";
import BottomNavigation from "components/BottomNavigation";

function App() {
  const [isIOS, setIsIOS] = useState<boolean>(false);
  useEffect(() => {
    setIsIOS(/iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, [isIOS]);

  if (!isIOS) {
    return <div>아이폰 아님</div>;
  }
  return (
    <div className="App">
      <ItemList />
      <BottomNavigation />
    </div>
  );
}

export default App;
