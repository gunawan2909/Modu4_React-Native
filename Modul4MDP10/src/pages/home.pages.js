import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Style from '../stylessheets';

const {HomeStyle} = Style;

function HomePages() {
  const data = [
    {
      id: 1,
      nama: 'NAMA 1',
      nim: '2112011XXXXXXX',
      kelompok: 'xx',
    },
    {
      id: 2,
      nama: 'NAMA 2',
      nim: '2112011XXXXXXX',
      kelompok: 'xx',
    },
    {
      id: 3,
      nama: 'NAMA 3',
      nim: '2112011XXXXXXX',
      kelompok: 'xx',
    },
    {
      id: 4,
      nama: 'NAMA 4',
      nim: '2112011XXXXXXX',
      kelompok: 'xx',
    },
  ];

  const ListItemNama = dataPassing => {
    return (
      <View
        style={
          dataPassing.dataNama.id % 2 === 1 
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }>
        <View>
          <View style={HomeStyle.itemListGaris} />
        </View>
        <View style={HomeStyle.itemListContent}>
          <Text style={HomeStyle.itemListTXT}>
            {'Nama : ' + dataPassing.dataNama.nama}
          </Text>
          <Text style={HomeStyle.itemListTXT}>
            {'NIM : ' + dataPassing.dataNama.nim}
          </Text>
          <Text style={HomeStyle.itemListTXT}>
            {'Kelompok : ' + dataPassing.dataNama.kelompok}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={HomeStyle.headerImage}
        />
        <Text style={HomeStyle.headerTXT}>
          PRAKTIKUM MDP MODUL 4 KELOMPOK XX
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({item}) => <ListItemNama dataNama={item} />}
        keyExtractor={item => item.id}
        style={HomeStyle.flatlist}
      />
    </View>
  );
} 

export default HomePages;