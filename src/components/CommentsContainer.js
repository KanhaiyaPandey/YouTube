import React from 'react'

const commentsData = [
    {
        name: "kanhaiya pandey",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
        reply: [ 

                {
                name: "kanhaiya pandey",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                reply: [

                    {
                        name: "kanhaiya pandey",
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                        reply: [
                            {
                                
                                    name: "kanhaiya pandey",
                                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                                    reply: [
                                        {
                                            name: "kanhaiya pandey",
                                            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                                            reply: [
                                                {
                                                    name: "kanhaiya pandey",
                                                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                                                    reply: [],
                                                },
                                            ],
                                        },
                                    ],
                                
                            },
                            {
                                name: "kanhaiya pandey",
                                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                                reply: [
                                    {
                                        name: "kanhaiya pandey",
                                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                                        reply: [],
                                    },
                                ],
                            },
                            {
                                name: "kanhaiya pandey",
                                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                                reply: [],
                            },
                        ],
                    },
                ],
              },
            {
                name: "kanhaiya pandey",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                reply: [],
            },
            {
                name: "kanhaiya pandey",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
                reply: []
            },
        ]
    },

]

const Comment = ({data}) => {
    const {name, text} = data;
  return(
    <div className='flex bg-gray-200 px-2 py-2 mb-4'>
        <img className='w-[20px] h-[20px] mt-1' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png' />

        <div className='ml-3'>
            <p className='font-bold'> {name}</p>
            <p className=''>{text}</p>
        
        </div>

    </div>
  )
}

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div>
        <Comment key={index} data={comment}/>
        <div className='ml-3 border border-l-black pl-5'>
            <CommentList comments = {comment.reply} />
        </div>
        </div>
    ));
};

const CommentsContainer = () => {
  return (
    <div>
        <h1 className='font-bold m-4 text-lg'>Comments :</h1>
        <CommentList comments={ commentsData } />
    </div>
  )
}

export default CommentsContainer;