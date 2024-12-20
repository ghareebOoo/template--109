export type postsState = {
    posts: null | Post[],
    postDetails: null | Post
}


export interface Post {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface User {
    _id: string;
    name: string;
    slug: string;
    image: string;
}



export interface Comment {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage: number;
}

