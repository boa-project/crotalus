export const initialConfig = {
  apiuri: 'https://boa.udem.edu.co/api',
  catalogues: [
      { name: 'Banco de videos educativos de la UdeM', key: 'udem'}
  ],
  filters: [
      { meta: 'metadata.technical.format', value: ['video', 'audio'] }
  ],
  options: { cacheLife: 0 },
  debug: true,
}