// services/loginService.js

const loginService = {
    authenticate: function(username, password) {
      // Kullanıcı doğrulama işlemleri burada yapılır.
      // Bu örnekte sadece basit bir true/false döndürülecek.
      return (username === 'user1' && password === 'user1');
    }
  };
  
  module.exports = loginService;
  