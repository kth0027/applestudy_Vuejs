module.exports = {
  pwa: {
    name: '뷰동산 vue 스터디사이트',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    
    workboxOptions: {
      // 캐싱목록저장 x : 하드저장 원하지 않음
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']
    }
  }
}