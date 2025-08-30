import { useEffect, useState } from "react";
import { SplashScreen } from "./src/screens";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
export default function App() {
  const [isShowSplash, setisShowSplash] = useState(true);
  const [accessToken, setAccessToken] = useState('');

  /// kiểm tra người dùng đã đăng nhập hay chưa trên App
  const { getItem, setItem } = useAsyncStorage("assetToken");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setisShowSplash(false);
    }, 15000);
    return () => clearTimeout(timeout);
  }, []);
  
  const checkLogin = async() => {
    const token = await getItem();
    console.log(token);
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="translucent"
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
}
