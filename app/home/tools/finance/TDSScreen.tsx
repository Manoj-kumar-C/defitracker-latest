import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function TDSCalculator() {
  const [income, setIncome] = useState('');
  const [tdsRate, setTdsRate] = useState('');
  const [deductions, setDeductions] = useState('');
  const [tdsAmount, setTdsAmount] = useState(null);

  const calculateTDS = () => {
    const incomeAmount = parseFloat(income);
    const rate = parseFloat(tdsRate) / 100; // Convert rate to decimal
    const deductionsAmount = parseFloat(deductions);

    if (isNaN(incomeAmount) || isNaN(rate) || isNaN(deductionsAmount) || incomeAmount <= 0 || rate < 0 || deductionsAmount < 0) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }

    const taxableIncome = incomeAmount - deductionsAmount; // Subtract deductions from income
    const tds = taxableIncome * rate; // Calculate TDS on taxable income
    setTdsAmount(tds.toFixed(2));
  };

  const resetFields = () => {
    setIncome('');
    setTdsRate('');
    setDeductions('');
    setTdsAmount(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.title}>TDS Calculator</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Enter Total Income"
          keyboardType="numeric"
          value={income}
          onChangeText={setIncome}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter TDS Rate (%)"
          keyboardType="numeric"
          value={tdsRate}
          onChangeText={setTdsRate}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Deductions"
          keyboardType="numeric"
          value={deductions}
          onChangeText={setDeductions}
        />

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={calculateTDS}>
          <Text style={styles.buttonText}>Calculate TDS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetFields}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        {/* Result Section */}
        {tdsAmount !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>TDS Amount: ₹{tdsAmount}</Text>
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
