export const initialConfig = {
  // apiuri: 'https://boa.udem.edu.co/api',
  apiuri: 'https://boa.udea.edu.co/api/',
  catalogues: [
      // { name: 'Banco de videos educativos de la UdeM', key: 'udem'}
      { name: 'Banco de videos educativos de la UdeM', key: 'ruta-tic'}
  ],
  filters: [
      // { meta: 'metadata.technical.format', value: ['video', 'audio', 'image', 'text', 'application'] }
      { meta: 'metadata.technical.format', value: ['image'] }
  ],
  options: {
    suggestionsSize: 50,
    resultsSize: 0,
    minLetters: 3,
    cacheLife: 60000 // 60 seconds
  },
  debug: true,
}
