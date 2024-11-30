import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const BudgetPlanner = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [balance, setBalance] = useState(null);

  const handleCalculate = () => {
    const incomeAmount = parseFloat(income);
    const expenseAmount = parseFloat(expenses);

    if (isNaN(incomeAmount) || isNaN(expenseAmount)) {
      Alert.alert('Please enter valid numbers for income and expenses.');
      return;
    }

    const remainingBalance = incomeAmount - expenseAmount;
    setBalance(remainingBalance);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Planner</Text>
      <Text style={styles.subtitle}>Track your income and expenses</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Income:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your income"
          keyboardType="numeric"
          value={income}
          onChangeText={setIncome}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Expenses:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your expenses"
          keyboardType="numeric"
          value={expenses}
          onChangeText={setExpenses}
        />
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate Balance</Text>
      </TouchableOpacity>

      {balance !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Remaining Balance: ${balance}</Text>
        </View>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Plan your budget and save wisely!</Text>
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

export default BudgetPlanner;
