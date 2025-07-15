import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddWorkoutScreen() {
    const [exercise, setExercise] = useState('');
    const[weight, setWeight] = useState('');
    const[reps, setReps] = useState('');

    const handleAddWorkout = () => {
        if(!exercise || !weight || !reps) {
            Alert.alert('Please fill all the fields');
            return;
        }

        const workout = {
        id: Date.now(),
        exercise, 
        weight: parseFloat(weight),
        reps: parseInt(reps),
        date: new Date().toISOString(),
        };

        console.log('Workout saved:', workout);// Not aactually saved
        Alert.alert('Workout saved!');
        setExercise('');
        setWeight('');
        setReps('');
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Add Workout</Text>

            <TextInput
                style={styles.input}
                placeholder="Exercise Name"
                value={exercise}
                onChangeText={setExercise}
            />
                
            <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />

            <TextInput
                style={styles.input}
                placeholder="Reps"
                keyboardType="numeric"
                value={reps}
                onChangeText={setReps}
            />

            <Button title='Save Workout' onPress={handleAddWorkout}/>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    heading:{
        fontSize: 24,
        marginBottom: 20, 
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
});