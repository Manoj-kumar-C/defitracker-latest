import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CreditScoreCalculator = () => {
  const [creditHistory, setCreditHistory] = useState('');
  const [debtAmount, setDebtAmount] = useState('');
  const [paymentHistory, setPaymentHistory] = useState('');
  const [creditScore, setCreditScore] = useState(null);

  // Function to calculate credit score (simplified example)
  const calculateCreditScore = () => {
    if (!creditHistory || !debtAmount || !paymentHistory) {
      Alert.alert('Please fill in all fields');
      return;
    }

    // Simple calculation based on entered data (for demonstration purposes)
    const score = (parseInt(creditHistory) + parseInt(paymentHistory) - parseInt(debtAmount)) / 3;
    setCreditScore(score.toFixed(0));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Credit Score Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Credit History (Years)"
        value={creditHistory}
        onChangeText={setCreditHistory}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Total Debt Amount ($)"
        value={debtAmount}
        onChangeText={setDebtAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Payment History (0-100)"
        value={paymentHistory}
        onChangeText={setPaymentHistory}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.calculateButton} onPress={calculateCreditScore}>
        <Text style={styles.buttonText}>Calculate Credit Score</Text>
      </TouchableOpacity>

      {creditScore !== null && (
        <Text style={styles.scoreText}>
          Your estimated Credit Score: {creditScore}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  calculateButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CreditScoreCalculator;
