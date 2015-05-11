var User = function(user_object) {
 this.name = (user_object && typeof user_object.name != 'undefined') ? user_object.name : 'Guest';
 this.type = (user_object && typeof user_object.type != 'undefined') ? user_object.type : 'user';
 this.sayHello = function(){
    return "Hello " + this.name
  }
 if (typeof user_object === 'object' ) {
   for ( property in user_object ) {
    // debug( property + " : " + user_object[ property ] );

    this.property = user_object[ property ];

    }
    return user_object;
  }
}

// User.prototype =  {
//   sayHello: function(){
//     return "Hello " + this.name
//   }
// }

var user = new User();

debug(user.name )
debug(user.type )
debug(user.sayHello() )

var user2 = new User({
  name: 'Juan',
  email: 'juan@example.com',
  type: 'admin',
  sayHello: function () { return "Hola mundo" }
});

debug(user2.name )
debug(user2.email )
debug(user2.type )
debug(user2.sayHello() )
