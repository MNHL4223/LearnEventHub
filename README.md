-> Cấu hình chung:
    - tên folder viết thường
    - tên file không return về component viết theo camelCase (.ts)
    - tên file có return về component viết hoa chữ cái đầu các chữ (.tsx)
    - cấu hình file constants chứa các màu chung
    - cấu hình file chứa các font chữ chung 

-> cài đặt thư viện và cấu hình Navigation(authNavigator, HomeNavigator (MainNavigator, TabNavigator) )
    1. Cài đặt các thư viện: 
        - yarn add @react-navigation/native
        - yarn add react-native-screens react-native-safe-area-context
        - yarn add @react-navigation/native-stack
        - yarn add @react-navigation/bottom-tabs
        - yarn add @react-navigation/drawer
        - react-native-gesture-handler react-native-reanimated react-native-worklets / npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets 
        - yarn expo prebuild [cấu hình drawer với expo]
    2. Cấu hình các màn hình navigation:
