var config = {
  development: {
    //mongodb connection settings
    database: {
      host: 'localhost',
      port: '27017',
      db: 'mean-file-manager-wysiwyg-example'
    },
    uploadPath: './src/assets/uploads/'
  },
  production: {
    //mongodb connection settings
    database: {
      host: 'localhost',
      port: '27017',
      db: 'mean-file-manager-wysiwyg-example'
    },
    uploadPath: './src/assets/uploads/'
  }
};
module.exports = config;
