import { StyleSheet } from 'react-native';

export const financeiroStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff9f6',
  },
  contentContainer: {
    padding: 16,
  },
  topSpacing: {
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 15,
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
  },
  contactText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  contactEmail: {
    fontSize: 14,
    color: '#555',
  },
  contactPhone: {
    fontSize: 14,
    color: '#555',
  },
});
