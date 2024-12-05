import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function BrokerageCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [brokerageRate, setBrokerageRate] = useState('');
  const [additionalCharges, setAdditionalCharges] = useState('');
  const [totalBrokerage, setTotalBrokerage] = useState(null);

  const calculateBrokerage = () => {
    const amount = parseFloat(investmentAmount);
    const rate = parseFloat(brokerageRate) / 100; // Convert rate to decimal
    const charges = parseFloat(additionalCharges);

    if (isNaN(amount) || isNaN(rate) || isNaN(charges) || amount <= 0 || rate < 0 || charges < 0) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }

    const brokerage = amount * rate; // Calculate brokerage
    const total = brokerage + charges; // Add additional charges
    setTotalBrokerage(total.toFixed(2));
  };

  const resetFields = () => {
    setInvestmentAmount('');
    setBrokerageRate('');
    setAdditionalCharges('');
    setTotalBrokerage(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.title}>Brokerage Calculator</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Enter Investment Amount"
          keyboardType="numeric"
          value={investmentAmount}
          onChangeText={setInvestmentAmount}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Brokerage Rate (%)"
          keyboardType="numeric"
          value={brokerageRate}
          onChangeText={setBrokerageRate}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Additional Charges"
          keyboardType="numeric"
          value={additionalCharges}
          onChangeText={setAdditionalCharges}
        />

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={calculateBrokerage}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetFields}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        {/* Result Section */}
        {totalBrokerage !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Total Brokerage: ₹{totalBrokerage}</Text>
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
