import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const handleCalculate = () => {
    const amount = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseInt(loanTerm) * 12;

    if (isNaN(amount) || isNaN(rate) || isNaN(term) || amount <= 0 || rate <= 0 || term <= 0) {
      Alert.alert('Please enter valid values for all fields.');
      return;
    }

    // Loan Calculation
    const monthlyPaymentCalc = (amount * rate) / (1 - Math.pow(1 + rate, -term));
    const totalInterestCalc = (monthlyPaymentCalc * term) - amount;

    setMonthlyPayment(monthlyPaymentCalc.toFixed(2));
    setTotalInterest(totalInterestCalc.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Calculator</Text>
      <Text style={styles.subtitle}>Calculate your monthly payment and total interest.</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Loan Amount:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter loan amount"
          keyboardType="numeric"
          value={loanAmount}
          onChangeText={setLoanAmount}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Interest Rate (%):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter interest rate"
          keyboardType="numeric"
          value={interestRate}
          onChangeText={setInterestRate}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Loan Term (Years):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter loan term in years"
          keyboardType="numeric"
          value={loanTerm}
          onChangeText={setLoanTerm}
        />
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      {monthlyPayment !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Monthly Payment: ${monthlyPayment}</Text>
          <Text style={styles.resultText}>Total Interest: ${totalInterest}</Text>
        </View>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Plan your loan wisely!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginTop: 5,
  },
  calculateButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    backgroundColor: '#e2f0ff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    fontSize: 16,
    color: '#555',
  },
});

export default LoanCalculator;
