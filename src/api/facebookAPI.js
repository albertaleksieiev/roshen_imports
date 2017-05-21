/**
 * Created by albert on 5/19/17.
 */
//import Config from 'react-native-config'

export default class API{
    apiCall(){
        var getLoginSession = () => new Promise((resolve, reject) => {
            window.FB.getLoginStatus(function(response) {

                if (response.status === 'connected') {
                    console.log('Logged in.');
                    resolve(response.authResponse);
                }
                else {
                    window.FB.login((response) => {
                        if(response.authResponse)
                            resolve({auth: response.authResponse});
                        else
                            reject();
                    }, {scope: 'user_photos,public_profile'});
                }
            });
        }) ;
        return getLoginSession().
            then((session) => {
                if(session){
                    console.log(session);
                    window.facebook_session = session;
                }else{
                    throw "facebook session is empty";
                }
                return Promise.resolve(session);
            })

    }
    login(){
        return this.apiCall();
    }
    getAlbum(album_name){
        return new Promise((resolve, reject ) => {
            this.apiCall()
                .then((session) => {
                    window.FB.api("/me/albums",
                        (resp) => {
                            if(resp && resp.data) {
                                var album = resp.data.filter(a => a.name == album_name);
                                if(album.length > 0)
                                    resolve(album[0]);
                                else
                                    resolve()
                            }else
                                resolve();
                        })
                })
                .catch(reject);
        })
    }
    createAlbum(album_name){
        return new Promise((resolve, reject) => {
            this.apiCall()
                .then((session) => {
                    window.FB.api("/me/albums","post", {name: album_name},(resp) => {
                        debugger;
                        if(resp)
                            resolve(resp.id);
                    })
                })
                .reject(reject)
        })
    }
    async createAlbumIfNotExist(album_name){

        var album = await this.getAlbum(album_name);

        if(album)
            throw `Album with name :${album_name} already exists`;

        var album_id = await this.createAlbum(album_name);
        return album_id;
    }
    async uploadPhotos(photos, albumName, progress) {
        var album_id = await this.createAlbumIfNotExist(albumName);


        return this.apiCall()
            .then(this.getAlbum.bind(this))
            .then((session) => {
                return new Promise((resolve, reject) => {
                   window.FB.api()
                });
            });
        //return Promise.resolve()
    }
}