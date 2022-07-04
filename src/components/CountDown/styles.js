import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  infoSubContainer: {
    flex: 1,
    width: '100%',
    height: '56.25%',
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
    position: 'absolute',
    right: 5,
    left: 5,
    bottom: 10,
  },
  textNormal: {
    fontSize: 15,
    fontWeight: '200',
    color: '#fff',
  },
  textStrong: {
    fontWeight: '600',
  },
});
