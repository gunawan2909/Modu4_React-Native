import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Style from '../stylessheets';
const {HomeStyle} = Style;
function HomePages() {
 const data = [
 {
 id: 1,
 nama: 'Ilyasa Aliadjrun',
 nim: '21120119130058',
 kelompok: '10',
 },
 {
 id: 2,
 nama: 'Ahmad Rafly Pradana',
 nim: '21120119130085',
 kelompok: '10',
 },
 {
 id: 3,
 nama: 'Liem, Christoper Jaya Mulyawan',
 nim: '21120119130073',
 kelompok: '10',
 },
 {
 id: 4,
 nama: 'Gunawan Prasetya',
 nim: '21120119120025',
 kelompok: '10',
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
 <View style={
     dataPassing.dataNama.id % 2 === 0
     ? HomeStyle.itemListGarisGenap
     : HomeStyle.itemListGarisGanjil} />
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