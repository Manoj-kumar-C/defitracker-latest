import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function CompoundInterest() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('');
  const [interest, setInterest] = useState(null);
  const [total, setTotal] = useState(null);

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100; // Convert to decimal
    const t = parseFloat(time);
    const n = parseFloat(frequency);

    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n) || p <= 0 || r <= 0 || t <= 0 || n <= 0) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }

    const compoundAmount = p * Math.pow(1 + r / n, n * t); // Compound Interest formula
    const compoundInterest = compoundAmount - p;

    setInterest(compoundInterest.toFixed(2));
    setTotal(compoundAmount.toFixed(2));
  };

  const resetFields = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setFrequency('');
    setInterest(null);
    setTotal(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.title}>Compound Interest Calculator</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Enter Principal Amount (P)"
          keyboardType="numeric"
          value={principal}
          onChangeText={setPrincipal}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Rate of Interest (R%)"
          keyboardType="numeric"
          value={rate}
          onChangeText={setRate}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Time (T in years)"
          keyboardType="numeric"
          value={time}
          onChangeText={setTime}
        />
        <TextInput
          style={styles.input}
          placeholder="Compounding Frequency (n per year)"
          keyboardType="numeric"
          value={frequency}
          onChangeText={setFrequency}
        />

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={calculateCompoundInterest}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetFields}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        {/* Result Section */}
        {interest !== null && total !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Compound Interest: ₹{interest}</Text>
            <Text style={styles.resultText}>Total Amount: ₹{total}</Text>
          </View>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  button: {
    backgroundColor: '#5DBB63',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  resetButton: {
    backgroundColor: '#FF6B6B',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  resultContainer: {
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 10,
  },
});
