import { useEffect, useRef } from "react";
import ME1 from "../../assets/Me1.png?url";
import ME from "../../assets/Me.png?url";
// import ME from "../assets/Me.png?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIndicator from "../common/ScrollIndicator";
import useIntersectionObserver from "../../hooks/useInterSectionObsever";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe(props:{sectionRef:React.RefObject<HTMLDivElement>})
{
    const age = "CODER SINCE 2018 CODER SINCE 2018 CODER SINCE 2018 CODER SINCE 2018 CODER SINCE 2018";
    const about_me = "ABOUT ME  ABOUT ME  ABOUT ME  ABOUT ME  ABOUT ME ";
    const alias = "NYTRIXIS NYTRIXIS NYTRIXIS NYTRIXIS NYTRIXIS NYTRIXIS";
    const bday = "INNOVATION JUNKIE INNOVATION JUNKIE INNOVATION JUNKIE INNOVATION JUNKIE INNOVATION JUNKIE INNOVATION JUNKIE INNOVATION JUNKIE ";

    const parentRef = useRef<HTMLDivElement>(null);
    const refs = [useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null)];
    const insideRefs = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];

    const MeRef = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];
    const imageRef = useRef<HTMLImageElement>(null);


    const tagsRef = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)]
    useEffect(() => {        
        let ctx = gsap.context(() => {
            
            refs.forEach((ref, index) => {
                gsap.fromTo(
                    ref.current,
                    {
                        xPercent: -5 - 2 * index,
                        yPercent: 50 - 10 * index,
                        opacity: 1 - 0.1 * index
                    },
                    {
                        xPercent: 0,
                        yPercent: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: parentRef.current,
                            start: "top 100%",
                            end: "bottom top",
                            scrub: true,
                        }
                    }
                )
            })
            
            insideRefs.forEach((ref,index)=>{
                gsap.from(
                    ref.current,{
                        xPercent:-10,
                        yPercent:100,
                        opacity:0,
                        delay:.35*index,
                        ease:"power4.out",
                        duration:2,
                        scrollTrigger:{
                            trigger:MeRef[0].current,
                            start:"top 100%",
                            // scrub:true,
                            // markers:true
                        }
                    }
                )
            })

            gsap.from(
                MeRef[0].current,{
                    yPercent:100,
                    opacity:0,
                    duration:2,
                    ease: "power4.out",
                    scrollTrigger:{
                        trigger:MeRef[0].current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                MeRef[1].current,{
                    yPercent:100,
                    opacity:0
                },
                {
                    yPercent:0,
                    duration:2,
                    delay:.5,
                    opacity:1,
                    ease: "power4.out",
                    scrollTrigger:{
                        trigger:MeRef[1].current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.from(
                imageRef.current,{
                    yPercent:100,
                    // opacity:0,
                    duration:2,
                    delay:0.5,
                    ease: "power4.out",
                    scrollTrigger:{
                        trigger:MeRef[0].current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )

            tagsRef.forEach((ref,index)=>{
                gsap.from(
                    ref.current,{
                        yPercent:100,
                        opacity:0,
                        ease:"power2.out",
                        delay:index*.25,
                        scrollTrigger:{
                            trigger:ref.current,
                            start:"top 100%",
                            end:"bottom top",
                            // scrub:true,
                            // markers:true
                        }
                    }
                )
            })

        });
        
        return () => ctx.revert(); // cleanup! 
    }, []);

    let isIntersecting = useIntersectionObserver(imageRef,{threshold:.7});

    return (
        <div ref={props.sectionRef} className="relative">
            <ScrollIndicator>
                <h1 className="text-xs opacity-50">Nytrixis.</h1>
            </ScrollIndicator>
            <div className='overflow-x-clip 2xl:-mb-[24rem] xl:-mb-[15rem] lg:-mb-[4rem] hidden lg:block'>
            <div ref={parentRef} className='w-max'>
                <div ref={refs[0]} className="overflow-y-clip">
                    <h4 ref={insideRefs[0]} className='text-3xl tracking-[30px] font-extrabold'>{age}</h4>
                </div>
                <div ref={refs[1]} className="overflow-y-clip">
                    <h2 ref={insideRefs[1]} className='mt-4 text-7xl font-extrabold'>{about_me}</h2>
                </div>
                <br />
                <div ref={refs[2]} className="overflow-y-clip">
                    <h2 ref={insideRefs[2]} className='-mt-4 text-7xl font-extrabold opacity-75'>{alias}</h2>
                </div>
                <br />
                <div ref={refs[3]} className="overflow-y-clip">
                    <h2 ref={insideRefs[3]} className='-mt-4 text-7xl font-extrabold opacity-50'>{bday}</h2>
                </div>
                <br />
                <div ref={refs[4]} className="overflow-y-clip">
                    <h4 ref={insideRefs[4]} className='mt-4 text-3xl tracking-[20px] font-extrabold'>{age}</h4>
                </div>
                <br />
                </div>
            </div>
            <div className="md:container md:mx-auto flex flex-row items-end gap-8 px-8">
                <div className='w-full lg:w-3/4'>
                    <div className="overflow-y-clip">
                        <h1 ref={MeRef[0]} className='text-xl sm:text-5xl font-extrabold mt-1'>NANDINI <span className='gradient-text'>PANDEY</span></h1>
                    </div>
                    <hr className='border-primary border-2 mt-4'/>
                    <div className="mt-4 flex flex-wrap gap-1">
                        {
                            ["3D Web Developer","Full Stack Web Developer","UI Designer","Competitive Programmer"].map((value,index)=>{
                                return <div key={index} ref={tagsRef[index]} className="cursor-pointer fill-hover relative grow border-2 border-white/10 rounded-lg flex p-2 lg:p-4 justify-center hover:grow-[2] transition-[flex-grow] duration-300 text-xs"><span>{value}</span></div>
                            })
                        }
                    </div>
                    <p ref={MeRef[1]} className='text-justify mt-6 text-xs font-light md:text-base mb-4'>
                    Innovative CSE undergrad at Dr. B.C. Roy Engineering College (2026), I'm a passionate Full Stack Web Developer with a flair for AI. My technical prowess shines through Hackathon achievements and personal projects. Beyond coding, I'm a decorated public speaker. With a unique blend of technical expertise and leadership skills, I'm poised to make significant contributions to the tech world. Let's connect and create something extraordinary!
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-y-clip hidden lg:block relative">
                    <div className="group" ref={imageRef}>
                        <img className={`absolute top-0 left-0 z-10 w-full h-full duration-700 ${isIntersecting?"opacity-0":""}`} src={ME} alt="" />
                        <img className='w-full h-full white-outline' src={ME1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}