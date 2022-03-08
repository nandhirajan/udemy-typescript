var Post = /** @class */ (function () {
    function Post(post) {
        this.name = post.name;
        this.email = post.email;
    }
    Post.prototype.printPost = function () {
        console.log(this.name);
        console.log(this.email);
    };
    return Post;
}());
var post = new Post({ name: "nandhi", email: "nandhi@gmail.com" });
console.log(post.printPost());
//# sourceMappingURL=interfaceClass.js.map