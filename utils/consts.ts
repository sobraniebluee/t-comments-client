import {IComment} from "./types";

export const LIMIT_PEG_PAGE = 24
export const dataComments = []

// export const dataComments: IComment[] = [
//                         {
//                 id: Math.random() * 100,
//                 created_at: '2022-08-25 00:59:02',
//                 updated_at: '2022-08-25 00:59:02',
//                 author: {
//                     id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                     username: 'ohhhhh2'
//                 },
//                 id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 id_post: 1,
//                 text: [{
//                     "id": "F6LrgBfV30",
//                     "type": "paragraph",
//                     "data": {"text": "ddddd"}
//                 }],
//                 root: true,
//                 answers:[{
//                     id: Math.random() * 100,
//                     created_at: '2022-08-25 00:59:02',
//                     updated_at: '2022-08-25 00:59:02',
//                     author: {
//                         id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                         username: 'ohhhhh2'
//                     },
//                     id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                     id_post: 1,
//                     text: [{
//                         "id": "F6LrgBfV30",
//                         "type": "paragraph",
//                         "data": {"text": "ddddd"}
//                     }],
//                     root: true,
//                     answers:[]},]},
//
//     {
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [
//                 {
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [
//                 {
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: []
//         }]
//         }]
//         }]
//         }]
//         }]
//         }]
//         }]
//         }]
//         }]
//         }]
//         }]
//         }]
//         }]
//         },
//                 {
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: []
//         }
//         ]
//         },
//                 {
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: []
//         },
//                 {
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: []
//         },
//                 {
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: []
//         },
//                 {
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'qfg'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers: []
//         }
//         ]
//         }
//     ]
//   {
//         id:1,
//         created_at: '2022-08-25 00:59:02',
//         updated_at: '2022-08-25 00:59:02',
//         author: {
//             id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             username: 'ohhhhh1'
//         },
//         id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//         id_post: 1,
//         text: [{
//             "id": "F6LrgBfV30",
//             "type": "paragraph",
//             "data": {"text": "ddddd"}
//         }],
//         root: true,
//         answers:[
//             {
//             id:2,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: 'ohhhhh1'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             answers:[{
//                 id:5,
//                 created_at: '2022-08-25 00:59:02',
//                 updated_at: '2022-08-25 00:59:02',
//                 author: {
//                     id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                     username: 'ohhhhh1'
//                 },
//                 id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 id_post: 1,
//                 text: [{
//                     "id": "F6LrgBfV30",
//                     "type": "paragraph",
//                     "data": {"text": "ddddd"}
//                 }],
//                 root: true,
//                 answers:[]
//             }]
//             }
//             ,
//             {
//                 id:3,
//                 created_at: '2022-08-25 00:59:02',
//                 updated_at: '2022-08-25 00:59:02',
//                 author: {
//                     id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                     username: 'ohhhhh1'
//                 },
//                 id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 id_post: 1,
//                 text: [{
//                     "id": "F6LrgBfV30",
//                     "type": "paragraph",
//                     "data": {"text": "ddddd"}
//                 }],
//                 root: true,
//                 answers:[]},
//         ]
//     },






// {
//         id: Math.random() * 100,
//         created_at: '2022-08-25 00:59:02',
//         updated_at: '2022-08-25 00:59:02',
//         author: {
//             id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             username: 'dima'
//         },
//         id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//         id_post: 1,
//         text: [{
//             "id": "F6LrgBfV30",
//             "type": "paragraph",
//             "data": {"text": "ddddd"}
//         }],
//         root: true,
//         depth:null,
//         answers: [{
//             id: Math.random() * 100,
//             created_at: '2022-08-25 00:59:02',
//             updated_at: '2022-08-25 00:59:02',
//             author: {
//                 id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 username: '32'
//             },
//             id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//             id_post: 1,
//             text: [{
//                 "id": "F6LrgBfV30",
//                 "type": "paragraph",
//                 "data": {"text": "ddddd"}
//             }],
//             root: true,
//             depth:1,
//             answers: [
//                 {
//                 id: 1000,
//                 created_at: '2022-08-25 00:59:02',
//                 updated_at: '2022-08-25 00:59:02',
//                 author: {
//                     id: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                     username: 'last'
//                 },
//                 id_author: '49eaf7e7-0946-4829-93bc-e56fd63a5726',
//                 id_post: 1,
//                 text: [{
//                     "id": "F6LrgBfV30",
//                     "type": "paragraph",
//                     "data": {"text": "ddddd"}
//                 }],
//                 depth:0,
//                 root: true,
//                 answers: []
//             }
//             ]
//         }]
//     },


