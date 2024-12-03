import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CAGRCalculatorScreen = () => {
  const [initialValue, setInitialValue] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [years, setYears] = useState('');
  const [cagr, setCAGR] = useState(null);

  const calculateCAGR = () => {
    const initial = parseFloat(initialValue);
    const final = parseFloat(finalValue);
    const n = parseFloat(years);

    if (initial > 0 && final > 0 && n > 0) {
      const cagrValue = ((Math.pow(final / initial, 1 / n) - 1) * 100).toFixed(2);
      setCAGR(cagrValue);
    } else {
      setCAGR('Please enter valid inputs');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CAGR Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Initial Value"
        keyboardType="numeric"
        value={initialValue}
        onChangeText={setInitialValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Final Value"
        keyboardType="numeric"
        value={finalValue}
        onChangeText={setFinalValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Years"
        keyboardType="numeric"
        value={years}
        onChangeText={setYears}
      />
      <Button title="Calculate CAGR" onPress={calculateCAGR} />
      {cagr && (
        <Text style={styles.result}>
          {isNaN(cagr) ? cagr : `Your CAGR is: ${cagr}%`}
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

export default CAGRCalculatorScreen;
