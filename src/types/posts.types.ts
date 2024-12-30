export type postsState = {
    posts: null | Post[],
    postDetails: null | Post
}


export interface ApiResponse {
    message: "string";
    paginationInfo: PaginationInfo;
    posts: Post[];
}


export interface PaginationInfo{
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage: number | null;
    total: number;
}

export interface Post {
    _id: string;
    body: string;
    image: string;
    user: string;
    createdAt: string;
    comments: Comment[];
    id: string;
}

export interface User {
    _id: string;
    name: string;
    photo: string;
}



export interface Comment {
    id: string;
    content: string;
    commentCreator: User;
    post: string;
    createdAt: string;
}

