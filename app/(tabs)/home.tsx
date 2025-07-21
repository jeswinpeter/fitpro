import { Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const muscleGroups = [
    { name: 'Chest', color: '#FF6B6B'},
    { name: 'Back', color: '#4ECDC4'},
    { name: 'Legs', color: '#FFD93D'},
    { name: 'Arms', color: '#A29BFE'},
    { name: 'Shoulders', color: '#FDCB6E'},
    { name: 'Core', color: '#81ECEC'},
];

export default function HomeScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16}}>
                Select Muscle Group
            </Text>
            <FlatList 
                data={muscleGroups}
                keyExtractor={(item) => item.name}
                numColumns={1}
                //columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => router.push(`/group/${item.name.toLowerCase()}`)}
                        style={{
                            backgroundColor: item.color,
                            padding: 20,
                            borderRadius: 12,
                            marginBottom: 16,
                            flex: 0.48,
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}