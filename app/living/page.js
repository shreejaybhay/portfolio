/* eslint-disable @next/next/no-img-element */
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="lg:h-[500px] h-[300px] sm:h-[350px] w-full relative">
                <div className='absolute top-0 left-0 w-full h-full bg-black/20'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full'>
                    <h1 className='text-4xl font-bold uppercase text-slate-200'>Living</h1>
                    <div className="text-sm breadcrumbs">
                        <ul className='font-medium uppercase text-slate-200'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/living'>Living</a></li>
                        </ul>
                    </div>
                </div>
                <img
                    src="https://i.postimg.cc/P5ryR0yp/low-angle-footage-five-soldiers-camouflage-engaged-reconnaissance-mission-through-dense-woodland-rif.jpg"
                    alt="img"
                    className="object-cover object-right-top w-full h-full"
                />
            </div>

            <div>
                <div className='mt-20 xl:px-[300px] lg:px-10 px-3'>
                    <h1 className='text-lg md:text-2xl '>Started on <span className='text-slate-200'> June 13, 2024</span></h1>
                </div>
                <div className='xl:px-[300px] lg:px-10 flex flex-col gap-5 my-10 px-3 text-sm md:text-base'>
                    <p>
                        Quisque corporis ornare quisque nisl, atque sit nulla ac, tincidunt etiam euismod velit mauris dui, luctus inceptos auctor pellentesque condimentum, mus id nunc nibh. Dis tristique sollicitudin wisi id praesent amet, tortor vitae vitae donec doloribus diam alias, ornare mauris et mollis modi sed vehicula. Nam turpis ipsum non quis. Sed quam habitant, venenatis mi enim, luctus risus amet tellus lacus adipiscing eget, eget aliquam, lorem faucibus nec. At tincidunt eget egestas suspendisse blandit tristique, mi praesent, massa lectus mi, soluta sit.
                    </p>
                    <p>
                        Vestibulum accusamus fermentum, massa in ipsum, lectus justo, sagittis sit dui nulla. Lacinia fusce accumsan at cras vel sollicitudin, eget arcu, eget sed erat sit. Ipsum quam urna viverra arcu sit. Justo vel nam maecenas interdum ultrices, erat vel sodales aptent nunc, lacus elit velit, tortor erat, tincidunt mauris. Platea turpis vitae non bibendum suspendisse, ut nostra ante tellus, ut vulputate urna nulla dictum wisi, feugiat in. Metus ante risus ante, hac nulla dui, eleifend nunc dignissim vel et suspendisse. In mauris non nec id ipsum orci, eros lectus auctor, urna mauris leo proin duis vivamus posuere, posuere mi egestas arcu egestas leo.
                    </p>
                    <p>
                        Lacus mauris vestibulum fusce phasellus. Velit pede quis aliquam ipsum dignissim eget, fermentum et. Proin eget, feugiat ac, ut proin. Vestibulum eu pede gravida vel, amet commodo, eget risus quis senectus lobortis porta, sit velit. Magna aliquam convallis, amet quisque ipsum dapibus convallis viverra, magna non, sed montes at nam tempor. Vestibulum faucibus purus, vestibulum natoque massa vitae vestibulum, posuere elit eu ornare eleifend nec bibendum. Nisl sit nibh interdum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page