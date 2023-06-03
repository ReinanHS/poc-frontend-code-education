export function GetHomeVideo() : string {
    const projectID = 'quickstart-1566913824070';
    const firebaseUrl = `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com`
    const videoName = 'pexels-pressmaster.mp4'

    //TODO: Capturar o token de acesso de forma automática
    const token = '74343288-8c20-4cbf-b20f-a685c636bf64';

    return `${firebaseUrl}/o/${videoName}?alt=media&token=${token}`;
}