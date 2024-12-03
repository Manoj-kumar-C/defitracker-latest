import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EMICalculatorScreen = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEMI] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const N = parseFloat(loanTenure) * 12; // Total months

    if (P && R && N) {
      const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEMI(emiValue.toFixed(2));
    } else {
      setEMI('Please enter valid inputs');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Loan Amount (₹)"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Interest Rate (%)"
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
      />
      <TextInput
        style={styles.input}
        placeholder="Loan Tenure (Years)"
        keyboardType="numeric"
        value={loanTenure}
        onChangeText={setLoanTenure}
      />
      <Button title="Calculate EMI" onPress={calculateEMI} />
      {emi && (
        <Text style={styles.result}>
          {isNaN(emi) ? emi : `Your EMI is: ₹${emi}`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default EMICalculatorScreen;
