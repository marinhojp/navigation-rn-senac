import * as React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Assets,
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Inicio ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View>
      <Image style={{width: 200, height: 200,borderRadius: 100,}} source={{uri: 'https://github.com/marinhojp.png'}}/>
      </View>

      <Text style ={{ fontWeight: 'bold'}}>João Pedro Marinho</Text>

      <Pressable
        onPress={() => navigation.navigate('Experiencias')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Experiências</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Escolaridade')}
        style={{ backgroundColor: 'grey', padding: 10 }}>
        <Text>Escolaridade</Text>
      </Pressable>
    </View>
  );
}

function Experiencias() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold'}}>EXPERIÊNCIAS PROFISSIONAIS</Text>
      <Text>Analista Funcional - Salesforce @ DreamExperience</Text>
      <Text style={{ fontWeight: 'bold'}}>Atribuições:</Text>
      <Text>1. Levantamento e Análise de Requisitos</Text>
      <Text>2. Construção e Gestão de Backlog</Text>
      <Text>3. Escrita de Casos de Testes</Text>
      <Text>4. Execução de Testes Manuais e Funcionais</Text>
    </View>
  );
}

function Escolaridade() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold'}}>ESCOLARIDADE</Text>
      <Text style={{ fontWeight: 'bold'}}>Senac | Análise e Desenvolvimento de Sistemas</Text>
      <Text>2022 - 2024</Text>
      <Text style={{ fontWeight: 'bold'}}>FEP, Portugal | Gestão</Text>
      <Text>2018 - 2020</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Currículo - Início" component={Inicio} />
        <Stack.Screen name="Experiencias" component={Experiencias} />
        <Stack.Screen name="Escolaridade" component={Escolaridade} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
