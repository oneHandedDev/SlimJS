/**
 * Created by noam on 1/13/16.
 */
function Hi(){
    this.setEcho = function(str,cb){
        this.echo = str;
        cb(null,null);
    }

    this.sayHi = function(cb){
        cb(null,"Hi! " + this.echo);
    }
}