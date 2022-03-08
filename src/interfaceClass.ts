interface IPost {
    name: string,
    email: string
}

class Post implements IPost {
    name: string;
    email: string;

    constructor(post: IPost) {
        this.name = post.name;
        this.email = post.email;
    }

    printPost() {
        console.log(this.name);
        console.log(this.email);
    }
}

const post = new Post({ name: "nandhi", email: "nandhi@gmail.com" });