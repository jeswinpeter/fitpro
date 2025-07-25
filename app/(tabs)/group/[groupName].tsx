import { useLocalSearchParams } from "expo-router";
import { Text, FlatList, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const exercisesPerGroup = {
    arm: [ 'Straight bar curls', 'Preacher Curls', 'Seated DB Curls', 'Tricep pushdowns', 'Scullcrusher', 'Seated tricep extension' ],
    shoulder: [ 'Overhead Press', 'Lateral raises' ],
    chest: [ 'Bench Press', 'Incline DB Press', 'Chest Press', 'DB Fly' ],
    back: [ 'Lat Pulldown', 'Tbar Rows', 'Seated Rows', 'DB Rows' ],
    leg: [ 'Leg Press', 'Squats' ],
};

export default function GroupPage() {
    const { groupName } = useLocalSearchParams();
    const group = String(groupName).toLowerCase();

    const exercises = exercisesPerGroup[group] || [];

    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Text style={{ color: 'orange', fontSize: 28, fontWeight: 'bold', marginBottom:20}}>{groupName} Excercises</Text>
            
            <FlatList
                data={exercises}
                keyExtractor={(item) => item}
                renderItem={ ({item}) => (
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ fontSize: 18 }}>{item}</Text>
                    </View>
                )}
            />
            
            {/* Placeholder for past workout report */}
            <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Previous Workout</Text>
                <Text style={{ color: 'grey'}}>Coming Soon....</Text>
            </View>
        </SafeAreaView>
    )
}