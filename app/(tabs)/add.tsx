import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddWorkoutScreen() {
    const [exercise, setExercise] = useState('');
    const[weight, setWeight] = useState('');
    const[reps, setReps] = useState('');

    const handleAddWorkout = async () => {
        if(!exercise || !weight || !reps) {
            Alert.alert('Please fill all the fields');
            return;
        }

        const newWorkout = {
        id: Date.now(),
        exercise, 
        weight: parseFloat(weight),
        reps: parseInt(reps),
        date: new Date().toISOString(),
        };

        try{
            // Getting existing data
            const existingData = await AsyncStorage.getItem('workouts');
            const workouts = existingData ? JSON.parse(existingData) : [];

            // Add new workout
            workouts.push(newWorkout);

            // Save it back
            await AsyncStorage.setItem('workouts', JSON.stringify(workouts));

            console.log('Workout saved:', newWorkout);// Not aactually saved
            Alert.alert('Workout saved!');
            setExercise('');
            setWeight('');
            setReps('');
        }
        catch (error) {
            console.error('Error saving workout:', error);
            Alert.alert('Something went wrong while saving!');
        }
    };


    return (
        //Avoid notch and notification bar
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

// Styling for reuse
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