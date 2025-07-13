import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';

export default function AddWorkoutScreen() {
    const [exercise, setExercise] = useState('');
    const[weight, setWeight] = useState('');
    const[reps, setReps] = useState('');

    const handleAddWorkout = () => {
        if(!exercise || !weight || !reps) {
            Alert.alert('Please fill all the fields');
            return;
        }
    }

    const workout = {
        id: Date.now(),
        exercise, 
        weight: parseFloat(weight),
        reps: parseInt(reps),
        date: new Date().toISOString(),
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Workout</Text>

            <TextInput
                style={styles.input}
                placeholder="Exercise Name"
                value={exercise}
                onChangeText={setExercise}
            />
                
            <TextInput>

            </TextInput>

            <Button title='Save Workout' onPress={handleAddWorkout}/>
        </View>
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
    }
});