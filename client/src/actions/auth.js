import axios from "axios";

const baseUrl = "http://localhost:5000/api/";
const accessRoute = baseUrl + "accessToken/";
const refreshRoute = baseUrl + "refreshToken/";

// Get Auth State

// If JWT Exists, Validate Signature -> Store User Id and Name in Auth Store

// If Expired, Check Refresh

// If Refresh Exists and Is Not Expired, Refresh Access

// If Invalid, Redirect Login
