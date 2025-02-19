import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://ecs-back-alb-2725832.ap-northeast-2.elb.amazonaws.com:8080/api/v1/employees";

class EmployeeService {

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  addEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  getEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }
  updateEmployee(employee) {
    return axios.put(EMPLOYEE_API_BASE_URL, employee);
  }
  deleteEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL + "/delete", employee);
  }
  deleteById(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }
}

export default new EmployeeService();
