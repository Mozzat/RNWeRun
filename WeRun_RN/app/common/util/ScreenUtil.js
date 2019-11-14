import {Dimensions,Platform,StatusBar} from 'react-native'

///屏幕宽度
const kScreenWidth = Dimensions.get('window').width
const kScreenHeight = Dimensions.get('window').height

//判断是否是iphone4
const isIphone4 = () => {
    return (
        (kScreenWidth == 320) && (kScreenHeight == 480)
    )
}

const isIphone5 = () => {
    return (
        (kScreenWidth == 320) && (kScreenHeight == 568)
    )
}

const isIphone6s = () => {
    return (
        (kScreenWidth == 375) && (kScreenHeight == 667)
    )
}

const isIphone6sP = () => {
    return (
        (kScreenWidth == 414) && (kScreenHeight == 736)
    )
}

///判断设备是否是齐刘海设备
const isLikeIphneX = () =>{
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS&&(!(isIphone4()||isIphone5()||isIphone6s()||isIphone6sP()))
    )
}

//状态栏高度
const kStatusBarHeight = Platform.OS === 'ios' ? isLikeIphneX() ? 44 : 20 : StatusBar.currentHeight;

const kNavBarHeightIOS = kStatusBarHeight + 44

export {
    kScreenHeight,
    kScreenWidth,
    kStatusBarHeight,
    kNavBarHeightIOS
}