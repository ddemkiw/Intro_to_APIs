      function addProfileFromUsername(username){
        $.get('https://api.github.com/users/'+ username, function(user){
          var newProfile = Mustache.render($('#profile-template').html(), user);
          $('.profile-container').append(newProfile).slideDown();
        }).error(function(){
          alert('No such user with the username: ' + username);
        });
      }
      $(document).ready(function(){
        $('#add_profile').on('submit', function(event){
          event.preventDefault();
          addProfileFromUsername($('#username').val());
        });
        $('.profile-container').on('click', '.close', function(){
          $(this).closest('.profile').slideUp(function(){
            $(this).remove();
          });
        });
      });
