import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  infoSubContainer: {
    flex: 1,
    aspectRatio: 16 / 9,
    margin: 10,
    marginTop: 20,
  },
  infoImage: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999999',
  },
  infoDuration: {
    color: 'white',
    backgroundColor: 'black',
    padding: 3,
    fontSize: 13,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textNormal: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 5,
    fontWeight: '200',
    color: '#fff',
  },
  textStrong: {
    fontWeight: '600',
  },
});
