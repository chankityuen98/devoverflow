import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RenderTag from './RenderTag'

const hotQuestions = [
    {
        _id: 1, title: 'title 1'
    },
    {
        _id: 2, title: 'title 2'
    },
    {
        _id: 3, title: 'title 3'
    },
    {
        _id: 4, title: 'title 4'
    },
    {
        _id: 5, title: 'title 5'
    },
]

const popularTags = [
    {
        _id: "1", name: 'Javascript', totalQuestions: 5
    },
    {
        _id: "2", name: 'NextJs', totalQuestions: 3
    },
    {
        _id: "3", name: 'PHP', totalQuestions: 6
    },
    {
        _id: "4", name: 'Wordpress', totalQuestions: 9
    },
    {
        _id: "5", name: 'ReactJs', totalQuestions: 21
    },
]
const RightSidebar = () => {


    return (
        <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
            <div className="">
                <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
                <div className="mt-7 flex w-full flex-col gap-[3px]">
                    {
                        hotQuestions.map((question) => (
                            <Link href={`questions/${question._id}`} key={question._id} className='flex cursor-pointer items-center justify-between gap-7'>
                                <p className='body-medium text-dark500_light700'>{question.title}</p>
                                <Image
                                    src={'/assets/icons/chevron-right.svg'}
                                    alt='chevron right'
                                    width={20}
                                    height={20}
                                    className='invert-colors'
                                />
                            </Link>

                        ))
                    }
                </div>
            </div>
            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900 ">Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {
                        popularTags.map((tag) => (
                            <RenderTag
                                key={tag._id}
                                _id={tag._id}
                                name={tag.name}
                                totalQuestions={tag.totalQuestions}
                                showCount
                            />

                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default RightSidebar