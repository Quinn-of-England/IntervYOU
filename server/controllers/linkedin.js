import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

/**
 *  This function will fetch the user profile from linkedin
 * 
 * body: {
 *  profile_id: id of the profile
 *  profile_type: just send 'personal'
 * }
 */
export const get_profile = (req, res) => {
    try{
        axios.post(process.env.RAPID_API_URL, req.body, {
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': process.env.RAPID_API_HOST,
                'x-rapidapi-key': process.env.RAPID_API_KEY
            }
        }).then((response) => {
            if(response.data.detail)
                res.status(400).json({message: "Id does not exist"})
            else
                res.status(200).json(response.data)
        }).catch((error) => {
            res.status(400).json({
                message: 'Cant get profile from linkedin',
                error: error.message
            })
        })
    }catch(err){
        res.status(500).json({
            message: 'Server error fetching linkedin profile',
            error: err.message
        })
    }
}