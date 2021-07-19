import axios from 'axios';

export default {
    getEmployee : function() {
        return axios.get( 'https://randomuser.me/api/?results=10&nat=us&inc=name,email,phone,id,picture')
    }
};

// $.ajax({
//     url: 'https://randomuser.me/api/?results=10'
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });