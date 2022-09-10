import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTailwind } from 'tailwind-rn/dist'

const CustomersScreen = () => {
    const tw = useTailwind()

    return (
        <SafeAreaView>
            <Text style={tw('text-red-500')}>CustomersScreen</Text>
        </SafeAreaView>
    )
}

export default CustomersScreen