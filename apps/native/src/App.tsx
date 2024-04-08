import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'ui';

type Foo = {
  name: string;
  descr: string;
  price: number;
};

const listViews: Foo[] = [
  {
    name: 'foo bar baz',
    descr:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    price: 49,
  },
  {
    name: 'fizzbuzz',
    descr:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    price: 89,
  },
  {
    name: 'heha foo',
    descr:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    price: 8,
  },
  {
    name: 'fizzbuzz',
    descr: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing consectetur cupidatat.',
    price: 5555,
  },
];

const foo: Foo[] = [...listViews, ...listViews, ...listViews];

console.log(foo);

export default function App() {
  return (
    <View style={styles.container}>
      <Button text="hi" />
      <StatusBar style="auto" />
      <FlatList
        data={foo}
        keyExtractor={(item, index) => item!.name + index}
        renderItem={(el) => (
          <View style={styles.div}>
            <Text> {el.item?.name ?? 'haha'} </Text>
            <Text> {el.item?.descr ?? 'ta7chalek'} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divCont: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  div: {
    backgroundColor: 'red',
    padding: 5,
    margin: 6,
  },
});
