import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//导入组件库
import TabBar from './TabBar'

const App = createStackNavigator(
    {
        Main:{
            screen:TabBar,
            navigationOptions:(navigation) => ({
                header:null
            })
        }
    },
    {
        initialRouteName:'Main'
    }
)

const AppNav = createAppContainer(App)
export default AppNav