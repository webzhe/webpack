/**
 * Created by ZhouZhe on 2016/7/30.
 */
var fn = () => {
    console.log('12312312');
};
fn();


class Student {
    hello(){
        console.log("hello")
    }
}
var s = new Student();
s.hello();

class leo extends Student{

}

var l = new leo;
l.hello();