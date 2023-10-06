import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

export function screenB() {
  const navigation = useNavigation();

  const [name, setName] = React.useState('');
  const [email, setemail] = React.useState('');
  const [senha, setsenha] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [data, setData] = React.useState('');
  const [end, setEnd] = React.useState('');
  const [pagamento, setPagamento] = React.useState('');
  const [ShowInfo, setShowInfo] = React.useState(false);



  function openScreen() {
    navigation.navigate('screenC');
  }
  console.log("nome: " + name, "\n Email: " + email, "\n Senha: " + senha, "\n Data de Nascimento: " + data, "\nCpf: " + cpf, "\nPagamento: " + pagamento, "\nEndereço: " + end)






  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <TextInput placeholder='Nome' style={styles.input} value={name} onChangeText={setName}></TextInput>
      <TextInput placeholder='email' style={styles.input} value={email} onChangeText={setemail}></TextInput>
      <TextInput placeholder='senha' style={styles.input} value={senha} onChangeText={setsenha}></TextInput>
      <TextInput placeholder='data' style={styles.input} value={data} onChangeText={setData}></TextInput>
      <TextInput placeholder='cpf' style={styles.input} value={cpf} onChangeText={setCpf}></TextInput>
      <TextInput placeholder='endereço' style={styles.input} value={end} onChangeText={setEnd}></TextInput>
      <TextInput placeholder='pagamento' style={styles.input} value={pagamento} onChangeText={setPagamento}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textoButton} onPress={() => { handleLogin(); setShowInfo(true) }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  infos: {
    marginTop: 20,
    alignItems: 'center',
    color: 'black',
    display: 'flex',
    textAlign: 'left'
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    color: "#000",
    backgroundColor: "#FFF",
    borderRadius: 5,
    fontWeight: "200",
    width: "60%",
    padding: 10,
    margin: 10
  },
  button: {
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#4285f4',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#8ecafc'

  },
  textoButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  },
});
