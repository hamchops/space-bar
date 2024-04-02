const clientId = "2bf65fd4faad49fc97ed241b4946bff5";
const code = undefined;

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

export async function redirectToAuthCodeFlow(clientId) {
    // Redirect to auth page   
}

async function getAccessToken(clientId, code) {
    // Get access token for code
}

async funtion fetchProfile(token) {
    // call api
}

function populateUI(profile) {
    // update with profile data
}