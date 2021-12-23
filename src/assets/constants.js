export const properties = {
    backendUrl: 'https://surveyor-be.vercel.app/',
    urls: {
        user : {
            register: 'https://surveyor-be.vercel.app/user/register',
            login: 'https://surveyor-be.vercel.app/user/login',
        },
        survey : {
            createSurvey: 'https://surveyor-be.vercel.app/survey/createSurvey',
            getAllSurveys: 'https://surveyor-be.vercel.app/survey/fetchMySurveys',
            getOneSurvey: 'https://surveyor-be.vercel.app/survey/getSurvey',
            getAllResponse: 'https://surveyor-be.vercel.app/response/fetchResponses',
            posttResponse: 'https://surveyor-be.vercel.app/response/addResponse',
        }
    }
}