/**
 * Created by albert on 5/18/17.
 */
export default class vkAPI{
    constructor(){

    }
    login(){
        return this.ApiCall();
    }
    ApiCall(){
        var getLoginSession = () => {

            return new Promise((resolve, reject) => {
                window.VK.Auth.getLoginStatus((data) => {

                    if(data && data.session && !data.session.user){
                        resolve(data.session);
                    }else{
                        resolve()
                    }
                })
            })
        };
        return getLoginSession()
            .then( (session) => {
                var none_promise = () =>{
                    return new Promise((resolve, reject) => {
                        resolve();
                    });
                };
                if(window.session) return none_promise();

                if(session){
                    window.session = session;
                    return none_promise();
                }else{
                    return new Promise((resolve, reject) => {
                        window.VK.Auth.login(function (resp) {
                            window.session = resp.session;
                            resolve();
                        }, 4);
                    });

                }
            });
    }

    getAlbums(){
        return this.ApiCall()
            .then(() => {
                return new Promise((resolve, reject)=>{
                    window.VK.api('photos.getAlbums', {
                        need_covers: 1,
                        owner_id: window.session.mid
                    }, (data) => {

                        resolve({albums:data.response});
                    });
                });
            })
    }
    getPhotosWithOffset(album_id, offset){
        return this.ApiCall()
            .then(() => {
                return new Promise((resolve, reject) => {
                    window.VK.api('photos.get', {
                        owner_id: window.session.mid,
                        rev: 0,
                        album_id,
                        offset
                    }, (data) => {
                        resolve(data.response);
                    });
                });
            })
    }
    async getPhotos(album_id){
        //NUmber of phontos can be > 1000, but vkapi returns max 1000 items
        var photos = [];
        var offset = 0;
        var currentCount = 1000;
        var maxCount     = 1000;

        while(currentCount == maxCount){
            var res = await this.getPhotosWithOffset(album_id, offset);

            if(!res) {
                return photos;
            }else{
                currentCount = res.length;
                photos = photos.concat(res);
            }
        }
        return photos;
    }
};
