import { Text } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>History Page - Calendar View</Text>
        </SafeAreaView>
    );
}