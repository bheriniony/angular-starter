describe('app.login module', function() {

  var LoginController;

  beforeEach(module('app.login'));

  beforeEach(inject(function($controller){
    LoginController = $controller('LoginController');
  }));

  describe('Login controller', function() {
    it('should display the correct message', function() {
      expect(LoginController.message).toEqual('yoyo');
    });
  });
});
