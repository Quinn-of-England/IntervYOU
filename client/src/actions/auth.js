import axios from "axios";
// import dotenv from "dotenv";
import { IP, SERVER_PORT   } from '../utils/types.js'; 

const baseUrl = `${IP}:${SERVER_PORT }/api/`;
const accessRoute = baseUrl + "accessToken/";
const refreshRoute = baseUrl + "refreshToken/";

// Get Auth State

// If JWT Exists, Validate Signature -> Store User Id and Name in Auth Store

// If Expired, Check Refresh

// If Refresh Exists and Is Not Expired, Refresh Access

// If Invalid, Redirect Login
