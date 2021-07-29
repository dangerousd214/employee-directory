import axios from 'axios';

export default {

    getEmployees : function(){

        return axios.get( 'https://randomuser.me/api/?results=10&nat=us&inc=name,email,phone,id,picture')
        
    }
};
       

