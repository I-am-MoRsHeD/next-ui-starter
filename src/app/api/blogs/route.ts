import { NextResponse } from "next/server";

export const blogs = [
    {
        "id": 13,
        "title": "The Tenth Blog post about nothing",
        "content": "Keya  batao ab!Post kar kar ke thak cukhe huu!",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": true,
        "tags": [
            "Nothing",
            "Kuch bih",
            "Bakwas"
        ],
        "views": 0,
        "authorId": 2,
        "createdAt": "2025-09-26T13:49:59.670Z",
        "updateAt": "2025-09-26T13:49:59.670Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    },
    {
        "id": 12,
        "title": "The Ultimate Server Form steps",
        "content": "Nothing just trying to implement Server form feature",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": true,
        "tags": [
            "Nextjs",
            "Reactjs",
            "Nestjs"
        ],
        "views": 0,
        "authorId": 2,
        "createdAt": "2025-09-26T13:39:25.310Z",
        "updateAt": "2025-09-26T13:39:25.310Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    },
    {
        "id": 9,
        "title": "The Ninth title of the book",
        "content": "Nothing just trying to test the db",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": false,
        "tags": [
            "ph",
            "blog",
            "level2"
        ],
        "views": 2,
        "authorId": 2,
        "createdAt": "2025-09-24T16:57:33.224Z",
        "updateAt": "2025-09-24T17:39:01.873Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    },
    {
        "id": 8,
        "title": "The Eighth title of the book",
        "content": "Nothing just trying to test the db",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": false,
        "tags": [
            "ph",
            "blog",
            "level2"
        ],
        "views": 3,
        "authorId": 2,
        "createdAt": "2025-09-22T18:14:47.298Z",
        "updateAt": "2025-09-24T18:26:03.825Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    },
    {
        "id": 7,
        "title": "The Sixth title of the book",
        "content": "Nothing just trying to test the db",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": false,
        "tags": [
            "ph",
            "blog",
            "educational"
        ],
        "views": 4,
        "authorId": 2,
        "createdAt": "2025-09-22T17:57:23.003Z",
        "updateAt": "2025-09-24T17:43:03.867Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    },
    {
        "id": 6,
        "title": "The Sixth title of the book",
        "content": "Nothing just trying to test the db",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": true,
        "tags": [
            "ph",
            "blog",
            "educational"
        ],
        "views": 1,
        "authorId": 2,
        "createdAt": "2025-09-22T17:33:30.228Z",
        "updateAt": "2025-09-24T17:43:04.990Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    },
    {
        "id": 5,
        "title": "The Fifth title of the book",
        "content": "Nothing just trying to test the db",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": true,
        "tags": [
            "ph",
            "blog",
            "educational"
        ],
        "views": 1,
        "authorId": 2,
        "createdAt": "2025-09-22T17:33:21.839Z",
        "updateAt": "2025-09-24T17:43:05.054Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    },
    {
        "id": 4,
        "title": "The Fourth title of the book",
        "content": "Nothing just trying to test the db",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": true,
        "tags": [
            "ph",
            "blog",
            "educational"
        ],
        "views": 4,
        "authorId": 2,
        "createdAt": "2025-09-22T17:33:16.478Z",
        "updateAt": "2025-09-24T18:24:13.807Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    },
    {
        "id": 3,
        "title": "The Third title of the book",
        "content": "Nothing just trying to test the db",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": true,
        "tags": [
            "ph",
            "blog",
            "educational"
        ],
        "views": 1,
        "authorId": 2,
        "createdAt": "2025-09-22T17:33:09.897Z",
        "updateAt": "2025-09-24T17:43:05.288Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    },
    {
        "id": 2,
        "title": "The Second title of the book",
        "content": "Nothing just trying to test the db",
        "thumbnail": "https://nothing_image.jpg",
        "isFeatured": true,
        "tags": [
            "ph",
            "blog",
            "educational"
        ],
        "views": 1,
        "authorId": 2,
        "createdAt": "2025-09-22T17:33:04.863Z",
        "updateAt": "2025-09-24T17:43:05.285Z",
        "author": {
            "id": 2,
            "name": "Akkas",
            "email": "akkas@gmail.com",
            "role": "USER",
            "isVarified": false,
            "status": "ACTIVE"
        }
    }
];


export async function GET() {
    return Response.json(blogs);
};


export const POST = async (request: Request) => {
    const blog = await request.json();

    const newBlog = {
        ...blog,
        id: blogs.length + 1
    };

    blogs.push(newBlog);

    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: {
            'Content-type': 'application/json'
        }
    })
}