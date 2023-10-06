import React from "react";
import { View, Button, Text, FlatList,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function ScreenC(){
    const navigation = useNavigation();

    const nomes = ['b','caio','matheus','pedro','frederico','gabriel','lucifer']

    
    function openScreen(){
        navigation.navigate('Home')
    }


    return (
        <view style={{flex: 1, backgroundColor: 'green', justifyItems: 'center' }}>
            <Button
            title="Voltar para Home"
            onPress={openScreen}
            />
             <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View style={styles.nomeView}>
            <Text style={styles.nomeItem}>{item}</Text>
            <Button
        title="Editar"
        onPress={false}
      />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
        </view>
    );
}

const styles = StyleSheet.create({
  nomeView: {
    fontSize: 16,
    marginBottom: 5,
  },
  nomeItem:{
    fontSize: 16,
    marginBottom: 5,
  }
});
