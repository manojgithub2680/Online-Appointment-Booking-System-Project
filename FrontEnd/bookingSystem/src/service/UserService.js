import axios from "axios";

class UserService {
    static BASE_URL = "http://localhost:8081/api/v1";


    static async login(email, password) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, { email, password });
            return response.data;
        } catch (err) {
            console.error("Login Error:", err.response?.data || err.message);
            throw err;
        }
    }

    static async signup(userData) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/auth/signup`, userData);
            return response.data;
        } catch (err) {
            console.error("Signup Error:", err.response?.data || err.message);
            throw err;
        }
    }

  
    static async getAllAppointments(token) {
        try {
            const response = await axios.get(`${UserService.BASE_URL}/admin/appointments`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (err) {
            console.error("Fetch Appointments Error:", err.response?.data || err.message);
            throw err;
        }
    }


    static async saveAppointment(token, data) {
        try {
            const response = await axios.post(
                `${UserService.BASE_URL}/user/appointments`,
                data,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            return response;
        } catch (err) {
            console.error("Save Appointment Error:", err.response?.data || err.message);
            throw err;
        }
    }


    static async getTimeSlots( date, token) {
        try {
            const response = await axios.get(`${UserService.BASE_URL}/admin-user/slots`, {
               
                headers: { Authorization: `Bearer ${token}` },
                params: { date }
                
            });
            return response.data;
        } catch (err) {
            console.error("Fetch Time Slots Error:", err.response?.data || err.message);
            throw err;
        }
    }

  
    static async deleteAppointment(id, token) {
        try {
            const response = await axios.delete(`${UserService.BASE_URL}/admin/delete/appointments/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (err) {
            console.error("Delete User Error:", err.response?.data || err.message);
            throw err;
        }
    }

   
     static logout() {
        localStorage.removeItem("token");
    }


    static isAuthenticated() {
        const token = localStorage.getItem("token");
        return !!token;
    }
}



export default UserService;